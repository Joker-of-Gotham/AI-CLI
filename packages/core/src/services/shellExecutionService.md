# Shell 执行服务 (ShellExecutionService)

Shell 执行服务提供跨平台的 shell 命令执行功能，支持 robust 进程管理、流式输出和实时交互。

## 主要功能

1. **跨平台执行**：支持 Windows 和 POSIX 系统
2. **流式输出**：实时流式输出命令结果
3. **进程管理**：完善的进程生命周期管理
4. **信号处理**：正确处理用户中断和进程终止
5. **编码处理**：自动检测和处理不同文本编码

## 核心数据结构

### ShellExecutionResult
命令执行结果：
- `rawOutput` - 原始输出缓冲区
- `output` - 解码后的输出字符串
- `exitCode` - 退出码
- `signal` - 终止信号
- `error` - 错误对象
- `aborted` - 是否被用户中止
- `pid` - 进程ID
- `executionMethod` - 执行方法

### ShellOutputEvent
执行过程中的事件：
- `data` - 数据事件，包含输出块
- `binary_detected` - 检测到二进制输出
- `binary_progress` - 二进制输出进度

## 核心方法

### execute()
执行 shell 命令的主要入口：
- 支持 node-pty 和 child_process 两种执行方式
- 提供流式事件回调
- 支持中断信号处理
- 自动选择最佳执行方法

### executeWithPty()
使用 node-pty 执行命令：
- 提供更好的终端仿真
- 支持复杂交互式命令
- 更好的输出格式处理

### childProcessFallback()
使用 child_process 执行命令：
- 作为备用执行方法
- 更好的兼容性
- 简化的进程管理

## 特殊功能

### 编码处理
自动检测和处理不同文本编码：
- 使用 getCachedEncodingForBuffer 检测编码
- 支持 UTF-8、GBK 等常见编码
- 优雅处理编码错误

### ANSI 转义序列处理
清理输出中的 ANSI 转义序列：
- 使用 stripAnsi 清理颜色代码
- 保持输出的可读性
- 支持终端特性检测

### 二进制输出检测
智能检测和处理二进制输出：
- 嗅探输出数据判断是否为二进制
- 提供二进制进度信息
- 避免二进制数据污染文本输出

### 进程终止处理
完善的进程终止机制：
- 支持 SIGTERM 和 SIGKILL 信号
- Windows 平台使用 taskkill
- POSIX 平台使用进程组管理
- 优雅处理超时情况

## 跨平台支持

### Windows 支持
- 使用 cmd.exe 作为默认 shell
- 使用 taskkill 终止进程
- 处理 Windows 特定的路径和参数

### POSIX 支持
- 使用 bash 作为默认 shell
- 使用进程组管理
- 支持标准 Unix 信号处理