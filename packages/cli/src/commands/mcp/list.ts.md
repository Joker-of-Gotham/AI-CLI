# list.ts

MCP 服务器列表命令，用于显示所有配置的 MCP 服务器及其连接状态。

## 功能概述

1. 列出所有配置的 MCP 服务器
2. 测试服务器连接状态
3. 显示服务器详细信息
4. 支持颜色化状态指示

## 主要函数

### getMcpServersFromConfig()
从配置中获取所有 MCP 服务器：
- 加载用户设置
- 加载扩展配置
- 合并服务器配置
- 处理扩展名称

### testMCPConnection(serverName: string, config: MCPServerConfig): Promise<MCPServerStatus>
测试 MCP 服务器连接：
- 创建传输连接
- 尝试连接服务器
- 发送 ping 测试
- 返回连接状态

### getServerStatus(serverName: string, server: MCPServerConfig): Promise<MCPServerStatus>
获取服务器状态：
- 调用连接测试函数
- 返回服务器状态

### listMcpServers(): Promise<void>
列出 MCP 服务器：
- 获取所有配置的服务器
- 测试每个服务器的连接状态
- 显示服务器名称、类型和状态
- 使用颜色化输出状态指示

### listCommand: CommandModule
Yargs 命令模块，定义 list 子命令：
- command: 'list'
- describe: 'List all configured MCP servers'
- handler: 调用 listMcpServers 函数

## 状态指示

### 颜色编码
- 绿色 (✓): 已连接
- 黄色 (…): 连接中
- 红色 (✗): 已断开

### 服务器信息显示
- 服务器名称
- 传输类型 (stdio/sse/http)
- 连接状态
- 服务器地址/命令

## 使用示例

```bash
# 列出所有 MCP 服务器
gemini mcp list
```

输出示例：
```
Configured MCP servers:

✓ python-server: python /path/to/server.py (stdio) - Connected
✗ http-server: http://localhost:8080 (http) - Disconnected
```