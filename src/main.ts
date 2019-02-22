import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as filters from '@/filters/index'
import '@/router/routerControl'
// import './registerServiceWorker'

Vue.config.productionTip = false

// 全局filter
const F = filters as any
Object.keys(filters).forEach(item => {
  Vue.filter(item, F[item])
})

// moment
// const W = window as any
// window = W.moment = require('moment')

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app')
