# vitest.config.ts

## 概述

`vitest.config.ts` 是 cli 包的 Vitest 测试配置文件。Vitest 是一个基于 Vite 的单元测试框架，这个配置文件定义了测试运行的参数和行为。

## 配置详情

该配置文件导出一个 Vitest 配置对象，包含以下设置：

### 测试文件匹配
- `include`: 包含匹配模式为 `**/*.{test,spec}.?(c|m)[jt]s?(x)` 和 `config.test.ts` 的文件
- `exclude`: 排除 `node_modules`、`dist` 和 `cypress` 目录中的文件

### 测试环境
- `environment`: 使用 `jsdom` 作为测试环境
- `globals`: 启用全局 API

### 测试报告器
- `reporters`: 配置测试报告器为默认报告器和 JUnit 报告器
- `silent`: 静默模式运行测试
- `outputFile`: JUnit 报告输出到 `junit.xml` 文件
- `setupFiles`: 测试设置文件为 `./test-setup.ts`

### 代码覆盖率
- `enabled`: 启用代码覆盖率
- `provider`: 使用 V8 作为覆盖率提供者
- `reportsDirectory`: 覆盖率报告输出到 `./coverage` 目录
- `include`: 包含 `src/**/*` 目录中的文件进行覆盖率分析
- `reporter`: 配置多种覆盖率报告格式：
  - `text`: 文本摘要报告，输出到 `full-text-summary.txt`
  - `html`: HTML 格式的详细报告
  - `json`: JSON 格式的报告
  - `lcov`: LCOV 格式的报告
  - `cobertura`: Cobertura XML 格式的报告
  - `json-summary`: JSON 摘要报告，输出到 `coverage-summary.json`

## 使用方式

该配置文件会被 Vitest 自动加载，用于配置测试运行环境。当运行 `npm test` 或 `vitest` 命令时，会使用此配置来执行测试和生成报告。