import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',//异步加载组件，如js，css等
      component: () => import('@/pages/home/Home'),
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City'),
    },
    {
      path: '/detail/:id', //动态的id，带参数
      name: 'Detail',
      component: () => import('@/pages/detail/Detail'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
