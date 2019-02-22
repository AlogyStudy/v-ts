/**
 * 登录信息相关处理
 */

import { getCookie, setCookie, removeCookie } from '@/utils/cookies'
const tokenKey: string = 'token'

// token处理
export function getToken () {
  return getCookie(tokenKey)
}

export function setToken (token: string) {
  setCookie(tokenKey, token)
}

export function removeToken () {
  removeCookie(tokenKey)
}

// 清楚登录信息
export function removeUserInfo () {
  const info: Array<string> = ['userName', 'userId', 'sn']
  info.forEach(items => {
    removeCookie(items)
  })
}
