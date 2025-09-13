# 工具系统

工具系统是 iFlow CLI 的核心功能之一，允许 AI 助手执行各种操作。

## 核心接口和类

### ToolInvocation 接口
表示已验证并准备执行的工具调用，包含：
- `params` - 验证后的参数
- `getDescription()` - 获取执行前的描述
- `toolLocations()` - 确定工具将影响的文件系统路径
- `shouldConfirmExecute()` - 确定是否需要确认执行
- `execute()` - 执行工具

### ToolBuilder 接口
工具构建器接口，用于验证参数并创建调用：
- `name` - 工具内部名称
- `displayName` - 用户友好的显示名称
- `description` - 工具描述
- `kind` - 工具类型
- `schema` - 函数声明模式
- `build()` - 验证参数并构建调用

### DeclarativeTool 抽象类
新工具的基类，分离验证和执行：
- `validateToolParams()` - 验证工具参数
- `buildAndExecute()` - 构建并执行工具
- `validateBuildAndExecute()` - 验证、构建并执行工具

### BaseDeclarativeTool 抽象类
声明式工具的基类，提供参数验证：
- `validateToolParamValues()` - 验证工具参数值
- `createInvocation()` - 创建工具调用实例

## 工具结果和相关类型

### ToolResult 接口
工具执行结果，包含：
- `llmContent` - 供LLM历史记录使用的内容
- `returnDisplay` - 用户显示的Markdown字符串
- `error` - 错误信息（如果执行失败）

### ToolCallConfirmationDetails 类型
工具调用确认详情的联合类型：
- `ToolEditConfirmationDetails` - 编辑确认
- `ToolExecuteConfirmationDetails` - 执行确认
- `ToolMcpConfirmationDetails` - MCP确认
- `ToolInfoConfirmationDetails` - 信息确认

## 工具类型枚举

### Kind 枚举
工具分类：
- `Read` - 读取
- `Edit` - 编辑
- `Delete` - 删除
- `Move` - 移动
- `Search` - 搜索
- `Execute` - 执行
- `Think` - 思考
- `Fetch` - 获取
- `Other` - 其他

### ToolConfirmationOutcome 枚举
工具确认结果：
- `ProceedOnce` - 仅此次执行
- `ProceedAlways` - 总是执行
- `ProceedAlwaysServer` - 总是对服务器执行
- `ProceedAlwaysTool` - 总是对工具执行
- `ModifyWithEditor` - 使用编辑器修改
- `Cancel` - 取消

## 辅助函数

### hasCycleInSchema()
检测JSON模式中由于`$ref`引起的循环。

### isTool()
类型守卫函数，检查对象是否为工具。