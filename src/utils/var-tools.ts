/**
 * 常量 或 枚举变量的获取
 */

// project host
export const host = process.env.NODE_ENV === 'development' ? 'ae1234.sn.bgbet5.com' : window.location.hostname
// export const host = window.location.hostname

// uid
export function uid () {
  return Date.parse((new Date()).toString()).toString() + Math.random() * Math.pow(10, 16)
}
