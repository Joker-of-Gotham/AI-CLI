# 遥测 SDK (sdk.ts)

遥测 SDK 负责初始化和管理 OpenTelemetry 运行时环境。

## 核心功能

1. **SDK 初始化**：配置和启动 OpenTelemetry SDK
2. **资源管理**：设置遥测数据的资源属性
3. **导出器配置**：配置不同的数据导出方式
4. **生命周期管理**：启动和关闭 SDK

## 核心变量

### sdk
NodeSDK 实例，全局单例：
- 管理整个遥测生命周期
- 配置所有遥测组件

### telemetryInitialized
遥测初始化状态：
- 跟踪 SDK 是否已初始化
- 避免重复初始化

## 核心函数

### initializeTelemetry()
初始化遥测 SDK 的主要函数：
1. 检查是否已启用遥测
2. 配置资源属性（服务名、版本、会话ID等）
3. 解析 OTLP 端点配置
4. 根据配置选择导出器
5. 启动 NodeSDK
6. 初始化指标系统
7. 注册关闭处理程序

### shutdownTelemetry()
关闭遥测 SDK：
1. 关闭 ClearcutLogger
2. 关闭 NodeSDK
3. 重置初始化状态

### isTelemetrySdkInitialized()
检查遥测 SDK 是否已初始化：
- 返回初始化状态
- 用于条件性遥测记录

### parseOtlpEndpoint()
解析 OTLP 端点 URL：
- 处理带引号的端点配置
- 根据协议类型返回适当格式
- 错误处理和日志记录

## 导出器配置

### OTLP 导出器
支持 gRPC 和 HTTP 协议：
- OTLPTraceExporter / OTLPTraceExporterHttp
- OTLPLogExporter / OTLPLogExporterHttp
- OTLPMetricExporter / OTLPMetricExporterHttp

### 文件导出器
本地文件记录：
- FileSpanExporter
- FileLogExporter
- FileMetricExporter

### 控制台导出器
开发调试用：
- ConsoleSpanExporter
- ConsoleLogRecordExporter
- ConsoleMetricExporter

## 资源配置

### SemanticResourceAttributes
标准资源属性：
- SERVICE_NAME - 服务名称
- SERVICE_VERSION - 服务版本

### 自定义属性
- session.id - 会话ID
- user.email - 用户邮箱（如果可用）

## 信号处理

### 进程信号监听
自动注册关闭处理程序：
- SIGTERM - 优雅关闭
- SIGINT - 中断信号（Ctrl+C）

## 依赖组件

### OpenTelemetry 组件
- NodeSDK - 核心 SDK
- HttpInstrumentation - HTTP 请求检测
- BatchSpanProcessor - 批量跨度处理
- BatchLogRecordProcessor - 批量日志处理
- PeriodicExportingMetricReader - 周期性指标导出