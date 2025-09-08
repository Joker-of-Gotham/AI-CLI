# Token 限制管理

Token 限制管理模块负责定义和管理不同 Gemini 模型的 token 限制。

## 核心函数

### tokenLimit()
根据模型名称返回相应的 token 限制数量。

支持的模型和对应的 token 限制：
- `gemini-1.5-pro`: 2,097,152 tokens
- `gemini-1.5-flash` 及相关变体: 1,048,576 tokens
- `gemini-2.0-flash-preview-image-generation`: 32,000 tokens
- 默认值: 1,048,576 tokens

## 常量

### DEFAULT_TOKEN_LIMIT
默认 token 限制值：1,048,576 tokens

## 使用说明

该模块通过 `tokenLimit()` 函数为聊天压缩和其他需要了解模型容量的功能提供准确的 token 限制信息。这对于确保聊天历史不会超过模型处理能力至关重要。