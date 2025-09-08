# shellProcessor.ts

此文件实现了 `ShellProcessor` 类，该类处理提示中的 shell 命令执行和参数注入。

## 类: ConfirmationRequiredError

一个自定义错误类，用于在执行 shell 命令之前表示需要用户确认。

### 构造函数

```typescript
constructor(
  message: string,
  public commandsToConfirm: string[],
)
```

**参数:**
- `message`: 错误消息
- `commandsToConfirm`: 需要用户确认的命令数组

## 接口: ResolvedShellInjection

表示提示中检测到的单个 shell 注入点，在参数解析后。扩展基础 Injection 接口。

### 属性

- `content: string` - 从大括号内提取的内容
- `startIndex: number` - 注入的起始索引
- `endIndex: number` - 注入的结束索引
- `resolvedCommand?: string` - `{{args}}` 被转义和替换后的命令

## 类: ShellProcessor

实现 `IPromptProcessor` 接口以处理提示插值，包括 shell 命令执行 (`!{...}`) 和上下文感知的参数注入 (`{{args}}`)。

### 构造函数

```typescript
constructor(private readonly commandName: string)
```

**参数:**
- `commandName`: 正在处理的命令名称，用于错误消息

### 方法

#### process

```typescript
async process(
  prompt: PromptPipelineContent,
  context: CommandContext,
): Promise<PromptPipelineContent>
```

通过处理 shell 命令注入和参数替换来处理提示内容。

**参数:**
- `prompt`: 要处理的当前提示内容
- `context`: 包含服务和 UI 处理程序的命令上下文

**返回:**
- 解析为处理后的提示内容的承诺

#### processString

```typescript
private async processString(
  prompt: string,
  context: CommandContext,
): Promise<PromptPipelineContent>
```

通过处理 shell 命令注入和参数替换来处理单个字符串提示。

**参数:**
- `prompt`: 要处理的提示字符串
- `context`: 包含服务和 UI 处理程序的命令上下文

**返回:**
- 解析为处理后的提示内容的承诺

**实现细节:**
1. 检查提示中的 shell 注入触发器 (`!{`)
2. 如果未找到触发器，简单地将 `{{args}}` 替换为原始用户参数
3. 使用 `extractInjections` 提取 shell 命令注入
4. 解析命令中的参数：
   - `!{...}` 内的 `{{args}}` 被替换为 shell 转义的输入
   - `!{...}` 外的 `{{args}}` 被替换为原始输入
5. 使用 `checkCommandPermissions` 对解析后的命令执行安全检查
6. 如果命令需要确认，抛出 `ConfirmationRequiredError`
7. 使用 `ShellExecutionService.execute` 执行已批准的 shell 命令
8. 将注入占位符替换为命令输出
9. 为失败或终止的命令添加状态消息

### 安全特性

1. **命令权限检查**: 使用 `checkCommandPermissions` 验证命令是否符合安全配置
2. **Shell 参数转义**: 在 shell 命令中使用时正确转义用户参数
3. **确认要求**: 需要用户确认潜在危险的命令（除非在 YOLO 模式下）
4. **硬性拒绝执行**: 阻止配置明确拒绝的命令

### 错误处理

- 丢失安全配置时抛出错误
- 处理 shell 命令生成错误
- 报告命令退出码和终止信号
- 传播命令执行中的错误

### 依赖项

- 使用 `./injectionParser.js` 中的 `extractInjections` 来解析 `!{...}` 表达式
- 使用 `@google/gemini-cli-core` 中的 `checkCommandPermissions` 进行安全检查
- 使用 `@google/gemini-cli-core` 中的 `ShellExecutionService.execute` 来执行命令
- 使用 `@google/gemini-cli-core` 中的 `flatMapTextParts` 来处理文本部分