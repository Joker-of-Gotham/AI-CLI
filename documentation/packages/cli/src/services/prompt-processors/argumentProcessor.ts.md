# argumentProcessor.ts

此文件实现了 `DefaultArgumentProcessor` 类，该类负责在提示模板没有显式使用 `{{args}}` 占位符时将用户命令参数附加到提示中。

## 类: DefaultArgumentProcessor

实现 `IPromptProcessor` 接口以处理提示中的参数。

### 构造函数

```typescript
constructor()
```

构造函数不接受参数。

### 方法

#### process

```typescript
async process(
  prompt: PromptPipelineContent,
  context: CommandContext,
): Promise<PromptPipelineContent>
```

通过在提示的最后一个文本部分附加用户的完整命令调用来处理提示，前提是提供了参数且提示不包含 `{{args}}` �占位符。

**参数:**
- `prompt`: 当前的提示内容状态（部分数组）
- `context`: 包含调用详细信息的命令上下文

**返回:**
- 解析为处理后的提示内容的承诺

**实现细节:**
1. 检查上下文是否有调用参数
2. 如果存在参数，将原始调用附加到提示的最后一个文本部分
3. 如果没有参数，返回未更改的提示

### 使用上下文

此处理器仅在提示模板不包含 `{{args}}` 时使用，允许模型通过访问完整用户命令来执行自己的参数解析。