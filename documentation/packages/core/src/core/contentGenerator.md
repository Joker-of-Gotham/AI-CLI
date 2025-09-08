# ContentGenerator 接口和相关实现

## ContentGenerator 接口

`ContentGenerator` 是一个抽象接口，定义了生成内容和计数 token 的核心功能。

### 核心方法

1. **generateContent()** - 生成内容
2. **generateContentStream()** - 以流式方式生成内容
3. **countTokens()** - 计算 token 数量
4. **embedContent()** - 生成嵌入向量

## AuthType 枚举

定义了不同的认证类型：
- `LOGIN_WITH_GOOGLE` - 使用 Google 登录
- `USE_GEMINI` - 使用 Gemini API 密钥
- `USE_VERTEX_AI` - 使用 Vertex AI
- `CLOUD_SHELL` - 在 Cloud Shell 环境中运行

## ContentGeneratorConfig 类型

定义了内容生成器的配置选项，包括：
- `model` - 使用的模型
- `apiKey` - API 密钥
- `vertexai` - 是否使用 Vertex AI
- `authType` - 认证类型
- `proxy` - 代理设置

## 核心函数

### createContentGeneratorConfig()
创建内容生成器配置对象，根据环境变量和配置参数设置适当的认证方式。

### createContentGenerator()
创建内容生成器实例，根据认证类型选择合适的实现：
- 对于 Google 登录和 Cloud Shell，使用 `CodeAssistContentGenerator`
- 对于 API 密钥，使用 `GoogleGenAI` 实现