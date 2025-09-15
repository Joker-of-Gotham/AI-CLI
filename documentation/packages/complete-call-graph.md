# 完整调用关系图

这个文件包含了所有模块的函数级和变量级调用关系，展示整个应用程序的架构和组件间的关系。

```mermaid
classDiagram
    %% 函数级调用关系 %%
    
    %% a2a-server/src/agent/executor.ts
    CoderAgentExecutor --o TaskWrapper : creates
    CoderAgentExecutor --o Task : manages
    TaskWrapper --| Task : wraps
    CoderAgentExecutor --| TaskStore : uses
    CoderAgentExecutor --| Config : loads
    CoderAgentExecutor --| AgentSettings : uses
    CoderAgentExecutor --| ExecutionEventBus : publishes
    CoderAgentExecutor --| RequestContext : processes
    Task --| GeminiClient : uses
    Task --| ExecutionEventBus : publishes
    
    %% a2a-server/src/agent/task.ts
    Task --| CoreToolScheduler : uses
    Task --| GeminiClient : uses
    Task --| Config : uses
    Task --| ExecutionEventBus : publishes
    Task --| RequestContext : processes
    Task --| ServerGeminiStreamEvent : handles
    Task --| ToolCallRequestInfo : schedules
    Task --| CompletedToolCall : manages
    
    %% a2a-server/src/config/config.ts
    loadConfig --| Config : creates
    loadConfig --| FileDiscoveryService : uses
    loadConfig --| loadServerHierarchicalMemory : calls
    loadConfig --| mergeMcpServers : calls
    loadConfig --| setTargetDir : calls
    loadConfig --| loadEnvironment : calls
    mergeMcpServers --| Settings : uses
    mergeMcpServers --| Extension : uses
    setTargetDir --| AgentSettings : uses
    loadEnvironment --| findEnvFile : calls
    findEnvFile --| fs : uses
    
    %% a2a-server/src/http/app.ts
    createApp --| express : creates
    createApp --| GCSTaskStore : creates
    createApp --| NoOpTaskStore : creates
    createApp --| InMemoryTaskStore : creates
    createApp --| CoderAgentExecutor : creates
    createApp --| DefaultRequestHandler : creates
    createApp --| A2AExpressApp : creates
    createApp --| requestStorage : uses
    main --| createApp : calls
    main --| updateCoderAgentCardUrl : calls
    main --| logger : uses
    
    %% a2a-server/src/http/server.ts
    server --| main : calls
    server --| logger : uses
    server --| path : uses
    server --| url : uses
    
    %% a2a-server/src/persistence/gcs.ts
    GCSTaskStore --| Storage : uses
    GCSTaskStore --| gzipSync : uses
    GCSTaskStore --| gunzipSync : uses
    GCSTaskStore --| tar : uses
    GCSTaskStore --| fse : uses
    GCSTaskStore --| fsPromises : uses
    GCSTaskStore --| createReadStream : uses
    GCSTaskStore --| tmpdir : uses
    GCSTaskStore --| join : uses
    GCSTaskStore --| logger : uses
    GCSTaskStore --| setTargetDir : uses
    GCSTaskStore --| getPersistedState : uses
    GCSTaskStore --| uuidv4 : uses
    GCSTaskStore --| TaskStore : implements
    NoOpTaskStore --| TaskStore : implements
    NoOpTaskStore --| logger : uses
    
    %% a2a-server/src/utils/logger_ts
    logger --| winston : uses
    
    %% a2a-server/src/config/settings.ts
    loadSettings --| Settings : creates
    loadSettings --| fs : uses
    loadSettings --| path : uses
    loadSettings --| logger : uses
    loadSettings --| DEFAULT_SETTINGS : uses
    loadSettings --| mergeSettings : calls
    getSettingsPath --| os : uses
    getSettingsPath --| path : uses
    
    %% core/src/config/config.ts
    Config --| StandardFileSystemService : creates
    Config --| WorkspaceContext : creates
    Config --| Storage : creates
    Config --| FileExclusions : creates
    Config --| initialize : calls
    Config --| createToolRegistry : calls
    Config --| refreshAuth : calls
    Config --| getFileService : calls
    Config --| getGitService : calls
    Config --| IdeClient_getInstance : calls
    Config --| logIdeConnection : calls
    Config --| logCliConfiguration : calls
    Config --| geminiClient_initialize : calls
    Config --| setGlobalDispatcher : calls
    Config --| setGeminiMdFilename : calls
    Config --| initializeTelemetry : calls
    createToolRegistry --| ToolRegistry : creates
    createToolRegistry --| registerTool : calls
    createToolRegistry --| discoverAllTools : calls
    createToolRegistry --| canUseRipgrep : calls
    createToolRegistry --| logRipgrepFallback : calls
    
    %% core/src/config/storage.ts
    Storage --| os_homedir : calls
    Storage --| path_join : calls
    Storage --| crypto_createHash : calls
    Storage --| fs_mkdirSync : calls
    Storage --| getGlobalGeminiDir : calls
    Storage --| getProjectRoot : calls
    Storage --| getFilePathHash : calls
    
    %% core/src/core/geminiChat.md
    GeminiChat --| ChatRecordingService : creates
    GeminiChat --| sendMessage : calls
    GeminiChat --| sendMessageStream : calls
    GeminiChat --| makeApiCallAndProcessStream : calls
    GeminiChat --| processStreamResponse : calls
    GeminiChat --| recordHistory : calls
    GeminiChat --| extractCuratedHistory : calls
    GeminiChat --| isValidResponse : calls
    GeminiChat --| isValidContent : calls
    GeminiChat --| validateHistory : calls
    GeminiChat --| setTools : calls
    GeminiChat --| getHistory : calls
    GeminiChat --| clearHistory : calls
    GeminiChat --| addHistory : calls
    GeminiChat --| setHistory : calls
    GeminiChat --| stripThoughtsFromHistory : calls
    GeminiChat --| getChatRecordingService : calls
    GeminiChat --| recordCompletedToolCalls : calls
    GeminiChat --| recordThoughtFromContent : calls
    sendMessage --| createUserContent : calls
    sendMessage --| getHistory : calls
    sendMessage --| config_getContentGenerator : calls
    sendMessage --| retryWithBackoff : calls
    sendMessage --| handleFallback : calls
    sendMessage --| chatRecordingService_recordMessage : calls
    sendMessageStream --| createUserContent : calls
    sendMessageStream --| getHistory : calls
    sendMessageStream --| makeApiCallAndProcessStream : calls
    makeApiCallAndProcessStream --| config_getContentGenerator : calls
    makeApiCallAndProcessStream --| retryWithBackoff : calls
    makeApiCallAndProcessStream --| handleFallback : calls
    makeApiCallAndProcessStream --| processStreamResponse : calls
    processStreamResponse --| isValidResponse : calls
    processStreamResponse --| chatRecordingService_recordMessage : calls
    processStreamResponse --| recordHistory : calls
    recordHistory --| extractCuratedHistory : calls
    recordHistory --| chatRecordingService_recordToolCalls : calls
    recordThoughtFromContent --| chatRecordingService_recordThought : calls
    
    %% core/src/ide/ide-client.ts
    IdeClient --| getInstance : calls
    IdeClient --| connect : calls
    IdeClient --| openDiff : calls
    IdeClient --| closeDiff : calls
    IdeClient --| disconnect : calls
    IdeClient --| validateWorkspacePath : calls
    IdeClient --| getPortFromEnv : calls
    IdeClient --| getStdioConfigFromEnv : calls
    IdeClient --| getConnectionConfigFromFile : calls
    IdeClient --| establishHttpConnection : calls
    IdeClient --| establishStdioConnection : calls
    IdeClient --| registerClientHandlers : calls
    IdeClient --| setState : calls
    IdeClient --| resolveDiffFromCli : calls
    IdeClient --| addStatusChangeListener : calls
    IdeClient --| removeStatusChangeListener : calls
    IdeClient --| addTrustChangeListener : calls
    IdeClient --| removeTrustChangeListener : calls
    IdeClient --| getIdeProcessInfo : calls
    IdeClient --| detectIde : calls
    IdeClient --| getIdeInfo : calls
    getInstance --| getIdeProcessInfo : calls
    getInstance --| detectIde : calls
    getInstance --| getIdeInfo : calls
    connect --| validateWorkspacePath : calls
    connect --| getConnectionConfigFromFile : calls
    connect --| getPortFromEnv : calls
    connect --| getStdioConfigFromEnv : calls
    connect --| establishHttpConnection : calls
    connect --| establishStdioConnection : calls
    openDiff --| client_callTool : calls
    closeDiff --| client_callTool : calls
    resolveDiffFromCli --| closeDiff : calls
    disconnect --| closeDiff : calls
    validateWorkspacePath --| getRealPath : calls
    validateWorkspacePath --| isSubpath : calls
    getConnectionConfigFromFile --| fs_promises_readFile : calls
    establishHttpConnection --| Client : creates
    establishHttpConnection --| StreamableHTTPClientTransport : creates
    establishHttpConnection --| client_connect : calls
    establishHttpConnection --| registerClientHandlers : calls
    establishStdioConnection --| Client : creates
    establishStdioConnection --| StdioClientTransport : creates
    establishStdioConnection --| client_connect : calls
    establishStdioConnection --| registerClientHandlers : calls
    registerClientHandlers --| client_setNotificationHandler : calls
    registerClientHandlers --| ideContext_setIdeContext : calls
    
    %% core/src/mcp/token-storage/file-token-storage.ts
    FileTokenStorage --| BaseTokenStorage : extends
    FileTokenStorage --| TokenStorage : implements
    FileTokenStorage --| OAuthCredentials : uses
    FileTokenStorage --| crypto : uses
    FileTokenStorage --| os : uses
    FileTokenStorage --| path : uses
    FileTokenStorage --| fs : uses
    FileTokenStorage --| getConfigDir : calls
    deriveEncryptionKey --| os : calls
    deriveEncryptionKey --| crypto : calls
    encrypt --| crypto : calls
    decrypt --| crypto : calls
    ensureDirectoryExists --| path : calls
    ensureDirectoryExists --| fs : calls
    loadTokens --| fs : calls
    loadTokens --| decrypt : calls
    saveTokens --| fs : calls
    saveTokens --| encrypt : calls
    getCredentials --| loadTokens : calls
    getCredentials --| isTokenExpired : calls
    setCredentials --| loadTokens : calls
    setCredentials --| saveTokens : calls
    deleteCredentials --| loadTokens : calls
    deleteCredentials --| saveTokens : calls
    listServers --| loadTokens : calls
    getAllCredentials --| loadTokens : calls
    clearAll --| fs : calls
    
    %% core/src/mcp/token-storage/hybrid-token-storage.ts
    HybridTokenStorage --| TokenStorage : implements
    HybridTokenStorage --| OAuthCredentials : uses
    HybridTokenStorage --| TokenStorageType : uses
    HybridTokenStorage --| KeychainTokenStorage : uses
    HybridTokenStorage --| FileTokenStorage : uses
    HybridTokenStorage --| process : uses
    initializeStorage --| process : calls
    initializeStorage --| KeychainTokenStorage : creates
    initializeStorage --| FileTokenStorage : creates
    getStorage --| initializeStorage : calls
    getCredentials --| getStorage : calls
    setCredentials --| getStorage : calls
    deleteCredentials --| getStorage : calls
    listServers --| getStorage : calls
    getAllCredentials --| getStorage : calls
    clearAll --| getStorage : calls
    getStorageType --| getStorage : calls
    
    %% core/src/services/chatRecordingService.md
    ChatRecordingService --| initialize : calls
    ChatRecordingService --| recordMessage : calls
    ChatRecordingService --| recordThought : calls
    ChatRecordingService --| recordMessageTokens : calls
    ChatRecordingService --| recordToolCalls : calls
    ChatRecordingService --| deleteSession : calls
    ChatRecordingService --| writeConversationToFile : calls
    ChatRecordingService --| readConversationFromFile : calls
    ChatRecordingService --| getChatRecordingDir : calls
    ChatRecordingService --| getChatRecordingPath : calls
    initialize --| readConversationFromFile : calls
    initialize --| getChatRecordingDir : calls
    initialize --| fs_mkdirSync : calls
    recordMessage --| writeConversationToFile : calls
    recordThought --| writeConversationToFile : calls
    recordMessageTokens --| writeConversationToFile : calls
    recordToolCalls --| writeConversationToFile : calls
    deleteSession --| getChatRecordingPath : calls
    deleteSession --| fs_unlinkSync : calls
    writeConversationToFile --| getChatRecordingPath : calls
    writeConversationToFile --| fs_writeFileSync : calls
    readConversationFromFile --| getChatRecordingPath : calls
    readConversationFromFile --| fs_readFileSync : calls
    readConversationFromFile --| fs_existsSync : calls
    
    %% core/src/services/fileSystemService.md
    FileSystemService --| readTextFile : defines
    FileSystemService --| writeTextFile : defines
    StandardFileSystemService --| FileSystemService : implements
    StandardFileSystemService --| readTextFile : implements
    StandardFileSystemService --| writeTextFile : implements
    readTextFile --| fs_readFile : calls
    writeTextFile --| path_dirname : calls
    writeTextFile --| fs_mkdir : calls
    writeTextFile --| fs_writeFile : calls
    
    %% core/src/services/shellExecutionService.md
    ShellExecutionService --| execute : calls
    ShellExecutionService --| executeWithPty : calls
    ShellExecutionService --| childProcessFallback : calls
    execute --| executeWithPty : calls
    execute --| childProcessFallback : calls
    executeWithPty --| spawn : calls
    executeWithPty --| stripAnsi : calls
    executeWithPty --| getCachedEncodingForBuffer : calls
    executeWithPty --| isBinaryData : calls
    childProcessFallback --| spawn : calls
    childProcessFallback --| stripAnsi : calls
    childProcessFallback --| getCachedEncodingForBuffer : calls
    childProcessFallback --| isBinaryData : calls
    
    %% core/src/telemetry/sdk_ts
    sdk --| isTelemetrySdkInitialized : calls
    sdk --| parseOtlpEndpoint : calls
    sdk --| initializeTelemetry : calls
    sdk --| shutdownTelemetry : calls
    initializeTelemetry --| isTelemetrySdkInitialized : calls
    initializeTelemetry --| parseOtlpEndpoint : calls
    initializeTelemetry --| NodeSDK : creates
    initializeTelemetry --| Resource : creates
    initializeTelemetry --| ConsoleSpanExporter : creates
    initializeTelemetry --| ConsoleLogRecordExporter : creates
    initializeTelemetry --| ConsoleMetricExporter : creates
    initializeTelemetry --| FileSpanExporter : creates
    initializeTelemetry --| FileLogExporter : creates
    initializeTelemetry --| FileMetricExporter : creates
    initializeTelemetry --| OTLPTraceExporter : creates
    initializeTelemetry --| OTLPLogExporter : creates
    initializeTelemetry --| OTLPMetricExporter : creates
    initializeTelemetry --| BatchSpanProcessor : creates
    initializeTelemetry --| BatchLogRecordProcessor : creates
    initializeTelemetry --| PeriodicExportingMetricReader : creates
    initializeTelemetry --| HttpInstrumentation : creates
    initializeTelemetry --| process_on : calls
    initializeTelemetry --| initializeMetrics : calls
    shutdownTelemetry --| clearcutLogger_close : calls
    shutdownTelemetry --| sdk_shutdown : calls
    parseOtlpEndpoint --| URL : creates
    
    %% core/src/tools/tools.ts
    ToolInvocation --| getDescription : implements
    ToolInvocation --| toolLocations : implements
    ToolInvocation --| shouldConfirmExecute : implements
    ToolInvocation --| execute : implements
    ToolBuilder --| build : implements
    BaseToolInvocation --| ToolInvocation : implements
    DeclarativeTool --| buildAndExecute : implements
    DeclarativeTool --| validateBuildAndExecute : implements
    DeclarativeTool --| silentBuild : implements
    BaseDeclarativeTool --| DeclarativeTool : extends
    BaseDeclarativeTool --| validateToolParams : implements
    BaseDeclarativeTool --| validateToolParamValues : implements
    BaseDeclarativeTool --| build : implements
    build --| validateToolParams : calls
    build --| validateToolParamValues : calls
    build --| createInvocation : calls
    buildAndExecute --| validateBuildAndExecute : calls
    validateBuildAndExecute --| validateToolParams : calls
    validateBuildAndExecute --| createInvocation : calls
    
    %% cli/src/ui/contexts/AppContext.tsx
    AppContext --| createContext : calls
    useAppContext --| useContext : calls
    
    %% cli/src/ui/contexts/ConfigContext.tsx
    ConfigContext --| createContext : calls
    useConfig --| useContext : calls
    
    %% cli/src/ui/contexts/KeypressContext.tsx
    KeypressContext --| createContext : calls
    useKeypressContext --| useContext : calls
    KeypressProvider --| useStdin : calls
    KeypressProvider --| useCallback : calls
    KeypressProvider --| useEffect : calls
    KeypressProvider --| useRef : calls
    KeypressProvider --| readline_createInterface : calls
    KeypressProvider --| readline_emitKeypressEvents : calls
    KeypressProvider --| parseKittyPrefix : calls
    KeypressProvider --| broadcast : calls
    KeypressProvider --| handleKeypress : calls
    KeypressProvider --| handleRawKeypress : calls
    parseKittyPrefix --| RegExp : creates
    broadcast --| subscribers : iterates
    handleKeypress --| broadcast : calls
    handleRawKeypress --| handleKeypress : calls
    
    %% cli/src/ui/contexts/OverflowContext.tsx
    OverflowContext --| createContext : calls
    useOverflowState --| useContext : calls
    useOverflowActions --| useContext : calls
    OverflowProvider --| useState : calls
    OverflowProvider --| useCallback : calls
    OverflowProvider --| useMemo : calls
    OverflowProvider --| OverflowStateContext : uses
    OverflowProvider --| OverflowActionsContext : uses
    addOverflowingId --| setOverflowingIds : calls
    removeOverflowingId --| setOverflowingIds : calls
    
    %% cli/src/ui/contexts/SessionContext.tsx
    SessionContext --| createContext : calls
    SessionStatsProvider --| useState : calls
    SessionStatsProvider --| useEffect : calls
    SessionStatsProvider --| useCallback : calls
    SessionStatsProvider --| useMemo : calls
    SessionStatsProvider --| uiTelemetryService : uses
    useSessionStats --| useContext : calls
    useEffect --| uiTelemetryService_on : calls
    useEffect --| uiTelemetryService_off : calls
    useEffect --| uiTelemetryService_getMetrics : calls
    useEffect --| uiTelemetryService_getLastPromptTokenCount : calls
    handleUpdate --| setStats : calls
    startNewPrompt --| setStats : calls
    getPromptCount --| stats : accesses
    
    %% cli/src/ui/contexts/SettingsContext.tsx
    SettingsContext --| createContext : calls
    useSettings --| useContext : calls
    
    %% cli/src/ui/contexts/StreamingContext.tsx
    StreamingContext --| createContext : calls
    useStreamingContext --| useContext : calls
    
    %% cli/src/ui/contexts/UIActionsContext.tsx
    UIActionsContext --| createContext : calls
    useUIActions --| useContext : calls
    
    %% cli/src/ui/contexts/UIStateContext.tsx
    UIStateContext --| createContext : calls
    useUIState --| useContext : calls
    
    %% cli/src/ui/contexts/VimModeContext.tsx
    VimModeContext --| createContext : calls
    VimModeProvider --| useState : calls
    VimModeProvider --| useEffect : calls
    VimModeProvider --| useCallback : calls
    useVimMode --| useContext : calls
    toggleVimEnabled --| settings_setValue : calls
    
    %% cli/src/utils/readStdin.ts
    readStdin --| Promise : returns
    readStdin --| process_stdin : uses
    readStdin --| setTimeout : calls
    readStdin --| clearTimeout : calls
    
    %% cli/src/zed-integration/acp_ts
    AgentSideConnection --| Connection : uses
    AgentSideConnection --| Agent : uses
    Connection --| TextDecoder : uses
    Connection --| TextEncoder : uses
    Connection --| JSON : uses
    Connection --| RequestError : uses
    Connection --| z_ZodError : uses
    
    %% cli/src/zed-integration/fileSystemService.ts
    AcpFileSystemService --| FileSystemService : implements
    AcpFileSystemService --| acp_Client : uses
    AcpFileSystemService --| fallback : uses
    
    %% cli/src/zed-integration/schema.ts
    schema --| z : uses
    
    %% cli/src/zed-integration/zedIntegration.ts
    runZedIntegration --| AgentSideConnection : creates
    GeminiAgent --| Session : creates
    Session --| AcpFileSystemService : uses
    Session --| runTool : calls
    Session --| resolvePrompt : calls
    runTool --| requestPermission : calls
    runTool --| sessionUpdate : calls
    runTool --| logToolCall : calls
    runTool --| convertToFunctionResponse : calls
    resolvePrompt --| getFileService : calls
    resolvePrompt --| getToolRegistry : calls
    resolvePrompt --| buildAndExecute : calls
    resolvePrompt --| sessionUpdate : calls
    
    %% cli/src/utils/checks.ts
    checkExhaustive --| assumeExhaustive : calls
    checkExhaustive --| Error : throws
    
    %% cli/src/utils/cleanup.ts
    registerCleanup --| cleanupFunctions : modifies
    runExitCleanup --| cleanupFunctions : iterates
    cleanupCheckpoints --| Storage : uses
    cleanupCheckpoints --| fs_rm : calls
    cleanupCheckpoints --| join : calls
    
    %% cli/src/utils/deepMerge.ts
    customDeepMerge --| mergeRecursively : calls
    mergeRecursively --| isPlainObject : calls
    mergeRecursively --| getMergeStrategyForPath : calls
    mergeRecursively --| Array_isArray : calls
    mergeRecursively --| Set : creates
    mergeRecursively --| Object_keys : calls
    
    %% cli/src/utils/dialogScopeUtils.ts
    getScopeItems --| SCOPE_LABELS : uses
    getScopeMessageForSetting --| SettingScope : uses
    getScopeMessageForSetting --| settings_forScope : calls
    getScopeMessageForSetting --| settingExistsInScope : calls
    getScopeMessageForSetting --| Object_values : calls
    getScopeMessageForSetting --| Array_filter : calls
    
    %% cli/src/utils/envVarResolver.ts
    resolveEnvVarsInObject --| resolveEnvVarsInObjectInternal : calls
    resolveEnvVarsInObjectInternal --| resolveEnvVarsInString : calls
    resolveEnvVarsInObjectInternal --| WeakSet : uses
    resolveEnvVarsInObjectInternal --| Array_isArray : calls
    resolveEnvVarsInObjectInternal --| Object_prototype_hasOwnProperty : calls
    resolveEnvVarsInString --| process_env : accesses
    resolveEnvVarsInString --| String_replace : calls
    
    %% cli/src/utils/errors.ts
    getErrorMessage --| Error : instanceof
    getErrorMessage --| String : calls
    
    %% cli/src/utils/events.ts
    appEvents --| EventEmitter : instantiates
    
    %% cli/src/utils/gitUtils.ts
    isGitHubRepository --| execSync : calls
    isGitHubRepository --| RegExp : uses
    getGitRepoRoot --| execSync : calls
    getLatestGitHubRelease --| fetch : calls
    getLatestGitHubRelease --| ProxyAgent : uses
    getLatestGitHubRelease --| AbortController : uses
    getLatestGitHubRelease --| AbortSignal : uses
    getGitHubRepoInfo --| execSync : calls
    getGitHubRepoInfo --| RegExp : uses
    
    %% cli/src/utils/handleAutoUpdate.ts
    handleAutoUpdate --| getInstallationInfo : calls
    handleAutoUpdate --| updateEventEmitter_emit : calls
    handleAutoUpdate --| spawnWrapper : calls
    setUpdateHandler --| updateEventEmitter_on : calls
    setUpdateHandler --| updateEventEmitter_off : calls
    setUpdateHandler --| setTimeout : calls
    handleAutoUpdate --| spawn : calls
    handleAutoUpdate --| updateprocess_stderr_on : calls
    handleAutoUpdate --| updateprocess_on : calls
    
    %% cli/src/utils/installationInfo.ts
    getInstallationInfo --| fs_realpathSync : calls
    getInstallationInfo --| isGitRepository : calls
    getInstallationInfo --| fs_existsSync : calls
    getInstallationInfo --| path_join : calls
    getInstallationInfo --| childprocess_execSync : calls
    getInstallationInfo --| process_argv : accesses
    getInstallationInfo --| process_platform : accesses
    getInstallationInfo --| process_cwd : calls
    
    %% cli/src/utils/package.ts
    getPackageJson --| readPackageUp : calls
    getPackageJson --| fileURLToPath : calls
    getPackageJson --| path_dirname : calls
    
    %% cli/src/utils/resolvepath_ts
    resolvePath --| os_homedir : calls
    resolvePath --| path_normalize : calls
    resolvePath --| String_toLowerCase : calls
    resolvePath --| String_startsWith : calls
    resolvePath --| String_substring : calls
    
    %% cli/src/utils/sandbox.ts
    start_sandbox --| ConsolePatcher : uses
    start_sandbox --| shouldUseCurrentUserInSandbox : calls
    start_sandbox --| getContainerPath : calls
    start_sandbox --| entrypoint : calls
    start_sandbox --| ensureSandboxImageIsPresent : calls
    start_sandbox --| execSync : calls
    start_sandbox --| spawn : calls
    start_sandbox --| fs_existsSync : calls
    start_sandbox --| fs_realpathSync : calls
    start_sandbox --| path_resolve : calls
    start_sandbox --| path_join : calls
    ensureSandboxImageIsPresent --| imageExists : calls
    ensureSandboxImageIsPresent --| pullImage : calls
    imageExists --| spawn : calls
    pullImage --| spawn : calls
    
    %% cli/src/utils/settingsUtils.ts
    getFlattenedSchema --| flattenSchema : calls
    getFlattenedSchema --| getSettingsSchema : calls
    getSettingsByCategory --| getFlattenedSchema : calls
    getSettingDefinition --| getFlattenedSchema : calls
    requiresRestart --| getFlattenedSchema : calls
    getDefaultValue --| getFlattenedSchema : calls
    getEffectiveValue --| getSettingDefinition : calls
    getEffectiveValue --| getNestedValue : calls
    getSettingsByType --| getFlattenedSchema : calls
    isValidSettingKey --| getFlattenedSchema : calls
    getSettingCategory --| getFlattenedSchema : calls
    shouldShowInDialog --| getFlattenedSchema : calls
    getDialogSettingsByCategory --| getFlattenedSchema : calls
    getDialogSettingsByType --| getFlattenedSchema : calls
    getDialogSettingKeys --| getFlattenedSchema : calls
    getSettingValue --| getSettingDefinition : calls
    getSettingValue --| getEffectiveValue : calls
    isSettingModified --| getDefaultValue : calls
    settingExistsInScope --| getNestedValue : calls
    setPendingSettingValue --| setNestedValue : calls
    setPendingSettingValueAny --| setNestedValue : calls
    saveModifiedSettings --| getNestedValue : calls
    saveModifiedSettings --| settingExistsInScope : calls
    saveModifiedSettings --| getDefaultValue : calls
    saveModifiedSettings --| setValue : calls
    getDisplayValue --| getSettingDefinition : calls
    getDisplayValue --| getEffectiveValue : calls
    getDisplayValue --| getDefaultValue : calls
    getDisplayValue --| settingExistsInScope : calls
    isDefaultValue --| settingExistsInScope : calls
    isValueInherited --| settingExistsInScope : calls
    getEffectiveDisplayValue --| getSettingValue : calls
    
    %% cli/src/utils/spawnWrapper.ts
    spawnWrapper --| spawn : wraps
    
    %% cli/src/utils/updateEventEmitter.ts
    updateEventEmitter --| EventEmitter : instantiates
    
    %% cli/src/utils/version.ts
    getCliVersion ||--|| getPackageJson : calls
    getCliVersion --| process_env : accesses

    %% 变量级调用关系 %%
    
    %% a2a-server/src/agent/executor.ts
    class CoderAgentExecutor {
        Map tasks
        Set executingTasks
        TaskStore taskStore
    }
    class TaskWrapper {
        Task task
        AgentSettings agentSettings
    }
    class Task {
        string id
        string contextId
        string taskState
        GeminiClient geminiClient
        ExecutionEventBus eventBus
    }
    
    %% a2a-server/src/agent/task.ts
    class Task {
        string id
        string contextId
        CoreToolScheduler scheduler
        Config config
        GeminiClient geminiClient
        Map pendingToolConfirmationDetails
        TaskState taskState
        ExecutionEventBus eventBus
        CompletedToolCall[] completedToolCalls
        boolean skipFinalTrueAfterInlineEdit
        Map pendingToolCalls
        Promise toolCompletionPromise
        Object toolCompletionNotifier
    }
    
    %% a2a-server/src/config/config.ts
    class loadConfig {
        Settings settings
        Extension[] extensions
        string taskId
        ConfigParameters configParams
        string workspaceDir
        string adcFilePath
        Map mcpServers
    }
    class mergeMcpServers {
        Settings settings
        Extension[] extensions
        Map mcpServers
    }
    class setTargetDir {
        AgentSettings agentSettings
        string targetDir
        string originalCWD
    }
    class loadEnvironment {
        string envFilePath
    }
    class findEnvFile {
        string startDir
        string currentDir
        string geminiEnvPath
        string envPath
        string parentDir
        string homeGeminiEnvPath
        string homeEnvPath
    }
    
    %% a2a-server/src/config/settings.ts
    class loadSettings {
        string settingsPath
        Settings settings
        any fileSettings
        any mergedSettings
    }
    class getSettingsPath {
        string geminiDir
        string settingsPath
    }
    
    %% a2a-server/src/http/app.ts
    class createApp {
        string bucketName
        TaskStore taskStoreForExecutor
        TaskStore taskStoreForHandler
        GCSTaskStore gcsTaskStore
        InMemoryTaskStore inMemoryTaskStore
        CoderAgentExecutor agentExecutor
        DefaultRequestHandler requestHandler
        express_Application expressApp
        A2AExpressApp appBuilder
    }
    class main {
        express_Application expressApp
        string port
        Server server
        string actualPort
    }
    class updateCoderAgentCardUrl {
        number port
    }
    
    %% a2a-server/src/http/server.ts
    class server {
        boolean isMainModule
        string process_argv_1_
        string import_meta_url
    }
    
    %% a2a-server/src/persistence/gcs.ts
    class GCSTaskStore {
        Storage storage
        string bucketName
        Promise bucketInitialized
    }
    class NoOpTaskStore {
        TaskStore realStore
    }
    
    %% a2a-server/src/utils/logger_ts
    class logger {
        winston_Logger logger
    }
    
    %% core/src/config/config.ts
    class Config {
        string sessionId
        string model
        string embeddingModel
        string targetDir
        boolean debugMode
        string[] coreTools
        string[] allowedTools
        string[] excludeTools
        ApprovalMode approvalMode
        TelemetrySettings telemetrySettings
        boolean checkpointing
        string proxy
        string cwd
        FileFilteringOptions fileFiltering
        ToolRegistry toolRegistry
        PromptRegistry promptRegistry
        FileDiscoveryService fileDiscoveryService
        GitService gitService
        GeminiClient geminiClient
        ContentGenerator contentGenerator
        ContentGeneratorConfig contentGeneratorConfig
        Storage storage
        FileExclusions fileExclusions
        boolean initialized
        boolean inFallbackMode
        FallbackModelHandler fallbackModelHandler
        boolean quotaErrorOccurred
        number maxSessionTurns
        boolean listExtensions
        GeminiCLIExtension[] _extensions
        boolean noBrowser
        boolean folderTrustFeature
        boolean folderTrust
        boolean ideMode
        boolean experimentalZedIntegration
        boolean loadMemoryFromIncludeDirectories
        ChatCompressionSettings chatCompression
        boolean interactive
        boolean trustedFolder
        boolean useRipgrep
        boolean shouldUseNodePtyShell
        boolean skipNextSpeakerCheck
        boolean extensionManagement
        boolean enablePromptCompletion
        number truncateToolOutputThreshold
        number truncateToolOutputLines
        EventEmitter eventEmitter
        boolean useSmartEdit
    }
    
    %% core/src/config/storage.ts
    class Storage {
        string targetDir
        string GEMINI_DIR
        string GOOGLE_ACCOUNTS_FILENAME
        string OAUTH_FILE
        string TMP_DIR_NAME
    }
    
    %% core/src/core/geminiChat.md
    class GeminiChat {
        Promise sendPromise
        ChatRecordingService chatRecordingService
        Config config
        GenerateContentConfig generationConfig
        Content[] history
    }
    
    %% core/src/ide/ide-client.ts
    class IdeClient {
        Promise instancePromise
        Client client
        IDEConnectionState state
        DetectedIde currentIde
        string currentIdeDisplayName
        object ideProcessInfo
        Map diffResponses
        Set statusListeners
        Set trustChangeListeners
    }
    class deriveEncryptionKey {
        string machineId
        string username
        Buffer key
    }
    class encrypt {
        string text
        Buffer iv
        object cipher
        string encrypted
        Buffer authTag
        string result
    }
    class decrypt {
        string encryptedData
        string[] parts
        Buffer iv
        Buffer authTag
        Buffer encrypted
        object decipher
        string decrypted
    }
    class ensureDirectoryExists {
        string dirPath
    }
    class loadTokens {
        string data
        string decryptedData
        object parsed
        Map tokens
    }
    class saveTokens {
        Map tokens
        object serialized
        string data
        string encryptedData
    }
    class getCredentials {
        Map tokens
        OAuthCredentials credentials
    }
    class setCredentials {
        Map tokens
        OAuthCredentials credentials
    }
    class deleteCredentials {
        Map tokens
    }
    class listServers {
        Map tokens
        string[] serverNames
    }
    class getAllCredentials {
        Map tokens
        Map validTokens
    }
    class clearAll {
        string filePath
    }
    
    %% core/src/mcp/token-storage/hybrid-token-storage.ts
    class HybridTokenStorage {
        TokenStorage storage
        TokenStorageType storageType
        Promise storageInitPromise
        string serviceName
    }
    class initializeStorage {
        boolean forceFileStorage
        KeychainTokenStorage keychainStorage
        FileTokenStorage fileStorage
        TokenStorage initializedStorage
    }
    class getStorage {
        TokenStorage activeStorage
    }
    class getCredentials {
        TokenStorage storage
        OAuthCredentials credentials
    }
    class setCredentials {
        TokenStorage storage
    }
    class deleteCredentials {
        TokenStorage storage
    }
    class listServers {
        TokenStorage storage
        string[] servers
    }
    class getAllCredentials {
        TokenStorage storage
        Map credentials
    }
    class clearAll {
        TokenStorage storage
    }
    class getStorageType {
        TokenStorage storage
        TokenStorageType type
    }
    
    %% core/src/services/chatRecordingService.md
    class ChatRecordingService {
        ConversationRecord conversation
        string sessionId
        string projectHash
        boolean initialized
    }
    class initialize {
        string existingSessionId
        string projectRoot
        string projectHash
    }
    class recordMessage {
        MessageRecord messageRecord
    }
    class recordThought {
        MessageRecord thoughtRecord
    }
    class recordMessageTokens {
        string messageId
        object tokenUsage
    }
    class recordToolCalls {
        ToolCallRecord[] toolCallRecords
    }
    class deleteSession {
        string recordingPath
    }
    class writeConversationToFile {
        string recordingPath
        string conversationJson
    }
    class readConversationFromFile {
        string recordingPath
        string conversationJson
    }
    class getChatRecordingDir {
        string geminiDir
        string chatRecordingsDir
    }
    class getChatRecordingPath {
        string chatRecordingsDir
        string filename
    }
    
    %% core/src/services/fileSystemService.md
    class StandardFileSystemService {
        %% No instance variables %%
    }
    class readTextFile {
        string filePath
    }
    class writeTextFile {
        string filePath
        string content
        string dirPath
    }
    
    %% core/src/services/shellExecutionService.md
    class ShellExecutionService {
        %% No instance variables %%
    }
    class execute {
        string command
        object options
        AbortSignal signal
        string shell
        boolean usePty
    }
    class executeWithPty {
        string command
        object options
        AbortSignal signal
        string shell
        object ptyProcess
        Buffer stdoutBuffer
        Buffer stderrBuffer
        boolean isWindows
    }
    class childProcessFallback {
        string command
        object options
        AbortSignal signal
        string shell
        object childProcess
        Buffer stdoutBuffer
        Buffer stderrBuffer
    }
    
    %% core/src/telemetry/sdk_ts
    class sdk {
        NodeSDK sdk
        boolean telemetryInitialized
    }
    class isTelemetrySdkInitialized {
        %% No local variables %%
    }
    class parseOtlpEndpoint {
        string otlpEndpointSetting
        string protocol
        string endpoint
        URL url
    }
    class initializeTelemetry {
        Config config
        TelemetrySettings settings
        boolean enabled
        string serviceName
        string serviceVersion
        object resourceAttributes
        Resource resource
        string otlpEndpoint
        object traceExporter
        object logExporter
        object metricExporter
        BatchSpanProcessor spanProcessor
        BatchLogRecordProcessor logProcessor
        PeriodicExportingMetricReader metricReader
        HttpInstrumentation httpInstrumentation
        NodeSDK nodeSdk
    }
    class shutdownTelemetry {
        Config config
        No other local variables
    }
    
    %% core/src/tools/tools.ts
    class ToolInvocation {
        object params
        string description
        string[] locations
        boolean shouldConfirm
        ToolResult result
    }
    class ToolBuilder {
        string name
        string displayName
        string description
        Kind kind
        object schema
        boolean isOutputMarkdown
        boolean canUpdateOutput
        ToolInvocation invocation
    }
    class ToolResult {
        string llmContent
        string returnDisplay
        string error
    }
    class BaseToolInvocation {
        object params
        string description
        string[] locations
        boolean shouldConfirm
    }
    class DeclarativeTool {
        object params
        ToolInvocation invocation
        ToolResult result
    }
    class BaseDeclarativeTool {
        object params
        ToolInvocation invocation
        SchemaValidator validator
    }
    class FileDiff {
        string fileDiff
        string fileName
        string originalContent
        string newContent
        DiffStat diffStat
    }
    class DiffStat {
        number model_added_lines
        number model_removed_lines
        number model_added_chars
        number model_removed_chars
        number user_added_lines
        number user_removed_lines
        number user_added_chars
        number user_removed_chars
    }
    class hasCycleInSchema {
        object schema
        Set visited
        boolean hasCycle
    }
    class isTool {
        object obj
        boolean isToolResult
    }
    
    %% cli/src/ui/contexts/AppContext.tsx
    class AppContext {
        AppState state
        string version
        string[] startupWarnings
    }
    class useAppContext {
        AppState context
    }
    
    %% cli/src/ui/contexts/ConfigContext.tsx
    class ConfigContext {
        Config config
    }
    class useConfig {
        Config context
    }
    
    %% cli/src/ui/contexts/KeypressContext.tsx
    class KeypressContext {
        KeypressContextValue value
    }
    class useKeypressContext {
        KeypressContextValue context
    }
    class KeypressProvider {
        object props
        boolean kittyProtocolEnabled
        Config config
        boolean debugKeystrokeLogging
        object stdin
        function setRawMode
        Set~KeypressHandler~ subscribers
        boolean isDraggingRef
        string dragBufferRef
        NodeJS_Timeout draggingTimerRef
        boolean isPaste
        Buffer pasteBuffer
        string kittySequenceBuffer
        NodeJS_Timeout backslashTimeout
        boolean waitingForEnterAfterBackslash
        function subscribe
        function unsubscribe
        boolean usePassthrough
        readline_Interface rl
        PassThrough keypressStream
    }
    class parseKittyPrefix {
        string buffer
        object m
        number mods
        number bits
        boolean shift
        boolean alt
        boolean ctrl
        string sym
        string name
        number keyCode
        number modifiers
        number modifierBits
        string terminator
    }
    class handleKeypress {
        unknown _
        Key key
        boolean isPaste
        Buffer pasteBuffer
        boolean waitingForEnterAfterBackslash
        NodeJS_Timeout backslashTimeout
        string kittySequenceBuffer
        boolean parsedAny
    }
    class handleRawKeypress {
        Buffer data
        Buffer pasteModePrefixBuffer
        Buffer pasteModeSuffixBuffer
        number pos
        number prefixPos
        number suffixPos
        boolean isPrefixNext
        boolean isSuffixNext
        number nextMarkerPos
        number markerLength
    }
    
    %% cli/src/ui/contexts/OverflowContext.tsx
    class OverflowContext {
        OverflowState state
        OverflowActions actions
    }
    class useOverflowState {
        OverflowState context
    }
    class useOverflowActions {
        OverflowActions context
    }
    class OverflowProvider {
        object props
        Set~string~ overflowingIds
        function setOverflowingIds
        function addOverflowingId
        function removeOverflowingId
        OverflowState stateValue
        OverflowActions actionsValue
    }
    class addOverflowingId {
        string id
        Set~string~ prevIds
        Set~string~ newIds
    }
    class removeOverflowingId {
        string id
        Set~string~ prevIds
        Set~string~ newIds
    }
    
    %% cli/src/ui/contexts/SessionContext.tsx
    class SessionStatsContext {
        SessionStatsContextValue value
    }
    class SessionStatsProvider {
        object props
        SessionStatsState stats
        function setStats
        function startNewPrompt
        function getPromptCount
        SessionStatsContextValue value
    }
    class useSessionStats {
        SessionStatsContextValue context
    }
    class useEffect {
        function handleUpdate
        object metrics
        number lastPromptTokenCount
    }
    class handleUpdate {
        SessionStatsState prevState
        SessionStatsState newState
    }
    class startNewPrompt {
        SessionStatsState prevState
        SessionStatsState newState
    }
    class getPromptCount {
        number promptCount
    }
    
    %% cli/src/ui/contexts/SettingsContext.tsx
    class SettingsContext {
        LoadedSettings settings
    }
    class useSettings {
        LoadedSettings context
    }
    
    %% cli/src/ui/contexts/StreamingContext.tsx
    class StreamingContext {
        StreamingState state
    }
    class useStreamingContext {
        StreamingState context
    }
    
    %% cli/src/ui/contexts/UIActionsContext.tsx
    class UIActionsContext {
        UIActions actions
    }
    class useUIActions {
        UIActions context
    }
    
    %% cli/src/ui/contexts/UIStateContext.tsx
    class UIStateContext {
        UIState state
    }
    class useUIState {
        UIState context
    }
    
    %% cli/src/ui/contexts/VimModeContext.tsx
    class VimModeContext {
        VimModeContextType value
    }
    class VimModeProvider {
        object props
        LoadedSettings settings
        boolean initialVimEnabled
        boolean vimEnabled
        function setVimEnabled
        VimMode vimMode
        function setVimMode
        function toggleVimEnabled
        VimModeContextType value
    }
    class useVimMode {
        VimModeContextType context
    }
    class toggleVimEnabled {
        boolean newValue
    }
    
    %% cli/src/utils/readStdin.ts
    class readStdin {
        number MAX_STDIN_SIZE
        string data
        number totalSize
        NodeJS_Timeout pipedInputTimerId
        function onReadable
        function onEnd
        function onError
        function cleanup
    }
    
    %% cli/src/zed-integration/acp_ts
    class AgentSideConnection {
        Connection connection
        function toAgent
        WritableStream input
        ReadableStream output
        function handler
    }
    class Connection {
        Map pendingResponses
        number nextRequestId
        MethodHandler handler
        WritableStream peerInput
        Promise writeQueue
        TextEncoder textEncoder
        function receive
        function processMessage
        function tryCallHandler
        function handleResponse
        function sendMessage
    }
    class RequestError {
        number code
        string message
        object data
    }
    
    %% cli/src/zed-integration/fileSystemService.ts
    class AcpFileSystemService {
        acp_Client client
        string sessionId
        acp_FileSystemCapability capabilities
        FileSystemService fallback
    }
    
    %% cli/src/zed-integration/schema.ts
    class schema {
        object AGENT_METHODS
        object CLIENT_METHODS
        number PROTOCOL_VERSION
        z_ZodSchema writeTextFileRequestSchema
        z_ZodSchema readTextFileRequestSchema
        z_ZodSchema permissionOptionKindSchema
        z_ZodSchema roleSchema
        z_ZodSchema textResourceContentsSchema
        z_ZodSchema blobResourceContentsSchema
        z_ZodSchema toolKindSchema
        z_ZodSchema toolCallStatusSchema
        z_ZodSchema writeTextFileResponseSchema
        z_ZodSchema readTextFileResponseSchema
        z_ZodSchema requestPermissionOutcomeSchema
        z_ZodSchema cancelNotificationSchema
        z_ZodSchema authenticateRequestSchema
        z_ZodSchema authenticateResponseSchema
        z_ZodSchema newSessionResponseSchema
        z_ZodSchema loadSessionResponseSchema
        z_ZodSchema stopReasonSchema
        z_ZodSchema promptResponseSchema
        z_ZodSchema toolCallLocationSchema
        z_ZodSchema planEntrySchema
        z_ZodSchema permissionOptionSchema
        z_ZodSchema annotationsSchema
        z_ZodSchema requestPermissionResponseSchema
        z_ZodSchema fileSystemCapabilitySchema
        z_ZodSchema envVariableSchema
        z_ZodSchema mcpServerSchema
        z_ZodSchema agentCapabilitiesSchema
        z_ZodSchema authMethodSchema
        z_ZodSchema promptCapabilitiesSchema
        z_ZodSchema clientResponseSchema
        z_ZodSchema clientNotificationSchema
        z_ZodSchema embeddedResourceResourceSchema
        z_ZodSchema newSessionRequestSchema
        z_ZodSchema loadSessionRequestSchema
        z_ZodSchema initializeResponseSchema
        z_ZodSchema contentBlockSchema
        z_ZodSchema toolCallContentSchema
        z_ZodSchema toolCallSchema
        z_ZodSchema clientCapabilitiesSchema
        z_ZodSchema promptRequestSchema
        z_ZodSchema sessionUpdateSchema
        z_ZodSchema agentResponseSchema
        z_ZodSchema requestPermissionRequestSchema
        z_ZodSchema initializeRequestSchema
        z_ZodSchema sessionNotificationSchema
        z_ZodSchema clientRequestSchema
        z_ZodSchema agentRequestSchema
        z_ZodSchema agentNotificationSchema
    }
    
    %% cli/src/zed-integration/zedIntegration.ts
    class runZedIntegration {
        WritableStream stdout
        ReadableStream stdin
        function AgentSideConnection
    }
    class GeminiAgent {
        Map sessions
        acp_ClientCapabilities clientCapabilities
        Config config
        LoadedSettings settings
        Extension[] extensions
        CliArgs argv
        acp_Client client
    }
    class Session {
        string id
        GeminiChat chat
        Config config
        acp_Client client
        AbortController pendingPrompt
    }
    
    %% cli/src/utils/checks.ts
    class assumeExhaustive {
        never _value
    }
    class checkExhaustive {
        never value
        string msg
    }
    
    %% cli/src/utils/cleanup.ts
    class registerCleanup {
        function fn
    }
    class runExitCleanup {
        Array~function~ cleanupFunctions
        function fn
    }
    class cleanupCheckpoints {
        Storage storage
        string tempDir
        string checkpointsDir
    }
    
    %% cli/src/utils/deepMerge.ts
    class isPlainObject {
        unknown item
    }
    class mergeRecursively {
        MergeableObject target
        MergeableObject source
        function getMergeStrategyForPath
        string[] path
        string[] newPath
        Mergeable srcValue
        Mergeable objValue
        MergeStrategy mergeStrategy
        MergeableObject obj1
        MergeableObject obj2
        Mergeable[] srcArray
    }
    class customDeepMerge {
        function getMergeStrategyForPath
        MergeableObject[] sources
        MergeableObject result
        MergeableObject source
    }
    
    %% cli/src/utils/dialogScopeUtils.ts
    class getScopeItems {
        object[] scopeItems
    }
    class getScopeMessageForSetting {
        string settingKey
        SettingScope selectedScope
        LoadedSettings settings
        SettingScope[] otherScopes
        SettingScope[] modifiedInOtherScopes
        object scopeSettings
        boolean existsInCurrentScope
        object currentScopeSettings
        string modifiedScopesStr
    }
    
    %% cli/src/utils/envVarResolver.ts
    class resolveEnvVarsInString {
        string value
        RegExp envVarRegex
        string match
        string varName1
        string varName2
        string varName
    }
    class resolveEnvVarsInObject {
        T obj
        WeakSet~object~ visited
    }
    class resolveEnvVarsInObjectInternal {
        T obj
        WeakSet~object~ visited
        T result
        T newObj
        string key
    }
    
    %% cli/src/utils/errors.ts
    class getErrorMessage {
        unknown error
    }
    
    %% cli/src/utils/events.ts
    class events {
        AppEvent AppEvent
        EventEmitter appEvents
    }
    
    %% cli/src/utils/gitUtils.ts
    isGitHubRepository {
        string remotes
        RegExp pattern
    }

    getGitRepoRoot {
        string gitRepoRoot
    }

    getLatestGitHubRelease {
        AbortController controller
        string endpoint
        Response response
        string releaseTag
        ProxyAgent proxyAgent
    }
    
    getGitHubRepoInfo {
        string remoteUrl
        RegExpMatchArray match
    }
    
%% cli/src/utils/handleAutoUpdate.ts
    handleAutoUpdate {
        UpdateObject info
        LoadedSettings settings
        string projectRoot
        typeof spawn spawnFn
        object installationInfo
        string combinedMessage
        boolean isNightly
        string updateCommand
        ReturnType~typeof spawn~ updateProcess
        string errorOutput
        number code
        Error err
    }

    setUpdateHandler {
        function addItem()
        function setUpdateInfo()
        boolean successfullyInstalled
        function handleUpdateRecieved()
        function handleUpdateFailed()
        function handleUpdateSuccess()
        function handleUpdateInfo()
        UpdateObject info
        string savedMessage
        object data
    }
    
    %% cli/src/utils/installationInfo.ts
    getInstallationInfo {
        string projectRoot
        boolean isAutoUpdateDisabled
        string cliPath
        string realPath
        string normalizedProjectRoot
        boolean isGit
        PackageManager pm
        string updateCommand
    }
    
    %% cli/src/utils/package.ts
    package {
        string __filename
        string __dirname
        PackageJson packageJson
    }
    getPackageJson {
        PackageJson packageJson
        ReturnType~typeof readPackageUp~ result
    }
    
    %% cli/src/utils/resolvepath_ts
    resolvePath {
        string p
        string expandedPath
    }
    
    %% cli/src/utils/sandbox.ts
    start_sandbox {
        SandboxConfig config
        string[] nodeArgs
        Config cliConfig
        string[] cliArgs
        ConsolePatcher patcher
        ChildProcess proxyProcess
        ChildProcess sandboxProcess
        string[] args
        string image
        string workdir
        string containerWorkdir
        string gcPath
        string proxyCommand
        string proxy
        string noProxy
        string debugPort
        string userFlag
        string[] finalEntrypoint
    }
    ensureSandboxImageIsPresent {
        string sandbox
        string image
    }
    imageExists {
        string sandbox
        string image
        string[] args
        ChildProcess checkProcess
        string stdoutData
    }
    pullImage {
        string sandbox
        string image
        string[] args
        ChildProcess pullProcess
        string stderrData
    }
    
    %% cli/src/utils/settingsUtils.ts
    flattenSchema {
        SettingsSchema schema
        string prefix
        FlattenedSchema result
        string key
        string newKey
        SettingDefinition definition
    }
    getFlattenedSchema {
        FlattenedSchema _FLATTENED_SCHEMA
    }
    getSettingsByCategory {
        Record~string, Array~SettingDefinition~~ categories
        SettingDefinition definition
        string category
    }
    getEffectiveValue {
        string key
        Settings settings
        Settings mergedSettings
        SettingDefinition definition
        string[] path
        unknown value
    }
    getSettingValue {
        string key
        Settings settings
        Settings mergedSettings
        SettingDefinition definition
        SettingsValue value
        SettingsValue defaultValue
    }
    class setPendingSettingValue {
        string key
        boolean value
        Settings pendingSettings
        string[] path
        Settings newSettings
    }
    class saveModifiedSettings {
        Set~string~ modifiedSettings
        Settings pendingSettings
        LoadedSettings loadedSettings
        SettingScope scope
        string settingKey
        string[] path
        unknown value
        boolean existsInOriginalFile
        boolean isDefaultValue
    }
    class getDisplayValue {
        string key
        Settings settings
        Settings _mergedSettings
        Set~string~ modifiedSettings
        Settings pendingSettings
        SettingDefinition definition
        SettingsValue value
        SettingsValue defaultValue
        string valueString
        boolean isChangedFromDefault
        boolean isInModifiedSettings
    }
    
    %% cli/src/utils/spawnWrapper.ts
    class spawnWrapper {
        typeof spawn spawnWrapper
    }
    
    %% cli/src/utils/updateEventEmitter.ts
    class updateEventEmitter {
        EventEmitter updateEventEmitter
    }
    
    %% cli/src/utils/version.ts
    class getCliVersion {
        +PackageJson pkgJson
    }

```