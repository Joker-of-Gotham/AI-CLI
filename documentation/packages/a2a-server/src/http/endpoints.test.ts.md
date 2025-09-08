# endpoints.test.ts

## 概述

`endpoints.test.ts` 是 a2a-server 包中 HTTP 端点的测试文件。该文件使用 Vitest 测试框架和 Supertest 库来测试 Express 应用的各个 HTTP 端点，验证其功能和行为。

## 测试内容

### 代理服务器端点测试套件
该测试套件专注于验证代理服务器的 HTTP 端点：

1. **任务创建端点** (`POST /tasks`):
   - 验证通过 POST 请求创建新任务的功能
   - 检查返回的任务 ID 是否为字符串类型

2. **特定任务元数据获取端点** (`GET /tasks/:taskId/metadata`):
   - 验证通过任务 ID 获取特定任务元数据的功能
   - 检查返回的元数据是否包含正确的任务 ID

3. **所有任务元数据获取端点** (`GET /tasks/metadata`):
   - 验证获取所有任务元数据的功能
   - 检查返回的元数据数组是否包含刚创建的任务

4. **不存在任务的处理**:
   - 验证对不存在任务 ID 的正确错误响应（404 状态码）

5. **代理卡元数据端点** (`GET /.well-known/agent-card.json`):
   - 验证代理元数据的获取功能
   - 检查返回的代理名称和 URL 是否正确

## 使用的技术

- **Vitest**: 测试框架，提供测试结构和断言
- **Supertest**: HTTP 测试库，用于测试 Express 应用
- **Mocking**: 使用 `vi.mock()` 模拟依赖模块，如日志记录器和任务创建
- **临时目录**: 使用 Node.js 的 `os` 和 `fs` 模块创建临时工作目录进行测试

## 依赖模块

- `vitest`: 测试框架
- `supertest`: HTTP 测试库
- `express`: Express 应用类型
- `node:fs`, `node:path`, `node:os`: Node.js 文件系统和路径处理模块
- `node:http`: Node.js HTTP 服务器类型
- `node:net`: Node.js 网络相关类型
- `../types.js`: 任务元数据类型定义
- `../agent/task.js`: 任务类（被模拟）
- `../utils/logger.js`: 日志记录器（被模拟）

## 测试策略

该测试文件采用集成测试策略，启动真实的 HTTP 服务器并发送实际的 HTTP 请求来验证端点行为。通过模拟核心业务逻辑（如任务创建），专注于测试 HTTP 层的功能和响应。