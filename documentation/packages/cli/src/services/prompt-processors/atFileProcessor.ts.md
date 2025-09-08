# atFileProcessor.ts

此文件实现了 `AtFileProcessor` 类，该类使用 `@{filePath}` 语法处理提示中的文件内容注入。

## 类: AtFileProcessor

实现 `IPromptProcessor` 接口以处理提示中的文件内容注入。

### 构造函数

```typescript
constructor(private readonly commandName?: string)
```

**参数:**
- `commandName`: 可选的命令名称，用于错误消息

### 方法

#### process

```typescript
async process(
  input: PromptPipelineContent,
  context: CommandContext,
): Promise<PromptPipelineContent>
```

通过将 `@{filePath}` 占位符替换为实际文件内容来处理提示内容。

**参数:**
- `input`: 要处理的当前提示内容
- `context`: 包含服务和 UI 处理程序的命令上下文

**返回:**
- 解析为处理后的提示内容（包含注入的文件内容）的承诺

**实现细节:**
1. 检查配置服务是否可用
2. 使用 `flatMapTextParts` 处理提示的每个文本部分
3. 对于每个文本部分，检查 `@{...}` 注入触发器
4. 使用 `extractInjections` 工具提取注入
5. 对于每个注入：
   - 使用 `readPathFromWorkspace` 读取文件内容
   - 通过显示信息消息处理被忽略的文件（由 .gitignore 或 .geminiignore）
   - 通过显示错误消息并保留占位符来处理错误
   - 将文件内容注入到提示中
6. 保持非注入文本部分不变

### 错误处理

- 如果配置不可用，返回未更改的输入
- 文件读取错误被捕获并记录，占位符保留在提示中
- 为成功和失败的文件注入添加 UI 消息

### 依赖项

- 使用 `./injectionParser.js` 中的 `extractInjections` 来解析 `@{...}` 表达式
- 使用 `@google/gemini-cli-core` 中的 `readPathFromWorkspace` 来读取文件内容
- 使用 `@google/gemini-cli-core` 中的 `flatMapTextParts` 来处理文本部分