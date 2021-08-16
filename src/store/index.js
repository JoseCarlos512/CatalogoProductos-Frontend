import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Para definir variables globales
    url: `${process.env.VUE_APP_URL}`
  },
  getters: {
    //Usar las variables globales

  },
  mutations: {
    //Asignar valores a las variables globales

  },
  actions: {
    //Programar funciones globales

  },
  modules: {

  }
})
