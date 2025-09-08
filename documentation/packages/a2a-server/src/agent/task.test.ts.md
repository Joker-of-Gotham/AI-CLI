# task.test.ts

## 概述

`task.test.ts` 是 a2a-server 包中 `Task` 类的单元测试文件。该文件使用 Vitest 测试框架来验证 `Task` 类的功能，特别是 `scheduleToolCalls` 方法的行为。

## 测试内容

### scheduleToolCalls 测试
该测试验证 `scheduleToolCalls` 方法不会修改传入的工具调用请求数组：

1. 创建一个模拟的 `Task` 实例，绕过私有构造函数的限制用于测试
2. 设置模拟方法 `setTaskStateAndPublishUpdate` 和 `getProposedContent`
3. 创建一个包含单个工具调用请求的数组
4. 调用 `scheduleToolCalls` 方法处理工具调用请求
5. 验证原始请求数组在方法调用后保持不变

## 使用的技术

- **Vitest**: 测试框架，提供 `describe`、`it`、`expect` 和 `vi` 等测试工具
- **Mocking**: 使用 `vi.fn()` 创建模拟函数来替代实际实现
- **TypeScript**: 使用类型断言和类型导入确保类型安全

## 依赖模块

- `@google/gemini-cli-core`: 提供 `Config` 和 `ToolCallRequestInfo` 类型
- `@a2a-js/sdk/server`: 提供 `ExecutionEventBus` 类型
- `../utils/testing_utils.js`: 提供 `createMockConfig` 工具函数

## 测试策略

该测试文件采用单元测试策略，专注于测试 `Task` 类的特定方法，确保其行为符合预期，特别是在处理工具调用请求时不会意外修改输入数据。