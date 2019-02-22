
/**
 * 视图中的DOM修改操作的过滤器
 */

// js精度问题， add - 加，sub - 减，mul - 乘，div - 除
export const number = {
  add(a: any, b: any): number {
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), // eslint-disable-line
      (this.mul(a, e) + this.mul(b, e)) / e
  },
  sub(a: any, b: any): number {
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), // eslint-disable-line
      (this.mul(a, e) - this.mul(b, e)) / e
  },
  mul(a: any, b: any): number {
    let c = 0
    let d = a.toString()
    let e = b.toString()
    try {
      c += d.split('.')[1].length
    } catch (f) {
    }
    try {
      c += e.split('.')[1].length
    } catch (f) {}
    return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
  },
  div(a: any, b: any): number {
    let c = 0
    let d = 0
    let e = 0
    let f = 0
    try {
      e = a.toString().split('.')[1].length
    } catch (g) {}
    try {
      f = b.toString().split('.')[1].length
    } catch (g) {}
    return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), this.mul(c / d, Math.pow(10, f - e)) // eslint-disable-line
  }
}

// 保留多少位小数
export function toFixed (val: string | number, pre = 2): string | number {
  let isNumber = +val
  if (!isNaN(isNumber)) {
    return isNumber.toFixed(pre)
  }
  return val
}
