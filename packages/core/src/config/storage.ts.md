# Storage Management

This module provides storage management functionality for the Gemini CLI application, handling file paths and directories for various types of data including configuration, history, and temporary files.

## Constants

### Directory and File Names
```ts
export const GEMINI_DIR = '.gemini';
export const GOOGLE_ACCOUNTS_FILENAME = 'google_accounts.json';
export const OAUTH_FILE = 'oauth_creds.json';
const TMP_DIR_NAME = 'tmp';
```
Standard directory and file names used throughout the application.

## Storage Class

The main class for managing storage paths and directories.

### Static Methods

#### Global Directory Paths
- `getGlobalGeminiDir()`: Returns the global .gemini directory path in the user's home directory
- `getMcpOAuthTokensPath()`: Returns the path for MCP OAuth tokens
- `getGlobalSettingsPath()`: Returns the path for global settings
- `getInstallationIdPath()`: Returns the path for the installation ID file
- `getGoogleAccountsPath()`: Returns the path for Google accounts file
- `getUserCommandsDir()`: Returns the path for user commands directory
- `getGlobalMemoryFilePath()`: Returns the path for global memory file
- `getGlobalTempDir()`: Returns the path for global temporary directory
- `getOAuthCredsPath()`: Returns the path for OAuth credentials

### Instance Methods

#### Project-Specific Paths
- `getGeminiDir()`: Returns the project-specific .gemini directory path
- `getProjectTempDir()`: Returns a hashed temporary directory for the project
- `ensureProjectTempDirExists()`: Creates the project temporary directory if it doesn't exist
- `getProjectRoot()`: Returns the project root directory
- `getHistoryDir()`: Returns the history directory with a hash-based subdirectory
- `getWorkspaceSettingsPath()`: Returns the path for workspace settings
- `getProjectCommandsDir()`: Returns the path for project commands
- `getProjectTempCheckpointsDir()`: Returns the path for project temporary checkpoints
- `getExtensionsDir()`: Returns the path for extensions directory
- `getExtensionsConfigPath()`: Returns the path for extensions configuration
- `getHistoryFilePath()`: Returns the path for shell history file

### Private Methods
- `getFilePathHash(filePath: string)`: Creates a SHA-256 hash of a file path for use in directory names

The Storage class uses a combination of global and project-specific directories to organize different types of data, with hashing used to create unique directories for each project.