# Diff Options Utility

This module provides utilities for generating and analyzing code diffs using the `diff` library. It includes functionality for calculating diff statistics between different versions of code.

## Constants

### DEFAULT_DIFF_OPTIONS
```ts
export const DEFAULT_DIFF_OPTIONS: Diff.PatchOptions = {
  context: 3,
  ignoreWhitespace: true,
};
```
Default options used for generating structured patches. Sets 3 lines of context and ignores whitespace changes.

## Functions

### getDiffStat
```ts
export function getDiffStat(
  fileName: string,
  oldStr: string,
  aiStr: string,
  userStr: string,
): DiffStat
```
Calculates diff statistics between three versions of a file:
1. Between original (`oldStr`) and AI-proposed (`aiStr`) versions
2. Between AI-proposed (`aiStr`) and user-modified (`userStr`) versions

Returns a `DiffStat` object containing:
- `model_added_lines`: Lines added in AI proposal
- `model_removed_lines`: Lines removed in AI proposal
- `model_added_chars`: Characters added in AI proposal
- `model_removed_chars`: Characters removed in AI proposal
- `user_added_lines`: Lines added by user
- `user_removed_lines`: Lines removed by user
- `user_added_chars`: Characters added by user
- `user_removed_chars`: Characters removed by user

The function uses `Diff.structuredPatch` to generate detailed patch information and analyzes each hunk to count added/removed lines and characters.