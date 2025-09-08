# src/config/extension.ts

这个文件负责加载和管理扩展配置。

## 主要类型和接口

### Extension 接口

表示扩展的接口，包含：
- `config`: 扩展配置
- `contextFiles`: 上下文文件路径数组

### ExtensionConfig 接口

表示扩展配置的接口，包含：
- `name`: 扩展名称
- `version`: 扩展版本
- `mcpServers`: MCP 服务器配置（可选）
- `contextFileName`: 上下文文件名（可选）

## 主要功能

### loadExtensions 函数

```typescript
export function loadExtensions(workspaceDir: string): Extension[]
```

加载扩展。

参数：
- `workspaceDir`: 工作区目录

返回：
- Extension[]: 扩展数组

### loadExtensionsFromDir 函数

```typescript
function loadExtensionsFromDir(dir: string): Extension[]
```

从目录加载扩展。

参数：
- `dir`: 目录路径

返回：
- Extension[]: 扩展数组

### loadExtension 函数

```typescript
function loadExtension(extensionDir: string): Extension | null
```

加载单个扩展。

参数：
- `extensionDir`: 扩展目录路径

返回：
- Extension | null: 扩展对象或 null

### getContextFileNames 函数

```typescript
function getContextFileNames(config: ExtensionConfig): string[]
```

获取上下文文件名。

参数：
- `config`: 扩展配置

返回：
- string[]: 上下文文件名数组

## 常量

- `EXTENSIONS_DIRECTORY_NAME`: 扩展目录名
- `EXTENSIONS_CONFIG_FILENAME`: 扩展配置文件名