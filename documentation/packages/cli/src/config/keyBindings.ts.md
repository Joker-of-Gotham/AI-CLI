# keyBindings.ts

## 概述

`keyBindings.ts` 是 cli 包中定义键盘绑定和命令的模块。该文件提供了数据驱动的键盘绑定配置，支持多种键盘快捷方式和命令。

## 导出的枚举

### Command
定义所有可用的键盘快捷命令：

1. **基本绑定**:
   - `RETURN`: 回车键
   - `ESCAPE`: 退出键

2. **光标移动**:
   - `HOME`: 行首
   - `END`: 行尾

3. **文本删除**:
   - `KILL_LINE_RIGHT`: 删除光标右侧内容
   - `KILL_LINE_LEFT`: 删除光标左侧内容
   - `CLEAR_INPUT`: 清除输入
   - `DELETE_WORD_BACKWARD`: 向后删除单词

4. **屏幕控制**:
   - `CLEAR_SCREEN`: 清屏

5. **历史导航**:
   - `HISTORY_UP`: 历史记录向上
   - `HISTORY_DOWN`: 历史记录向下
   - `NAVIGATION_UP`: 导航向上
   - `NAVIGATION_DOWN`: 导航向下

6. **自动补全**:
   - `ACCEPT_SUGGESTION`: 接受建议
   - `COMPLETION_UP`: 补全向上
   - `COMPLETION_DOWN`: 补全向下

7. **文本输入**:
   - `SUBMIT`: 提交
   - `NEWLINE`: 新行

8. **外部工具**:
   - `OPEN_EXTERNAL_EDITOR`: 打开外部编辑器
   - `PASTE_CLIPBOARD_IMAGE`: 粘贴剪贴板图片

9. **应用级绑定**:
   - `SHOW_ERROR_DETAILS`: 显示错误详情
   - `TOGGLE_TOOL_DESCRIPTIONS`: 切换工具描述
   - `TOGGLE_IDE_CONTEXT_DETAIL`: 切换 IDE 上下文详情
   - `QUIT`: 退出
   - `EXIT`: 退出
   - `SHOW_MORE_LINES`: 显示更多行

10. **Shell 命令**:
    - `REVERSE_SEARCH`: 反向搜索
    - `SUBMIT_REVERSE_SEARCH`: 提交反向搜索
    - `ACCEPT_SUGGESTION_REVERSE_SEARCH`: 接受反向搜索建议

## 导出的接口

### KeyBinding
数据驱动的键绑定结构：

- `key`: 键名（如 'a', 'return', 'tab', 'escape'）
- `sequence`: 键序列（如 '\x18' 表示 Ctrl+X）
- `ctrl`: Control 键要求
- `shift`: Shift 键要求
- `command`: Command/Meta 键要求
- `paste`: 粘贴操作要求

## 导出的类型

### KeyBindingConfig
配置类型，将命令映射到其键绑定：

- 类型为 `{ readonly [C in Command]: readonly KeyBinding[]; }`

## 导出的常量

### defaultKeyBindings
默认键绑定配置，完全匹配原始硬编码逻辑：

- 为每个命令提供相应的键绑定数组
- 支持多种平台和键盘布局
- 包含详细的键绑定规则

## 使用场景

该模块主要用于：
1. 定义应用程序的键盘快捷方式
2. 提供可配置的键绑定系统
3. 支持跨平台的键盘操作
4. 实现数据驱动的键绑定处理

## 设计考虑

该模块的设计考虑了：
1. 数据驱动的配置方式，便于维护和扩展
2. 跨平台兼容性（macOS、Windows、Linux）
3. 多种键组合支持（Ctrl、Shift、Command/Meta）
4. 粘贴操作的特殊处理
5. 与原始硬编码逻辑的完全兼容