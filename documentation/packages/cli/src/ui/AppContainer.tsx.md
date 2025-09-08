# AppContainer.tsx

应用程序容器组件，是 Gemini CLI UI 的根组件，负责管理应用程序状态和上下文。

## 功能概述

1. 应用程序状态管理
2. UI 上下文提供
3. 命令处理
4. 键盘事件处理
5. 组件协调

## 主要功能模块

### 状态管理
- 使用 React Context API 提供应用状态
- 管理历史记录、认证状态、主题等
- 处理用户输入和缓冲区

### UI 上下文
- UIStateContext: 提供 UI 状态
- UIActionsContext: 提供 UI 操作
- ConfigContext: 提供配置信息
- AppContext: 提供应用基本信息

### 命令处理
- 使用 useSlashCommandProcessor 处理斜杠命令
- 集成历史记录管理
- 处理工具调用确认

### 键盘事件处理
- 全局键盘事件监听
- 快捷键处理
- Vim 模式支持

## 主要 Hook

### 状态 Hooks
- useHistory: 管理对话历史
- useThemeCommand: 处理主题命令
- useAuthCommand: 处理认证命令
- useEditorSettings: 处理编辑器设置
- useSettingsCommand: 处理设置命令

### 工具 Hooks
- useConsoleMessages: 管理控制台消息
- useTerminalSize: 获取终端尺寸
- useGeminiStream: 处理 Gemini 流响应
- useMessageQueue: 管理消息队列

### 特殊功能 Hooks
- useFolderTrust: 处理文件夹信任
- useAutoAcceptIndicator: 显示自动接受指示器
- useWorkspaceMigration: 处理工作区迁移
- useSessionStats: 管理会话统计

## 主要状态变量

### 应用状态
- corgiMode: Corgi 模式开关
- debugMessage: 调试消息
- quittingMessages: 退出消息
- showPrivacyNotice: 显示隐私声明
- isProcessing: 处理状态

### 认证相关
- authState: 认证状态
- authError: 认证错误
- isTrustedFolder: 文件夹信任状态
- userTier: 用户层级

### UI 状态
- themeError: 主题错误
- isThemeDialogOpen: 主题对话框开启状态
- isAuthDialogOpen: 认证对话框开启状态
- isEditorDialogOpen: 编辑器对话框开启状态

## 主要功能

### 初始化处理
- 执行应用程序初始化
- 处理初始提示
- 设置认证状态
- 加载用户消息历史

### 输入处理
- 文本缓冲区管理
- 提交处理
- 取消处理
- 清屏处理

### 命令处理
- 斜杠命令处理
- 工具调用确认
- 内存刷新
- 模型切换

### 键盘快捷键
- 显示错误详情 (Ctrl+E)
- 切换工具描述 (Ctrl+T)
- 退出应用 (Ctrl+C/Ctrl+D)
- 显示更多行 (Ctrl+L)

## 组件结构

### 上下文提供者
- UIStateContext.Provider
- UIActionsContext.Provider
- ConfigContext.Provider
- AppContext.Provider

### 子组件
- App: 主应用程序组件

## 生命周期

1. 组件挂载时注册清理函数
2. 监听配置变化
3. 处理初始提示提交
4. 管理状态更新
5. 组件卸载时执行清理