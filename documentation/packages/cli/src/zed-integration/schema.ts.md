# schema.ts

此文件为 Zed 集成中使用的代理通信协议 (ACP) 定义了 Zod 模式和类型。

## 概述

该文件包含代理通信协议 (ACP) 中交换的所有消息的全面模式定义。它使用 Zod 进行运行时验证和 TypeScript 进行静态类型检查。

## 常量

### 方法名称

```typescript
export const AGENT_METHODS = {
  authenticate: 'authenticate',
  initialize: 'initialize',
  session_cancel: 'session/cancel',
  session_load: 'session/load',
  session_new: 'session/new',
  session_prompt: 'session/prompt',
};

export const CLIENT_METHODS = {
  fs_read_text_file: 'fs/read_text_file',
  fs_write_text_file: 'fs/write_text_file',
  session_request_permission: 'session/request_permission',
  session_update: 'session/update',
};
```

这些常量定义了 JSON-RPC 协议中使用的方法名称。

### 协议版本

```typescript
export const PROTOCOL_VERSION = 1;
```

定义 ACP 协议的当前版本。

## 类型定义

该文件导出从相应 Zod 模式派生的所有 ACP 消息类型的 TypeScript 类型定义：

- `WriteTextFileRequest` / `ReadTextFileRequest`
- `PermissionOptionKind` / `Role`
- `TextResourceContents` / `BlobResourceContents`
- `ToolKind` / `ToolCallStatus`
- `WriteTextFileResponse` / `ReadTextFileResponse`
- `RequestPermissionOutcome` / `CancelNotification`
- `AuthenticateRequest` / `AuthenticateResponse`
- `NewSessionResponse` / `LoadSessionResponse`
- `StopReason` / `PromptResponse`
- `ToolCallLocation` / `PlanEntry`
- `PermissionOption` / `Annotations`
- `RequestPermissionResponse` / `FileSystemCapability`
- `EnvVariable` / `McpServer`
- `AgentCapabilities` / `AuthMethod`
- `PromptCapabilities` / `ClientResponse`
- `ClientNotification` / `EmbeddedResourceResource`
- `NewSessionRequest` / `LoadSessionRequest`
- `InitializeResponse` / `ContentBlock`
- `ToolCallContent` / `ToolCall`
- `ClientCapabilities` / `PromptRequest`
- `SessionUpdate` / `AgentResponse`
- `RequestPermissionRequest` / `InitializeRequest`
- `SessionNotification` / `ClientRequest`
- `AgentRequest` / `AgentNotification`

## Zod 模式

### 文件系统模式

```typescript
export const writeTextFileRequestSchema
export const readTextFileRequestSchema
export const writeTextFileResponseSchema
export const readTextFileResponseSchema
export const fileSystemCapabilitySchema
```

定义文件系统操作的结构。

### 权限模式

```typescript
export const permissionOptionKindSchema
export const permissionOptionSchema
export const requestPermissionRequestSchema
export const requestPermissionResponseSchema
export const requestPermissionOutcomeSchema
```

定义权限请求和响应的结构。

### 会话模式

```typescript
export const newSessionRequestSchema
export const newSessionResponseSchema
export const loadSessionRequestSchema
export const loadSessionResponseSchema
export const cancelNotificationSchema
export const sessionNotificationSchema
export const sessionUpdateSchema
```

定义会话管理操作的结构。

### 身份验证模式

```typescript
export const authenticateRequestSchema
export const authenticateResponseSchema
export const authMethodSchema
```

定义身份验证操作的结构。

### 代理初始化模式

```typescript
export const initializeRequestSchema
export const initializeResponseSchema
export const agentCapabilitiesSchema
export const clientCapabilitiesSchema
export const promptCapabilitiesSchema
```

定义代理初始化和功能交换的结构。

### 内容模式

```typescript
export const contentBlockSchema
export const textResourceContentsSchema
export const blobResourceContentsSchema
export const embeddedResourceResourceSchema
```

定义内容块和资源的结构。

### 工具调用模式

```typescript
export const toolCallSchema
export const toolCallContentSchema
export const toolCallLocationSchema
export const toolKindSchema
export const toolCallStatusSchema
```

定义工具调用及其内容的结构。

### 实用模式

```typescript
export const roleSchema
export const stopReasonSchema
export const annotationsSchema
export const planEntrySchema
export const envVariableSchema
export const mcpServerSchema
```

定义整个协议中使用的各种实用类型。

## 实现细节

### 模式验证

所有模式都使用 Zod 进行运行时验证，确保消息在处理前符合预期结构。这提供了验证和类型推断。

### 联合类型

许多模式使用 Zod 联合类型来表示枚举值或替代结构：
- `roleSchema`: 'assistant' 和 'user' 的联合
- `toolKindSchema`: 各种工具类型（读取、编辑、删除等）的联合
- `toolCallStatusSchema`: 状态值（待处理、进行中、完成、失败）的联合
- `stopReasonSchema`: 停止原因（结束轮次、最大令牌、拒绝、取消）的联合
- `contentBlockSchema`: 不同内容类型（文本、图像、音频等）的联合

### 可选和可空字段

模式适当地使用可选和可空字段：
- `optional()`: 可能不存在的字段
- `nullable()`: 可能为空的字段
- `optional().nullable()`: 可能不存在或为空的字段

### 嵌套对象验证

复杂的嵌套结构使用 Zod 的对象模式进行验证，确保所有嵌套属性符合其预期类型和结构。

### 类型推断

所有模式都导出运行时验证器和编译时 TypeScript 类型：
```typescript
export type TypeName = z.infer<typeof schemaName>;
```

这确保了运行时验证和编译时类型检查之间的完美同步。