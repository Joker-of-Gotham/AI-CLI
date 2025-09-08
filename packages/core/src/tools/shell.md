# ShellTool 类

ShellTool 是一个用于执行 shell 命令的工具实现。

## 主要功能

1. **命令执行**：执行 shell 命令
2. **流式输出**：实时流式输出命令结果
3. **安全确认**：对敏感命令进行确认
4. **路径验证**：验证执行目录
5. **遥测记录**：记录命令执行的遥测数据

## 核心组件

### ShellToolParams 接口
定义工具参数：
- `command` - 要执行的命令（必需）
- `description` - 命令描述（可选）
- `directory` - 执行目录（可选）

### ShellTool 类
继承自 `BaseDeclarativeTool`，实现 shell 命令执行功能：
- `Name` - 工具名称：'run_shell_command'
- `validateToolParamValues()` - 验证参数值
- `createInvocation()` - 创建工具调用实例

### ShellToolInvocation 类
实现具体的命令执行逻辑：
- `getDescription()` - 获取命令描述
- `shouldConfirmExecute()` - 确定是否需要确认执行
- `execute()` - 执行 shell 命令

## 特殊功能

### 流式输出处理
支持实时输出命令执行结果：
- 定期更新输出（默认每秒）
- 检测二进制输出并适当处理
- 支持 ANSI 转义序列清理

### 跨平台支持
支持不同操作系统的命令执行：
- Windows：使用 `cmd.exe /c`
- 其他系统：使用 `bash -c`

### 进程管理
完善的进程管理功能：
- 支持后台进程启动
- 正确处理进程组终止
- 优雅处理用户取消

### 安全机制
多层安全保护：
- 命令白名单机制
- 敏感命令确认
- 目录限制
- 路径验证

### 遥测集成
记录命令执行的详细信息：
- 命令执行时间
- 退出码
- 输出大小
- 错误信息