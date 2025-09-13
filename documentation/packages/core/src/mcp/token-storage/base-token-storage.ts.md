# token-storage/base-token-storage.ts

此文件实现了 `BaseTokenStorage` 抽象类，该类为 Model Context Protocol (MCP) 实现中的令牌存储提供基础实现。

## 类: BaseTokenStorage

令牌存储实现的抽象基类。

### 属性

- `protected readonly serviceName: string` - 用于存储的服务名称

### 构造函数

```typescript
constructor(serviceName: string)
```

**参数:**
- `serviceName`: 用于存储的服务名称

### 抽象方法

这些方法必须由子类实现：

#### getCredentials

```typescript
abstract getCredentials(serverName: string): Promise<OAuthCredentials | null>
```

获取特定服务器的凭据。

#### setCredentials

```typescript
abstract setCredentials(credentials: OAuthCredentials): Promise<void>
```

设置服务器的凭据。

#### deleteCredentials

```typescript
abstract deleteCredentials(serverName: string): Promise<void>
```

删除服务器的凭据。

#### listServers

```typescript
abstract listServers(): Promise<string[]>
```

列出存储凭据的所有服务器。

#### getAllCredentials

```typescript
abstract getAllCredentials(): Promise<Map<string, OAuthCredentials>>
```

获取所有存储的凭据。

#### clearAll

```typescript
abstract clearAll(): Promise<void>
```

清除所有存储的凭据。

### 受保护的方法

#### validateCredentials

```typescript
protected validateCredentials(credentials: OAuthCredentials): void
```

验证凭据是否具有必需的字段。

**参数:**
- `credentials`: 要验证的凭据

**抛出:**
- 如果凭据无效则抛出错误

#### isTokenExpired

```typescript
protected isTokenExpired(credentials: OAuthCredentials): boolean
```

检查令牌是否已过期。

**参数:**
- `credentials`: 要检查的凭据

**返回:**
- 如果令牌已过期则返回 true

#### sanitizeServerName

```typescript
protected sanitizeServerName(serverName: string): string
```

清理服务器名称以用作存储键。

**参数:**
- `serverName`: 要清理的服务器名称

**返回:**
- 清理后的服务器名称