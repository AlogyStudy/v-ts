import { fetch, cmdName, url, commonParams } from '@/api/common'

export function login (params: object) {
  return fetch({
    url: url(cmdName.login),
    method: 'post',
    data: commonParams({
      method: cmdName.login,
      params
    }, false, undefined, false)
  })
}
