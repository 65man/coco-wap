import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  gameInfo: [
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios1',
      androidUrl: 'an1'
    },
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios2',
      androidUrl: 'an2'
    },
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios3',
      androidUrl: 'an3'
    },
    {
      iconUrl: require('@/assets/1532413320965900.png'),
      title: '屠龙破晓（官网）',
      intro: '三角合一，热血重写新传奇',
      iosUrl: 'ios4',
      androidUrl: 'an4'
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
