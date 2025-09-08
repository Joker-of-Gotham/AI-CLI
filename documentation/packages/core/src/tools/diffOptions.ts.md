# Diff Options Utility

此模块使用 `diff` 库提供生成和分析代码差异的实用程序。它包括在不同版本代码之间计算差异统计的功能。

## 常量

### DEFAULT_DIFF_OPTIONS
```ts
export const DEFAULT_DIFF_OPTIONS: Diff.PatchOptions = {
  context: 3,
  ignoreWhitespace: true,
};
```
用于生成结构化补丁的默认选项。设置 3 行上下文并忽略空白字符变化。

## 函数

### getDiffStat
```ts
export function getDiffStat(
  fileName: string,
  oldStr: string,
  aiStr: string,
  userStr: string,
): DiffStat
```
计算三个版本文件之间的差异统计：
1. 原始版本 (`oldStr`) 和 AI 提议版本 (`aiStr`) 之间
2. AI 提议版本 (`aiStr`) 和用户修改版本 (`userStr`) 之间

返回包含以下内容的 `DiffStat` 对象：
- `model_added_lines`: AI 提议中添加的行数
- `model_removed_lines`: AI 提议中删除的行数
- `model_added_chars`: AI 提议中添加的字符数
- `model_removed_chars`: AI 提议中删除的字符数
- `user_added_lines`: 用户添加的行数
- `user_removed_lines`: 用户删除的行数
- `user_added_chars`: 用户添加的字符数
- `user_removed_chars`: 用户删除的字符数

该函数使用 `Diff.structuredPatch` 生成详细的补丁信息，并分析每个区块以计算添加/删除的行数和字符数。