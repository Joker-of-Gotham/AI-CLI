# acp.ts

此文件实现了代理通信协议 (ACP)，用于 Gemini CLI 和 GUI 应用程序（如 Zed）之间的通信。

## 概述

ACP 定义了一个简单的（实验性）JSON-RPC 协议模式，允许 GUI 应用程序与代理交互。该文件包含协议模式定义和连接实现。

## 类

### AgentSideConnection

```typescript
export class AgentSideConnection implements Client
```

管理代理端的连接并实现用于与 GUI 客户端通信的 Client 接口。

#### 构造函数

```typescript
constructor(
  toAgent: (conn: Client) => Agent,
  input: WritableStream<Uint8Array>,
  output: ReadableStream<Uint8Array>,
)
```

**参数:**
- `toAgent`: 给定 Client 连接创建 Agent 实例的函数
- `input`: 向客户端发送消息的可写流
- `output`: 从客户端接收消息的可读流

#### 方法

##### sessionUpdate

```typescript
async sessionUpdate(params: schema.SessionNotification): Promise<void>
```

向客户端流式传输新内容，包括文本、工具调用等。

##### requestPermission

```typescript
async requestPermission(
  params: schema.RequestPermissionRequest,
): Promise<schema.RequestPermissionResponse>
```

在运行工具之前请求权限。代理指定一系列具有不同粒度的权限选项，客户端返回所选的选项。

##### readTextFile

```typescript
async readTextFile(
  params: schema.ReadTextFileRequest,
): Promise<schema.ReadTextFileResponse>
```

请求从客户端读取文本文件。

##### writeTextFile

```typescript
async writeTextFile(
  params: schema.WriteTextFileRequest,
): Promise<schema.WriteTextFileResponse>
```

请求在客户端上写入文本文件。

### RequestError

```typescript
export class RequestError extends Error
```

ACP 请求错误的自定义错误类，具有标准化的错误代码。

#### 静态方法

- `parseError`: 创建解析错误 (-32700)
- `invalidRequest`: 创建无效请求错误 (-32600)
- `methodNotFound`: 创建方法未找到错误 (-32601)
- `invalidParams`: 创建无效参数错误 (-32602)
- `internalError`: 创建内部错误 (-32603)
- `authRequired`: 创建需要身份验证的错误 (-32000)

## 接口

### Client

定义代理可以在客户端上调用的方法：
- `requestPermission`
- `sessionUpdate`
- `writeTextFile`
- `readTextFile`

### Agent

定义客户端可以在代理上调用的方法：
- `initialize`
- `newSession`
- `loadSession`
- `authenticate`
- `prompt`
- `cancel`

## 实现细节

### Connection 类

`Connection` 类处理底层的 JSON-RPC 通信：
- 消息解析和序列化
- 请求/响应匹配
- 错误处理
- 流处理

#### 消息处理

消息根据 JSON-RPC 2.0 规范进行处理：
- 请求（带 ID）期望响应
- 通知（不带 ID）不期望响应
- 响应按 ID 与请求匹配

#### 错误处理

连接处理各种类型的错误：
- JSON 消息中的解析错误
- 使用 Zod 模式进行验证错误
- 方法处理程序中的内部错误
- 带有代码的标准化错误响应

### 消息流

1. 消息作为换行分隔的 JSON 通过流接收
2. 每条消息被解析和验证
3. 请求被分派到适当的处理程序
4. 响应与待处理请求匹配
5. 通知被处理而无需响应
6. 传出消息被序列化并通过流发送

### 安全考虑

协议实施了几项安全措施：
- 方法验证以防止未授权调用
- 使用 Zod 模式进行参数验证
- 错误清理以防止信息泄露
- 敏感操作的身份验证要求