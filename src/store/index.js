import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  gameInfo: [
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios',
      androidUrl: 'an'
    },
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios',
      androidUrl: 'an'
    },
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios',
      androidUrl: 'an'
    },
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios',
      androidUrl: 'an'
    }
  ]
}

const getters = {}

const mutations = {

}

const actions = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
