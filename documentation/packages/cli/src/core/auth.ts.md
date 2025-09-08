# auth.ts

认证处理模块，负责处理应用程序的初始认证流程。

## 功能概述

1. 执行初始认证
2. 处理认证错误
3. 与配置系统集成

## 主要函数

### performInitialAuth(config: Config, authType: AuthType | undefined): Promise<string | null>
执行初始认证流程：
1. 检查是否指定了认证类型
2. 如果未指定认证类型，直接返回
3. 尝试刷新认证令牌
4. 处理认证错误
5. 返回错误信息或 null（成功时）

参数：
- config: 应用程序配置对象
- authType: 选定的认证类型

返回值：
- string | null: 错误信息字符串或 null（成功时）

## 认证流程

1. **认证类型检查**
   - 如果未指定 authType，函数直接返回 null
   - 这允许在未配置认证时正常启动

2. **认证执行**
   - 调用 config.refreshAuth(authType) 方法
   - 这会触发相应的认证流程
   - 不在控制台显示登录成功消息（有意省略）

3. **错误处理**
   - 捕获认证过程中抛出的异常
   - 将错误信息格式化为用户友好的字符串
   - 返回错误信息而不是抛出异常

## 错误处理

- 使用 getErrorMessage 工具函数获取一致的错误信息格式
- 不中断应用程序启动流程，而是返回错误信息供调用方处理
- 适用于启动时的非阻塞认证

## 依赖关系

- 依赖 @google/gemini-cli-core 的 Config 类型和 getErrorMessage 函数
- 依赖 @google/gemini-cli-core 的 AuthType 类型

## 使用场景

此函数在应用程序初始化期间调用，作为 initializeApp 函数的一部分，确保在显示 UI 之前完成必要的认证步骤。