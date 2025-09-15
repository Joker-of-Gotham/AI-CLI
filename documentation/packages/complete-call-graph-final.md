```mermaid
classDiagram
direction TD

%%
%% Namespace: a2a-server/src/agent/executor.ts
%%
namespace a2a_server_src_agent_executor_ts {
    class CoderAgentExecutor {
        +Map tasks
        +Set executingTasks
        +TaskStore taskStore
    }
    class TaskWrapper {
        +Task task
        +AgentSettings agentSettings
    }
}

%%
%% Namespace: a2a-server/src/agent/task.ts
%%
namespace a2a_server_src_agent_task_ts {
    class Task {
        +string id
        +string contextId
        +string taskState
        +GeminiClient geminiClient
        +ExecutionEventBus eventBus
        +CoreToolScheduler scheduler
        +Config config
        +Map pendingToolConfirmationDetails
        +TaskState taskState
        +CompletedToolCall[] completedToolCalls
        +boolean skipFinalTrueAfterInlineEdit
        +Map pendingToolCalls
        +Promise toolCompletionPromise
        +Object toolCompletionNotifier
    }
}

%%
%% Namespace: a2a-server/src/config/config.ts
%%
namespace a2a_server_src_config_config_ts {
    class config_ts_utils {
        +loadConfig()
        +mergeMcpServers()
        +setTargetDir()
        +loadEnvironment()
        +findEnvFile()
    }
}

%%
%% Namespace: a2a-server/src/config/settings.ts
%%
namespace a2a_server_src_config_settings_ts {
    class settings_ts_utils {
        +loadSettings()
        +getSettingsPath()
    }
}

%%
%% Namespace: a2a-server/src/http/app.ts
%%
namespace a2a_server_src_http_app_ts {
    class app_ts_utils {
        +createApp()
        +main()
        +updateCoderAgentCardUrl()
    }
}

%%
%% Namespace: a2a-server/src/http/server.ts
%%
namespace a2a_server_src_http_server_ts {
    class server_ts_utils {
        +server()
    }
}

%%
%% Namespace: a2a-server/src/persistence/gcs.ts
%%
namespace a2a_server_src_persistence_gcs_ts {
    class GCSTaskStore {
        +Storage storage
        +string bucketName
        +Promise bucketInitialized
    }
    class NoOpTaskStore {
        +TaskStore realStore
    }
    class InMemoryTaskStore {
        %% This class is intentionally empty
    }
    class TaskStore {
        <<Interface>>
    }
}

%%
%% Namespace: a2a-server/src/utils/logger.ts
%%
namespace a2a_server_src_utils_logger_ts {
    class logger {
        +winston_Logger logger
    }
}

%%
%% Namespace: core/src/config/config.ts
%%
namespace core_src_config_config_ts {
    class Config {
        +string sessionId
        +string model
        +string embeddingModel
        +string targetDir
        +boolean debugMode
        +string[] coreTools
        +string[] allowedTools
        +string[] excludeTools
        +ApprovalMode approvalMode
        +TelemetrySettings telemetrySettings
        +boolean checkpointing
        +string proxy
        +string cwd
        +FileFilteringOptions fileFiltering
        +ToolRegistry toolRegistry
        +PromptRegistry promptRegistry
        +FileDiscoveryService fileDiscoveryService
        +GitService gitService
        +GeminiClient geminiClient
        +ContentGenerator contentGenerator
        +ContentGeneratorConfig contentGeneratorConfig
        +Storage storage
        +FileExclusions fileExclusions
        +boolean initialized
        +boolean inFallbackMode
        +FallbackModelHandler fallbackModelHandler
        +boolean quotaErrorOccurred
        +number maxSessionTurns
        +boolean listExtensions
        +GeminiCLIExtension[] _extensions
        +boolean noBrowser
        +boolean folderTrustFeature
        +boolean folderTrust
        +boolean ideMode
        +boolean experimentalZedIntegration
        +boolean loadMemoryFromIncludeDirectories
        +ChatCompressionSettings chatCompression
        +boolean interactive
        +boolean trustedFolder
        +boolean useRipgrep
        +boolean shouldUseNodePtyShell
        +boolean skipNextSpeakerCheck
        +boolean extensionManagement
        +boolean enablePromptCompletion
        +number truncateToolOutputThreshold
        +number truncateToolOutputLines
        +EventEmitter eventEmitter
        +boolean useSmartEdit
    }
    class config_ts_utils {
        +createToolRegistry()
    }
}

%%
%% Namespace: core/src/config/storage.ts
%%
namespace core_src_config_storage_ts {
    class Storage {
        +string targetDir
        +string GEMINI_DIR
        +string GOOGLE_ACCOUNTS_FILENAME
        +string OAUTH_FILE
        +string TMP_DIR_NAME
    }
}

%%
%% Namespace: core/src/core/geminiChat.md
%%
namespace core_src_core_geminiChat_md {
    class GeminiChat {
        +Promise sendPromise
        +ChatRecordingService chatRecordingService
        +Config config
        +GenerateContentConfig generationConfig
        +Content[] history
    }
    class geminiChat_md_utils {
        +sendMessage()
        +sendMessageStream()
        +makeApiCallAndProcessStream()
        +processStreamResponse()
        +recordHistory()
        +recordThoughtFromContent()
    }
}

%%
%% Namespace: core/src/ide/ide-client.ts
%%
namespace core_src_ide_ide_client_ts {
    class IdeClient {
        +Promise instancePromise
        +Client client
        +IDEConnectionState state
        +DetectedIde currentIde
        +string currentIdeDisplayName
        +object ideProcessInfo
        +Map diffResponses
        +Set statusListeners
        +Set trustChangeListeners
    }
    class ide_client_ts_utils {
        +getInstance()
        +connect()
        +openDiff()
        +closeDiff()
        +disconnect()
        +validateWorkspacePath()
        +getConnectionConfigFromFile()
        +establishHttpConnection()
        +establishStdioConnection()
        +registerClientHandlers()
        +resolveDiffFromCli()
    }
}

%%
%% Namespace: core/src/mcp/token-storage/file-token-storage.ts
%%
namespace core_src_mcp_token_storage_file_token_storage_ts {
    class FileTokenStorage {
        %% This class is intentionally empty
    }
    class BaseTokenStorage {
        %% This class is intentionally empty
    }
    class TokenStorage {
        <<Interface>>
    }
    class file_token_storage_ts_utils {
        +deriveEncryptionKey()
        +encrypt()
        +decrypt()
        +ensureDirectoryExists()
        +loadTokens()
        +saveTokens()
        +getCredentials()
        +setCredentials()
        +deleteCredentials()
        +listServers()
        +getAllCredentials()
        +clearAll()
    }
}

%%
%% Namespace: core/src/mcp/token-storage/hybrid-token-storage.ts
%%
namespace core_src_mcp_token_storage_hybrid_token_storage_ts {
    class HybridTokenStorage {
        +TokenStorage storage
        +TokenStorageType storageType
        +Promise storageInitPromise
        +string serviceName
    }
    class hybrid_token_storage_ts_utils {
        +initializeStorage()
        +getStorage()
        +getCredentials()
        +setCredentials()
        +deleteCredentials()
        +listServers()
        +getAllCredentials()
        +clearAll()
        +getStorageType()
    }
}

%%
%% Namespace: core/src/services/chatRecordingService.md
%%
namespace core_src_services_chatRecordingService_md {
    class ChatRecordingService {
        +ConversationRecord conversation
        +string sessionId
        +string projectHash
        +boolean initialized
    }
    class chatRecordingService_md_utils {
        +initialize()
        +recordMessage()
        +recordThought()
        +recordMessageTokens()
        +recordToolCalls()
        +deleteSession()
        +writeConversationToFile()
        +readConversationFromFile()
        +getChatRecordingDir()
        +getChatRecordingPath()
    }
}

%%
%% Namespace: core/src/services/fileSystemService.md
%%
namespace core_src_services_fileSystemService_md {
    class FileSystemService {
        <<Interface>>
        +readTextFile()
        +writeTextFile()
    }
    class StandardFileSystemService {
        %% This class is intentionally empty
    }
    class fileSystemService_md_utils {
        +readTextFile()
        +writeTextFile()
    }
}

%%
%% Namespace: core/src/services/shellExecutionService.md
%%
namespace core_src_services_shellExecutionService_md {
    class ShellExecutionService {
        %% This class is intentionally empty
    }
    class shellExecutionService_md_utils {
        +execute()
        +executeWithPty()
        +childProcessFallback()
    }
}

%%
%% Namespace: core/src/telemetry/sdk.ts
%%
namespace core_src_telemetry_sdk_ts {
    class sdk {
        +NodeSDK sdk
        +boolean telemetryInitialized
    }
    class sdk_ts_utils {
        +isTelemetrySdkInitialized()
        +parseOtlpEndpoint()
        +initializeTelemetry()
        +shutdownTelemetry()
    }
}

%%
%% Namespace: core/src/tools/tools.ts
%%
namespace core_src_tools_tools_ts {
    class ToolInvocation {
        +object params
        +string description
        +string[] locations
        +boolean shouldConfirm
        +ToolResult result
    }
    class ToolBuilder {
        +string name
        +string displayName
        +string description
        +Kind kind
        +object schema
        +boolean isOutputMarkdown
        +boolean canUpdateOutput
        +ToolInvocation invocation
    }
    class ToolResult {
        +string llmContent
        +string returnDisplay
        +string error
    }
    class BaseToolInvocation {
        +object params
        +string description
        +string[] locations
        +boolean shouldConfirm
    }
    class DeclarativeTool {
        +object params
        +ToolInvocation invocation
        +ToolResult result
    }
    class BaseDeclarativeTool {
        +object params
        +ToolInvocation invocation
        +SchemaValidator validator
    }
    class tools_ts_utils {
        +build()
        +buildAndExecute()
        +validateBuildAndExecute()
    }
}

%%
%% Namespace: cli/src/ui/contexts
%%
namespace cli_src_ui_contexts {
    class AppContext {
        +AppState state
        +string version
        +string[] startupWarnings
    }
    class ConfigContext {
        +Config config
    }
    class KeypressContext {
        +KeypressContextValue value
    }
    class OverflowContext {
        +OverflowState state
        +OverflowActions actions
    }
    class SessionContext {
        %% This class is intentionally empty
    }
    class SessionStatsProvider {
        %% This class is intentionally empty
    }
    class SettingsContext {
        +LoadedSettings settings
    }
    class StreamingContext {
        +StreamingState state
    }
    class UIActionsContext {
        +UIActions actions
    }
    class UIStateContext {
        +UIState state
    }
    class VimModeContext {
        +VimModeContextType value
    }
    class contexts_utils {
        +useAppContext()
        +useConfig()
        +useKeypressContext()
        +KeypressProvider()
        +parseKittyPrefix()
        +broadcast()
        +handleKeypress()
        +handleRawKeypress()
        +useOverflowState()
        +useOverflowActions()
        +OverflowProvider()
        +addOverflowingId()
        +removeOverflowingId()
        +SessionStatsProvider()
        +useSessionStats()
        +useEffect()
        +handleUpdate()
        +startNewPrompt()
        +getPromptCount()
        +useSettings()
        +useStreamingContext()
        +useUIActions()
        +useUIState()
        +VimModeProvider()
        +useVimMode()
        +toggleVimEnabled()
    }
}

%%
%% Namespace: cli/src/utils
%%
namespace cli_src_utils {
    class utils_utils {
        +readStdin()
        +checkExhaustive()
        +registerCleanup()
        +runExitCleanup()
        +cleanupCheckpoints()
        +customDeepMerge()
        +mergeRecursively()
        +getScopeItems()
        +getScopeMessageForSetting()
        +resolveEnvVarsInObject()
        +resolveEnvVarsInObjectInternal()
        +resolveEnvVarsInString()
        +getErrorMessage()
        +appEvents()
        +isGitHubRepository()
        +getGitRepoRoot()
        +getLatestGitHubRelease()
        +getGitHubRepoInfo()
        +handleAutoUpdate()
        +setUpdateHandler()
        +getInstallationInfo()
        +getPackageJson()
        +resolvePath()
        +start_sandbox()
        +ensureSandboxImageIsPresent()
        +imageExists()
        +pullImage()
        +getFlattenedSchema()
        +getSettingsByCategory()
        +getSettingDefinition()
        +requiresRestart()
        +getDefaultValue()
        +getEffectiveValue()
        +getSettingsByType()
        +isValidSettingKey()
        +getSettingCategory()
        +shouldShowInDialog()
        +getDialogSettingsByCategory()
        +getDialogSettingsByType()
        +getDialogSettingKeys()
        +getSettingValue()
        +isSettingModified()
        +settingExistsInScope()
        +setPendingSettingValue()
        +setPendingSettingValueAny()
        +saveModifiedSettings()
        +getDisplayValue()
        +isDefaultValue()
        +isValueInherited()
        +getEffectiveDisplayValue()
        +spawnWrapper()
        +updateEventEmitter()
        +getCliVersion()
    }
}

%%
%% Namespace: cli/src/zed-integration
%%
namespace cli_src_zed_integration {
    class AgentSideConnection {
        +Connection connection
        +function toAgent
        +WritableStream input
        +ReadableStream output
        +function handler
    }
    class Connection {
        +Map pendingResponses
        +number nextRequestId
        +MethodHandler handler
        +WritableStream peerInput
        +Promise writeQueue
        +TextEncoder textEncoder
    }
    class RequestError {
        +number code
        +string message
        +object data
    }
    class AcpFileSystemService {
        +acp_Client client
        +string sessionId
        +acp_FileSystemCapability capabilities
        +FileSystemService fallback
    }
    class schema {
        +object AGENT_METHODS
        +object CLIENT_METHODS
    }
    class GeminiAgent {
        +Map sessions
        +acp_ClientCapabilities clientCapabilities
        +Config config
    }
    class Session {
        +string id
        +GeminiChat chat
        +Config config
        +acp_Client client
        +AbortController pendingPrompt
    }
    class zed_integration_utils {
        +runZedIntegration()
        +runTool()
        +resolvePrompt()
    }
}

%%
%% Relationships
%%

%% a2a-server Relationships
CoderAgentExecutor "1" *-- "*" TaskWrapper : creates
CoderAgentExecutor "1" o-- "*" Task : manages
TaskWrapper -- Task : wraps
CoderAgentExecutor --> TaskStore : uses
CoderAgentExecutor --> Config : loads
CoderAgentExecutor --> AgentSettings : uses
CoderAgentExecutor ..> ExecutionEventBus : publishes
CoderAgentExecutor --> RequestContext : processes
Task --> GeminiClient : uses
Task ..> ExecutionEventBus : publishes
Task --> CoreToolScheduler : uses
Task --> Config : uses
Task --> RequestContext : processes
Task --> ServerGeminiStreamEvent : handles
Task ..> ToolCallRequestInfo : schedules
Task o-- CompletedToolCall : manages
config_ts_utils ..> Config : creates
config_ts_utils --> FileDiscoveryService : uses
config_ts_utils ..> config_ts_utils : calls loadServerHierarchicalMemory
config_ts_utils ..> config_ts_utils : calls mergeMcpServers
config_ts_utils ..> config_ts_utils : calls setTargetDir
config_ts_utils ..> config_ts_utils : calls loadEnvironment
config_ts_utils --> Settings : uses
config_ts_utils --> Extension : uses
config_ts_utils --> AgentSettings : uses
config_ts_utils ..> config_ts_utils : calls findEnvFile
config_ts_utils --> fs : uses
app_ts_utils ..> express : creates
app_ts_utils ..> GCSTaskStore : creates
app_ts_utils ..> NoOpTaskStore : creates
app_ts_utils ..> InMemoryTaskStore : creates
app_ts_utils ..> CoderAgentExecutor : creates
app_ts_utils ..> DefaultRequestHandler : creates
app_ts_utils ..> A2AExpressApp : creates
app_ts_utils --> requestStorage : uses
app_ts_utils ..> app_ts_utils : calls createApp
app_ts_utils ..> app_ts_utils : calls updateCoderAgentCardUrl
app_ts_utils --> logger : uses
server_ts_utils ..> app_ts_utils : calls main
server_ts_utils --> logger : uses
server_ts_utils --> path : uses
server_ts_utils --> url : uses
GCSTaskStore --> Storage : uses
GCSTaskStore --> gzipSync : uses
GCSTaskStore --> gunzipSync : uses
GCSTaskStore --> tar : uses
GCSTaskStore --> fse : uses
GCSTaskStore --> fsPromises : uses
GCSTaskStore --> createReadStream : uses
GCSTaskStore --> tmpdir : uses
GCSTaskStore --> join : uses
GCSTaskStore --> logger : uses
GCSTaskStore --> config_ts_utils : uses setTargetDir
GCSTaskStore --> getPersistedState : uses
GCSTaskStore --> uuidv4 : uses
TaskStore <|.. GCSTaskStore
TaskStore <|.. NoOpTaskStore
NoOpTaskStore --> logger : uses
logger --> winston : uses
settings_ts_utils ..> Settings : creates
settings_ts_utils --> fs : uses
settings_ts_utils --> path : uses
settings_ts_utils --> logger : uses
settings_ts_utils --> DEFAULT_SETTINGS : uses
settings_ts_utils ..> settings_ts_utils : calls mergeSettings
settings_ts_utils --> os : uses

%% core Relationships
Config ..> StandardFileSystemService : creates
Config ..> WorkspaceContext : creates
Config ..> Storage : creates
Config ..> FileExclusions : creates
Config ..> chatRecordingService_md_utils : calls initialize
Config ..> config_ts_utils : calls createToolRegistry
Config ..> config_ts_utils : calls refreshAuth
Config ..> config_ts_utils : calls getFileService
Config ..> config_ts_utils : calls getGitService
Config ..> ide_client_ts_utils : calls IdeClient_getInstance
Config ..> config_ts_utils : calls logIdeConnection
Config ..> config_ts_utils : calls logCliConfiguration
Config ..> config_ts_utils : calls geminiClient_initialize
Config ..> config_ts_utils : calls setGlobalDispatcher
Config ..> config_ts_utils : calls setGeminiMdFilename
Config ..> sdk_ts_utils : calls initializeTelemetry
config_ts_utils ..> ToolRegistry : creates
config_ts_utils ..> tools_ts_utils : calls registerTool
config_ts_utils ..> tools_ts_utils : calls discoverAllTools
config_ts_utils ..> utils_utils : calls canUseRipgrep
config_ts_utils ..> utils_utils : calls logRipgrepFallback
Storage ..> os_homedir : calls
Storage ..> path_join : calls
Storage ..> crypto_createHash : calls
Storage ..> fs_mkdirSync : calls
Storage ..> getGlobalGeminiDir : calls
Storage ..> getProjectRoot : calls
Storage ..> getFilePathHash : calls
GeminiChat ..> ChatRecordingService : creates
GeminiChat ..> geminiChat_md_utils : calls
IdeClient ..> ide_client_ts_utils : calls
BaseTokenStorage <|-- FileTokenStorage
TokenStorage <|.. FileTokenStorage
FileTokenStorage --> OAuthCredentials : uses
FileTokenStorage --> crypto : uses
FileTokenStorage --> os : uses
FileTokenStorage --> path : uses
FileTokenStorage --> fs : uses
FileTokenStorage ..> file_token_storage_ts_utils : calls getConfigDir
file_token_storage_ts_utils ..> file_token_storage_ts_utils : calls
TokenStorage <|.. HybridTokenStorage
HybridTokenStorage --> OAuthCredentials : uses
HybridTokenStorage --> TokenStorageType : uses
HybridTokenStorage --> KeychainTokenStorage : uses
HybridTokenStorage --> FileTokenStorage : uses
HybridTokenStorage --> process : uses
hybrid_token_storage_ts_utils ..> hybrid_token_storage_ts_utils : calls
ChatRecordingService ..> chatRecordingService_md_utils : calls
chatRecordingService_md_utils ..> chatRecordingService_md_utils : calls
StandardFileSystemService ..|> FileSystemService
fileSystemService_md_utils ..> fileSystemService_md_utils : calls
ShellExecutionService ..> shellExecutionService_md_utils : calls
shellExecutionService_md_utils ..> shellExecutionService_md_utils : calls
sdk ..> sdk_ts_utils : calls
sdk_ts_utils ..> sdk_ts_utils : calls
ToolInvocation ..> tools_ts_utils : implements
ToolBuilder ..> tools_ts_utils : implements
BaseToolInvocation ..|> ToolInvocation
DeclarativeTool ..> tools_ts_utils : implements
BaseDeclarativeTool <|-- DeclarativeTool
BaseDeclarativeTool ..> tools_ts_utils : implements
tools_ts_utils ..> tools_ts_utils : calls

%% cli Relationships
AppContext ..> contexts_utils : calls createContext
contexts_utils ..> contexts_utils : calls
AgentSideConnection --> Connection : uses
AgentSideConnection --> Agent : uses
Connection --> TextDecoder : uses
Connection --> TextEncoder : uses
Connection --> JSON : uses
Connection --> RequestError : uses
Connection --> z_ZodError : uses
AcpFileSystemService ..|> FileSystemService
AcpFileSystemService --> acp_Client : uses
AcpFileSystemService --> fallback : uses
schema --> z : uses
zed_integration_utils ..> AgentSideConnection : creates
GeminiAgent ..> Session : creates
Session --> AcpFileSystemService : uses
Session ..> zed_integration_utils : calls
utils_utils ..> utils_utils : calls
```