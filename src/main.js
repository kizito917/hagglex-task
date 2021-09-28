import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/css/style.css'
import Toasted from 'vue-toasted';


Vue.config.productionTip = false
Vue.use(Toasted, {
  duration: 1500
})


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
