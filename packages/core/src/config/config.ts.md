# Core Configuration

This module defines the main configuration system for the Gemini CLI application. It includes classes, interfaces, and constants that control various aspects of the CLI's behavior.

## Enumerations

### ApprovalMode
```ts
export enum ApprovalMode {
  DEFAULT = 'default',
  AUTO_EDIT = 'autoEdit',
  YOLO = 'yolo',
}
```
Controls the level of user approval required for tool execution:
- `DEFAULT`: Standard approval mode requiring user confirmation
- `AUTO_EDIT`: Automatic editing mode with reduced prompts
- `YOLO`: "You Only Live Once" mode with minimal restrictions

### AuthProviderType
```ts
export enum AuthProviderType {
  DYNAMIC_DISCOVERY = 'dynamic_discovery',
  GOOGLE_CREDENTIALS = 'google_credentials',
}
```
Specifies the type of authentication provider for MCP servers.

## Interfaces

### AccessibilitySettings
Configuration for accessibility features:
- `disableLoadingPhrases`: Whether to disable loading phrases
- `screenReader`: Whether screen reader mode is enabled

### BugCommandSettings
Configuration for bug reporting:
- `urlTemplate`: Template URL for bug reports

### ChatCompressionSettings
Configuration for chat history compression:
- `contextPercentageThreshold`: Threshold for triggering compression

### SummarizeToolOutputSettings
Configuration for tool output summarization:
- `tokenBudget`: Maximum tokens to use for summarization

### TelemetrySettings
Configuration for telemetry collection:
- `enabled`: Whether telemetry is enabled
- `target`: Target for telemetry data
- `otlpEndpoint`: OTLP endpoint URL
- `otlpProtocol`: Protocol for OTLP (grpc or http)
- `logPrompts`: Whether to log prompts
- `outfile`: File to write telemetry logs to

### SandboxConfig
Configuration for sandboxed execution:
- `command`: Sandbox command (docker, podman, sandbox-exec)
- `image`: Container image to use

### FileFilteringOptions
Options for file filtering:
- `respectGitIgnore`: Whether to respect .gitignore files
- `respectGeminiIgnore`: Whether to respect .geminiignore files

## Classes

### MCPServerConfig
Configuration for Model Calling Protocol (MCP) servers, supporting multiple transport methods:
- stdio transport (command, args, env, cwd)
- SSE transport (url)
- HTTP transport (httpUrl, headers)
- WebSocket transport (tcp)
- Common settings (timeout, trust, description, etc.)

### Config
Main configuration class that manages all CLI settings. Key responsibilities include:
- Managing tool and prompt registries
- Handling authentication and model selection
- Configuring file filtering and discovery
- Managing telemetry settings
- Controlling sandboxing and security features
- Handling IDE integration
- Managing extensions and MCP servers

The Config class is initialized with `ConfigParameters` and must be explicitly initialized with `initialize()` before use.

## Constants

### File Filtering Defaults
```ts
export const DEFAULT_MEMORY_FILE_FILTERING_OPTIONS: FileFilteringOptions
export const DEFAULT_FILE_FILTERING_OPTIONS: FileFilteringOptions
```
Default filtering options for memory files and regular files.

### Truncation Defaults
```ts
export const DEFAULT_TRUNCATE_TOOL_OUTPUT_THRESHOLD = 4_000_000;
export const DEFAULT_TRUNCATE_TOOL_OUTPUT_LINES = 1000;
```
Default thresholds for truncating tool output.

## Type Definitions

### FlashFallbackHandler
Function type for handling model fallback scenarios.

### GeminiCLIExtension
Interface for CLI extensions with name, version, activation status, and path.

## Re-exports

The module re-exports:
- `MCPOAuthConfig` type from mcp/oauth-provider
- `AnyToolInvocation` type from tools/tools
- `DEFAULT_GEMINI_FLASH_MODEL` from models