# ide-client.ts

此文件实现了 `IdeClient` 类，该类管理与通过 Model Context Protocol (MCP) 的 IDE 配套扩展的连接和交互。

## 类型和枚举

### IDEConnectionState

表示与 IDE 的当前连接状态。

```typescript
export type IDEConnectionState = {
  status: IDEConnectionStatus;
  details?: string; // 面向用户
};
```

### IDEConnectionStatus

IDE 连接状态的枚举。

```typescript
export enum IDEConnectionStatus {
  Connected = 'connected',
  Disconnected = 'disconnected',
  Connecting = 'connecting',
};
```

### StdioConfig

stdio 连接的配置。

```typescript
type StdioConfig = {
  command: string;
  args: string[];
};
```

### ConnectionConfig

IDE 连接的配置。

```typescript
type ConnectionConfig = {
  port?: string;
  stdio?: StdioConfig;
};
```

## 类: IdeClient

管理与 IDE 服务器的连接和交互。

### 属性

- `private static instancePromise: Promise<IdeClient> | null` - 单例实例承诺
- `private client: Client | undefined` - MCP 客户端实例
- `private state: IDEConnectionState` - 当前连接状态
- `private currentIde: DetectedIde | undefined` - 当前检测到的 IDE
- `private currentIdeDisplayName: string | undefined` - 当前 IDE 的显示名称
- `private ideProcessInfo: { pid: number; command: string } | undefined` - IDE 进程信息
- `private diffResponses = new Map<string, (result: DiffUpdateResult) => void>()` - 差异响应解析器映射
- `private statusListeners = new Set<(state: IDEConnectionState) => void>()` - 连接状态监听器
- `private trustChangeListeners = new Set<(isTrusted: boolean) => void>()` - 信任变更监听器

### 构造函数

```typescript
private constructor()
```

私有构造函数以强制执行单例模式。

### 静态方法

#### getInstance

```typescript
static getInstance(): Promise<IdeClient>
```

获取 IdeClient 的单例实例。

**返回:**
- 解析为 IdeClient 实例的承诺

**实现细节:**
1. 如果不存在则创建单例实例
2. 使用 `getIdeProcessInfo()` 获取 IDE 进程信息
3. 使用 `detectIde()` 检测当前 IDE
4. 使用 `getIdeInfo()` 获取 IDE 显示名称

### 实例方法

#### addStatusChangeListener

```typescript
addStatusChangeListener(listener: (state: IDEConnectionState) => void)
```

添加连接状态变更的监听器。

**参数:**
- `listener`: 状态变更时调用的函数

#### removeStatusChangeListener

```typescript
removeStatusChangeListener(listener: (state: IDEConnectionState) => void)
```

移除连接状态变更的监听器。

**参数:**
- `listener`: 要从监听器中移除的函数

#### addTrustChangeListener

```typescript
addTrustChangeListener(listener: (isTrusted: boolean) => void)
```

添加工作区信任变更的监听器。

**参数:**
- `listener`: 信任状态变更时调用的函数

#### removeTrustChangeListener

```typescript
removeTrustChangeListener(listener: (isTrusted: boolean) => void)
```

移除工作区信任变更的监听器。

**参数:**
- `listener`: 要从监听器中移除的函数

#### connect

```typescript
async connect(): Promise<void>
```

建立与 IDE 配套扩展的连接。

**实现细节:**
1. 检查 IDE 是否受支持
2. 从文件或环境获取连接配置
3. 使用 `validateWorkspacePath()` 验证工作区路径
4. 如果配置了端口则尝试 HTTP 连接
5. 如果有 stdio 配置则尝试 stdio 连接
6. 使用适当的消息更新连接状态

#### openDiff

```typescript
async openDiff(
  filePath: string,
  newContent?: string,
): Promise<DiffUpdateResult>
```

在 IDE 中为指定文件打开差异视图。

**参数:**
- `filePath`: 要进行差异比较的文件路径
- `newContent`: 文件的可选新内容

**返回:**
- 解析为差异更新结果的承诺

#### closeDiff

```typescript
async closeDiff(
  filePath: string,
  options?: { suppressNotification?: boolean },
): Promise<string | undefined>
```

关闭指定文件的差异视图。

**参数:**
- `filePath`: 要关闭差异视图的文件路径
- `options`: 关闭差异视图的可选配置

**返回:**
- 解析为文件内容或 undefined 的承诺

#### resolveDiffFromCli

```typescript
async resolveDiffFromCli(filePath: string, outcome: 'accepted' | 'rejected')
```

从 CLI 解析差异，手动关闭并指定特定结果。

**参数:**
- `filePath`: 要解析差异的文件路径
- `outcome`: 差异是被接受还是被拒绝

#### disconnect

```typescript
async disconnect()
```

断开与 IDE 的连接并清理资源。

#### getCurrentIde

```typescript
getCurrentIde(): DetectedIde | undefined
```

获取当前检测到的 IDE。

**返回:**
- 检测到的 IDE 或 undefined

#### getConnectionStatus

```typescript
getConnectionStatus(): IDEConnectionState
```

获取当前连接状态。

**返回:**
- 当前的 IDE 连接状态

#### getDetectedIdeDisplayName

```typescript
getDetectedIdeDisplayName(): string | undefined
```

获取检测到的 IDE 的显示名称。

**返回:**
- IDE 显示名称或 undefined

### 私有方法

#### setState

```typescript
private setState(
  status: IDEConnectionStatus,
  details?: string,
  logToConsole = false,
)
```

更新连接状态并通知监听器。

#### validateWorkspacePath

```typescript
static validateWorkspacePath(
  ideWorkspacePath: string | undefined,
  currentIdeDisplayName: string | undefined,
  cwd: string,
): { isValid: boolean; error?: string }
```

验证 CLI 是否在 IDE 识别的工作区目录中运行。

#### getPortFromEnv

```typescript
private getPortFromEnv(): string | undefined
```

从环境变量获取 IDE 服务器端口。

#### getStdioConfigFromEnv

```typescript
private getStdioConfigFromEnv(): StdioConfig | undefined
```

从环境变量获取 stdio 配置。

#### getConnectionConfigFromFile

```typescript
private async getConnectionConfigFromFile(): Promise<
  (ConnectionConfig & { workspacePath?: string }) | undefined
>
```

从文件读取连接配置。

#### createProxyAwareFetch

```typescript
private createProxyAwareFetch()
```

创建了解代理设置的 fetch 函数。

#### registerClientHandlers

```typescript
private registerClientHandlers()
```

注册来自 IDE 的 MCP 通知的处理程序。

#### establishHttpConnection

```typescript
private async establishHttpConnection(port: string): Promise<boolean>
```

建立到 IDE 服务器的 HTTP 连接。

#### establishStdioConnection

```typescript
private async establishStdioConnection({
  command,
  args,
}: StdioConfig): Promise<boolean>
```

建立到 IDE 服务器的 stdio 连接。

### 辅助函数

#### getIdeServerHost

```typescript
function getIdeServerHost()
```

根据是否在容器中运行确定 IDE 服务器的主机。

#### getRealPath

```typescript
function getRealPath(path: string): string
```

获取文件的真实路径，优雅地处理错误。