export default {
  path: '/movie',
  component: () => import('@/views/Movie/Movie.vue'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City/City.vue')
    },
    {
      path: 'nowplaying',
      component: () => import('@/components/NowPlaying/NowPlaying.vue')
    },
    {
      path: 'comingsoon',
      component: () => import('@/components/ComingSoon/ComingSoon.vue')
    },
    {
      path: 'search',
      component: () => import('@/components/Search/Search.vue')
    },
    {
      path: 'detail/1/:movieId',
      components: {
        default: () => import('@/components/NowPlaying/NowPlaying.vue'),
        detail: () => import('@/views/Movie/detail.vue')
      },
      props: {
        detail: true
      }
    },
    {
      path: 'detail/2/:movieId',
      components: {
        default: () => import('@/components/ComingSoon/ComingSoon.vue'),
        detail: () => import('@/views/Movie/detail.vue')
      },
      props: {
        detail: true
      }
    },
    {
      path: '/movie',
      redirect: '/movie/nowplaying'
    }
  ]
}
