import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/view/HelloWorld'
import mock from '@/components/view/mock'
import test2 from '@/components/view/test2'
import props from '@/components/view/props'
import chat from '@/components/view/chat'
import vantChat from '@/components/view/vantChat'
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
      path: '/mock',
      name: 'mock',
      component: mock
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/props',
      name: 'props',
      component: props
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/vantChat',
      name: 'vantChat',
      component: vantChat
    }
  ]
})
