# authCommand.ts

这个文件定义了 `/auth` 斜杠命令，用于打开认证对话框。

## 功能概述

1. 导出 `authCommand` 斜杠命令对象
2. 提供打开认证对话框的功能

## 命令对象

### authCommand
- `name`：命令名称（'auth'）
- `description`：命令描述（'change the auth method'）
- `kind`：命令类型（`CommandKind.BUILT_IN`）
- `action`：命令执行函数，返回打开对话框的操作

## 依赖关系

- 依赖 `./types.js` 中的 `OpenDialogActionReturn` 和 `SlashCommand` 类型
- 依赖 `./types.js` 中的 `CommandKind` 枚举

## 命令功能

1. 打开认证对话框
2. 允许用户更改认证方法

## 函数级调用关系

```mermaid
erDiagram
    authCommand ||--|| CommandKind : uses
```

## 变量级调用关系

```mermaid
erDiagram
    authCommand {
        string name
        string description
        CommandKind kind
        CommandContext _context
        string _args
        OpenDialogActionReturn action
    }
```