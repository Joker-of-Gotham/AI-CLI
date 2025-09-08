# 遥测系统

遥测系统负责收集和发送使用数据，帮助改进产品和服务。

## 核心组件

### TelemetryTarget 枚举
定义遥测数据的目标：
- `GCP` - 发送到 Google Cloud Platform
- `LOCAL` - 本地记录

### initializeTelemetry()
初始化遥测 SDK：
- 配置资源属性
- 设置导出器（OTLP、文件或控制台）
- 启动 NodeSDK
- 初始化指标

### shutdownTelemetry()
关闭遥测 SDK：
- 关闭 ClearcutLogger
- 关闭 NodeSDK
- 清理资源

## 日志记录器

### logCliConfiguration()
记录 CLI 配置信息：
- 模型设置
- 沙箱配置
- 工具启用状态
- 认证方式

### logUserPrompt()
记录用户提示：
- 提示长度
- 提示ID
- 认证类型
- 提示内容（可选）

### logToolCall()
记录工具调用：
- 工具名称
- 调用参数
- 执行时间
- 成功状态
- 错误信息

### logApiRequest()
记录 API 请求：
- 模型名称
- 提示ID
- 请求文本

### logApiError()
记录 API 错误：
- 模型名称
- 错误信息
- 错误类型
- 状态码
- 执行时间

### logApiResponse()
记录 API 响应：
- 模型名称
- 状态码
- 执行时间
- Token 使用统计
- 响应文本

## 指标记录

### recordApiErrorMetrics()
记录 API 错误指标：
- 错误计数
- 按模型和错误类型分类

### recordTokenUsageMetrics()
记录 Token 使用指标：
- 输入 Token
- 输出 Token
- 缓存 Token
- 思考 Token
- 工具 Token

### recordApiResponseMetrics()
记录 API 响应指标：
- 响应时间
- 成功率
- 状态码分布

### recordToolCallMetrics()
记录工具调用指标：
- 调用计数
- 执行时间
- 成功率
- 工具类型分布

## 常量

### 默认设置
- `DEFAULT_TELEMETRY_TARGET` - 默认遥测目标：LOCAL
- `DEFAULT_OTLP_ENDPOINT` - 默认 OTLP 端点：http://localhost:4317

## 集成组件

### OpenTelemetry SDK
使用 OpenTelemetry NodeSDK：
- 跨平台遥测收集
- 多种导出器支持
- 标准化指标和追踪

### ClearcutLogger
Google 内部日志记录器：
- 专门用于 Google 服务集成
- 结构化日志记录
- 安全的数据传输

### 文件导出器
本地文件记录支持：
- FileSpanExporter
- FileLogExporter
- FileMetricExporter