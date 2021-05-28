import Vue from 'vue'
import Vuex from 'vuex'
// 把 state 里面的数据拆出去，提升可维护性
import state from './store'
// 把 mutations 里面的数据拆出去，提升可维护性
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  // getters: { // getters 的作用是根据 state 算出新的数据，作用类似于组件的 computed，避免数据冗余，多余重复
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
