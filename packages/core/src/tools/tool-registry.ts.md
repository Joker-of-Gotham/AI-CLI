# Tool Registry

This module manages the registration, discovery, and execution of tools in the Gemini CLI application, supporting both built-in tools and dynamically discovered tools from external sources.

## Core Classes

### DiscoveredToolInvocation
Implements ToolInvocation for tools discovered via command execution:
- Executes tools by spawning subprocesses with the configured tool call command
- Passes parameters via stdin as JSON
- Captures stdout, stderr, exit codes, and signals
- Returns comprehensive error information when tool execution fails
- Handles process lifecycle management and cleanup

### DiscoveredTool
Extends BaseDeclarativeTool for tools discovered via command execution:
- Automatically generates detailed descriptions including discovery and execution commands
- Registers discovered tools with the Kind.Other category
- Creates DiscoveredToolInvocation instances for execution

### ToolRegistry
Main class for managing all tools in the application:

#### Tool Management
- `registerTool()`: Registers a tool definition, handling duplicates and overwrites
- `getTool()`: Retrieves a specific tool by name
- `getAllTools()`: Returns all registered tools
- `getAllToolNames()`: Returns names of all registered tools
- `getToolsByServer()`: Returns tools registered from a specific MCP server

#### Tool Discovery
- `discoverAllTools()`: Discovers tools from both command line and MCP servers
- `discoverMcpTools()`: Discovers tools only from MCP servers
- `discoverToolsForServer()`: Discovers tools for a single MCP server
- `discoverAndRegisterToolsFromCommand()`: Internal method for command-based tool discovery
- `removeDiscoveredTools()`: Removes previously discovered tools
- `removeMcpToolsByServer()`: Removes all tools from a specific MCP server

#### Schema Management
- `getFunctionDeclarations()`: Retrieves all tool schemas as FunctionDeclaration array
- `getFunctionDeclarationsFiltered()`: Retrieves filtered tool schemas by name

#### MCP Integration
- Integrates with McpClientManager for MCP server communication
- Supports dynamic tool discovery from Model Calling Protocol servers
- Manages tool lifecycle for MCP servers including restarts

## Key Features

### Dynamic Tool Discovery
- Supports discovery of tools via external commands
- Parses JSON output from discovery commands
- Handles multiple tool declaration formats
- Enforces size limits on discovery command output
- Provides detailed error reporting for failed discoveries

### MCP Server Integration
- Manages connections to multiple MCP servers
- Supports dynamic tool registration from MCP servers
- Handles server restarts and re-discovery
- Provides server-specific tool filtering

### Process Management
- Safely executes external tool commands as subprocesses
- Implements proper resource cleanup and signal handling
- Captures comprehensive execution metadata
- Handles process errors, exit codes, and signals

### Error Handling
- Comprehensive error reporting for tool execution failures
- Size limit enforcement for tool output
- Graceful handling of malformed discovery output
- Detailed error information in tool results

## Dependencies
- Node.js child_process for subprocess execution
- shell-quote for command parsing
- MCP client modules for server communication
- Safe JSON stringification utilities
- Configuration management