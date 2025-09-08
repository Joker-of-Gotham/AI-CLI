# FileCommandLoader.ts

`FileCommandLoader` 类从用户全局配置目录和当前项目目录中的 .toml 文件发现和加载自定义斜杠命令。

## 类概述

```typescript
export class FileCommandLoader implements ICommandLoader
```

此加载器负责：
- 递归扫描命令目录
- 解析和验证 TOML 文件
- 将有效定义适配为可执行的 SlashCommand 对象
- 优雅地处理文件系统错误和格式错误的文件

## 构造函数

```typescript
constructor(private readonly config: Config | null)
```

构造函数接受一个可选的 `Config` 对象，该对象提供加载命令的配置。

## 方法

### loadCommands

```typescript
async loadCommands(signal: AbortSignal): Promise<SlashCommand[]>
```

从用户、项目和扩展目录加载所有命令。按顺序返回：用户 → 项目 → 扩展（按字母顺序）。

**参数:**
- `signal`: 用于取消加载过程的 AbortSignal

**返回:**
- 解析为所有加载的 SlashCommands 数组的承诺

#### 顺序重要性

顺序对于 CommandService 中的冲突解决很重要：
- 用户/项目命令（没有 extensionName）使用"后胜出"策略
- 扩展命令（有 extensionName）在存在冲突时会被重命名

### getCommandDirectories

```typescript
private getCommandDirectories(): CommandDirectory[]
```

按顺序获取所有命令目录以进行加载：
1. 用户命令
2. 项目命令（覆盖用户命令）
3. 扩展命令（最后处理以检测所有冲突）

此顺序确保扩展命令可以检测到所有冲突。

### parseAndAdaptFile

```typescript
private async parseAndAdaptFile(
  filePath: string,
  baseDir: string,
  extensionName?: string,
): Promise<SlashCommand | null>
```

解析单个 .toml 文件并将其转换为 SlashCommand 对象。

**参数:**
- `filePath`: .toml 文件的绝对路径
- `baseDir`: 用于名称计算的根命令目录
- `extensionName`: 可选的扩展名称，用于为命令添加前缀

**返回:**
- 解析为 SlashCommand 的承诺，如果文件无效则返回 null

## 实现细节

### 命令定义模式

加载器使用 Zod 来定义和验证命令定义文件的模式：

```typescript
const TomlCommandDefSchema = z.object({
  prompt: z.string({
    required_error: "The 'prompt' field is required.",
    invalid_type_error: "The 'prompt' field must be a string.",
  }),
  description: z.string().optional(),
});
```

### 提示处理管道

加载器设置了一个处理器管道来处理命令提示中的不同功能：
1. @-文件注入（安全优先）
2. 参数和 Shell 注入
3. 默认参数处理

### 安全考虑

加载器实现了几项安全措施：
- 文件系统访问仅限于特定目录
- TOML 解析使用 Zod 模式进行验证
- @-文件注入在 shell 命令之前处理，以防止动态恶意路径生成
- 启用时遵守文件夹信任设置