# Telemetry SDK

此模块处理 Gemini CLI 应用程序中 OpenTelemetry SDK 的初始化和管理，提供分布式跟踪、日志记录和指标收集功能。

## 全局变量

```ts
let sdk: NodeSDK | undefined;
let telemetryInitialized = false;
```
跟踪 SDK 实例和初始化状态。

## 函数

### isTelemetrySdkInitialized
```ts
export function isTelemetrySdkInitialized(): boolean
```
返回遥测 SDK 是否已初始化。

### parseOtlpEndpoint
```ts
function parseOtlpEndpoint(
  otlpEndpointSetting: string | undefined,
  protocol: 'grpc' | 'http',
): string | undefined
```
解析和验证 OTLP 端点 URL，处理不同的协议（gRPC vs HTTP）并清理环境变量中可能的引号字符。

### initializeTelemetry
```ts
export function initializeTelemetry(config: Config): void
```
初始化 OpenTelemetry SDK，具有以下功能：
- 包含服务名称、版本和会话 ID 的资源属性
- 基于设置的可配置导出器：
  - 提供端点时的 OTLP gRPC 或 HTTP 导出器
  - 指定遥测输出文件时的文件导出器
  - 作为后备的控制台导出器
- 使用批处理跨度处理器的跨度处理
- 使用批处理日志记录处理器的日志处理
- 带有周期性导出的指标收集
- HTTP 检测
- 优雅关闭的信号处理程序（SIGTERM、SIGINT）
- 指标初始化

如果遥测已在配置中禁用或已初始化，该函数是幂等的，将提前返回。

### shutdownTelemetry
```ts
export async function shutdownTelemetry(config: Config): Promise<void>
```
优雅地关闭遥测 SDK：
- 关闭活动的 Clearcut 记录器
- 关闭 OpenTelemetry SDK
- 处理关闭期间的错误
- 重置初始化状态

## 依赖项

该模块与几个 OpenTelemetry 组件集成：
- `@opentelemetry/sdk-node` 用于 Node.js SDK
- `@opentelemetry/exporter-trace-otlp-grpc` 和 `@opentelemetry/exporter-trace-otlp-http` 用于跟踪导出器
- `@opentelemetry/exporter-logs-otlp-grpc` 和 `@opentelemetry/exporter-logs-otlp-http` 用于日志导出器
- `@opentelemetry/exporter-metrics-otlp-grpc` 和 `@opentelemetry/exporter-metrics-otlp-http` 用于指标导出器
- `@opentelemetry/instrumentation-http` 用于 HTTP 检测
- 用于本地遥测存储的自定义文件导出器
- 用于 Google 特定日志记录的 Clearcut 记录器

## 调试

该模块在 INFO 级别设置诊断日志记录，可以在故障排除时更改为 DEBUG。