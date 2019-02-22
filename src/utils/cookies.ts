/**
 * 操作 cookie, localStorage, sessionStorage 封装
 */
import Cookies from 'js-cookie'
import { isNil } from 'lodash'

const prefix = process.env.VUE_APP_PREFIX

/**
 * ============ Cookie ============
 */

export function getCookie (name: string): string {
  return Cookies.get(prefix + name)
}

export function setCookie (name: string, value: any, params= {}): void {
  if (isEmpty(value)) return
  Cookies.set(prefix + name, value, params)
}

export function removeCookie (name: string, params= {}): void {
  Cookies.remove(prefix + name, params)
}

/**
 * ============ localStorage ============
 */

export function setLocalStorage (name: string, value: any): void {
  if (isEmpty(value)) return
  window.localStorage.setItem(prefix + name, value)
}

export function getLocalStorage (name: string) {
  return window.localStorage.getItem(prefix + name)
}

export function removeLocalStorage (name: string) {
  window.localStorage.removeItem(prefix + name)
}

export function clearLocal () {
  window.localStorage.clear()
}

/**
 * ============ sessionStorage ============
 */

export function setSessionStorage (name: string, value: any): void {
  if (isEmpty(value)) return
  window.sessionStorage.setItem(prefix + name, value)
}

export function getSessionStorage (name: string) {
  window.sessionStorage.getItem(prefix + name)
}

export function removeSessionStorage (name: string) {
  window.sessionStorage.removeItem(prefix + name)
}

/**
 * 判断值是否为null或者undefined或者''或者'undefined'
 * @param val value
 */
function isEmpty (val: any) {
  if (isNil(val) || val === 'undefined' || val === '') {
    return true
  }
  return false
}
