# mockCommandContext.ts

此文件提供了创建模拟 CommandContext 对象的实用程序，用于测试目的。

## 概述

该文件导出一个 `createMockCommandContext` 函数，该函数创建一个深度、完全类型的 CommandContext 模拟，用于测试。所有函数都预先使用 `vi.fn()` 进行模拟。

## 类型

### DeepPartial

```typescript
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
```

一个实用类型，使对象及其嵌套对象的所有属性变为部分。这允许灵活地覆盖模拟值。

## 函数

### createMockCommandContext

```typescript
export const createMockCommandContext = (
  overrides: DeepPartial<CommandContext> = {},
): CommandContext
```

创建一个深度、完全类型的 CommandContext 模拟，用于测试。

**参数:**
- `overrides`: 用于覆盖任何默认模拟值的深度部分对象

**返回:**
- 完整的模拟 CommandContext 对象

## 实现细节

### 默认模拟

该函数为 CommandContext 的所有属性创建默认模拟：
- `invocation`: 带有空值的模拟调用数据
- `services`: 包括配置、设置、git 和记录器的模拟服务
- `ui`: 模拟 UI 函数，如 addItem、clear、setDebugMessage 等
- `session`: 包括 shell 白名单和统计信息的模拟会话数据

模拟上下文中的所有函数都预先使用 `vi.fn()` 进行模拟，以便于测试和验证函数调用。

### 合并函数

实现包含一个自定义合并函数，该函数：
1. 递归合并普通对象，同时保留特殊对象类型如 Date
2. 对非对象值执行直接赋值
3. 处理默认模拟与覆盖的合并

### 使用示例

```typescript
// 创建基本模拟上下文
const mockContext = createMockCommandContext();

// 创建带有特定覆盖的模拟上下文
const mockContextWithOverrides = createMockCommandContext({
  invocation: {
    raw: '/test command',
    name: 'test',
    args: 'argument'
  },
  services: {
    config: mockConfig
  }
});
```

此实用程序通过提供可轻松为特定测试场景定制的完全功能的模拟上下文来简化测试。