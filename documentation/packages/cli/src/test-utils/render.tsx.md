# render.tsx

此文件提供了一个用于在测试中使用提供者渲染 React 组件的实用函数。

## 概述

该文件导出一个 `renderWithProviders` 函数，该函数使用必要的提供者包装组件以进行测试。

## 函数

### renderWithProviders

```typescript
export const renderWithProviders = (
  component: React.ReactElement,
): ReturnType<typeof render>
```

渲染一个 React 组件，并使用 KeypressProvider 包装，这对于依赖按键上下文的组件是必要的。

**参数:**
- `component`: 要渲染的 React 元素

**返回:**
- ink-testing-library 渲染函数的结果

## 实现细节

### 提供者

该函数使用 `KeypressProvider` 包装提供的组件：

```typescript
render(
  <KeypressProvider kittyProtocolEnabled={true}>
    {component}
  </KeypressProvider>,
)
```

`kittyProtocolEnabled` 属性设置为 `true` 以模拟可用 Kitty 终端协议的环境。

### 使用

此实用程序在测试中使用，以确保依赖按键上下文的组件被正确渲染：

```typescript
// 在测试文件中
import { renderWithProviders } from '../test-utils/render';

it('应该渲染带有按键上下文的组件', () => {
  const { getByText } = renderWithProviders(<MyComponent />);
  expect(getByText('Hello')).toBeInTheDocument();
});
```

### 优势

使用此实用程序确保：
1. 测试间提供者设置的一致性
2. 依赖按键事件的组件的适当上下文可用性
3. 提供者配置更改时的更容易维护