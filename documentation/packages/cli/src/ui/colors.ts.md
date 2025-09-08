# colors.ts

## 概述

`colors.ts` 是 cli 包中处理颜色主题的模块。该文件导出一个 `Colors` 对象，提供对当前活动主题颜色的访问。

## 导出的对象

### Colors
颜色主题对象，提供对当前活动主题颜色的访问：

1. **属性**:
   - `type`: 颜色主题类型
   - `Foreground`: 前景色
   - `Background`: 背景色
   - `LightBlue`: 浅蓝色
   - `AccentBlue`: 强调蓝色
   - `AccentPurple`: 强调紫色
   - `AccentCyan`: 强调青色
   - `AccentGreen`: 强调绿色
   - `AccentYellow`: 强调黄色
   - `AccentRed`: 强调红色
   - `DiffAdded`: 差异添加颜色
   - `DiffRemoved`: 差异删除颜色
   - `Comment`: 注释颜色
   - `Gray`: 灰色
   - `GradientColors`: 渐变颜色数组

2. **实现方式**:
   - 使用 getter 方法动态获取当前活动主题的颜色值
   - 通过 `themeManager.getActiveTheme().colors` 访问实际颜色值

## 依赖模块

- `./themes/theme-manager.js`: 主题管理器
- `./themes/theme.js`: 颜色主题类型定义

## 使用场景

该模块主要用于：
1. 在 UI 组件中访问当前主题的颜色
2. 提供一致的颜色访问接口
3. 支持主题切换时的颜色更新

## 设计考虑

该模块的设计考虑了：
1. 通过 getter 方法实现动态颜色访问
2. 与主题管理器的集成
3. 提供完整的颜色属性集合
4. 保持与主题系统的同步