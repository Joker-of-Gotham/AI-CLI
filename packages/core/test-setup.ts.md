# Core Test Setup

This module handles global test setup configurations for the core package. It ensures consistent test execution environment across different platforms and CI/CD systems.

## Environment Configuration

The setup removes the `NO_COLOR` environment variable to ensure consistent theme behavior between local and CI test runs:
```ts
if (process.env.NO_COLOR !== undefined) {
  delete process.env.NO_COLOR;
}
```

## 429 Simulation

The setup disables 429 (rate limit) simulation globally for all tests:
```ts
import { setSimulate429 } from './src/utils/testUtils.js';
setSimulate429(false);
```

This ensures that tests are not affected by artificial rate limiting during execution, providing more reliable and consistent test results.