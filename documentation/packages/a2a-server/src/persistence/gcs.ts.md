# src/persistence/gcs.ts

这个文件实现了基于 Google Cloud Storage (GCS) 的任务存储功能。

## 主要类

### GCSTaskStore 类

实现基于 GCS 的任务存储。

#### 构造函数

```typescript
constructor(bucketName: string)
```

参数：
- `bucketName`: GCS 存储桶名称

#### 方法

##### `initializeBucket`

```typescript
private async initializeBucket(): Promise<void>
```

初始化存储桶。

##### `ensureBucketInitialized`

```typescript
private async ensureBucketInitialized(): Promise<void>
```

确保存储桶已初始化。

##### `getObjectPath`

```typescript
private getObjectPath(taskId: string, type: ObjectType): string
```

获取对象路径。

参数：
- `taskId`: 任务 ID
- `type`: 对象类型

返回：
- string: 对象路径

##### `save`

```typescript
async save(task: SDKTask): Promise<void>
```

保存任务。

参数：
- `task`: SDK 任务对象

##### `load`

```typescript
async load(taskId: string): Promise<SDKTask | undefined>
```

加载任务。

参数：
- `taskId`: 任务 ID

返回：
- Promise<SDKTask | undefined>: SDK 任务对象或 undefined

### NoOpTaskStore 类

实现无操作的任务存储，仅委托实际存储操作给真实存储。

#### 构造函数

```typescript
constructor(private realStore: TaskStore)
```

参数：
- `realStore`: 真实的任务存储实例

#### 方法

##### `save`

```typescript
async save(task: SDKTask): Promise<void>
```

保存任务（无操作）。

参数：
- `task`: SDK 任务对象

##### `load`

```typescript
async load(taskId: string): Promise<SDKTask | undefined>
```

加载任务，委托给真实存储。

参数：
- `taskId`: 任务 ID

返回：
- Promise<SDKTask | undefined>: SDK 任务对象或 undefined

## 类型定义

### ObjectType 类型

```typescript
type ObjectType = 'metadata' | 'workspace';
```

对象类型联合类型。

## 辅助函数

### getTmpArchiveFilename 函数

```typescript
const getTmpArchiveFilename = (taskId: string): string
```

获取临时归档文件名。

参数：
- `taskId`: 任务 ID

返回：
- string: 临时归档文件名