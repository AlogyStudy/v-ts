/**
 * 路由处理逻辑
 */

import router from '@/router/index'

// let loginFlag = false
router.beforeEach((to: object, from: any, next: any) => {
  // if (loginFlag) {
  //   if (to.name === 'login') {
  //     next({name: 'home/index'})
  //   } else {
  //     next()
  //   }
  // } else {
  //   next({ name: 'login' })
  // }
  next()
})
