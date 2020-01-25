import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueDropdown from 'vue-dynamic-dropdown'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.component('vue-dropdown', VueDropdown);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

Vue.config.productionTip = false



const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters:{
    curentCount:(state)=> {
      return state.count + '$'
    }

  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')



