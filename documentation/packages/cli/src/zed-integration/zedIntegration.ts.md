# zedIntegration.ts

这个文件实现了与Zed编辑器的集成，提供了一个ACP代理来处理与Zed的通信。

## 功能概述

1. 运行Zed集成服务
2. 处理ACP协议的代理端实现
3. 管理会话和提示处理
4. 处理工具调用和文件系统操作

## 函数和类结构

### runZedIntegration
- 启动Zed集成服务
- 创建ACP代理连接
- 重定向控制台输出到stderr

### GeminiAgent
- 实现代理接口
- 处理初始化、认证、新建会话、取消和提示请求
- 管理会话映射

### Session
- 管理会话状态
- 处理提示请求和工具调用
- 解析提示内容并处理文件引用

### 辅助函数
- `toToolCallContent`: 将工具结果转换为工具调用内容
- `toPermissionOptions`: 将确认详情转换为权限选项

## 依赖关系

- 依赖 `node:stream/web` 中的流类型
- 依赖 `@google/gemini-cli-core` 中的各种类型和函数
- 依赖 `./acp.js` 中的ACP协议定义
- 依赖 `./fileSystemService.js` 中的文件系统服务
- 依赖 `node:stream` 中的Readable和Writable
- 依赖 `@google/genai` 中的内容和部分类型
- 依赖 `../config/settings.js` 中的设置类型和范围
- 依赖 `node:fs/promises` 和 `node:path` 进行文件操作
- 依赖 `zod` 进行数据验证
- 依赖 `node:crypto` 生成UUID
- 依赖 `../config/extension.js` 中的扩展类型
- 依赖 `../config/config.js` 中的配置类型和加载函数

## 函数级调用关系

```mermaid
erDiagram
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
```

## 变量级调用关系

```mermaid
erDiagram
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
```