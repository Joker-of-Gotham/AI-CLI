# Telemetry Constants

This module defines constants used for telemetry tracking throughout the Gemini CLI application. These constants are used to identify specific events and metrics for monitoring and analytics purposes.

## Service Name

### SERVICE_NAME
```ts
export const SERVICE_NAME = 'gemini-cli';
```
The identifier for the Gemini CLI service in telemetry systems.

## Event Constants

These constants represent different types of events that can be tracked:

- `EVENT_USER_PROMPT`: User submits a prompt
- `EVENT_TOOL_CALL`: A tool is invoked
- `EVENT_API_REQUEST`: An API request is made
- `EVENT_API_ERROR`: An API error occurs
- `EVENT_API_RESPONSE`: An API response is received
- `EVENT_CLI_CONFIG`: CLI configuration changes
- `EVENT_FLASH_FALLBACK`: Fallback to flash model
- `EVENT_NEXT_SPEAKER_CHECK`: Checking for next speaker in conversation
- `EVENT_SLASH_COMMAND`: A slash command is executed
- `EVENT_IDE_CONNECTION`: IDE connection status changes
- `EVENT_CONVERSATION_FINISHED`: Conversation session ends
- `EVENT_CHAT_COMPRESSION`: Chat history compression occurs
- `EVENT_MALFORMED_JSON_RESPONSE`: Malformed JSON received from API
- `EVENT_INVALID_CHUNK`: Invalid data chunk received
- `EVENT_CONTENT_RETRY`: Content retry attempt
- `EVENT_CONTENT_RETRY_FAILURE`: Content retry attempt fails
- `EVENT_FILE_OPERATION`: File system operation performed

## Metric Constants

These constants represent different types of metrics that can be measured:

- `METRIC_TOOL_CALL_COUNT`: Number of tool calls
- `METRIC_TOOL_CALL_LATENCY`: Latency of tool calls
- `METRIC_API_REQUEST_COUNT`: Number of API requests
- `METRIC_API_REQUEST_LATENCY`: Latency of API requests
- `METRIC_TOKEN_USAGE`: Token usage statistics
- `METRIC_SESSION_COUNT`: Number of sessions
- `METRIC_FILE_OPERATION_COUNT`: Number of file operations
- `METRIC_INVALID_CHUNK_COUNT`: Count of invalid chunks
- `METRIC_CONTENT_RETRY_COUNT`: Count of content retry attempts
- `METRIC_CONTENT_RETRY_FAILURE_COUNT`: Count of content retry failures