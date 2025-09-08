# is-in-ci.ts

此文件提供了 `is-in-ci` 包的替代实现，始终返回 false。

## 目的

此补丁的目的是解决 `ink` 库在检测到在 CI 环境中运行时不渲染 UI 的问题。这是安全的，因为 `ink`（因此 `is-in-ci`）仅在 CLI 的交互式代码路径中使用。

## 实现

```typescript
const isInCi = false;
export default isInCi;
```

实现很简单 - 它只是导出一个常量 `false` 值来覆盖原始 `is-in-ci` 包的行为。

## 相关问题

有关此补丁解决的问题的更多详细信息，请参见问题 #1563。