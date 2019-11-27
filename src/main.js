import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(BootstrapVue)
Vue.use(VueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')