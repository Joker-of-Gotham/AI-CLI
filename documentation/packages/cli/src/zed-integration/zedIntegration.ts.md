# zedIntegration.ts

此文件为 Gemini CLI 实现了 Zed 集成，通过代理通信协议 (ACP) 实现与 Zed 编辑器的通信。

## 概述

该文件包含 Zed 集成的主入口点，并实现了 GeminiAgent 类，该类处理与 Zed 编辑器的所有 ACP 通信。

## 函数

### runZedIntegration

```typescript
export async function runZedIntegration(
  config: Config,
  settings: LoadedSettings,
  extensions: Extension[],
  argv: CliArgs,
)
```

运行 Zed 集成的主入口点。设置 ACP 连接并将控制台输出重定向到 stderr 以避免干扰 ACP 协议。

**参数:**
- `config`: CLI 配置
- `settings`: 加载的设置
- `extensions`: 活动扩展
- `argv`: 命令行参数

## 类

### GeminiAgent

通过 ACP 通信处理代理的主要代理类。

#### 构造函数

```typescript
constructor(
  private config: Config,
  private settings: LoadedSettings,
  private extensions: Extension[],
  private argv: CliArgs,
  private client: acp.Client,
)
```

#### 方法

##### initialize

```typescript
async initialize(
  args: acp.InitializeRequest,
): Promise<acp.InitializeResponse>
```

处理来自客户端的初始化请求，返回支持的身份验证方法和代理功能。

##### authenticate

```typescript
async authenticate({ methodId }: acp.AuthenticateRequest): Promise<void>
```

处理身份验证请求，在配置中设置选定的身份验证方法。

##### newSession

```typescript
async newSession({
  cwd,
  mcpServers,
}: acp.NewSessionRequest): Promise<acp.NewSessionResponse>
```

创建具有指定工作目录和 MCP 服务器的新会话。

##### newSessionConfig

```typescript
async newSessionConfig(
  sessionId: string,
  cwd: string,
  mcpServers: acp.McpServer[],
): Promise<Config>
```

为会话创建新配置，包含 MCP 服务器设置。

##### cancel

```typescript
async cancel(params: acp.CancelNotification): Promise<void>
```

取消会话中当前待处理的提示。

##### prompt

```typescript
async prompt(params: acp.PromptRequest): Promise<acp.PromptResponse>
```

处理提示请求，向 Gemini API 发送消息并将响应流式传输回客户端。

### Session

管理单个聊天会话及其与 Gemini API 的交互。

#### 构造函数

```typescript
constructor(
  private readonly id: string,
  private readonly chat: GeminiChat,
  private readonly config: Config,
  private readonly client: acp.Client,
)
```

#### 方法

##### cancelPendingPrompt

```typescript
async cancelPendingPrompt(): Promise<void>
```

取消任何当前待处理的提示生成。

##### prompt

```typescript
async prompt(params: acp.PromptRequest): Promise<acp.PromptResponse>
```

处理提示请求，处理消息流式传输和工具调用。

##### sendUpdate

```typescript
private async sendUpdate(update: acp.SessionUpdate): Promise<void>
```

向客户端发送会话更新。

##### runTool

```typescript
private async runTool(
  abortSignal: AbortSignal,
  promptId: string,
  fc: FunctionCall,
): Promise<Part[]>
```

执行工具调用，处理确认请求和错误报告。

##### #resolvePrompt

```typescript
async #resolvePrompt(
  message: acp.ContentBlock[],
  abortSignal: AbortSignal,
): Promise<Part[]>
```

解析提示内容，处理文件引用和嵌入资源。

## 实现细节

### 流处理

集成将消息作为流处理，将文本块和工具调用从 Gemini API 接收时发送给客户端。这提供了实时更新的响应式用户体验。

### 工具调用处理

工具调用使用适当的确认流程进行处理：
1. 需要确认的工具向客户端发送权限请求
2. 客户端响应确定是继续还是取消
3. 工具执行结果作为函数响应发送回
4. 错误被正确报告给客户端

### 文件系统集成

当客户端支持文件系统操作时：
1. 创建 `AcpFileSystemService` 将文件操作委托给客户端
2. 可以通过客户端执行文件读/写操作
3. 当客户端功能不可用时使用备用服务

### 身份验证

集成支持多种身份验证方法：
- 使用 Google 登录
- Gemini API 密钥
- Vertex AI

身份验证状态通过 CLI 配置系统管理。

### 内容解析

`#resolvePrompt` 方法处理各种内容类型：
- 文本内容
- 图像和音频数据
- 文件引用（资源链接）
- 嵌入资源

文件引用在可用时使用文件系统服务解析和读取。

### 错误处理

实施了全面的错误处理：
- 速率限制错误被转换为适当的 ACP 错误
- 工具执行错误被报告给客户端
- 网络和解析错误被优雅地处理
- 身份验证错误触发适当的响应

### 安全考虑

实现包括几项安全措施：
- 文件路径验证以防止目录遍历
- 遵守 Git 忽略以避免读取被忽略的文件
- 对潜在危险操作的工具执行确认
- 身份验证状态管理