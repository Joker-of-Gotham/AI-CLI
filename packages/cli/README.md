# Gemini CLI 代码说明文档索引

本文档提供了 E:\技术提升\AI-CLI\packages\cli 目录中所有代码文件的详细说明。

## 目录结构

```
packages/cli/
├── index.ts
├── src/
│   ├── gemini.tsx
│   ├── nonInteractiveCli.ts
│   ├── config/
│   │   ├── config.ts
│   │   ├── settings.ts
│   │   └── extension.ts
│   ├── core/
│   │   ├── initializer.ts
│   │   └── auth.ts
│   ├── utils/
│   │   └── readStdin.ts
│   ├── ui/
│   │   └── AppContainer.tsx
│   ├── commands/
│   │   ├── mcp/
│   │   │   ├── mcp.ts
│   │   │   ├── add.ts
│   │   │   ├── list.ts
│   │   │   └── remove.ts
│   │   └── extensions/
│   │       ├── extensions.tsx
│   │       ├── install.ts
│   │       └── list.ts
```

## 核心模块说明

### 入口文件
- [index.ts](index.ts.md) - CLI 入口文件，处理全局错误和应用启动

### 主应用
- [gemini.tsx](src/gemini.tsx.md) - 主应用程序文件，包含核心逻辑和 UI 初始化

### 配置管理
- [config.ts](src/config/config.ts.md) - 命令行参数解析和配置加载
- [settings.ts](src/config/settings.ts.md) - 多级设置管理和迁移
- [extension.ts](src/config/extension.ts.md) - 扩展安装、加载和管理

### 核心功能
- [initializer.ts](src/core/initializer.ts.md) - 应用程序初始化
- [auth.ts](src/core/auth.ts.md) - 认证处理

### 工具函数
- [readStdin.ts](src/utils/readStdin.ts.md) - 标准输入读取
- [nonInteractiveCli.ts](src/nonInteractiveCli.ts.md) - 非交互模式处理

### UI 组件
- [AppContainer.tsx](src/ui/AppContainer.tsx.md) - 应用程序容器组件

### 命令系统

#### MCP 命令
- [mcp.ts](src/commands/mcp/mcp.ts.md) - MCP 命令注册和管理
- [add.ts](src/commands/mcp/add.ts.md) - 添加 MCP 服务器
- [list.ts](src/commands/mcp/list.ts.md) - 列出 MCP 服务器
- [remove.ts](src/commands/mcp/remove.ts.md) - 移除 MCP 服务器

#### 扩展命令
- [extensions.tsx](src/commands/extensions/extensions.tsx.md) - 扩展命令注册和管理
- [install.ts](src/commands/extensions/install.ts.md) - 安装扩展
- [list.ts](src/commands/extensions/list.ts.md) - 列出扩展

## 功能概述

### 应用程序架构
Gemini CLI 采用模块化设计，主要包含以下几个核心部分：
1. 命令行参数解析和配置管理
2. 扩展系统支持
3. MCP（Model Context Protocol）服务器集成
4. 终端用户界面（TUI）
5. 认证和安全机制
6. 内存管理和上下文处理

### 主要特性
1. **交互式和非交互式模式** - 支持终端交互和脚本调用
2. **扩展系统** - 可通过扩展增加功能
3. **MCP 集成** - 支持 Model Context Protocol 服务器
4. **主题定制** - 支持多种终端主题
5. **工具调用** - 支持执行各种工具命令
6. **认证管理** - 支持多种认证方式
7. **设置系统** - 多级设置（系统、用户、工作区）

### 扩展系统
CLI 支持通过扩展来增加功能，包括：
1. MCP 服务器配置
2. 自定义上下文文件
3. 工具排除列表
4. Git 仓库安装
5. 本地路径安装

### MCP 支持
Model Context Protocol 支持：
1. stdio 传输类型
2. SSE 传输类型
3. HTTP 传输类型
4. 服务器状态检查
5. 工具包含/排除配置

## 使用说明

### 启动应用
```bash
# 交互式模式
gemini

# 非交互式模式
gemini "你的问题"

# 管道输入
echo "你的问题" | gemini
```

### MCP 管理
```bash
# 添加 MCP 服务器
gemini mcp add my-server python /path/to/server.py

# 列出 MCP 服务器
gemini mcp list

# 移除 MCP 服务器
gemini mcp remove my-server
```

### 扩展管理
```bash
# 安装扩展
gemini extensions install user/repo

# 列出扩展
gemini extensions list

# 卸载扩展
gemini extensions uninstall my-extension
```