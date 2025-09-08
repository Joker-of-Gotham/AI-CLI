# add.ts

MCP 服务器添加命令，用于向配置中添加新的 MCP 服务器。

## 功能概述

1. 添加新的 MCP 服务器配置
2. 支持多种传输类型（stdio、sse、http）
3. 配置服务器参数（环境变量、超时、信任等）

## 主要函数

### addMcpServer()
添加或更新 MCP 服务器配置：
- 根据传输类型创建相应的服务器配置
- 处理环境变量和 HTTP 头设置
- 支持超时、信任、描述等选项
- 支持工具包含和排除列表
- 保存到指定作用域（用户或工作区）

### addCommand: CommandModule
Yargs 命令模块，定义 add 子命令：
- command: 'add <name> <commandOrUrl> [args...]'
- describe: 'Add a server'
- builder: 参数构建器
  - name: 服务器名称（必需）
  - commandOrUrl: 命令或 URL（必需）
  - args: 服务器参数（可选）
  - scope: 配置作用域（用户或项目）
  - transport: 传输类型（stdio、sse、http）
  - env: 环境变量设置
  - header: HTTP 头设置
  - timeout: 连接超时设置
  - trust: 信任服务器设置
  - description: 服务器描述
  - include-tools: 包含的工具列表
  - exclude-tools: 排除的工具列表
- handler: 命令处理器

## 传输类型支持

### stdio（默认）
- command: 执行命令
- args: 命令参数
- env: 环境变量

### sse
- url: SSE 服务器 URL
- headers: HTTP 头
- timeout: 超时设置

### http
- httpUrl: HTTP 服务器 URL
- headers: HTTP 头
- timeout: 超时设置

## 使用示例

```bash
# 添加 stdio 类型的服务器
gemini mcp add my-python-server python /path/to/server.py --scope user

# 添加 HTTP 类型的服务器
gemini mcp add my-http-server http://localhost:8080 --transport http

# 添加带环境变量的服务器
gemini mcp add my-server python /path/to/server.py -e API_KEY=abc123 -e DEBUG=true

# 添加带 HTTP 头的 SSE 服务器
gemini mcp add my-sse-server http://localhost:8080/stream --transport sse -H "Authorization: Bearer token"
```