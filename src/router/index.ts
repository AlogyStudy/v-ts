import Vue from 'vue'
import Router from 'vue-router'
const load = require('@/utils/load-file-' + process.env.NODE_ENV)

Vue.use(Router)

// components
const Layout: object = load('Layout/layout')
const Home: object = load('Home/index')
const About: object = load('About/index')
const Build: object = load('ErrorPage/building')
const Login: object = load('Login/index')

// router list
export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: { name: 'home/index' },
    children: [{
      path: '',
      component: Home,
      name: 'home/index',
      meta: {
          desc: '首页'
        }
      }, {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        component: About
      }, {
        path: '/accountManage/setaccountType',
        component: load('AccountManage/setaccountType/index'),
        name: 'accountManage/setaccountType',
        meta: {
          desc: '帐号管理',
          icon: 'account'
        }
      },
      { path: '/building', name: 'building', component: Build, meta: { hidden: true } }
    ]
  },
  { path: '/login', component: Login, name: 'login', meta: { desc: '登录' } },
  { path: '*', name: '404', component: load('ErrorPage/404'), meta: { hidden: true } }
]

export default new Router({
  routes: constantRouterMap
})
