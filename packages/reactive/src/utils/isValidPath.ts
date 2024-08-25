/**
 * 判定是否为有效路径
 * 
 * 有效路径必须满足以下条件：
 * 
 * - 字符串
 * - 字符串长度大于 0
 * - 字符串数组
 * 
 * 
 */


export function isValidPath(path: string | string[]): path is string[] {
  if (typeof path === "string") {
    return path.length > 0;
  }
  if (Array.isArray(path)) {
    return path.every((p) => typeof p === "string" && p.length > 0);
  }
  return true
}