import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)



export default new Vuex.Store({
    state: state,
    // actions: {
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations: mutations,
    getters: { //类似于computed
        doubleCity(state) {
            return state.city + ' ' + state.city
        }
    }
})