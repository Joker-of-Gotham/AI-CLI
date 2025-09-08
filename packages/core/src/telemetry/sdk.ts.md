# Telemetry SDK

This module handles the initialization and management of the OpenTelemetry SDK for the Gemini CLI application, providing distributed tracing, logging, and metrics collection capabilities.

## Global Variables

```ts
let sdk: NodeSDK | undefined;
let telemetryInitialized = false;
```
Tracks the SDK instance and initialization status.

## Functions

### isTelemetrySdkInitialized
```ts
export function isTelemetrySdkInitialized(): boolean
```
Returns whether the telemetry SDK has been initialized.

### parseOtlpEndpoint
```ts
function parseOtlpEndpoint(
  otlpEndpointSetting: string | undefined,
  protocol: 'grpc' | 'http',
): string | undefined
```
Parses and validates the OTLP endpoint URL, handling different protocols (gRPC vs HTTP) and cleaning up potential quote characters from environment variables.

### initializeTelemetry
```ts
export function initializeTelemetry(config: Config): void
```
Initializes the OpenTelemetry SDK with the following features:
- Resource attributes including service name, version, and session ID
- Configurable exporters based on settings:
  - OTLP gRPC or HTTP exporters when endpoint is provided
  - File exporters when telemetry outfile is specified
  - Console exporters as fallback
- Span processing with batch span processor
- Log processing with batch log record processor
- Metric collection with periodic exporting
- HTTP instrumentation
- Signal handlers for graceful shutdown (SIGTERM, SIGINT)
- Metrics initialization

The function is idempotent and will return early if telemetry is already initialized or disabled in the config.

### shutdownTelemetry
```ts
export async function shutdownTelemetry(config: Config): Promise<void>
```
Gracefully shuts down the telemetry SDK:
- Shuts down the Clearcut logger if active
- Shuts down the OpenTelemetry SDK
- Handles errors during shutdown
- Resets initialization status

## Dependencies

The module integrates with several OpenTelemetry components:
- `@opentelemetry/sdk-node` for the Node.js SDK
- `@opentelemetry/exporter-trace-otlp-grpc` and `@opentelemetry/exporter-trace-otlp-http` for trace exporters
- `@opentelemetry/exporter-logs-otlp-grpc` and `@opentelemetry/exporter-logs-otlp-http` for log exporters
- `@opentelemetry/exporter-metrics-otlp-grpc` and `@opentelemetry/exporter-metrics-otlp-http` for metric exporters
- `@opentelemetry/instrumentation-http` for HTTP instrumentation
- Custom file exporters for local telemetry storage
- Clearcut logger for Google-specific logging

## Debugging

The module sets up diagnostic logging at INFO level, which can be changed to DEBUG for troubleshooting.