# McpPromptLoader.ts

`McpPromptLoader` 类从 Model-Context-Protocol (MCP) 服务器公开的提示中发现和加载可执行的斜杠命令。

## 类概述

```typescript
export class McpPromptLoader implements ICommandLoader
```

此加载器连接到配置的 MCP 服务器，并将它们可用的提示转换为可在 CLI 中使用的可执行斜杠命令。

## 构造函数

```typescript
constructor(private readonly config: Config | null)
```

构造函数接受一个可选的 `Config` 对象，该对象包含 MCP 服务器配置。

## 方法

### loadCommands

```typescript
loadCommands(_signal: AbortSignal): Promise<SlashCommand[]>
```

从所有配置的 MCP 服务器加载所有可用的提示，并将它们适配为可执行的 SlashCommand 对象。

**参数:**
- `_signal`: AbortSignal（对于此同步加载器未使用）

**返回:**
- 解析为加载的 SlashCommands 数组的承诺

### parseArgs

```typescript
parseArgs(
  userArgs: string,
  promptArgs: PromptArgument[] | undefined,
): Record<string, unknown> | Error
```

将表示提示参数的 `userArgs` 字符串（命令后的所有文本）解析为与 `promptArgs` 形状匹配的记录。

**参数:**
- `userArgs`: 用户提供的参数字符串
- `promptArgs`: 提示定义的预期参数

**返回:**
- 解析后的参数记录或解析失败时的 Error

#### 参数解析详情

解析器处理命名参数和位置参数：
- 命名参数：`--key="value"` 或 `--key=value`
- 位置参数：按位置匹配的未命名值

## 实现细节

### 命令结构

每个 MCP 提示都被转换为具有以下结构的 SlashCommand：
- `name`: 提示名称
- `description`: 提示描述或默认消息
- `kind`: 设置为 `CommandKind.MCP_PROMPT`
- `subCommands`: 包括用于显示参数信息的 'help' 子命令
- `action`: 在 MCP 服务器上执行提示的函数
- `completion`: 提供参数建议的函数

### 帮助子命令

每个命令都包含一个 'help' 子命令，用于显示提示参数的信息：
- 显示参数是否为必需
- 显示参数描述
- 提供使用示例

### 错误处理

加载器对以下方面实施了全面的错误处理：
- 缺少配置
- 缺少 MCP 服务器配置
- 提示调用错误
- 参数解析错误
- 来自 MCP 服务器的无效响应

### 参数解析

参数解析支持：
- 使用 `--name=value` 或 `--name="value"` 语法的命名参数
- 按顺序匹配的位置参数
- 带转义字符的引号字符串的自动处理
- 必需参数的验证