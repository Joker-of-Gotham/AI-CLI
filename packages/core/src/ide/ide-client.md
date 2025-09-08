# IDE 客户端 (IdeClient)

IDE 客户端负责管理与 IDE 服务器的连接和交互。

## 主要功能

1. **连接管理**：建立和维护与 IDE 的连接
2. **差异处理**：打开和关闭文件差异视图
3. **状态跟踪**：跟踪连接状态和 IDE 上下文
4. **进程检测**：检测运行中的 IDE 进程

## 核心组件

### IDEConnectionState
连接状态接口：
- `status` - 连接状态
- `details` - 详细信息

### IDEConnectionStatus 枚举
连接状态枚举：
- `Connected` - 已连接
- `Disconnected` - 已断开
- `Connecting` - 连接中

## 核心方法

### getInstance()
获取 IDE 客户端单例实例：
- 异步初始化
- 检测运行中的 IDE 进程
- 识别 IDE 类型

### connect()
建立与 IDE 的连接：
1. 验证工作区路径
2. 尝试 HTTP 连接
3. 尝试 Stdio 连接
4. 处理连接错误

### openDiff()
打开文件差异视图：
- 显示建议的更改
- 等待用户接受或拒绝
- 返回用户决策结果

### closeDiff()
关闭文件差异视图：
- 可选择是否发送通知
- 返回文件内容

### disconnect()
断开与 IDE 的连接：
- 关闭所有打开的差异视图
- 清理资源
- 更新连接状态

## 事件处理

### 状态变更监听
- `addStatusChangeListener()` - 添加状态变更监听器
- `removeStatusChangeListener()` - 移除状态变更监听器

### 信任变更监听
- `addTrustChangeListener()` - 添加信任变更监听器
- `removeTrustChangeListener()` - 移除信任变更监听器

## 辅助功能

### 工作区验证
`validateWorkspacePath()` 验证工作区路径：
- 检查 IDE 工作区路径是否存在
- 验证当前目录是否在工作区内
- 提供详细的错误信息

### 连接配置
支持多种连接配置方式：
- 环境变量配置
- 配置文件
- HTTP 连接
- Stdio 连接

### 进程检测
`getIdeProcessInfo()` 检测运行中的 IDE 进程：
- 支持 VS Code 及其衍生版本
- 获取进程 PID 和命令行
- 识别 IDE 类型

## 数据结构

### DiffUpdateResult
差异更新结果：
- `status` - 状态（accepted/rejected）
- `content` - 文件内容

### StdioConfig
Stdio 连接配置：
- `command` - 命令路径
- `args` - 命令参数

## 错误处理

### 连接错误
- 提供详细的连接失败信息
- 建议解决方案
- 支持重新连接

### 差异处理错误
- 处理差异视图打开失败
- 优雅处理用户取消操作
- 提供备用交互方式

## 跨平台支持

### 网络配置
- 自动检测容器环境
- 使用适当的主机地址
- 处理代理设置

### 进程管理
- 跨平台进程检测
- 支持不同 IDE 类型
- 处理进程生命周期