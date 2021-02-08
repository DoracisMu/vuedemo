import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/view/HelloWorld'
import test1 from '@/components/view/test1'
import test2 from '@/components/view/test2'
import test3 from '@/components/view/test3'
import test4 from '@/components/view/test4'
import login from '@/components/view/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/test4',
      name: 'test4',
      component: test4
    },
    {
      path: '/test5',
      name: 'test5',
      component: () => import('@/components/view/test5')
    }
  ]
})
