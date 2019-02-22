/**
 * 统一参数处理
 * 请求url处理
 */

const qs = require('qs')
import { merge, isPlainObject } from 'lodash'
import { getCookie } from '@/utils/cookies'

/**
 * 接口参数拼接
 * @param opts 接口参数
 * @param opsIdParams 是否传递opsId
 * @param requestType post 还是 get 参数处理
 * @param otherParams 是否传有其它参数
 * @example
 * commonParams({
 *      'method': cmdName.login,
 *    'params': params
 *  }, false, undefined, false)
 */
export function commonParams (opts: object, opsIdParams: boolean= true, requestType: string= 'post', otherParams: boolean= true): object {
  const params = {
    json: JSON.stringify(merge({
      id: new Date().getTime(),
      jsonrpc: '2.0',
      params: dealParams(opsIdParams, otherParams),
    }, opts || {})),
  }
  return requestType === 'post' ? qs.stringify(params) : params
}

/**
 * 请求接口的地址处理
 * @param urlData 请求接口
 * @param type 请求路径
 * @example url(cmdName.login)
 */
export function url (urlData: string, type: any = process.env.VUE_APP_API_PATH) {
  // @example  https://dev/bg1207.com/ + agsgw/api/ + auth.agent.login
  return process.env.VUE_APP_API_URL + type + urlData
}

/**
 * params 参数的处理
 * @param opsIdParams 是否传递opsId
 * @param otherParams 是否传有其它参数
 */
function dealParams (opsIdParams: boolean, otherParams: boolean | object): object {
  let obj: any = {}
  // opsIdParams 默认传opsId
  if (opsIdParams) {
    obj.opsId = getCookie('token') || ''
  }
  // otherParams其他默认参数, 如sn
  if (otherParams === true) {
    // obj.sn = getCookie('switchSn') || ''
  } else {
    // 其他object
    if (isPlainObject(otherParams)) {
      obj = {...obj, ...otherParams}
    }
  }
  return obj
}
