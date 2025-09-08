# 存储管理

此模块为 Gemini CLI 应用程序提供存储管理功能，处理各种类型数据的文件路径和目录，包括配置、历史记录和临时文件。

## 常量

### 目录和文件名
```ts
export const GEMINI_DIR = '.gemini';
export const GOOGLE_ACCOUNTS_FILENAME = 'google_accounts.json';
export const OAUTH_FILE = 'oauth_creds.json';
const TMP_DIR_NAME = 'tmp';
```
整个应用程序中使用的标准目录和文件名。

## Storage 类

管理存储路径和目录的主类。

### 静态方法

#### 全局目录路径
- `getGlobalGeminiDir()`: 返回用户主目录中的全局 .gemini 目录路径
- `getMcpOAuthTokensPath()`: 返回 MCP OAuth 令牌的路径
- `getGlobalSettingsPath()`: 返回全局设置的路径
- `getInstallationIdPath()`: 返回安装 ID 文件的路径
- `getGoogleAccountsPath()`: 返回 Google 账户文件的路径
- `getUserCommandsDir()`: 返回用户命令目录的路径
- `getGlobalMemoryFilePath()`: 返回全局内存文件的路径
- `getGlobalTempDir()`: 返回全局临时目录的路径
- `getOAuthCredsPath()`: 返回 OAuth 凭据的路径

### 实例方法

#### 项目特定路径
- `getGeminiDir()`: 返回项目特定的 .gemini 目录路径
- `getProjectTempDir()`: 返回项目的哈希临时目录
- `ensureProjectTempDirExists()`: 如果不存在则创建项目临时目录
- `getProjectRoot()`: 返回项目根目录
- `getHistoryDir()`: 返回带有哈希子目录的历史记录目录
- `getWorkspaceSettingsPath()`: 返回工作区设置的路径
- `getProjectCommandsDir()`: 返回项目命令的路径
- `getProjectTempCheckpointsDir()`: 返回项目临时检查点的路径
- `getExtensionsDir()`: 返回扩展目录的路径
- `getExtensionsConfigPath()`: 返回扩展配置的路径
- `getHistoryFilePath()`: 返回 shell 历史记录文件的路径

### 私有方法
- `getFilePathHash(filePath: string)`: 创建文件路径的 SHA-256 哈希，用于目录名

Storage 类使用全局和项目特定目录的组合来组织不同类型的数据，使用哈希为每个项目创建唯一目录。