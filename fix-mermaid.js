import { readFileSync, writeFileSync } from 'fs';

// 读取文件内容
const content = readFileSync('E:\\技术提升\\AI-CLI\\documentation\\packages\\complete-call-graph.md', 'utf8');

// 将erDiagram替换为classDiagram
let newContent = content.replace('erDiagram', 'classDiagram');

// 匹配所有裸的实体定义并替换为class定义
const entityRegex = /(\w+)\s*{([^}]+?)\s*}/gs;
let match;
while ((match = entityRegex.exec(newContent)) !== null) {
  const entityName = match[1];
  const entityContent = match[2];
  
  // 检查这是否已经是class定义
  if (entityName === 'class') {
    continue;
  }
  
  // 检查这是否是关系定义的一部分
  const beforeMatch = newContent.substring(Math.max(0, match.index - 50), match.index);
  if (beforeMatch.includes('-->') || beforeMatch.includes('||--') || beforeMatch.includes('--||')) {
    continue;
  }
  
  // 将裸实体定义替换为class定义
  const classDefinition = `class ${entityName} {${entityContent}
    }`;
  newContent = newContent.replace(match[0], classDefinition);
}

// 修复属性格式，添加+前缀
newContent = newContent.replace(/^(\s+)(\w+.*?
)/gm, (match, spaces, property) => {
  // 检查是否已经在class定义内部且不是方法
  if (spaces.includes('    ') && !property.trim().startsWith('+')) {
    // 检查是否是方法定义（包含括号）
    if (property.includes('(') && property.includes(')')) {
      return `${spaces}+${property.trim()}()
`;
    } else {
      return `${spaces}+${property.trim()}
`;
    }
  }
  return match;
});

// 写入修改后的内容
writeFileSync('E:\\技术提升\\AI-CLI\\documentation\\packages\\complete-call-graph-fixed.md', newContent);

console.log('文件已修复并保存为 complete-call-graph-fixed.md');