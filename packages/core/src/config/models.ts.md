# Model Configuration Constants

This module defines default model constants used throughout the Gemini CLI application for various AI operations.

## Default Models

### DEFAULT_GEMINI_MODEL
```ts
export const DEFAULT_GEMINI_MODEL = 'gemini-2.5-pro';
```
The default Gemini model used for most operations when no specific model is specified.

### DEFAULT_GEMINI_FLASH_MODEL
```ts
export const DEFAULT_GEMINI_FLASH_MODEL = 'gemini-2.5-flash';
```
The default Gemini Flash model, typically used for faster responses.

### DEFAULT_GEMINI_FLASH_LITE_MODEL
```ts
export const DEFAULT_GEMINI_FLASH_LITE_MODEL = 'gemini-2.5-flash-lite';
```
The default Gemini Flash Lite model, optimized for lightweight operations.

### DEFAULT_GEMINI_EMBEDDING_MODEL
```ts
export const DEFAULT_GEMINI_EMBEDDING_MODEL = 'gemini-embedding-001';
```
The default model used for generating embeddings.

## Thinking Mode

### DEFAULT_THINKING_MODE
```ts
export const DEFAULT_THINKING_MODE = -1;
```
The default thinking mode value. Some thinking models do not default to dynamic thinking which is represented by a value of -1.