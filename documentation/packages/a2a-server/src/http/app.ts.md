# src/http/app.ts

这个文件实现了 HTTP 应用，包括创建 Express 应用和处理路由。

## 主要功能

### coderAgentCard 对象

定义了代理卡片信息，包含：
- `name`: 代理名称
- `description`: 代理描述
- `url`: 代理 URL
- `provider`: 提供者信息
- `protocolVersion`: 协议版本
- `version`: 版本
- `capabilities`: 能力
- `securitySchemes`: 安全方案
- `security`: 安全设置
- `defaultInputModes`: 默认输入模式
- `defaultOutputModes`: 默认输出模式
- `skills`: 技能数组
- `supportsAuthenticatedExtendedCard`: 是否支持认证扩展卡片

### updateCoderAgentCardUrl 函数

```typescript
export function updateCoderAgentCardUrl(port: number)
```

更新代理卡片 URL。

参数：
- `port`: 端口号

### createApp 函数

```typescript
export async function createApp()
```

创建 Express 应用。

返回：
- Promise<express.Application>: Express 应用

### main 函数

```typescript
export async function main()
```

主函数，启动服务器。