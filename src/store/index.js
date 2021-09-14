import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  menuList: ['chat', 'HelloWorld', 'highChart', 'login', 'mock', 'props', 'test2', 'vantChat']
})

export default store
