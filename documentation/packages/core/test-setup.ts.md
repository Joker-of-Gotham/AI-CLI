# Core测试设置

此模块处理核心包的全局测试设置配置。它确保在不同平台和CI/CD系统中测试执行环境的一致性。

## 环境配置

设置会移除`NO_COLOR`环境变量，以确保本地和CI测试运行之间主题行为的一致性：
```ts
if (process.env.NO_COLOR !== undefined) {
  delete process.env.NO_COLOR;
}
```

## 429模拟

设置在全局范围内禁用429（速率限制）模拟：
```ts
import { setSimulate429 } from './src/utils/testUtils.js';
setSimulate429(false);
```

这确保测试不受人工速率限制的影响，提供更可靠和一致的测试结果。