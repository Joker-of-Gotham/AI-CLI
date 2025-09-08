# types.ts

此文件定义了提示处理器在 Gemini CLI 中使用的类型和常量。

## 类型: PromptPipelineContent

```typescript
export type PromptPipelineContent = PartUnion[];
```

定义提示处理器的输入/输出类型。它表示可以包含文本和多模态内容的部分数组。

## 接口: IPromptProcessor

定义提示处理器的接口，这是一个可以在将提示发送到模型之前对其进行转换的模块。

### 方法

#### process

```typescript
process(
  prompt: PromptPipelineContent,
  context: CommandContext,
): Promise<PromptPipelineContent>;
```

处理提示输入（可能包含文本和多模态部分），应用特定的转换作为管道的一部分。

**参数:**
- `prompt`: 当前的提示字符串状态。这可能已被管道中的先前处理器修改。
- `context`: 完整的命令上下文，提供对调用详细信息（如 `context.invocation.raw` 和 `context.invocation.args`）、应用程序服务和 UI 处理程序的访问。

**返回:**
- 解析为转换后的提示字符串的承诺，该字符串将传递给下一个处理器，或者如果是最后一个处理器，则发送给模型。

## 常量

### SHORTHAND_ARGS_PLACEHOLDER

```typescript
export const SHORTHAND_ARGS_PLACEHOLDER = '{{args}}';
```

自定义命令中速记参数注入的占位符字符串。
- 在 `!{...}` 外部使用时，参数以原始形式注入。
- 在 `!{...}` 内部使用时，参数经过 shell 转义。

### SHELL_INJECTION_TRIGGER

```typescript
export const SHELL_INJECTION_TRIGGER = '!{';
```

自定义命令中 shell 命令注入的触发字符串。

### AT_FILE_INJECTION_TRIGGER

```typescript
export const AT_FILE_INJECTION_TRIGGER = '@{';
```

自定义命令中文件注入的触发字符串。

## 使用模式

这些类型和常量在整个提示处理管道中使用，以：
1. 定义提示内容在通过处理器时的结构
2. 标准化实现新处理器的接口
3. 为模板解析提供一致的占位符和触发字符串
4. 以可预测的方式启用处理器链

`PromptPipelineContent` 类型特别允许包含不仅文本，还包括图像、音频和 Gemini API 支持的其他内容类型的多模态提示。