# oauth-provider.ts

此文件实现了 `MCPOAuthProvider` 类，该类处理 Model Context Protocol (MCP) 服务器的 OAuth 身份验证。

## 接口

### MCPOAuthConfig

MCP 服务器的 OAuth 配置。

```typescript
export interface MCPOAuthConfig {
  enabled?: boolean; // 是否为此服务器启用 OAuth
  clientId?: string;
  clientSecret?: string;
  authorizationUrl?: string;
  tokenUrl?: string;
  scopes?: string[];
  audiences?: string[];
  redirectUri?: string;
  tokenParamName?: string; // 对于 SSE 连接，指定令牌的查询参数名称
}
```

### OAuthAuthorizationResponse

OAuth 授权响应。

```typescript
export interface OAuthAuthorizationResponse {
  code: string;
  state: string;
}
```

### OAuthTokenResponse

来自授权服务器的 OAuth 令牌响应。

```typescript
export interface OAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
}
```

### OAuthClientRegistrationRequest

动态客户端注册请求。

```typescript
export interface OAuthClientRegistrationRequest {
  client_name: string;
  redirect_uris: string[];
  grant_types: string[];
  response_types: string[];
  token_endpoint_auth_method: string;
  code_challenge_method?: string[];
  scope?: string;
}
```

### OAuthClientRegistrationResponse

动态客户端注册响应。

```typescript
export interface OAuthClientRegistrationResponse {
  client_id: string;
  client_secret?: string;
  client_id_issued_at?: number;
  client_secret_expires_at?: number;
  redirect_uris: string[];
  grant_types: string[];
  response_types: string[];
  token_endpoint_auth_method: string;
  code_challenge_method?: string[];
  scope?: string;
}
```

## 类: MCPOAuthProvider

处理 MCP 服务器 OAuth 身份验证的提供者。

### 属性

- `private readonly tokenStorage: MCPOAuthTokenStorage` - OAuth 令牌的存储

### 构造函数

```typescript
constructor(tokenStorage: MCPOAuthTokenStorage = new MCPOAuthTokenStorage())
```

**参数:**
- `tokenStorage`: 令牌存储实例（默认为新的 `MCPOAuthTokenStorage`）

### 方法

#### registerClient

```typescript
private async registerClient(
  registrationUrl: string,
  config: MCPOAuthConfig,
): Promise<OAuthClientRegistrationResponse>
```

向 OAuth 服务器动态注册客户端。

**参数:**
- `registrationUrl`: 客户端注册端点 URL
- `config`: OAuth 配置

**返回:**
- 注册的客户端信息

#### discoverOAuthFromMCPServer

```typescript
private async discoverOAuthFromMCPServer(
  mcpServerUrl: string,
): Promise<MCPOAuthConfig | null>
```

从 MCP 服务器 URL 发现 OAuth 配置。

**参数:**
- `mcpServerUrl`: MCP 服务器 URL

**返回:**
- 如果发现则返回 OAuth 配置，否则返回 null

#### generatePKCEParams

```typescript
private generatePKCEParams(): PKCEParams
```

为 OAuth 流生成 PKCE 参数。

**返回:**
- 包含代码验证器、挑战和状态的 PKCE 参数

#### startCallbackServer

```typescript
private async startCallbackServer(
  expectedState: string,
): Promise<OAuthAuthorizationResponse>
```

启动本地 HTTP 服务器以处理 OAuth 回调。

**参数:**
- `expectedState`: 要验证的状态参数

**返回:**
- 解析为授权代码的承诺

#### buildAuthorizationUrl

```typescript
private buildAuthorizationUrl(
  config: MCPOAuthConfig,
  pkceParams: PKCEParams,
  mcpServerUrl?: string,
): string
```

使用 PKCE 参数构建授权 URL。

**参数:**
- `config`: OAuth 配置
- `pkceParams`: PKCE 参数
- `mcpServerUrl`: 要用作资源参数的 MCP 服务器 URL

**返回:**
- 授权 URL

#### exchangeCodeForToken

```typescript
private async exchangeCodeForToken(
  config: MCPOAuthConfig,
  code: string,
  codeVerifier: string,
  mcpServerUrl?: string,
): Promise<OAuthTokenResponse>
```

将授权代码交换为令牌。

**参数:**
- `config`: OAuth 配置
- `code`: 授权代码
- `codeVerifier`: PKCE 代码验证器
- `mcpServerUrl`: 要用作资源参数的 MCP 服务器 URL

**返回:**
- 令牌响应

#### refreshAccessToken

```typescript
async refreshAccessToken(
  config: MCPOAuthConfig,
  refreshToken: string,
  tokenUrl: string,
  mcpServerUrl?: string,
): Promise<OAuthTokenResponse>
```

使用刷新令牌刷新访问令牌。

**参数:**
- `config`: OAuth 配置
- `refreshToken`: 刷新令牌
- `tokenUrl`: 令牌端点 URL
- `mcpServerUrl`: 要用作资源参数的 MCP 服务器 URL

**返回:**
- 新的令牌响应

#### authenticate

```typescript
async authenticate(
  serverName: string,
  config: MCPOAuthConfig,
  mcpServerUrl?: string,
): Promise<OAuthToken>
```

执行完整的 OAuth 授权码流与 PKCE。

**参数:**
- `serverName`: MCP 服务器的名称
- `config`: OAuth 配置
- `mcpServerUrl`: 可选的 MCP 服务器 URL 用于 OAuth 发现

**返回:**
- 获得的 OAuth 令牌

#### getValidToken

```typescript
async getValidToken(
  serverName: string,
  config: MCPOAuthConfig,
): Promise<string | null>
```

获取 MCP 服务器的有效访问令牌，必要时刷新。

**参数:**
- `serverName`: MCP 服务器的名称
- `config`: OAuth 配置

**返回:**
- 有效的访问令牌或如果未进行身份验证则返回 null

### 常量

- `REDIRECT_PORT = 7777` - OAuth 回调服务器的端口
- `REDIRECT_PATH = '/oauth/callback'` - OAuth 回调的路径
- `HTTP_OK = 200` - HTTP OK 状态码