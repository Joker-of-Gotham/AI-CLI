# test-setup.ts

这个文件是core包测试环境的设置文件。

## 功能概述

1. 重置NO_COLOR环境变量以确保测试行为一致
2. 禁用429错误模拟

## 代码结构

### 环境变量设置
- 检查并删除NO_COLOR环境变量

### 429错误模拟设置
- 导入 `setSimulate429` 函数
- 调用 `setSimulate429(false)` 禁用429错误模拟

## 依赖关系

- 依赖Node.js的process对象
- 依赖 `./src/utils/testUtils.js` 中的 `setSimulate429` 函数

## 函数级调用关系

```mermaid
erDiagram
    test-setup ||--|| process : uses
    test-setup ||--|| setSimulate429 : calls
```

## 变量级调用关系

```mermaid
erDiagram
    test-setup {
        object process
        string NO_COLOR
        function setSimulate429
    }
```