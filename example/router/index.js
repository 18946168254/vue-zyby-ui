import Vue from 'vue'
import Router from 'vue-router'
import 'lib-flexible'
import zybyUI from '~/pages/zybyUI'
import scrollHidden from '~/pages/scrollHidden'
import stickyTest from '~/pages/stickyTest'
import previewerTest from '~/pages/previewerTest'
import countup from '~/pages/countup'
import videoTest from '~/pages/videoTest'
import rangeTest from '~/pages/rangeTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rangeTest',
      name: 'rangeTest',
      component: rangeTest
    },
    {
      path: '/',
      name: 'videoTest',
      component: videoTest
    },
    {
      path: '/countup',
      name: 'countup',
      component: countup
    },
    {
      path: '/previewerTest',
      name: 'previewerTest',
      component: previewerTest
    },
    {
      path: '/stickyTest',
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
