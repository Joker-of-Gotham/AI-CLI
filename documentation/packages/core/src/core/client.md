# GeminiClient 类

`GeminiClient` 类是 iFlow CLI 核心模块中的主要客户端实现，负责与 Gemini AI 模型进行交互。

## 主要功能

1. **聊天管理**：管理与 Gemini 模型的聊天会话
2. **历史记录处理**：维护和操作聊天历史记录
3. **工具集成**：设置和管理可用的工具
4. **内容生成**：生成文本内容、JSON 数据和嵌入向量
5. **聊天压缩**：在聊天历史过长时进行压缩以节省 token
6. **IDE 上下文集成**：在 IDE 模式下提供编辑器上下文信息

## 核心方法

### 初始化和配置
- `initialize()` - 初始化客户端
- `startChat(extraHistory?: Content[])` - 开始新的聊天会话
- `resetChat()` - 重置聊天会话

### 聊天操作
- `sendMessageStream()` - 发送消息并以流式方式接收响应
- `addHistory()` - 向聊天历史添加内容
- `setHistory()` - 设置完整的聊天历史
- `getHistory()` - 获取当前聊天历史

### 内容生成
- `generateContent()` - 生成内容
- `generateJson()` - 生成 JSON 格式的内容
- `generateEmbedding()` - 生成文本嵌入向量

### 工具管理
- `setTools()` - 设置可用工具
- `getChatRecordingService()` - 获取聊天记录服务

## 辅助函数

- `isThinkingSupported()` - 检查模型是否支持思考模式
- `isThinkingDefault()` - 检查模型是否默认启用思考模式
- `findIndexAfterFraction()` - 根据比例查找历史记录索引

## 常量

- `MAX_TURNS` - 最大对话轮数
- `COMPRESSION_TOKEN_THRESHOLD` - 触发压缩的 token 阈值
- `COMPRESSION_PRESERVE_THRESHOLD` - 压缩时保留的历史比例