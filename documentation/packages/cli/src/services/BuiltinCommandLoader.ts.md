# BuiltinCommandLoader.ts

`BuiltinCommandLoader` 类负责加载作为 Gemini CLI 应用程序组成部分的核心硬编码斜杠命令。

## 类概述

```typescript
export class BuiltinCommandLoader implements ICommandLoader
```

此类实现 `ICommandLoader` 接口，并提供加载 CLI 中所有内置命令的功能。

## 构造函数

```typescript
constructor(private config: Config | null)
```

构造函数接受一个可选的 `Config` 对象，某些命令在初始化期间可能需要使用。

## 方法

### loadCommands

```typescript
async loadCommands(_signal: AbortSignal): Promise<SlashCommand[]>
```

此方法收集所有原始内置命令定义，注入所需的依赖项（例如配置），并过滤掉不可用的命令。

**参数:**
- `_signal`: AbortSignal（对于此同步加载器未使用）

**返回:**
- 解析为 `SlashCommand` 对象数组的承诺

## 实现细节

加载器导入并聚合来自 UI 命令目录的所有内置命令，包括：
- aboutCommand
- authCommand
- bugCommand
- chatCommand
- clearCommand
- compressCommand
- copyCommand
- corgiCommand
- docsCommand
- directoryCommand
- editorCommand
- extensionsCommand
- helpCommand
- ideCommand
- initCommand
- mcpCommand
- memoryCommand
- privacyCommand
- quitCommand
- restoreCommand
- statsCommand
- themeCommand
- toolsCommand
- settingsCommand
- vimCommand
- setupGithubCommand
- terminalSetupCommand

需要配置的命令在初始化期间传递配置对象。