import Vue from 'vue'
import Router from 'vue-router'
import 'lib-flexible'
import zybyUI from '~/pages/zybyUI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zybyUI',
      component: zybyUI
    },
  ]
})
