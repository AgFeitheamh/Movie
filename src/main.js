import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Scroller from '@/components/Scroller/Scroller.vue'
import Loading from '@/components/Loading/Loading.vue'

import Router from 'vue-router'

Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})

Vue.component('Scroller', Scroller)
Vue.component('Loading', Loading)
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
