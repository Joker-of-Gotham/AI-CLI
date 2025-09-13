# themeCommand.ts

这个文件定义了 `/theme` 斜杠命令，用于更改主题。

## 功能概述

1. 导出 `themeCommand` 斜杠命令对象
2. 提供打开主题对话框的功能

## 命令对象

### themeCommand
- `name`：命令名称（'theme'）
- `description`：命令描述（'change the theme'）
- `kind`：命令类型（`CommandKind.BUILT_IN`）
- `action`：命令执行函数，返回打开对话框的操作

## 依赖关系

- 依赖 `./types.js` 中的类型定义

## 命令功能

1. 打开主题设置对话框
2. 允许用户更改 CLI 主题

## 函数级调用关系

```mermaid
erDiagram
    themeCommand ||--|| CommandKind : uses
```

## 变量级调用关系

```mermaid
erDiagram
    themeCommand {
        string name
        string description
        CommandKind kind
        CommandContext _context
        string _args
        OpenDialogActionReturn action
    }
```