// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import routeConfig from './router-config'

import Vuex from 'vuex'

import Element from 'element-ui'
import '../theme/index.css'

Vue.use(Element)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: routeConfig,
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
})
