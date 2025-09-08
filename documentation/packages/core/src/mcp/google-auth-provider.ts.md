# google-auth-provider.ts

此文件实现了 `GoogleCredentialProvider` 类，该类为 Model Context Protocol (MCP) 服务器提供 Google Application Default Credentials (ADC) 身份验证。

## 类: GoogleCredentialProvider

Google Application Default Credentials 提供者，用于 MCP OAuth 身份验证。

### 属性

- `private readonly auth: GoogleAuth` - Google Auth 库实例
- `readonly redirectUrl = ''` - OAuthClientProvider 接口所需（无操作）
- `readonly clientMetadata: OAuthClientMetadata` - Google ADC 的客户端元数据
- `private _clientInformation?: OAuthClientInformationFull` - 存储的客户端信息

### 构造函数

```typescript
constructor(private readonly config?: MCPServerConfig)
```

**参数:**
- `config`: MCP 服务器配置

**抛出:**
- 如果配置中未提供 URL 则抛出错误
- 如果主机不在允许的主机中则抛出错误
- 如果 OAuth 配置中未提供作用域则抛出错误

### 方法

#### clientInformation

```typescript
clientInformation(): OAuthClientInformation | undefined
```

获取存储的客户端信息。

**返回:**
- 存储的客户端信息或 undefined

#### saveClientInformation

```typescript
saveClientInformation(clientInformation: OAuthClientInformationFull): void
```

保存客户端信息。

**参数:**
- `clientInformation`: �      要保存的客户端信息

#### tokens

```typescript
async tokens(): Promise<OAuthTokens | undefined>
```

使用 Google Application Default Credentials 获取 OAuth 令牌。

**返回:**
- OAuth 令牌或如果无法获取访问令牌则返回 undefined

#### saveTokens

```typescript
saveTokens(_tokens: OAuthTokens): void
```

保存令牌（Google ADC 的无操作，因为它在内部管理令牌）。

**参数:**
- `_tokens`: 要保存的令牌（被忽略）

#### redirectToAuthorization

```typescript
redirectToAuthorization(_authorizationUrl: URL): void
```

重定向到授权 URL（Google ADC 的无操作）。

**参数:**
- `_authorizationUrl`: 授权 URL（被忽略）

#### codeVerifier

```typescript
codeVerifier(): string
```

获取代码验证器（Google ADC 的无操作）。

**返回:**
- 空字符串

#### saveCodeVerifier

```typescript
saveCodeVerifier(_codeVerifier: string): void
```

保存代码验证器（Google ADC 的无操作）。

**参数:**
- `_codeVerifier`: 要保存的代码验证器（被忽略）

### 常量

- `ALLOWED_HOSTS = [/^.+\\.googleapis\\.com$/, /^(.*\\.)?luci\\.app$/]` - 允许主机的正则表达式