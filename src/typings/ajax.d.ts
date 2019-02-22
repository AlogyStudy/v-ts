/**
 * 后台接口返回类型
 */

declare namespace Ajax {
  // axios return data
  export interface AxiosResponse {
    data: AjaxResponse
  }

  // reqposne interface
  export interface AjaxResponse {
    id: string
    error: errorMsgCode | null
    jsonrpc: string
    result: any
  }

  export interface errorMsgCode {
    code: number | string
    message: string | null
  }
}
