import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './lib/dateFilter'

Vue.config.productionTip = false
Vue.use(dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
