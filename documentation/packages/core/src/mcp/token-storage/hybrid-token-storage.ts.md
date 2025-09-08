# token-storage/hybrid-token-storage.ts

此文件实现了 `HybridTokenStorage` 类，该类提供了一种混合存储解决方案，当可用时尝试使用钥匙串存储，否则回退到加密文件存储。

## 类: HybridTokenStorage

混合令牌存储，在可用时使用钥匙串，否则回退到加密文件存储。

### 属性

- `private storage: TokenStorage | null = null` - 活跃的存储实现
- `private storageType: TokenStorageType | null = null` - 活跃存储的类型
- `private storageInitPromise: Promise<TokenStorage> | null = null` - 存储初始化的承诺

### 构造函数

```typescript
constructor(serviceName: string)
```

**参数:**
- `serviceName`: 用于存储的服务名称

### 私有方法

#### initializeStorage

```typescript
private async initializeStorage(): Promise<TokenStorage>
```

初始化存储实现。

**返回:**
- 初始化的存储实现

**实现细节:**
1. 检查 `GEMINI_FORCE_FILE_STORAGE` 环境变量是否设置为 'true'
2. 如果未强制使用文件存储，尝试加载和初始化钥匙串存储
3. 如果钥匙串可用，使用 `KeychainTokenStorage`
4. 否则，回退到 `FileTokenStorage`

#### getStorage

```typescript
private async getStorage(): Promise<TokenStorage>
```

获取活跃的存储实现，必要时初始化它。

**返回:**
- 活跃的存储实现

### 公共方法

#### getCredentials

```typescript
async getCredentials(serverName: string): Promise<OAuthCredentials | null>
```

获取特定服务器的凭据。

**参数:**
- `serverName`: 服务器名称

**返回:**
- 凭据或如果未找到则返回 null

#### setCredentials

```typescript
async setCredentials(credentials: OAuthCredentials): Promise<void>
```

设置服务器的凭据。

**参数:**
- `credentials`: 要存储的凭据

#### deleteCredentials

```typescript
async deleteCredentials(serverName: string): Promise<void>
```

删除服务器的凭据。

**参数:**
- `serverName`: 服务器名称

#### listServers

```typescript
async listServers(): Promise<string[]>
```

列出存储凭据的所有服务器。

**返回:**
- 服务器名称数组

#### getAllCredentials

```typescript
async getAllCredentials(): Promise<Map<string, OAuthCredentials>>
```

获取所有存储的凭据。

**返回:**
- 服务器名称到凭据的映射

#### clearAll

```typescript
async clearAll(): Promise<void>
```

清除所有存储的凭据。

#### getStorageType

```typescript
async getStorageType(): Promise<TokenStorageType>
```

获取活跃存储的类型。

**返回:**
- 存储类型

### 常量

- `FORCE_FILE_STORAGE_ENV_VAR = 'GEMINI_FORCE_FILE_STORAGE'` - 强制使用文件存储的环境变量