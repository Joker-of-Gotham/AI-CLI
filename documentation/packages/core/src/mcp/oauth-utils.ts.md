# oauth-utils.ts

此文件为 Model Context Protocol (MCP) 实现中的 OAuth 操作提供实用函数。

## 接口

### OAuthAuthorizationServerMetadata

OAuth 授权服务器元数据，符合 RFC 8414。

```typescript
export interface OAuthAuthorizationServerMetadata {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  revocation_endpoint?: string;
  revocation_endpoint_auth_methods_supported?: string[];
  registration_endpoint?: string;
  response_types_supported?: string[];
  grant_types_supported?: string[];
  code_challenge_methods_supported?: string[];
  scopes_supported?: string[];
}
```

### OAuthProtectedResourceMetadata

OAuth 受保护资源元数据，符合 RFC 9728。

```typescript
export interface OAuthProtectedResourceMetadata {
  resource: string;
  authorization_servers?: string[];
  bearer_methods_supported?: string[];
  resource_documentation?: string;
  resource_signing_alg_values_supported?: string[];
  resource_encryption_alg_values_supported?: string[];
  resource_encryption_enc_values_supported?: string[];
}
```

## 类: OAuthUtils

OAuth 操作的实用类。

### 方法

#### buildWellKnownUrls

```typescript
static buildWellKnownUrls(baseUrl: string, includePathSuffix = false)
```

构建知名的 OAuth 端点 URL。

**参数:**
- `baseUrl`: 基础 URL
- `includePathSuffix`: 是否在知名的端点附加路径后缀

**返回:**
- 包含 protectedResource 和 authorizationServer URL 的对象

#### fetchProtectedResourceMetadata

```typescript
static async fetchProtectedResourceMetadata(
  resourceMetadataUrl: string,
): Promise<OAuthProtectedResourceMetadata | null>
```

获取 OAuth 受保护资源元数据。

**参数:**
- `resourceMetadataUrl`: 受保护资源元数据 URL

**返回:**
- 受保护资源元数据或如果不可用则返回 null

#### fetchAuthorizationServerMetadata

```typescript
static async fetchAuthorizationServerMetadata(
  authServerMetadataUrl: string,
): Promise<OAuthAuthorizationServerMetadata | null>
```

获取 OAuth 授权服务器元数据。

**参数:**
- `authServerMetadataUrl`: 授权服务器元数据 URL

**返回:**
- 授权服务器元数据或如果不可用则返回 null

#### metadataToOAuthConfig

```typescript
static metadataToOAuthConfig(
  metadata: OAuthAuthorizationServerMetadata,
): MCPOAuthConfig
```

将授权服务器元数据转换为 OAuth 配置。

**参数:**
- `metadata`: 授权服务器元数据

**返回:**
- OAuth 配置

#### discoverAuthorizationServerMetadata

```typescript
static async discoverAuthorizationServerMetadata(
  authServerUrl: string,
): Promise<OAuthAuthorizationServerMetadata | null>
```

通过尝试标准的知名端点，根据授权服务器 URL 发现 OAuth 授权服务器元数据。

**参数:**
- `authServerUrl`: 授权服务器 URL

**返回:**
- 授权服务器元数据或如果未找到则返回 null

#### discoverOAuthConfig

```typescript
static async discoverOAuthConfig(
  serverUrl: string,
): Promise<MCPOAuthConfig | null>
```

使用标准的知名端点发现 OAuth 配置。

**参数:**
- `serverUrl`: 服务器的基础 URL

**返回:**
- 发现的 OAuth 配置或如果不可用则返回 null

#### parseWWWAuthenticateHeader

```typescript
static parseWWWAuthenticateHeader(header: string): string | null
```

解析 WWW-Authenticate 头以提取 OAuth 信息。

**参数:**
- `header`: WWW-Authenticate 头值

**返回:**
- 如果找到则返回资源元数据 URI

#### discoverOAuthFromWWWAuthenticate

```typescript
static async discoverOAuthFromWWWAuthenticate(
  wwwAuthenticate: string,
): Promise<MCPOAuthConfig | null>
```

从 WWW-Authenticate 头发现 OAuth 配置。

**参数:**
- `wwwAuthenticate`: WWW-Authenticate 头值

**返回:**
- 发现的 OAuth 配置或如果不可用则返回 null

#### extractBaseUrl

```typescript
static extractBaseUrl(mcpServerUrl: string): string
```

从 MCP 服务器 URL 提取基础 URL。

**参数:**
- `mcpServerUrl`: MCP 服务器 URL

**返回:**
- 基础 URL

#### isSSEEndpoint

```typescript
static isSSEEndpoint(url: string): boolean
```

检查 URL 是否为 SSE 端点。

**参数:**
- `url`: 要检查的 URL

**返回:**
- 如果 URL 看起来是 SSE 端点则返回 true

#### buildResourceParameter

```typescript
static buildResourceParameter(endpointUrl: string): string
```

为 OAuth 请求构建资源参数。

**参数:**
- `endpointUrl`: 端点 URL

**返回:**
- 资源参数值