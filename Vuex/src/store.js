/*
vuex: 核心管理模块--store
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0 // 初始化状态数据
}

const mutations = {
  INCREAMT(){
    state.count++
  },
  DECREAMT(){
    state.count--
  }
}


const actions = {
  increamt({commit}){
    // 提交一个 mutation
    commit('INCREAMT')
  },
  decreamt({commit}){
    commit('DECREAMT')
  },
  increamtIfOdd({commit, state}){
    if(state.count % 2 === 1){
      commit('INCREAMT')
    }
  },
  increamtAysnc({commit}){
    setTimeout(() => {
      commit('INCREAMT')
    }, 1000)
  }
}


const getters = {
  evenOrOdd(state){
    return state.count %2 === 0 ? '偶数 ': '奇数'
  }
}

export default new Vuex.Store({
  state, // 数据
  mutations, // 数据操作
  actions, // 方法
  getters // 计算属性
})
