import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import layout from '@/views/layout'
import Welcome from '@/views/Welcome'
import Game from '@/views/Game'
import About from '@/views/About'
import Recruit from '@/views/Recruit'

import '@/styles/index.scss'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'layout',
    component: layout,
    redirect: {name: 'welcome'},
    children: [{
      name: 'welcome',
      path: 'welcome',
      component: Welcome
    }, {
      name: 'game',
      path: 'game',
      component: Game
    }, {
      name: 'about',
      path: 'about',
      component: About
    }, {
      name: 'recruit',
      path: 'recruit',
      component: Recruit
    }]
  }]
})
