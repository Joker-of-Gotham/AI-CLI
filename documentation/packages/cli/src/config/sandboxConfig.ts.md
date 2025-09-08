# sandboxConfig.ts

## 概述

`sandboxConfig.ts` 是 cli 包中处理沙箱配置的模块。该文件负责加载和验证沙箱配置，支持多种沙箱技术如 Docker、Podman 和 sandbox-exec。

## 导出的函数

### loadSandboxConfig
异步加载沙箱配置：

1. **参数**:
   - `settings`: Settings 类型，包含用户设置
   - `argv`: SandboxCliArgs 类型，包含命令行参数

2. **功能**:
   - 获取沙箱选项（来自命令行参数或设置）
   - 调用 `getSandboxCommand` 确定沙箱命令
   - 获取沙箱镜像（来自命令行参数、环境变量或 package.json）
   - 返回包含命令和镜像的沙箱配置对象，如果未启用沙箱则返回 undefined

3. **返回值**:
   - 沙箱配置对象或 undefined

### getSandboxCommand (内部函数)
确定要使用的沙箱命令：

1. **参数**:
   - `sandbox`: boolean | string 类型，沙箱选项

2. **功能**:
   - 检查是否已在沙箱环境中运行（通过 `SANDBOX` 环境变量）
   - 处理环境变量 `GEMINI_SANDBOX` 和命令行参数
   - 验证指定的沙箱命令是否有效且存在
   - 根据平台和可用命令自动选择沙箱技术
   - 支持 sandbox-exec（macOS）、Docker 和 Podman

3. **返回值**:
   - 沙箱命令字符串或空字符串（表示不使用沙箱）

## 类型定义

### SandboxCliArgs
简化版的命令行参数接口，避免循环依赖：
- `sandbox`: boolean | string（可选）
- `sandboxImage`: string（可选）

## 常量

### VALID_SANDBOX_COMMANDS
有效的沙箱命令列表：
- `docker`
- `podman`
- `sandbox-exec`

## 依赖模块

- `@google/gemini-cli-core`: 提供 `FatalSandboxError` 类型
- `command-exists`: 检查命令是否存在
- `node:os`: Node.js 操作系统模块
- `../utils/package.js`: 获取 package.json 信息
- `./settings.js`: Settings 类型

## 使用场景

该模块主要用于：
1. 根据用户配置和环境确定沙箱设置
2. 验证沙箱命令的有效性
3. 提供安全的代码执行环境

## 设计考虑

该模块的设计考虑了：
1. 多种沙箱技术的支持
2. 环境变量优先级高于配置文件
3. 自动检测可用的沙箱命令
4. 详细的错误信息帮助用户配置沙箱
5. 避免循环依赖的设计