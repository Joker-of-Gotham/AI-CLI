# fileSystemService.ts

此文件实现了一个文件系统服务，该服务使用代理通信协议 (ACP) 与 GUI 客户端交互以执行文件操作。

## 概述

`AcpFileSystemService` 类提供了一个 `FileSystemService` 接口的实现，当功能可用时，该接口将文件操作委托给通过 ACP 协议的 GUI 客户端。

## 类

### AcpFileSystemService

```typescript
export class AcpFileSystemService implements FileSystemService
```

使用基于 ACP 客户端的操作实现 FileSystemService 接口。

#### 构造函数

```typescript
constructor(
  private readonly client: acp.Client,
  private readonly sessionId: string,
  private readonly capabilities: acp.FileSystemCapability,
  private readonly fallback: FileSystemService,
)
```

**参数:**
- `client`: 用于与 GUI 通信的 ACP 客户端
- `sessionId`: 当前会话 ID
- `capabilities`: 客户端报告的文件系统功能
- `fallback`: 当客户端功能不可用时的备用 FileSystemService

#### 方法

##### readTextFile

```typescript
async readTextFile(filePath: string): Promise<string>
```

从客户端读取文本文件（如果能够）或使用备用服务。

**参数:**
- `filePath`: 要读取的文件路径

**返回:**
- 解析为文件内容字符串的承诺

##### writeTextFile

```typescript
async writeTextFile(filePath: string, content: string): Promise<void>
```

通过客户端写入文本文件内容（如果能够）或使用备用服务。

**参数:**
- `filePath`: 要写入的文件路径
- `content`: 要写入文件的内容

**返回:**
- 在写入操作完成时解析的承诺

## 实现细节

### 功能检查

在执行文件操作之前，服务检查客户端是否具有所需功能：
- 读取文件的 `readTextFile` 功能
- 写入文件的 `writeTextFile` 功能

如果客户端没有所需功能，服务会回落到提供的备用实现。

### 会话上下文

所有文件操作都在特定会话的上下文中执行，会话 ID 传递给客户端以进行适当的路由和上下文管理。

### 错误处理

服务依赖底层 ACP 客户端进行错误处理。如果客户端操作失败，错误会传播给调用者。

### 备用机制

服务实现了一个备用机制，当客户端功能不可用或客户端操作失败时，允许它委托给另一个 FileSystemService 实现。这确保了即使 GUI 客户端不可用或无法处理文件操作，仍然可以执行文件操作。