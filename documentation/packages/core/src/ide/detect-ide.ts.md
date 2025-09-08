# detect-ide.ts

此文件提供了用于检测 Gemini CLI 运行的 IDE 环境的实用程序。

## 枚举: DetectedIde

可由 CLI 检测到的支持的 IDE 枚举。

```typescript
export enum DetectedIde {
  Devin = 'devin',
  Replit = 'replit',
  Cursor = 'cursor',
  CloudShell = 'cloudshell',
  Codespaces = 'codespaces',
  FirebaseStudio = 'firebasestudio',
  Trae = 'trae',
  VSCode = 'vscode',
  VSCodeFork = 'vscodefork',
}
```

## 接口: IdeInfo

检测到的 IDE 的信息。

### 属性

- `displayName: string` - IDE 的用户友好名称

## 函数

### getIdeInfo

```typescript
export function getIdeInfo(ide: DetectedIde): IdeInfo
```

检索检测到的 IDE 的信息。

**参数:**
- `ide`: 检测到的 IDE 枚举值

**返回:**
- 包含 IDE 显示名称的 `IdeInfo` 对象

**实现细节:**
- 使用 switch 语句将每个 IDE 枚举值映射到其显示名称
- 包含编译时完整性检查以确保处理所有枚举值

### detectIdeFromEnv

```typescript
export function detectIdeFromEnv(): DetectedIde
```

基于环境变量检测 IDE。

**返回:**
- 表示检测到的 IDE 的 `DetectedIde` 枚举值

**检测逻辑:**
1. 检查 `__COG_BASHRC_SOURCED` → Devin
2. 检查 `REPLIT_USER` → Replit
3. 检查 `CURSOR_TRACE_ID` → Cursor
4. 检查 `CODESPACES` → Codespaces
5. 检查 `EDITOR_IN_CLOUD_SHELL` 或 `CLOUD_SHELL` → CloudShell
6. 检查 `TERM_PRODUCT` === 'Trae' → Trae
7. 检查 `MONOSPACE_ENV` → FirebaseStudio
8. 默认为 VSCode 如果以上都不匹配

### detectIde

```typescript
export function detectIde(ideProcessInfo: {
  pid: number;
  command: string;
}): DetectedIde | undefined
```

基于进程信息和环境检测 IDE。

**参数:**
- `ideProcessInfo`: 包含进程 ID 和命令信息的对象

**返回:**
- `DetectedIde` 枚举值或如果 IDE 不受支持则返回 `undefined`

**实现细节:**
- 仅支持基于 VSCode 的集成（检查 `TERM_PROGRAM` === 'vscode'）
- 使用 `detectIdeFromEnv()` 获取初始检测
- 调用 `verifyVSCode()` 来区分 VSCode 和 VSCode 分支

### verifyVSCode

```typescript
function verifyVSCode(
  ide: DetectedIde,
  ideProcessInfo: {
    pid: number;
    command: string;
  },
): DetectedIde
```

验证检测到的 IDE 是否实际上是 VSCode 或 VSCode 分支。

**参数:**
- `ide`: 最初检测到的 IDE
- `ideProcessInfo`: 包含进程 ID 和命令信息的对象

**返回:**
- `DetectedIde.VSCode` 如果命令包含 'code'，否则 `DetectedIde.VSCodeFork`

**实现细节:**
- 仅在初始检测为 VSCode 时处理
- 检查进程命令是否包含 'code'（不区分大小写）
- 为官方 VSCode 返回 VSCode，为非官方构建返回 VSCodeFork