# Tools Framework

此模块定义了 Gemini CLI 应用程序中工具的核心框架，提供用于创建、验证和执行工具的接口和基类。

## 核心接口

### ToolInvocation
表示已验证并准备执行的工具调用，具有以下方法：
- `getDescription()`: 返回工具操作的 markdown 描述
- `toolLocations()`: 返回工具将影响的文件系统路径
- `shouldConfirmExecute()`: 确定执行前是否需要用户确认
- `execute()`: 使用验证后的参数执行工具

### ToolBuilder
用于验证参数并创建调用的工具构建器接口：
- `name`: 用于 API 调用的内部工具名称
- `displayName`: 用户友好的显示名称
- `description`: 工具功能的描述
- `kind`: 用于权限的工具类别
- `schema`: 函数声明模式
- `isOutputMarkdown`: 输出是否应渲染为 markdown
- `canUpdateOutput`: 工具是否支持实时流输出
- `build()`: 验证参数并构建准备执行的调用

### ToolResult
表示工具执行结果的接口：
- `llmContent`: 用于 LLM 历史的内容
- `returnDisplay`: 用于用户显示的 markdown 字符串
- `error`: 可选的错误信息（如果工具调用失败）

## 基类

### BaseToolInvocation
实现 ToolInvocation 接口的便利基类，为可选方法提供默认实现。

### DeclarativeTool
将验证与执行分离的抽象基类：
- 提供 `buildAndExecute()` 便利方法
- 包含使用 `validateBuildAndExecute()` 的错误处理
- 使用从不抛出的 `silentBuild()` 方法

### BaseDeclarativeTool
使用 SchemaValidator 进行内置参数验证的 DeclarativeTool 扩展：
- 使用验证实现 `build()`
- 为 JSON 模式验证提供 `validateToolParams()`
- 为自定义验证提供 `validateToolParamValues()`
- 需要实现 `createInvocation()` 以创建实际调用

## 类型定义

### ToolResultDisplay
工具结果显示的联合类型：字符串或 FileDiff

### FileDiff
文件差异信息的接口：
- `fileDiff`: 差异内容
- `fileName`: 文件名
- `originalContent`: 原始文件内容
- `newContent`: 新文件内容
- `diffStat`: 可选的差异统计信息

### DiffStat
差异统计信息的接口：
- 模型和用户添加/删除的行数和字符数

### ToolCallConfirmationDetails
不同确认类型的联合：
- `ToolEditConfirmationDetails`: 用于文件编辑
- `ToolExecuteConfirmationDetails`: 用于命令执行
- `ToolMcpConfirmationDetails`: 用于 MCP 工具调用
- `ToolInfoConfirmationDetails`: 用于信息提示

### ToolConfirmationPayload
工具确认的有效载荷，用于覆盖可修改工具中的内容。

### ToolLocation
表示受工具影响的文件系统位置：
- `path`: 绝对文件路径
- `line`: 可选的行号

## 枚举

### ToolConfirmationOutcome
工具确认的可能结果：
- `ProceedOnce`: 仅执行此实例
- `ProceedAlways`: 总是允许此工具
- `ProceedAlwaysServer`: 总是允许此 MCP 服务器
- `ProceedAlwaysTool`: 总是允许此特定工具
- `ModifyWithEditor`: 允许用户修改内容
- `Cancel`: 取消工具执行

### Kind
用于权限的工具类别：
- `Read`, `Edit`, `Delete`, `Move`, `Search`, `Execute`, `Think`, `Fetch`, `Other`

## 实用函数

### hasCycleInSchema
检测由于 `$ref` 引起的 JSON 模式中的循环，防止模式验证期间的无限循环。

## 类型守卫

### isTool
类型守卫，检查对象是否为工具。

## 类型别名

### AnyToolInvocation
具有未知参数和结果类型的工具调用的类型别名。

### AnyDeclarativeTool
具有未知参数和结果类型的声明式工具的类型别名。