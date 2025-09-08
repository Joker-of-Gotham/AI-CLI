# Telemetry Loggers

This module provides functions for logging various events in the Gemini CLI application using OpenTelemetry and Clearcut logging systems.

## Helper Functions

### shouldLogUserPrompts
```ts
const shouldLogUserPrompts = (config: Config): boolean
```
Determines whether user prompts should be logged based on telemetry configuration.

### getCommonAttributes
```ts
function getCommonAttributes(config: Config): LogAttributes
```
Returns common attributes for all log records, including session ID and user email (if available).

## Event Logging Functions

### logCliConfiguration
```ts
export function logCliConfiguration(config: Config, event: StartSessionEvent): void
```
Logs CLI configuration events with detailed configuration information including model settings, sandbox status, core tools, approval mode, and MCP server configurations.

### logUserPrompt
```ts
export function logUserPrompt(config: Config, event: UserPromptEvent): void
```
Logs user prompt events, conditionally including the actual prompt text based on configuration settings.

### logToolCall
```ts
export function logToolCall(config: Config, event: ToolCallEvent): void
```
Logs tool call events with detailed information about tool execution, including success status, duration, and error details. Also records tool call metrics.

### logFileOperation
```ts
export function logFileOperation(config: Config, event: FileOperationEvent): void
```
Logs file operation events with information about file operations performed by tools, including file metadata. Records file operation metrics.

### logApiRequest
```ts
export function logApiRequest(config: Config, event: ApiRequestEvent): void
```
Logs API request events with information about requests to AI models.

### logFlashFallback
```ts
export function logFlashFallback(config: Config, event: FlashFallbackEvent): void
```
Logs flash model fallback events when switching to a different model due to issues.

### logApiError
```ts
export function logApiError(config: Config, event: ApiErrorEvent): void
```
Logs API error events with detailed error information including status codes and error types. Records API error metrics.

### logApiResponse
```ts
export function logApiResponse(config: Config, event: ApiResponseEvent): void
```
Logs API response events with response details and status information. Records API response metrics and token usage metrics for different token types (input, output, cache, thoughts, tool).

### logLoopDetected
```ts
export function logLoopDetected(config: Config, event: LoopDetectedEvent): void
```
Logs loop detection events when potential infinite loops are detected in the conversation.

### logNextSpeakerCheck
```ts
export function logNextSpeakerCheck(config: Config, event: NextSpeakerCheckEvent): void
```
Logs next speaker check events during conversation flow management.

### logSlashCommand
```ts
export function logSlashCommand(config: Config, event: SlashCommandEvent): void
```
Logs slash command execution events.

### logIdeConnection
```ts
export function logIdeConnection(config: Config, event: IdeConnectionEvent): void
```
Logs IDE connection events with connection type information.

### logConversationFinishedEvent
```ts
export function logConversationFinishedEvent(config: Config, event: ConversationFinishedEvent): void
```
Logs conversation completion events.

### logChatCompression
```ts
export function logChatCompression(config: Config, event: ChatCompressionEvent): void
```
Logs chat history compression events, including the number of tokens saved. Records chat compression metrics.

### logKittySequenceOverflow
```ts
export function logKittySequenceOverflow(config: Config, event: KittySequenceOverflowEvent): void
```
Logs kitty sequence buffer overflow events when terminal sequences exceed buffer limits.

### logMalformedJsonResponse
```ts
export function logMalformedJsonResponse(config: Config, event: MalformedJsonResponseEvent): void
```
Logs malformed JSON response events when API responses cannot be parsed.

### logInvalidChunk
```ts
export function logInvalidChunk(config: Config, event: InvalidChunkEvent): void
```
Logs invalid chunk events when receiving malformed data from streaming responses. Records invalid chunk metrics.

### logContentRetry
```ts
export function logContentRetry(config: Config, event: ContentRetryEvent): void
```
Logs content retry events when attempting to recover from API errors. Records content retry metrics.

### logContentRetryFailure
```ts
export function logContentRetryFailure(config: Config, event: ContentRetryFailureEvent): void
```
Logs content retry failure events when all retry attempts have been exhausted. Records content retry failure metrics.

## Integration

The module integrates with:
- OpenTelemetry logging API for structured event logging
- Clearcut logger for Google-specific event logging
- UI telemetry service for frontend event tracking
- Metrics recording functions for quantitative analysis
- User account management for user identification
- Safe JSON stringification for serializing complex objects