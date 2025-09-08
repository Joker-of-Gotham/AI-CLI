# src/utils/logger.ts

这个文件实现了日志记录功能，使用 winston 库。

## 主要功能

### logger 对象

```typescript
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS A',
    }),
    winston.format.printf((info) => {
      const { level, timestamp, message, ...rest } = info;
      return (
        `[${level.toUpperCase()}] ${timestamp} -- ${message}` +
        `${Object.keys(rest).length > 0 ? `\n${JSON.stringify(rest, null, 2)}` : ''}`
      );
    }),
  ),
  transports: [new winston.transports.Console()],
});
```

创建 winston 日志记录器实例，具有以下特性：

1. 日志级别：info
2. 格式：
   - 时间戳格式：YYYY-MM-DD HH:mm:ss.SSS A
   - 输出格式：[LEVEL] TIMESTAMP -- MESSAGE
   - 如果有额外数据，会以 JSON 格式附加在消息后面
3. 传输：控制台输出

### 导出

```typescript
export { logger };
```

导出 logger 对象，供其他模块使用。