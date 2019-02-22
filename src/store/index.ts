import Vue from 'vue'
import Vuex from 'vuex'

/**
 * store modules
 */
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    app
  },
  strict: process.env.NODE_ENV !== 'production'
})
