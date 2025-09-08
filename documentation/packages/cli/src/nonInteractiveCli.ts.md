# nonInteractiveCli.ts

非交互式 CLI 模块，用于处理非交互模式下的命令执行。

## 功能概述

1. 处理非交互式命令执行
2. 管理工具调用
3. 处理流式响应
4. 处理错误和异常

## 主要函数

### runNonInteractive(config: Config, input: string, prompt_id: string): Promise<void>
运行非交互式 CLI：
1. 补丁控制台输出
2. 处理 EPIPE 错误
3. 处理 @ 命令
4. 发送消息并处理流式响应
5. 执行工具调用
6. 处理错误和清理

参数：
- config: 应用程序配置
- input: 用户输入
- prompt_id: 提示 ID

## 执行流程

### 1. 初始化
- 创建 ConsolePatcher 实例
- 设置 stdout EPIPE 错误处理
- 创建 AbortController 用于取消操作

### 2. 输入处理
- 调用 handleAtCommand 处理 @ 命令
- 验证处理结果
- 准备消息内容

### 3. 消息循环
- 创建消息数组
- 初始化轮次计数器
- 进入消息处理循环

### 4. 消息发送
- 调用 geminiClient.sendMessageStream 发送消息
- 处理流式响应事件
- 收集工具调用请求

### 5. 工具执行
- 遍历工具调用请求
- 执行工具调用
- 处理工具响应
- 准备下一轮消息

### 6. 输出处理
- 将内容写入 stdout
- 确保最终换行
- 处理流结束

## 错误处理

### FatalInputError
处理 @ 命令处理错误：
- 文件未找到等输入错误
- 终止执行并显示错误信息

### FatalTurnLimitedError
处理轮次限制错误：
- 超过最大会话轮次
- 提供增加轮次的解决方案

### 一般错误处理
- 捕获并格式化 API 错误
- 使用 parseAndFormatApiError 格式化错误信息
- 显示友好的错误信息

## 工具调用处理

### 工具调用执行
- 调用 executeToolCall 执行工具
- 处理工具执行错误
- 收集工具响应部分

### 工具响应处理
- 将工具响应添加到消息中
- 为下一轮对话准备消息

## 清理和资源管理

### ConsolePatcher
- 补丁控制台输出
- 在 finally 块中清理

### 遥测关闭
- 检查遥测 SDK 是否初始化
- 在 finally 块中关闭遥测

### AbortController
- 用于取消操作
- 处理信号中止情况

## 特殊处理

### EPIPE 错误
- 处理管道关闭情况
- 优雅退出

### 流式响应
- 处理 GeminiEventType.Content 事件
- 处理 GeminiEventType.ToolCallRequest 事件
- 支持流式输出

## 使用场景

- 管道输入处理 (echo "prompt" | gemini)
- 脚本中调用 (gemini "prompt" > output.txt)
- 自动化工作流集成