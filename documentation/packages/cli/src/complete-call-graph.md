# 完整调用关系图

这个文件包含了所有模块的函数级和变量级调用关系，展示整个应用程序的架构和组件间的关系。

```mermaid
erDiagram
    %% 函数级调用关系 %%
    
    %% AppContext.tsx
    AppContext ||--|| createContext : calls
    useAppContext ||--|| useContext : calls
    
    %% ConfigContext.tsx
    ConfigContext ||--|| createContext : calls
    useConfig ||--|| useContext : calls
    
    %% KeypressContext.tsx
    KeypressContext ||--|| createContext : calls
    useKeypressContext ||--|| useContext : calls
    KeypressProvider ||--|| useStdin : calls
    KeypressProvider ||--|| useCallback : calls
    KeypressProvider ||--|| useEffect : calls
    KeypressProvider ||--|| useRef : calls
    KeypressProvider ||--|| readline.createInterface : calls
    KeypressProvider ||--|| readline.emitKeypressEvents : calls
    KeypressProvider ||--|| parseKittyPrefix : calls
    KeypressProvider ||--|| broadcast : calls
    KeypressProvider ||--|| handleKeypress : calls
    KeypressProvider ||--|| handleRawKeypress : calls
    parseKittyPrefix ||--|| RegExp : creates
    broadcast ||--|| subscribers : iterates
    handleKeypress ||--|| broadcast : calls
    handleRawKeypress ||--|| handleKeypress : calls
    
    %% OverflowContext.tsx
    OverflowContext ||--|| createContext : calls
    useOverflowState ||--|| useContext : calls
    useOverflowActions ||--|| useContext : calls
    OverflowProvider ||--|| useState : calls
    OverflowProvider ||--|| useCallback : calls
    OverflowProvider ||--|| useMemo : calls
    OverflowProvider ||--|| OverflowStateContext : uses
    OverflowProvider ||--|| OverflowActionsContext : uses
    addOverflowingId ||--|| setOverflowingIds : calls
    removeOverflowingId ||--|| setOverflowingIds : calls
    
    %% SessionContext.tsx
    SessionContext ||--|| createContext : calls
    SessionStatsProvider ||--|| useState : calls
    SessionStatsProvider ||--|| useEffect : calls
    SessionStatsProvider ||--|| useCallback : calls
    SessionStatsProvider ||--|| useMemo : calls
    SessionStatsProvider ||--|| uiTelemetryService : uses
    useSessionStats ||--|| useContext : calls
    useEffect ||--|| uiTelemetryService.on : calls
    useEffect ||--|| uiTelemetryService.off : calls
    useEffect ||--|| uiTelemetryService.getMetrics : calls
    useEffect ||--|| uiTelemetryService.getLastPromptTokenCount : calls
    handleUpdate ||--|| setStats : calls
    startNewPrompt ||--|| setStats : calls
    getPromptCount ||--|| stats : accesses
    
    %% SettingsContext.tsx
    SettingsContext ||--|| createContext : calls
    useSettings ||--|| useContext : calls
    
    %% StreamingContext.tsx
    StreamingContext ||--|| createContext : calls
    useStreamingContext ||--|| useContext : calls
    
    %% UIActionsContext.tsx
    UIActionsContext ||--|| createContext : calls
    useUIActions ||--|| useContext : calls
    
    %% UIStateContext.tsx
    UIStateContext ||--|| createContext : calls
    useUIState ||--|| useContext : calls
    
    %% VimModeContext.tsx
    VimModeContext ||--|| createContext : calls
    VimModeProvider ||--|| useState : calls
    VimModeProvider ||--|| useEffect : calls
    VimModeProvider ||--|| useCallback : calls
    useVimMode ||--|| useContext : calls
    toggleVimEnabled ||--|| settings.setValue : calls
    
    %% readStdin.ts
    readStdin ||--|| Promise : returns
    readStdin ||--|| process.stdin : uses
    readStdin ||--|| setTimeout : calls
    readStdin ||--|| clearTimeout : calls
    
    %% acp.ts
    AgentSideConnection ||--|| Connection : uses
    AgentSideConnection ||--|| Agent : uses
    Connection ||--|| TextDecoder : uses
    Connection ||--|| TextEncoder : uses
    Connection ||--|| JSON : uses
    Connection ||--|| RequestError : uses
    Connection ||--|| z.ZodError : uses
    
    %% fileSystemService.ts
    AcpFileSystemService ||--|| FileSystemService : implements
    AcpFileSystemService ||--|| acp.Client : uses
    AcpFileSystemService ||--|| fallback : uses
    
    %% schema.ts
    schema ||--|| z : uses
    
    %% zedIntegration.ts
    runZedIntegration ||--|| AgentSideConnection : creates
    GeminiAgent ||--|| Session : creates
    Session ||--|| AcpFileSystemService : uses
    Session ||--|| runTool : calls
    Session ||--|| #resolvePrompt : calls
    runTool ||--|| requestPermission : calls
    runTool ||--|| sessionUpdate : calls
    runTool ||--|| logToolCall : calls
    runTool ||--|| convertToFunctionResponse : calls
    #resolvePrompt ||--|| getFileService : calls
    #resolvePrompt ||--|| getToolRegistry : calls
    #resolvePrompt ||--|| buildAndExecute : calls
    #resolvePrompt ||--|| sessionUpdate : calls
    
    %% checks.ts
    checkExhaustive ||--|| assumeExhaustive : calls
    checkExhaustive ||--|| Error : throws
    
    %% cleanup.ts
    registerCleanup ||--|| cleanupFunctions : modifies
    runExitCleanup ||--|| cleanupFunctions : iterates
    cleanupCheckpoints ||--|| Storage : uses
    cleanupCheckpoints ||--|| fs.rm : calls
    cleanupCheckpoints ||--|| join : calls
    
    %% deepMerge.ts
    customDeepMerge ||--|| mergeRecursively : calls
    mergeRecursively ||--|| isPlainObject : calls
    mergeRecursively ||--|| getMergeStrategyForPath : calls
    mergeRecursively ||--|| Array.isArray : calls
    mergeRecursively ||--|| Set : creates
    mergeRecursively ||--|| Object.keys : calls
    
    %% dialogScopeUtils.ts
    getScopeItems ||--|| SCOPE_LABELS : uses
    getScopeMessageForSetting ||--|| SettingScope : uses
    getScopeMessageForSetting ||--|| settings.forScope : calls
    getScopeMessageForSetting ||--|| settingExistsInScope : calls
    getScopeMessageForSetting ||--|| Object.values : calls
    getScopeMessageForSetting ||--|| Array.filter : calls
    
    %% envVarResolver.ts
    resolveEnvVarsInObject ||--|| resolveEnvVarsInObjectInternal : calls
    resolveEnvVarsInObjectInternal ||--|| resolveEnvVarsInString : calls
    resolveEnvVarsInObjectInternal ||--|| WeakSet : uses
    resolveEnvVarsInObjectInternal ||--|| Array.isArray : calls
    resolveEnvVarsInObjectInternal ||--|| Object.prototype.hasOwnProperty : calls
    resolveEnvVarsInString ||--|| process.env : accesses
    resolveEnvVarsInString ||--|| String.replace : calls
    
    %% errors.ts
    getErrorMessage ||--|| Error : instanceof
    getErrorMessage ||--|| String : calls
    
    %% events.ts
    appEvents ||--|| EventEmitter : instantiates
    
    %% gitUtils.ts
    isGitHubRepository ||--|| execSync : calls
    isGitHubRepository ||--|| RegExp : uses
    getGitRepoRoot ||--|| execSync : calls
    getLatestGitHubRelease ||--|| fetch : calls
    getLatestGitHubRelease ||--|| ProxyAgent : uses
    getLatestGitHubRelease ||--|| AbortController : uses
    getLatestGitHubRelease ||--|| AbortSignal : uses
    getGitHubRepoInfo ||--|| execSync : calls
    getGitHubRepoInfo ||--|| RegExp : uses
    
    %% handleAutoUpdate.ts
    handleAutoUpdate ||--|| getInstallationInfo : calls
    handleAutoUpdate ||--|| updateEventEmitter.emit : calls
    handleAutoUpdate ||--|| spawnWrapper : calls
    setUpdateHandler ||--|| updateEventEmitter.on : calls
    setUpdateHandler ||--|| updateEventEmitter.off : calls
    setUpdateHandler ||--|| setTimeout : calls
    handleAutoUpdate ||--|| spawn : calls
    handleAutoUpdate ||--|| updateProcess.stderr.on : calls
    handleAutoUpdate ||--|| updateProcess.on : calls
    
    %% installationInfo.ts
    getInstallationInfo ||--|| fs.realpathSync : calls
    getInstallationInfo ||--|| isGitRepository : calls
    getInstallationInfo ||--|| fs.existsSync : calls
    getInstallationInfo ||--|| path.join : calls
    getInstallationInfo ||--|| childProcess.execSync : calls
    getInstallationInfo ||--|| process.argv : accesses
    getInstallationInfo ||--|| process.platform : accesses
    getInstallationInfo ||--|| process.cwd : calls
    
    %% package.ts
    getPackageJson ||--|| readPackageUp : calls
    getPackageJson ||--|| fileURLToPath : calls
    getPackageJson ||--|| path.dirname : calls
    
    %% resolvePath.ts
    resolvePath ||--|| os.homedir : calls
    resolvePath ||--|| path.normalize : calls
    resolvePath ||--|| String.toLowerCase : calls
    resolvePath ||--|| String.startsWith : calls
    resolvePath ||--|| String.substring : calls
    
    %% sandbox.ts
    start_sandbox ||--|| ConsolePatcher : uses
    start_sandbox ||--|| shouldUseCurrentUserInSandbox : calls
    start_sandbox ||--|| getContainerPath : calls
    start_sandbox ||--|| entrypoint : calls
    start_sandbox ||--|| ensureSandboxImageIsPresent : calls
    start_sandbox ||--|| execSync : calls
    start_sandbox ||--|| spawn : calls
    start_sandbox ||--|| fs.existsSync : calls
    start_sandbox ||--|| fs.realpathSync : calls
    start_sandbox ||--|| path.resolve : calls
    start_sandbox ||--|| path.join : calls
    ensureSandboxImageIsPresent ||--|| imageExists : calls
    ensureSandboxImageIsPresent ||--|| pullImage : calls
    imageExists ||--|| spawn : calls
    pullImage ||--|| spawn : calls
    
    %% settingsUtils.ts
    getFlattenedSchema ||--|| flattenSchema : calls
    getFlattenedSchema ||--|| getSettingsSchema : calls
    getSettingsByCategory ||--|| getFlattenedSchema : calls
    getSettingDefinition ||--|| getFlattenedSchema : calls
    requiresRestart ||--|| getFlattenedSchema : calls
    getDefaultValue ||--|| getFlattenedSchema : calls
    getEffectiveValue ||--|| getSettingDefinition : calls
    getEffectiveValue ||--|| getNestedValue : calls
    getSettingsByType ||--|| getFlattenedSchema : calls
    isValidSettingKey ||--|| getFlattenedSchema : calls
    getSettingCategory ||--|| getFlattenedSchema : calls
    shouldShowInDialog ||--|| getFlattenedSchema : calls
    getDialogSettingsByCategory ||--|| getFlattenedSchema : calls
    getDialogSettingsByType ||--|| getFlattenedSchema : calls
    getDialogSettingKeys ||--|| getFlattenedSchema : calls
    getSettingValue ||--|| getSettingDefinition : calls
    getSettingValue ||--|| getEffectiveValue : calls
    isSettingModified ||--|| getDefaultValue : calls
    settingExistsInScope ||--|| getNestedValue : calls
    setPendingSettingValue ||--|| setNestedValue : calls
    setPendingSettingValueAny ||--|| setNestedValue : calls
    saveModifiedSettings ||--|| getNestedValue : calls
    saveModifiedSettings ||--|| settingExistsInScope : calls
    saveModifiedSettings ||--|| getDefaultValue : calls
    saveModifiedSettings ||--|| setValue : calls
    getDisplayValue ||--|| getSettingDefinition : calls
    getDisplayValue ||--|| getEffectiveValue : calls
    getDisplayValue ||--|| getDefaultValue : calls
    getDisplayValue ||--|| settingExistsInScope : calls
    isDefaultValue ||--|| settingExistsInScope : calls
    isValueInherited ||--|| settingExistsInScope : calls
    getEffectiveDisplayValue ||--|| getSettingValue : calls
    
    %% spawnWrapper.ts
    spawnWrapper ||--|| spawn : wraps
    
    %% updateEventEmitter.ts
    updateEventEmitter ||--|| EventEmitter : instantiates
    
    %% version.ts
    getCliVersion ||--|| getPackageJson : calls
    getCliVersion ||--|| process.env : accesses

    %% 变量级调用关系 %%
    
    %% AppContext.tsx
    AppContext {
        AppState state
        string version
        string[] startupWarnings
    }
    useAppContext {
        AppState context
    }
    
    %% ConfigContext.tsx
    ConfigContext {
        Config config
    }
    useConfig {
        Config context
    }
    
    %% KeypressContext.tsx
    KeypressContext {
        KeypressContextValue value
    }
    useKeypressContext {
        KeypressContextValue context
    }
    KeypressProvider {
        object props
        boolean kittyProtocolEnabled
        Config config
        boolean debugKeystrokeLogging
        object stdin
        function setRawMode
        Set~KeypressHandler~ subscribers
        boolean isDraggingRef
        string dragBufferRef
        NodeJS.Timeout draggingTimerRef
        boolean isPaste
        Buffer pasteBuffer
        string kittySequenceBuffer
        NodeJS.Timeout backslashTimeout
        boolean waitingForEnterAfterBackslash
        function subscribe
        function unsubscribe
        boolean usePassthrough
        readline.Interface rl
        PassThrough keypressStream
    }
    parseKittyPrefix {
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
    handleKeypress {
        unknown _
        Key key
        boolean isPaste
        Buffer pasteBuffer
        boolean waitingForEnterAfterBackslash
        NodeJS.Timeout backslashTimeout
        string kittySequenceBuffer
        boolean parsedAny
    }
    handleRawKeypress {
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
    
    %% OverflowContext.tsx
    OverflowContext {
        OverflowState state
        OverflowActions actions
    }
    useOverflowState {
        OverflowState context
    }
    useOverflowActions {
        OverflowActions context
    }
    OverflowProvider {
        object props
        Set~string~ overflowingIds
        function setOverflowingIds
        function addOverflowingId
        function removeOverflowingId
        OverflowState stateValue
        OverflowActions actionsValue
    }
    addOverflowingId {
        string id
        Set~string~ prevIds
        Set~string~ newIds
    }
    removeOverflowingId {
        string id
        Set~string~ prevIds
        Set~string~ newIds
    }
    
    %% SessionContext.tsx
    SessionStatsContext {
        SessionStatsContextValue value
    }
    SessionStatsProvider {
        object props
        SessionStatsState stats
        function setStats
        function startNewPrompt
        function getPromptCount
        SessionStatsContextValue value
    }
    useSessionStats {
        SessionStatsContextValue context
    }
    useEffect {
        function handleUpdate
        object metrics
        number lastPromptTokenCount
    }
    handleUpdate {
        SessionStatsState prevState
        SessionStatsState newState
    }
    startNewPrompt {
        SessionStatsState prevState
        SessionStatsState newState
    }
    getPromptCount {
        number promptCount
    }
    
    %% SettingsContext.tsx
    SettingsContext {
        LoadedSettings settings
    }
    useSettings {
        LoadedSettings context
    }
    
    %% StreamingContext.tsx
    StreamingContext {
        StreamingState state
    }
    useStreamingContext {
        StreamingState context
    }
    
    %% UIActionsContext.tsx
    UIActionsContext {
        UIActions actions
    }
    useUIActions {
        UIActions context
    }
    
    %% UIStateContext.tsx
    UIStateContext {
        UIState state
    }
    useUIState {
        UIState context
    }
    
    %% VimModeContext.tsx
    VimModeContext {
        VimModeContextType value
    }
    VimModeProvider {
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
    useVimMode {
        VimModeContextType context
    }
    toggleVimEnabled {
        boolean newValue
    }
    
    %% readStdin.ts
    readStdin {
        number MAX_STDIN_SIZE
        string data
        number totalSize
        NodeJS.Timeout pipedInputTimerId
        function onReadable
        function onEnd
        function onError
        function cleanup
    }
    
    %% acp.ts
    AgentSideConnection {
        Connection #connection
        function toAgent
        WritableStream input
        ReadableStream output
        function handler
    }
    Connection {
        Map #pendingResponses
        number #nextRequestId
        MethodHandler #handler
        WritableStream #peerInput
        Promise #writeQueue
        TextEncoder #textEncoder
        function #receive
        function #processMessage
        function #tryCallHandler
        function #handleResponse
        function #sendMessage
    }
    RequestError {
        number code
        string message
        object data
    }
    
    %% fileSystemService.ts
    AcpFileSystemService {
        acp.Client client
        string sessionId
        acp.FileSystemCapability capabilities
        FileSystemService fallback
    }
    
    %% schema.ts
    schema {
        object AGENT_METHODS
        object CLIENT_METHODS
        number PROTOCOL_VERSION
        z.ZodSchema writeTextFileRequestSchema
        z.ZodSchema readTextFileRequestSchema
        z.ZodSchema permissionOptionKindSchema
        z.ZodSchema roleSchema
        z.ZodSchema textResourceContentsSchema
        z.ZodSchema blobResourceContentsSchema
        z.ZodSchema toolKindSchema
        z.ZodSchema toolCallStatusSchema
        z.ZodSchema writeTextFileResponseSchema
        z.ZodSchema readTextFileResponseSchema
        z.ZodSchema requestPermissionOutcomeSchema
        z.ZodSchema cancelNotificationSchema
        z.ZodSchema authenticateRequestSchema
        z.ZodSchema authenticateResponseSchema
        z.ZodSchema newSessionResponseSchema
        z.ZodSchema loadSessionResponseSchema
        z.ZodSchema stopReasonSchema
        z.ZodSchema promptResponseSchema
        z.ZodSchema toolCallLocationSchema
        z.ZodSchema planEntrySchema
        z.ZodSchema permissionOptionSchema
        z.ZodSchema annotationsSchema
        z.ZodSchema requestPermissionResponseSchema
        z.ZodSchema fileSystemCapabilitySchema
        z.ZodSchema envVariableSchema
        z.ZodSchema mcpServerSchema
        z.ZodSchema agentCapabilitiesSchema
        z.ZodSchema authMethodSchema
        z.ZodSchema promptCapabilitiesSchema
        z.ZodSchema clientResponseSchema
        z.ZodSchema clientNotificationSchema
        z.ZodSchema embeddedResourceResourceSchema
        z.ZodSchema newSessionRequestSchema
        z.ZodSchema loadSessionRequestSchema
        z.ZodSchema initializeResponseSchema
        z.ZodSchema contentBlockSchema
        z.ZodSchema toolCallContentSchema
        z.ZodSchema toolCallSchema
        z.ZodSchema clientCapabilitiesSchema
        z.ZodSchema promptRequestSchema
        z.ZodSchema sessionUpdateSchema
        z.ZodSchema agentResponseSchema
        z.ZodSchema requestPermissionRequestSchema
        z.ZodSchema initializeRequestSchema
        z.ZodSchema sessionNotificationSchema
        z.ZodSchema clientRequestSchema
        z.ZodSchema agentRequestSchema
        z.ZodSchema agentNotificationSchema
    }
    
    %% zedIntegration.ts
    runZedIntegration {
        WritableStream stdout
        ReadableStream stdin
        function AgentSideConnection
    }
    GeminiAgent {
        Map sessions
        acp.ClientCapabilities clientCapabilities
        Config config
        LoadedSettings settings
        Extension[] extensions
        CliArgs argv
        acp.Client client
    }
    Session {
        string id
        GeminiChat chat
        Config config
        acp.Client client
        AbortController pendingPrompt
    }
    
    %% checks.ts
    assumeExhaustive {
        never _value
    }
    checkExhaustive {
        never value
        string msg
    }
    
    %% cleanup.ts
    registerCleanup {
        function fn
    }
    runExitCleanup {
        Array~function~ cleanupFunctions
        function fn
    }
    cleanupCheckpoints {
        Storage storage
        string tempDir
        string checkpointsDir
    }
    
    %% deepMerge.ts
    isPlainObject {
        unknown item
    }
    mergeRecursively {
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
    customDeepMerge {
        function getMergeStrategyForPath
        MergeableObject[] sources
        MergeableObject result
        MergeableObject source
    }
    
    %% dialogScopeUtils.ts
    getScopeItems {
        object[] scopeItems
    }
    getScopeMessageForSetting {
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
    
    %% envVarResolver.ts
    resolveEnvVarsInString {
        string value
        RegExp envVarRegex
        string match
        string varName1
        string varName2
        string varName
    }
    resolveEnvVarsInObject {
        T obj
        WeakSet~object~ visited
    }
    resolveEnvVarsInObjectInternal {
        T obj
        WeakSet~object~ visited
        T result
        T newObj
        string key
    }
    
    %% errors.ts
    getErrorMessage {
        unknown error
    }
    
    %% events.ts
    events {
        AppEvent AppEvent
        EventEmitter appEvents
    }
    
    %% gitUtils.ts
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
    
    %% handleAutoUpdate.ts
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
        function addItem
        function setUpdateInfo
        boolean successfullyInstalled
        function handleUpdateRecieved
        function handleUpdateFailed
        function handleUpdateSuccess
        function handleUpdateInfo
        UpdateObject info
        string savedMessage
        object data
    }
    
    %% installationInfo.ts
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
    
    %% package.ts
    package {
        string __filename
        string __dirname
        PackageJson packageJson
    }
    getPackageJson {
        PackageJson packageJson
        ReturnType~typeof readPackageUp~ result
    }
    
    %% resolvePath.ts
    resolvePath {
        string p
        string expandedPath
    }
    
    %% sandbox.ts
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
    
    %% settingsUtils.ts
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
    setPendingSettingValue {
        string key
        boolean value
        Settings pendingSettings
        string[] path
        Settings newSettings
    }
    saveModifiedSettings {
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
    getDisplayValue {
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
    
    %% spawnWrapper.ts
    spawnWrapper {
        typeof spawn spawnWrapper
    }
    
    %% updateEventEmitter.ts
    updateEventEmitter {
        EventEmitter updateEventEmitter
    }
    
    %% version.ts
    getCliVersion {
        PackageJson pkgJson
    }
```