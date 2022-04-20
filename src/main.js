import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

/**
 *  Axios
 */
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

/**
 *  Vue-Toastr-2
 */
 import VueToastr2 from 'vue-toastr-2'
 import 'vue-toastr-2/dist/vue-toastr-2.min.css'
  
 window.toastr = require('toastr')
  
 Vue.use(VueToastr2)

Vue.config.productionTip = false


/***********************************
 *  Configuraciones para el proyecto
 ***********************************/

/**
 *  Token global, errores axios globales
 */
if(store.getters.isLogin) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + store.state.token;
  store.dispatch("getUser");
}

/**
 *  Inicia usuarios
 */
 axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status === 403 || error.response.status === 404){
    //router.push({name:'error'});
    console.log("error 403, 404")
  }
  if(error.response.status === 401) //si no esta autenticado o no existe tocken
  {
    this.toastr.error("Usuario invitado")

    store.dispatch("destroyToken").then(response => {
      this.toastr.succes(response.data.message)
      router.push({name: 'Home'}); //Redirigir a la pantalla principal
    })
  }
  return Promise.reject(error);
});

/**
 *  Control de rutas
 */
 router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) { // Si no esta logeado que vaya al home
      next({name: 'Home'})
    }
    else {
      next()
    }
  }
  else {
    next()
  }
});



new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
