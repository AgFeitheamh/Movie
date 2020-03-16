import Vue from 'vue'
import VueRouter from 'vue-router'
import centerRouter from './center/center'
import movieRouter from './movie/movie'
import cinemaRouter from './cinema/cinema'
Vue.use(VueRouter)

const routes = [
  centerRouter,
  movieRouter,
  cinemaRouter,
  {
    path: '/',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
