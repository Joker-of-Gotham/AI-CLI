# ide-installer.ts

此文件提供了安装 IDE 配套扩展的实用程序。

## 接口

### IdeInstaller

IDE 安装程序实现的接口。

```typescript
export interface IdeInstaller {
  install(): Promise<InstallResult>;
}
```

### InstallResult

IDE 安装尝试的结果。

```typescript
export interface InstallResult {
  success: boolean;
  message: string;
}
```

## 函数

### getIdeInstaller

```typescript
export function getIdeInstaller(
  ide: DetectedIde,
  platform = process.platform,
): IdeInstaller | null
```

获取指定 IDE 的安装程序（如果可用）。

**参数:**
- `ide`: 要获取安装程序的 IDE
- `platform`: 平台（默认为 `process.platform`）

**返回:**
- `IdeInstaller` 实例或如果安装不受支持则返回 `null`

**实现细节:**
- 目前仅支持 VSCode 和 FirebaseStudio
- 为受支持的 IDE 返回 `VsCodeInstaller`
- 为不受支持的 IDE 返回 `null`

### findVsCodeCommand

```typescript
async function findVsCodeCommand(
  platform: NodeJS.Platform = process.platform,
): Promise<string | null>
```

查找 VSCode 命令可执行文件。

**参数:**
- `platform`: 要检查的平台（默认为 `process.platform`）

**返回:**
- VSCode 命令的路径或如果未找到则返回 `null`

**搜索策略:**
1. 检查 PATH 中是否有 `code`（或 Windows 上的 `code.cmd`）
2. 根据平台检查常见安装位置：
   - macOS: `/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code` 和 `~/Library/Application Support/Code/bin/code`
   - Linux: `/usr/share/code/bin/code`、`/snap/bin/code` 和 `~/.local/share/code/bin/code`
   - Windows: Program Files 和 AppData 位置

### getVsCodeCommand

```typescript
function getVsCodeCommand(platform: NodeJS.Platform = process.platform)
```

获取平台的适当 VSCode 命令名称。

**参数:**
- `platform`: 要检查的平台

**返回:**
- Windows 为 `'code.cmd'`，其他平台为 `'code'`

## 类

### VsCodeInstaller

`IdeInstaller` 的实现，用于基于 VSCode 的 IDE。

### 属性

- `private vsCodeCommand: Promise<string | null>` - 查找 VSCode 命令的承诺
- `private readonly ideInfo: IdeInfo` - 正在安装的 IDE 的信息

### 构造函数

```typescript
constructor(
  readonly ide: DetectedIde,
  readonly platform = process.platform,
)
```

**参数:**
- `ide`: 要安装扩展的 IDE
- `platform`: 平台（默认为 `process.platform`）

### 方法

#### install

```typescript
async install(): Promise<InstallResult>
```

为 VSCode 安装 Gemini CLI 配套扩展。

**返回:**
- 解析为安装结果的承诺

**实现细节:**
1. 使用 `findVsCodeCommand()` 查找 VSCode 命令
2. 如果未找到，返回失败和说明
3. 如果找到，执行扩展安装命令：
   - `"<command>" --install-extension google.gemini-cli-vscode-ide-companion --force`
4. 返回成功或失败结果及适当消息