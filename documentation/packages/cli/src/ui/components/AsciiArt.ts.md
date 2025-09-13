# AsciiArt.ts

这个文件定义了应用程序的 ASCII 艺术 Logo。

## 功能概述

1. 导出三个不同尺寸的 ASCII Logo
2. 提供应用程序品牌标识的文本表示

## 导出内容

### shortAsciiLogo
- 短版本的 ASCII Logo
- 适用于空间有限的显示场景

### longAsciiLogo
- 长版本的 ASCII Logo
- 适用于主屏幕显示

### tinyAsciiLogo
- 微小版本的 ASCII Logo
- 适用于极小空间的显示场景

## 函数级调用关系

```mermaid
erDiagram
    AsciiArt ||--|| shortAsciiLogo : exports
    AsciiArt ||--|| longAsciiLogo : exports
    AsciiArt ||--|| tinyAsciiLogo : exports
```

## 变量级调用关系

```mermaid
erDiagram
    shortAsciiLogo {
        string logo
    }
    longAsciiLogo {
        string logo
    }
    tinyAsciiLogo {
        string logo
    }
```