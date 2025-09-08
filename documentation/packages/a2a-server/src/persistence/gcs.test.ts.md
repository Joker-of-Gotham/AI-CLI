# gcs.test.ts

## 概述

`gcs.test.ts` 是 a2a-server 包中 GCS（Google Cloud Storage）任务存储的测试文件。该文件使用 Vitest 测试框架来测试 `GCSTaskStore` 和 `NoOpTaskStore` 类的功能，验证任务数据在 Google Cloud Storage 中的保存和加载操作。

## 测试内容

### GCSTaskStore 测试套件
该测试套件专注于验证 `GCSTaskStore` 类的功能：

1. **构造函数和初始化测试**:
   - 验证存储桶存在时的初始化过程
   - 验证存储桶不存在时的创建过程
   - 验证存储桶创建失败时的错误处理

2. **任务保存测试**:
   - 验证任务元数据和工作区的保存功能
   - 验证 tar 包创建失败时的错误处理

3. **任务加载测试**:
   - 验证任务元数据和工作区的加载功能
   - 验证元数据不存在时返回 undefined
   - 验证工作区不存在时仅加载元数据

### NoOpTaskStore 测试套件
该测试套件验证 `NoOpTaskStore` 类的功能：

1. **保存方法测试**:
   - 验证保存方法不调用实际存储的保存操作

2. **加载方法测试**:
   - 验证加载方法委托给实际存储进行操作

## 使用的技术

- **Vitest**: 测试框架，提供测试结构和断言
- **Mocking**: 大量使用 `vi.mock()` 和 `vi.fn()` 来模拟依赖模块
- **类型断言**: 使用 Mocked、MockedClass 等类型确保模拟对象的类型安全

## 依赖模块

- `@google-cloud/storage`: Google Cloud Storage 客户端
- `fs-extra`: 文件系统操作扩展库
- `node:fs`: Node.js 文件系统模块
- `tar`: TAR 包处理库
- `node:zlib`: Node.js 压缩库
- `uuid`: UUID 生成库
- `@a2a-js/sdk`: SDK 类型和功能
- `@a2a-js/sdk/server`: SDK 服务器端功能
- `../utils/logger.js`: 日志记录器（被模拟）
- `../config/config.js`: 配置模块（被模拟）
- `../types.js`: 类型定义（被模拟）

## 测试策略

该测试文件采用单元测试策略，通过模拟所有外部依赖来专注于测试 `GCSTaskStore` 和 `NoOpTaskStore` 类的逻辑。测试覆盖了正常流程和各种错误情况，确保类在不同场景下的正确行为。