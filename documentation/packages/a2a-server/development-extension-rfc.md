# RFC: Gemini CLI A2A 开发工具扩展

## 1. 简介

### 1.1 概述

为了标准化客户端与Gemini CLI代理的集成，本文档提出了A2A协议的`development-tool`扩展。

该规范不是创建新协议，而是在现有A2A协议的基础上构建。作为一个最近被Linux基金会采用的开源标准，A2A为任务、消息和流事件等核心概念提供了坚实的基础。这种基于扩展的方法使我们能够利用A2A经过验证的架构，同时定义Gemini CLI代理所需的特定功能，以支持丰富、交互式的工作流程。

### 1.2 动机

最近将Gemini CLI与Zed和Gemini Code Assist代理模式等客户端集成的工作突出了对强大、标准化通信协议的需求。在A2A上标准化提供了几个关键优势：

- **坚实基础**：提供了一个强大、开放的标准，确保在不同IDE和客户端界面上稳定、可预测和一致的集成体验。
- **可扩展性**：创建了一个灵活的基础，以支持随着新工具和工作流程的出现而扩展。
- **生态系统对齐**：将Gemini CLI与不断增长的行业标准对齐，促进更广泛的互操作性。

## 2. 通信流程

交互遵循A2A基于任务的流模式。客户端发送`message/stream`请求，代理响应`contextId` / `taskId`和事件流。`TaskStatusUpdateEvent`事件用于传达任务的整体状态。当代理发送带有`final: true`和`completed`或`failed`等终端状态的最终`TaskStatusUpdateEvent`时，任务完成。

### 2.1 异步响应和通知

可能与代理断开连接的客户端应在初始`message/stream`方法中或随后使用`tasks/pushNotificationConfig/set`方法向代理提供`PushNotificationConfig`，以便代理在更新准备就绪时可以回调。

## 3. `development-tool`扩展

### 3.1 概述

`development-tool`扩展建立了客户端与Gemini CLI代理之间工作流程的通信契约。它由一组专门的模式组成，嵌入在核心A2A数据结构中，使代理能够流式传输其实时状态和思维过程。这些模式还提供了代理在执行工具之前请求用户权限的机制。

**示例代理卡**

```json
{
  "name": "Gemini CLI Agent",
  "description": "一个根据自然语言指令生成代码的代理。",
  "capabilities": {
    "streaming": true,
    "extensions": [
      {
        "uri": "https://github.com/google-gemini/gemini-cli/blob/main/docs/a2a/developer-profile/v0/spec.md",
        "description": "用于交互式开发任务的扩展，支持代码生成、工具使用和实时状态更新等功能。",
        "required": true
      }
    ]
  }
}
```

**版本控制**

代理卡`uri`字段包含嵌入的语义版本。客户端必须提取此版本以使用语义版本2.0.0规范中定义的兼容性逻辑确定与代理扩展的兼容性。

### 3.2 模式定义

本节定义了`development-tool` A2A扩展的模式，按其在通信流程中的功能组织。请注意，所有包含在`metadata`字段中的自定义对象（例如`Message.metadata`）必须使用指向该扩展规范的唯一URI作为键，以防止与其他扩展的命名冲突。

**初始化和配置**

会话中的第一条消息必须在其元数据中包含`AgentSettings`对象。该对象为代理提供正确初始化所需的配置信息。可以将其他配置设置（例如MCP服务器、允许的工具等）添加到此消息中。

**模式**

```proto
syntax = "proto3";

// Gemini CLI代理的配置设置。
message AgentSettings {
  // 代理将执行的工作区目录的绝对路径。
  string workspace_path = 1;
}
```

**代理到客户端消息**

代理的所有实时更新（包括其想法、工具调用和简单文本回复）都作为`TaskStatusUpdateEvents`流式传输到客户端。

每个事件包含一个`Message`对象，该对象以两种格式之一保存内容：

- **TextPart**：用于标准文本消息。这部分不需要自定义模式。
- **DataPart**：用于复杂的结构化对象。工具调用和想法以这种方式发送，每种都使用下面定义的各自模式。

**工具调用**

`ToolCall`模式旨在提供工具执行生命周期的结构化表示。该协议定义了一个清晰的状态机，并为常见开发任务（文件编辑、shell命令、MCP工具）提供了详细的模式，确保客户端可以构建可靠的UI，而无需绑定到特定的代理实现。

核心原则是代理在每次更新时发送`ToolCall`对象。这使得客户端逻辑无状态且简单。

**工具调用生命周期**

1.  **创建**：代理发送`status: PENDING`的`ToolCall`对象。如果需要用户权限，将填充`confirmation_request`字段。
2.  **确认**：如果客户端需要确认消息，客户端将发送`ToolCallConfirmation`。如果客户端响应取消，将跳过执行。
3.  **执行**：一旦批准（或如果不需要批准），代理发送`status: EXECUTING`的更新。它可以通过更新`live_content`字段来流式传输实时进度。
4.  **完成**：代理发送最终更新，状态设置为`SUCCEEDED`、`FAILED`或`CANCELLED`，并填充适当的结果字段。

**模式**

```proto
syntax = "proto3";

import "google/protobuf/struct.proto";

// ToolCall是表示工具执行生命周期的中心消息。
// 整个对象在每次更新时从代理发送到客户端。
message ToolCall {
  // 由代理分配的唯一标识符
  string tool_call_id = 1;

  // 工具调用在其生命周期中的当前状态
  ToolCallStatus status = 2;

  // 被调用的工具名称（例如'Edit'、'ShellTool'）
  string tool_name = 3;

  // 工具调用目的的可选描述，向用户显示
  optional string description = 4;

  // LLM为工具调用提供的结构化输入参数。
  google.protobuf.Struct input_parameters = 5;

  // 工具执行时的实时输出字符串（主要设计用于shell输出）。
  // 在流式传输期间，整个字符串在每次更新时被替换
  optional string live_content = 6;

  // 工具的最终结果（用于在适用时替换live_content）
  oneof result {
    // 工具成功时的输出
    ToolOutput output = 7;
    // 工具失败时的错误详细信息
    ErrorDetails error = 8;
  }

  // 如果工具需要用户确认，当状态为PENDING时将填充此字段
  optional ConfirmationRequest confirmation_request = 9;
}

// ToolCall的可能执行状态
enum ToolCallStatus {
  STATUS_UNSPECIFIED = 0;
  PENDING = 1;
  EXECUTING = 2;
  SUCCEEDED = 3;
  FAILED = 4;
  CANCELLED = 5;
}

// ToolOutput表示工具的最终成功输出
message ToolOutput {
  oneof result {
    string text = 1;
    // 对于导致文件修改的ToolCalls
    FileDiff diff = 2;
    // 任何其他结构化JSON数据的通用后备
    google.protobuf.Struct structured_data = 3;
  }
}

// 错误的结构化表示
message ErrorDetails {
  // 面向用户的错误消息
  string message = 1;
  // 可选的代理特定错误类型或类别（例如read_content_failure、grep_execution_error、mcp_tool_error）
  optional string type = 2;
  // 可选的状态码
  optional int32 status_code = 3;
}

// ConfirmationRequest是从代理发送到客户端以请求用户权限的ToolCall
message ConfirmationRequest {
  // 提供给用户选择的选项列表
  repeated ConfirmationOption options = 1;
  // 需要用户确认的操作的特定详细信息
  oneof details {
    ExecuteDetails execute_details = 2;
    FileDiff file_edit_details = 3;
    McpDetails mcp_details = 4;
    GenericDetails generic_details = 5;
  }
}

// 确认请求期间向用户呈现的单个选项
message ConfirmationOption {
  // 选项的唯一ID（例如proceed_once、cancel）
  string id = 1;
  // 人类可读的选项（例如允许一次、拒绝）。
  string name = 2;
  // 可选的更长描述用于工具提示
  optional string description = 3;
}

// 执行shell命令请求的详细信息
message ExecuteDetails {
  // 要执行的shell命令
  string command = 1;
  // 命令运行的可选目录
  optional string working_directory = 2;
}


message FileDiff {
  string file_name = 1;
  // 要修改的文件的绝对路径
  string file_path = 2;
  // 原始内容（如果文件存在）
  optional string old_content = 3;
  string new_content = 4;
  // 用于显示的预格式化差异字符串
  optional string formatted_diff = 5;
}

// MCP（模型上下文协议）工具确认的详细信息
message McpDetails {
  // 提供工具的MCP服务器的名称
  string server_name = 1;
  // 从MCP服务器调用的工具名称
  string tool_name = 2;
}

// 通用于不适合其他类型的ToolCall请求
message GenericDetails {
  // 需要确认的操作的描述
  string description = 1;
}
```

**代理想法**

**模式**

```proto
syntax = "proto3";

// 表示具有主题和详细描述的想法。
message AgentThought {
  // 想法的简洁主题行或标题。
  string subject = 1;

  // 想法本身的描述或阐述。
  string description = 2;
}
```

**事件元数据**

`TaskStatusUpdateEvent`中的`metadata`对象被A2A客户端用于将`TaskStatusUpdateEvents`反序列化为适当的对象。

**模式**

```proto
syntax = "proto3";

// DevelopmentToolEvent事件。
message DevelopmentToolEvent {
  // 表示特定类型的开发工具事件的枚举。
  enum DevelopmentToolEventKind {
    // 默认的未指定值。
    DEVELOPMENT_TOOL_EVENT_KIND_UNSPECIFIED = 0;
    TOOL_CALL_CONFIRMATION = 1;
    TOOL_CALL_UPDATE = 2;
    TEXT_CONTENT = 3;
    STATE_CHANGE = 4;
    THOUGHT = 5;
  }

  // 发生的特定事件类型。
  DevelopmentToolEventKind kind = 1;

  // 用于此事件的模型。
  string model = 2;

  // 用户的层级（可选）。
  string user_tier = 3;

  // 代理执行中发生意外错误（可选）。
  string error = 4;
}
```

**客户端到代理消息**

当代理发送`status.state`设置为`input-required`且其消息包含`ConfirmationRequest`的`TaskStatusUpdateEvent`时，客户端必须通过发送新的`message/stream`请求来响应。

此新请求必须包含正在进行的任务的`contextId`和`taskId`，并包含`ToolCallConfirmation`对象。该对象传达用户对等待批准的工具调用的决定。

**模式**

```proto
syntax = "proto3";

// 客户端对ConfirmationRequest的响应。
message ToolCallConfirmation {
  // 由代理分配的唯一标识符
  string tool_call_id = 1;
  // 用户选择的ConfirmationOption的'id'。
  string selected_option_id = 2;
  // 如果用户修改了提议的更改，则包含。
  // 类型应对应于原始ConfirmationRequest详细信息。
  oneof modified_details {
    // 对应于FileDiff确认
    ModifiedFileDetails file_details = 3;
  }
}

message ModifiedFileDetails {
  // 用户编辑后的新内容。
  string new_content = 1;
}
```

### 3.3 方法定义

本节定义了`development-tool`扩展引入的新方法。

**方法: `commands/get`**

此方法允许客户端发现Gemini CLI支持的斜杠命令。客户端应在启动期间调用此方法以动态填充其命令列表。

```proto
// 包含所有顶级斜杠命令列表的响应消息。
message GetAllSlashCommandsResponse {
  // 顶级斜杠命令列表。
  repeated SlashCommand commands = 1;
}

// 表示单个斜杠命令，可以包含子命令。
message SlashCommand {
  // 命令的主要名称。
  string name = 1;
  // 命令功能的详细描述。
  string description = 2;
  // 命令接受的参数列表。
  repeated SlashCommandArgument arguments = 3;
  // 嵌套子命令列表。
  repeated SlashCommand sub_commands = 4;
}

// 定义单个斜杠命令参数的结构。
message SlashCommandArgument {
  // 参数的名称。
  string name = 1;
  // 参数用途的简要描述。
  string description = 2;
  // 参数是必需还是可选。
  bool is_required = 3;
}
```

**方法: `command/execute`**

此方法允许客户端执行斜杠命令。在初始`ExecuteSlashCommandResponse`之后，代理将使用标准流机制来传达命令的进度和输出。所有后续更新，包括文本输出、代理想法和任何需要用户确认的工具调用（如执行shell命令），都将作为`TaskStatusUpdateEvent`消息发送，重用上面定义的模式。

```proto
// 执行特定斜杠命令的请求。
message ExecuteSlashCommandRequest {
  // 命令路径，例如["memory", "add"]表示/memory add
  repeated string command_path = 1;
  // 命令的参数作为单个字符串。
  string args = 2;
}

// 命令执行请求的初始状态枚举。
enum CommandExecutionStatus {
  // 默认未指定状态。
  COMMAND_EXECUTION_STATUS_UNSPECIFIED = 0;
  // 命令已成功接收且其执行已开始。
  STARTED = 1;
  // 命令启动失败（例如，命令未找到、格式无效）。
  FAILED_TO_START = 2;
  // 命令已暂停，正在等待用户确认一组shell命令。
  AWAITING_SHELL_CONFIRMATION = 3;
  // 命令已暂停，正在等待用户确认特定操作。
  AWAITING_ACTION_CONFIRMATION = 4;
}

// 请求命令执行后的即时异步响应。
message ExecuteSlashCommandResponse {
  // 此特定命令执行的唯一taskID。
  string execution_id = 1;
  // 命令执行的初始状态。
  CommandExecutionStatus status = 2;
  // 可选消息，特别适用于解释命令启动失败的原因。
  string message = 3;
}
```

## 4. 关注点分离

我们认为所有客户端上下文（例如，工作区状态）和客户端工具执行（例如读取活动缓冲区）都应通过MCP路由。

这种方法强制执行严格的关注点分离：A2A `development-tool`扩展标准化与代理的通信，而MCP作为客户端功能的单一权威接口。

## 附录

### A. 示例交互流程

1.  **客户端 -> 服务器**：客户端发送包含初始提示和`AgentSettings`对象中配置的`message/stream`请求。
2.  **服务器 -> 客户端**：SSE流开始。
    - **事件1**：服务器发送`status.state: 'submitted'`的`Task`对象和新的`taskId`。
    - **事件2**：服务器发送元数据`kind`设置为`'STATE_CHANGE'`且`status.state`设置为`'working'`的`TaskStatusUpdateEvent`。
3.  **代理逻辑**：代理处理提示并决定调用需要用户确认的`write_file`工具。
4.  **服务器 -> 客户端**：
    - **事件3**：服务器发送`TaskStatusUpdateEvent`。元数据`kind`为`'TOOL_CALL_UPDATE'`，`DataPart`包含`status`为`'PENDING'`且填充了`confirmation_request`的`ToolCall`对象。
    - **事件4**：服务器发送此交换的最终`TaskStatusUpdateEvent`。元数据`kind`为`'STATE_CHANGE'`，`status.state`为`'input-required'`，且`final`为`true`。此请求的流结束。
5.  **客户端**：客户端UI根据事件3中的`ToolCall`对象渲染确认提示。用户点击"批准"。
6.  **客户端 -> 服务器**：客户端发送新的`message/stream`请求。它包含正在进行的任务的`taskId`和包含`ToolCallConfirmation`对象的`DataPart`（例如，`{"tool_call_id": "...", "selected_option_id": "proceed_once"}`）。
7.  **服务器 -> 客户端**：第二个请求的SSE流开始。
    - **事件1**：服务器发送`kind: 'TOOL_CALL_UPDATE'`的`TaskStatusUpdateEvent`，包含`status`现在设置为`'EXECUTING'`的`ToolCall`对象。
    - **事件2**：工具运行后，服务器发送另一个`kind: 'TOOL_CALL_UPDATE'`的`TaskStatusUpdateEvent`，包含`status`为`'SUCCEEDED'`的`ToolCall`对象。
8.  **代理逻辑**：代理接收成功的工具结果并生成最终的文本响应。
9.  **服务器 -> 客户端**：
    - **事件3**：服务器发送`kind: 'TEXT_CONTENT'`且包含代理最终答案的`TextPart`的`TaskStatusUpdateEvent`。
    - **事件4**：服务器发送最终`TaskStatusUpdateEvent`。`kind`为`'STATE_CHANGE'`，`status.state`为`'completed'`，且`final`为`true`。流结束。
10. **客户端**：客户端显示最终答案。任务现在完成，但可以通过发送具有相同`taskId`的另一条消息继续。