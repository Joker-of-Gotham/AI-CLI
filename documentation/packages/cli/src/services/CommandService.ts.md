# CommandService.ts

`CommandService` 类协调所有斜杠命令的发现和加载。

## 类概述

```typescript
export class CommandService
```

此服务基于提供者模式的加载器运行。它使用 `ICommandLoader` 实例数组进行初始化，每个实例负责从特定源获取命令（例如，内置代码、本地文件）。

CommandService 负责调用这些加载器，聚合它们的结果，并解决任何名称冲突。这种架构允许在不修改服务本身的情况下扩展命令系统以支持新源。

## 构造函数

```typescript
private constructor(private readonly commands: readonly SlashCommand[])
```

构造函数是私有的，以强制使用异步工厂方法创建实例。

## 静态方法

### create

```typescript
static async create(
  loaders: ICommandLoader[],
  signal: AbortSignal,
): Promise<CommandService>
```

异步创建并初始化新的 CommandService 实例。此工厂方法协调整个命令加载过程。

**参数:**
- `loaders`: 符合 `ICommandLoader` 接口的对象数组。内置命令应排在前面，然后是 FileCommandLoader。
- `signal`: 用于取消加载过程的 AbortSignal。

**返回:**
- 解析为新创建的、完全初始化的 `CommandService` 实例的承诺。

#### 冲突解决

- 与现有命令冲突的扩展命令会被重命名为 `extensionName.commandName`
- 非扩展命令（内置、用户、项目）根据加载器顺序覆盖同名的早期命令

## 实例方法

### getCommands

```typescript
getCommands(): readonly SlashCommand[]
```

检索当前加载和去重的斜杠命令列表。

**返回:**
- 可用 `SlashCommand` 对象的只读统一数组。

## 实现细节

服务并行运行所有提供的加载器，聚合它们的结果，通过重命名处理扩展命令的名称冲突，然后返回完全构建的 `CommandService` 实例。