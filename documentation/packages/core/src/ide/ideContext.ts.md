# ideContext.ts

此文件使用 Zod 模式进行验证，管理 IDE 上下文，包括文件信息和差异操作。

## 类型和模式

### File

表示 IDE 上下文中的文件。

```typescript
export const FileSchema = z.object({
  path: z.string(),
  timestamp: z.number(),
  isActive: z.boolean().optional(),
  selectedText: z.string().optional(),
  cursor: z
    .object({
      line: z.number(),
      character: z.number(),
    })
    .optional(),
});
export type File = z.infer<typeof FileSchema>;
```

### IdeContext

表示整体 IDE 上下文。

```typescript
export const IdeContextSchema = z.object({
  workspaceState: z
    .object({
      openFiles: z.array(FileSchema).optional(),
      isTrusted: z.boolean().optional(),
    })
    .optional(),
});
export type IdeContext = z.infer<typeof IdeContextSchema>;
```

### DiffUpdateResult

差异更新操作的结果。

```typescript
export type DiffUpdateResult =
  | {
      status: 'accepted';
      content?: string;
    }
  | {
      status: 'rejected';
      content: undefined;
    };
```

### 通知模式

#### IdeContextNotificationSchema

用于验证来自 IDE 的 'ide/contextUpdate' 通知的模式。

#### IdeDiffAcceptedNotificationSchema

用于验证来自 IDE 的 'ide/diffAccepted' 通知的模式。

#### IdeDiffClosedNotificationSchema

用于验证来自 IDE 的 'ide/diffClosed' 通知的模式。

#### CloseDiffResponseSchema

用于验证关闭差异响应的模式，带有自定义转换逻辑。

## 函数

### createIdeContextStore

```typescript
export function createIdeContextStore()
```

创建一个新的存储来管理 IDE 的上下文。此工厂函数封装了状态和逻辑，允许创建隔离的实例，这在测试中特别有用。

**返回:**
- 一个包含与 IDE 上下文交互方法的对象：
  - `setIdeContext`: 设置 IDE 上下文
  - `getIdeContext`: 检索当前 IDE 上下文
  - `subscribeToIdeContext`: 订阅上下文变更
  - `clearIdeContext`: 清除 IDE 上下文

### setIdeContext

```typescript
function setIdeContext(newIdeContext: IdeContext): void
```

设置 IDE 上下文并通知所有注册的订阅者变更。

**参数:**
- `newIdeContext`: 来自 IDE 的新 IDE 上下文

### clearIdeContext

```typescript
function clearIdeContext(): void
```

清除 IDE 上下文并通知所有注册的订阅者变更。

### getIdeContext

```typescript
function getIdeContext(): IdeContext | undefined
```

检索当前 IDE 上下文。

**返回:**
- 如果有活动文件则返回 `IdeContext` 对象；否则返回 `undefined`

### subscribeToIdeContext

```typescript
function subscribeToIdeContext(subscriber: IdeContextSubscriber): () => void
```

订阅 IDE 上下文的变更。

**参数:**
- `subscriber`: IDE 上下文变更时调用的函数

**返回:**
- 一个函数，调用时将取消订阅提供的订阅者

**实现细节:**
- 订阅者在订阅时不会被调用当前值
- 返回一个取消订阅函数

### notifySubscribers

```typescript
function notifySubscribers(): void
```

通知所有注册的订阅者当前 IDE 上下文。

## 常量

### ideContext

```typescript
export const ideContext = createIdeContextStore();
```

应用程序的默认、共享 IDE 上下文存储实例。