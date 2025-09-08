# customMatchers.ts

此文件为 Vitest 测试框架定义了自定义匹配器，用于验证 TextBuffer 对象。

## 概述

该文件使用自定义匹配器扩展了 Vitest 的 `expect` 接口，以检查 TextBuffer 是否仅包含有效字符。

## 自定义匹配器

### toHaveOnlyValidCharacters

```typescript
function toHaveOnlyValidCharacters(this: Assertion, buffer: TextBuffer)
```

此匹配器通过确保以下内容来检查 TextBuffer 是否仅包含有效字符：
1. 行内没有换行字符
2. 没有退格字符 (`\b`)
3. 没有 ANSI 转义码 (`\x1b`)

**参数:**
- `buffer`: 要验证的 TextBuffer

**返回:**
- 一个符合 Vitest 匹配器 API 的对象，包含 `pass`、`message`、`actual` 和 `expected` 属性

## 实现细节

### 无效字符检测

匹配器使用正则表达式来检测无效字符：
```typescript
const invalidCharsRegex = /[\b\x1b]/;
```

此正则表达式匹配：
- `\b` - 退格字符
- `\x1b` - ANSI 转义码

### 验证过程

1. 遍历缓冲区中的每一行
2. 检查行内是否有换行字符（不应存在）
3. 使用无效字符正则表达式测试每一行
4. 收集有关无效行的信息用于错误报告

### 错误报告

当发现无效字符时，匹配器提供详细信息：
- 包含无效字符的行
- 这些行的实际内容
- 期望的格式（无换行符、退格符或转义码的行）