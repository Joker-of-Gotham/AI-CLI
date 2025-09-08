# Config 类

Config 类是 iFlow CLI 的核心配置管理器，负责管理所有配置选项和系统组件。

## 主要功能

1. **配置管理**：管理会话ID、模型设置、工具配置等
2. **组件初始化**：初始化工具注册表、提示词注册表、Gemini客户端等
3. **服务管理**：管理文件发现服务、Git服务等
4. **认证管理**：处理不同的认证方式和刷新令牌

## 核心属性

### 基本配置
- `sessionId` - 会话ID
- `model` - 使用的AI模型
- `embeddingModel` - 嵌入模型
- `targetDir` - 目标目录
- `debugMode` - 调试模式

### 工具配置
- `coreTools` - 核心工具列表
- `allowedTools` - 允许的工具列表
- `excludeTools` - 排除的工具列表

### 文件过滤配置
- `respectGitIgnore` - 是否遵守.gitignore
- `respectGeminiIgnore` - 是否遵守.geminiignore

### 其他配置
- `approvalMode` - 审批模式
- `telemetrySettings` - 遥测设置
- `checkpointing` - 检查点功能
- `proxy` - 代理设置

## 核心方法

### 初始化
- `initialize()` - 初始化配置和所有相关组件
- `createToolRegistry()` - 创建工具注册表

### 访问器方法
- `getModel()` - 获取当前模型
- `getSessionId()` - 获取会话ID
- `getToolRegistry()` - 获取工具注册表
- `getPromptRegistry()` - 获取提示词注册表
- `getFileService()` - 获取文件服务
- `getGitService()` - 获取Git服务

### 设置方法
- `setModel()` - 设置模型
- `setUserMemory()` - 设置用户记忆
- `setApprovalMode()` - 设置审批模式

## 嵌套类型

### ApprovalMode 枚举
- `DEFAULT` - 默认模式
- `AUTO_EDIT` - 自动编辑模式
- `YOLO` - 无需确认模式

### TelemetrySettings 接口
遥测设置配置，包含启用状态、目标、端点等。

### MCPServerConfig 类
MCP服务器配置，包含命令、参数、环境变量等。

## 认证相关

### AuthProviderType 枚举
- `DYNAMIC_DISCOVERY` - 动态发现
- `GOOGLE_CREDENTIALS` - Google凭证

### FlashFallbackHandler 类型
处理模型降级的回调函数类型。

## 文件过滤选项

### FileFilteringOptions 接口
- `respectGitIgnore` - 是否遵守.gitignore
- `respectGeminiIgnore` - 是否遵守.geminiignore