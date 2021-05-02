/**
 * 常用的公共工具类封装
 */

/**
 * 判断是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
