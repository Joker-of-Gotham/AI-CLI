# Core Configuration

此模块定义了 Gemini CLI 应用程序的主要配置系统。它包括控制 CLI 各个方面的类、接口和常量。

## 枚举

### ApprovalMode
```ts
export enum ApprovalMode {
  DEFAULT = 'default',
  AUTO_EDIT = 'autoEdit',
  YOLO = 'yolo',
}
```
控制工具执行所需的用户批准级别：
- `DEFAULT`: 需要用户确认的标准批准模式
- `AUTO_EDIT`: 自动编辑模式，减少提示
- `YOLO`: "You Only Live Once" 模式，限制最少

### AuthProviderType
```ts
export enum AuthProviderType {
  DYNAMIC_DISCOVERY = 'dynamic_discovery',
  GOOGLE_CREDENTIALS = 'google_credentials',
}
```
指定 MCP 服务器的身份验证提供者类型。

## 接口

### AccessibilitySettings
可访问性功能的配置：
- `disableLoadingPhrases`: 是否禁用加载短语
- `screenReader`: 是否启用屏幕阅读器模式

### BugCommandSettings
错误报告的配置：
- `urlTemplate`: 错误报告的模板 URL

### ChatCompressionSettings
聊天历史压缩的配置：
- `contextPercentageThreshold`: 触发压缩的阈值

### SummarizeToolOutputSettings
工具输出摘要的配置：
- `tokenBudget`: 用于摘要的最大令牌数

### TelemetrySettings
遥测收集的配置：
- `enabled`: 是否启用遥测
- `target`: 遥测数据的目标
- `otlpEndpoint`: OTLP 端点 URL
- `otlpProtocol`: OTLP 协议（grpc 或 http）
- `logPrompts`: 是否记录提示
- `outfile`: 写入遥测日志的文件

### SandboxConfig
沙盒执行的配置：
- `command`: 沙盒命令（docker、podman、sandbox-exec）
- `image`: 要使用的容器镜像

### FileFilteringOptions
文件过滤选项：
- `respectGitIgnore`: 是否遵守 .gitignore 文件
- `respectGeminiIgnore`: 是否遵守 .geminiignore 文件

## 类

### MCPServerConfig
Model Calling Protocol (MCP) 服务器的配置，支持多种传输方法：
- stdio 传输（命令、参数、环境变量、工作目录）
- SSE 传输（URL）
- HTTP 传输（httpUrl、标头）
- WebSocket 传输（tcp）
- 通用设置（超时、信任、描述等）

### Config
管理所有 CLI 设置的主要配置类。主要职责包括：
- 管理工具和提示注册表
- 处理身份验证和模型选择
- 配置文件过滤和发现
- 管理遥测设置
- 控制沙盒和安全功能
- 处理 IDE 集成
- 管理扩展和 MCP 服务器

Config 类使用 `ConfigParameters` 初始化，并且必须在使用前使用 `initialize()` 显式初始化。

## 常量

### 文件过滤默认值
```ts
export const DEFAULT_MEMORY_FILE_FILTERING_OPTIONS: FileFilteringOptions
export const DEFAULT_FILE_FILTERING_OPTIONS: FileFilteringOptions
```
内存文件和常规文件的默认过滤选项。

### 截断默认值
```ts
export const DEFAULT_TRUNCATE_TOOL_OUTPUT_THRESHOLD = 4_000_000;
export const DEFAULT_TRUNCATE_TOOL_OUTPUT_LINES = 1000;
```
截断工具输出的默认阈值。

## 类型定义

### FlashFallbackHandler
处理模型降级场景的函数类型。

### GeminiCLIExtension
CLI 扩展的接口，包含名称、版本、激活状态和路径。

## 重新导出

该模块重新导出：
- 来自 mcp/oauth-provider 的 `MCPOAuthConfig` 类型
- 来自 tools/tools 的 `AnyToolInvocation` 类型
- 来自 models 的 `DEFAULT_GEMINI_FLASH_MODEL`