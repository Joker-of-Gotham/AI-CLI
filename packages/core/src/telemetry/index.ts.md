# Telemetry Index

This module serves as the main entry point for the telemetry system, exporting all necessary types, constants, and functions for telemetry collection and reporting.

## Enumerations

### TelemetryTarget
```ts
export enum TelemetryTarget {
  GCP = 'gcp',
  LOCAL = 'local',
}
```
Specifies where telemetry data should be sent:
- `GCP`: Google Cloud Platform
- `LOCAL`: Local storage/debugging

## Constants

### Default Values
```ts
const DEFAULT_TELEMETRY_TARGET = TelemetryTarget.LOCAL;
const DEFAULT_OTLP_ENDPOINT = 'http://localhost:4317';
```
Default configuration values for telemetry:
- Target: Local storage
- OTLP endpoint: Local collector at port 4317

## Exports

### SDK Functions
Functions for managing the telemetry SDK lifecycle:
- `initializeTelemetry`: Initialize the telemetry system
- `shutdownTelemetry`: Shut down the telemetry system
- `isTelemetrySdkInitialized`: Check if telemetry is initialized

### Logging Functions
Functions for logging specific events:
- `logCliConfiguration`: Log CLI configuration changes
- `logUserPrompt`: Log user prompts
- `logToolCall`: Log tool invocations
- `logApiRequest`: Log API requests
- `logApiError`: Log API errors
- `logApiResponse`: Log API responses
- `logFlashFallback`: Log flash model fallback events
- `logSlashCommand`: Log slash command executions
- `logConversationFinishedEvent`: Log conversation completion
- `logKittySequenceOverflow`: Log kitty sequence overflow events
- `logChatCompression`: Log chat history compression events

### Event Types
Event classes for different telemetry events:
- `SlashCommandStatus`: Status of slash commands
- `EndSessionEvent`: Session termination events
- `UserPromptEvent`: User prompt events
- `ApiRequestEvent`: API request events
- `ApiErrorEvent`: API error events
- `ApiResponseEvent`: API response events
- `FlashFallbackEvent`: Model fallback events
- `StartSessionEvent`: Session start events
- `ToolCallEvent`: Tool call events
- `ConversationFinishedEvent`: Conversation completion events
- `KittySequenceOverflowEvent`: Kitty sequence overflow events

### Event Creation Functions
- `makeSlashCommandEvent`: Create a slash command event
- `makeChatCompressionEvent`: Create a chat compression event

### Type Definitions
- `SlashCommandEvent`: Type for slash command events
- `ChatCompressionEvent`: Type for chat compression events
- `TelemetryEvent`: Base type for all telemetry events

### OpenTelemetry Exports
Re-exports from OpenTelemetry libraries:
- `SpanStatusCode`: Span status codes
- `ValueType`: Value types
- `SemanticAttributes`: Semantic attribute definitions

### UI Telemetry
All exports from the UI telemetry module.