import Vue from 'vue'
import Router from 'vue-router'
import 'lib-flexible'
import zybyUI from '~/pages/zybyUI'
import scrollHidden from '~/pages/scrollHidden'
import stickyTest from '~/pages/stickyTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'stickyTest',
      component: stickyTest
    },
    {
      path: '/scrollHidden',
      name: 'scrollHidden',
      component: scrollHidden
    },
    {
      path: '/zybyUI',
      name: 'zybyUI',
      component: zybyUI
    },
  ]
})
