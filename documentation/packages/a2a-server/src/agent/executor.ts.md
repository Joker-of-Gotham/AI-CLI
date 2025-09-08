# src/agent/executor.ts

这个文件实现了代理执行器的核心逻辑，用于代码生成。

## 主要类和功能

### TaskWrapper 类

提供 Task 的包装器，将数据从 Task 传递到 SDKTask。

#### 构造函数

```typescript
constructor(task: Task, agentSettings: AgentSettings)
```

参数：
- `task`: Task 实例
- `agentSettings`: 代理设置

#### 方法

- `get id()`: 获取任务 ID
- `toSDKTask(): SDKTask`: 将任务转换为 SDKTask 格式

### CoderAgentExecutor 类

实现代理代码生成的核心逻辑。

#### 构造函数

```typescript
constructor(private taskStore?: TaskStore)
```

参数：
- `taskStore`: 任务存储实例（可选）

#### 方法

##### `getConfig`

```typescript
private async getConfig(agentSettings: AgentSettings, taskId: string): Promise<Config>
```

获取配置信息。

参数：
- `agentSettings`: 代理设置
- `taskId`: 任务 ID

返回：
- Promise<Config>: 配置对象

##### `reconstruct`

```typescript
async reconstruct(sdkTask: SDKTask, eventBus?: ExecutionEventBus): Promise<TaskWrapper>
```

从 SDKTask 重建 TaskWrapper。

参数：
- `sdkTask`: SDK 任务对象
- `eventBus`: 执行事件总线（可选）

返回：
- Promise<TaskWrapper>: 任务包装器

##### `createTask`

```typescript
async createTask(
  taskId: string,
  contextId: string,
  agentSettingsInput?: AgentSettings,
  eventBus?: ExecutionEventBus,
): Promise<TaskWrapper>
```

创建新任务。

参数：
- `taskId`: 任务 ID
- `contextId`: 上下文 ID
- `agentSettingsInput`: 代理设置（可选）
- `eventBus`: 执行事件总线（可选）

返回：
- Promise<TaskWrapper>: 任务包装器

##### `getTask`

```typescript
getTask(taskId: string): TaskWrapper | undefined
```

获取指定任务。

参数：
- `taskId`: 任务 ID

返回：
- TaskWrapper | undefined: 任务包装器或 undefined

##### `getAllTasks`

```typescript
getAllTasks(): TaskWrapper[]
```

获取所有任务。

返回：
- TaskWrapper[]: 所有任务包装器的数组

##### `cancelTask`

```typescript
cancelTask = async (taskId: string, eventBus: ExecutionEventBus): Promise<void>
```

取消任务。

参数：
- `taskId`: 任务 ID
- `eventBus`: 执行事件总线

##### `execute`

```typescript
async execute(requestContext: RequestContext, eventBus: ExecutionEventBus): Promise<void>
```

执行代理任务。

参数：
- `requestContext`: 请求上下文
- `eventBus`: 执行事件总线