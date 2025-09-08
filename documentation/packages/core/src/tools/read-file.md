# ReadFileTool 类

ReadFileTool 是一个用于读取文件内容的工具实现。

## 主要功能

1. **文件读取**：读取指定文件的内容
2. **内容处理**：处理文本、图像和PDF文件
3. **分页支持**：支持读取大文件的特定行范围
4. **路径验证**：验证文件路径的有效性
5. **遥测记录**：记录文件操作的遥测数据

## 核心组件

### ReadFileToolParams 接口
定义工具参数：
- `absolute_path` - 文件的绝对路径（必需）
- `offset` - 起始行号（可选）
- `limit` - 读取行数（可选）

### ReadFileTool 类
继承自 `BaseDeclarativeTool`，实现文件读取功能：
- `Name` - 工具名称：'read_file'
- `validateToolParamValues()` - 验证参数值
- `createInvocation()` - 创建工具调用实例

### ReadFileToolInvocation 类
实现具体的文件读取逻辑：
- `getDescription()` - 获取文件描述
- `toolLocations()` - 获取工具位置
- `execute()` - 执行文件读取

## 特殊功能

### 内容截断处理
当文件内容过大时，工具会自动截断内容并提供继续读取的指导：
- 显示当前显示的行范围
- 提供下一次读取的offset参数建议
- 在内容前添加截断状态信息

### 多媒体文件支持
支持处理多种文件类型：
- 文本文件
- 图像文件（PNG, JPG, GIF, WEBP, SVG, BMP）
- PDF文件

### 遥测集成
记录文件操作的详细信息：
- 文件扩展名
- MIME类型
- 编程语言
- 操作类型（读取）