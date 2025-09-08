# mcp.ts

MCP（Model Context Protocol）命令模块，用于管理 MCP 服务器。

## 功能概述

1. 注册 MCP 子命令
2. 提供 MCP 服务器管理功能
3. 集成到主 CLI 命令系统

## 主要导出

### mcpCommand: CommandModule
Yargs 命令模块，定义 MCP 命令：
- command: 'mcp'
- describe: 'Manage MCP servers'
- builder: 配置子命令
  - add: 添加 MCP 服务器
  - remove: 移除 MCP 服务器
  - list: 列出 MCP 服务器
- handler: 命令处理器

## 子命令

### addCommand
添加新的 MCP 服务器配置：
- 支持 stdio、sse、http 传输类型
- 可设置环境变量和 HTTP 头
- 支持超时和信任设置
- 可设置描述和工具包含/排除列表

### removeCommand
移除现有的 MCP 服务器配置：
- 按名称删除服务器配置
- 支持用户和项目作用域

### listCommand
列出所有配置的 MCP 服务器：
- 显示服务器状态（连接/断开）
- 显示服务器类型和配置信息
- 支持颜色化输出

## 使用示例

```bash
# 添加新的 MCP 服务器
gemini mcp add my-server python /path/to/server.py

# 列出所有 MCP 服务器
gemini mcp list

# 移除 MCP 服务器
gemini mcp remove my-server
```