
import axios from 'axios'
import { removeUserInfo, removeToken } from '@/utils/signin'

/**
 * 创建 axios 实例
 */
const service = axios.create({
  timeout: 3000
})

/**
 * req 拦截器
 */
service.interceptors.request.use((config: object): object => {
  return config
}, (error: any): object => {
  return Promise.reject(error)
})

/**
 * res 拦截器
 */
service.interceptors.response.use((response: any): any => {
  const res: Ajax.AjaxResponse = response.data
  if (res.error) {
    if (+res.error.code === 2202 || +res.error.code === 2221 || +res.error.code === 11001) { // 登录超时，token失效
      alert(res.error.message)
      removeToken()
      removeUserInfo()
      // 清除登录信息
      setTimeout(() => {
        location.reload()
      }, 2000)
    }
    // if (process.env.NODE_ENV !== 'production') {
    //   console.error(res.error, 'all error')
    // }
    return Promise.reject(res)
  }
  return Promise.resolve(res)
})

export default service
