// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
import router from '@/router'
import store from './store/'
// import store from './store'
import { Rater, Tab, TabItem, XDialog, Alert, Confirm } from 'vux'

// 引入icon
import Icon from 'vue-svg-icon/Icon.vue'

Vue.component('rater', Rater)
Vue.component('icon', Icon)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('x-dialog', XDialog)
Vue.component('alert', Alert)
Vue.component('confirm', Confirm)

// Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
