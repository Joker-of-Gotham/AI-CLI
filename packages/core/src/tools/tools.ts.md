# Tools Framework

This module defines the core framework for tools in the Gemini CLI application, providing interfaces and base classes for creating, validating, and executing tools.

## Core Interfaces

### ToolInvocation
Represents a validated and ready-to-execute tool call with the following methods:
- `getDescription()`: Returns a markdown description of the tool operation
- `toolLocations()`: Returns file system paths the tool will affect
- `shouldConfirmExecute()`: Determines if user confirmation is needed before execution
- `execute()`: Executes the tool with validated parameters

### ToolBuilder
Interface for a tool builder that validates parameters and creates invocations:
- `name`: Internal tool name for API calls
- `displayName`: User-friendly display name
- `description`: Description of what the tool does
- `kind`: Tool category for permissions
- `schema`: Function declaration schema
- `isOutputMarkdown`: Whether output should be rendered as markdown
- `canUpdateOutput`: Whether the tool supports live streaming output
- `build()`: Validates parameters and builds a ready-to-execute invocation

### ToolResult
Interface representing the result of a tool execution:
- `llmContent`: Content for LLM history
- `returnDisplay`: Markdown string for user display
- `error`: Optional error information if the tool call failed

## Base Classes

### BaseToolInvocation
A convenience base class implementing the ToolInvocation interface with default implementations for optional methods.

### DeclarativeTool
Abstract base class for tools that separates validation from execution:
- Provides a `buildAndExecute()` convenience method
- Includes error handling with `validateBuildAndExecute()`
- Uses a `silentBuild()` method that never throws

### BaseDeclarativeTool
Extends DeclarativeTool with built-in parameter validation using SchemaValidator:
- Implements `build()` with validation
- Provides `validateToolParams()` for JSON schema validation
- Includes `validateToolParamValues()` for custom validation
- Requires implementation of `createInvocation()` for creating the actual invocation

## Type Definitions

### ToolResultDisplay
Union type for tool result display: string or FileDiff

### FileDiff
Interface for file difference information:
- `fileDiff`: The diff content
- `fileName`: Name of the file
- `originalContent`: Original file content
- `newContent`: New file content
- `diffStat`: Optional statistics about the diff

### DiffStat
Interface for diff statistics:
- Lines and characters added/removed by model and user

### ToolCallConfirmationDetails
Union type for different confirmation types:
- `ToolEditConfirmationDetails`: For file edits
- `ToolExecuteConfirmationDetails`: For command execution
- `ToolMcpConfirmationDetails`: For MCP tool calls
- `ToolInfoConfirmationDetails`: For informational prompts

### ToolConfirmationPayload
Payload for tool confirmation, used to override content in modifiable tools.

### ToolLocation
Represents a file system location affected by a tool:
- `path`: Absolute file path
- `line`: Optional line number

## Enumerations

### ToolConfirmationOutcome
Possible outcomes for tool confirmation:
- `ProceedOnce`: Execute this instance only
- `ProceedAlways`: Always allow this tool
- `ProceedAlwaysServer`: Always allow this MCP server
- `ProceedAlwaysTool`: Always allow this specific tool
- `ModifyWithEditor`: Allow user to modify content
- `Cancel`: Cancel the tool execution

### Kind
Tool categories for permissions:
- `Read`, `Edit`, `Delete`, `Move`, `Search`, `Execute`, `Think`, `Fetch`, `Other`

## Utility Functions

### hasCycleInSchema
Detects cycles in JSON schemas due to `$ref`s, preventing infinite loops during schema validation.

## Type Guards

### isTool
Type guard to check if an object is a Tool.

## Type Aliases

### AnyToolInvocation
Type alias for a tool invocation with unknown parameter and result types.

### AnyDeclarativeTool
Type alias for a declarative tool with unknown parameter and result types.