# constants.ts

## 概述

`constants.ts` 是 cli 包中定义用户界面常量的模块。该文件导出一系列用于 UI 组件的常量值。

## 导出的常量

### UI 尺寸常量
- `EstimatedArtWidth`: 预估艺术字宽度（59）
- `BoxBorderWidth`: 边框宽度（1）
- `BOX_PADDING_X`: 水平内边距（1）
- `UI_WIDTH`: 计算得出的 UI 宽度（约 63）

### 流处理常量
- `STREAM_DEBOUNCE_MS`: 流处理防抖时间（100ms）

### 工具常量
- `SHELL_COMMAND_NAME`: Shell 命令名称（"Shell Command"）

### 工具状态符号
- `TOOL_STATUS`: 工具状态符号对象：
  - `SUCCESS`: 成功（'✓'）
  - `PENDING`: 等待（'o'）
  - `EXECUTING`: 执行中（'⊷'）
  - `CONFIRMING`: 确认中（'?'）
  - `CANCELED`: 已取消（'-'）
  - `ERROR`: 错误（'x'）

## 使用场景

该模块主要用于：
1. 提供 UI 组件的一致尺寸和布局值
2. 定义工具状态的可视化符号
3. 配置流处理的防抖时间
4. 统一管理 UI 相关的常量值

## 设计考虑

该模块的设计考虑了：
1. 将相关常量组织在一起便于维护
2. 使用有意义的常量名称提高代码可读性
3. 通过计算值确保 UI 尺寸的一致性
4. 使用 TypeScript 的 const 断言确保类型安全