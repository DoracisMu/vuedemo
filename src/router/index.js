import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: ['chat', 'HelloWorld', 'highChart', 'login', 'mock', 'props', 'test2', 'vantChat'].map(item => {
    return {
      path: `/${item}`,
      name: `${item}`,
      component: () => import(`@/components/view/${item}.vue`)
    }
  })
})
