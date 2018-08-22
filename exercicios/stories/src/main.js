import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  return value.charAt(0).toUpperCase() + value.substr(1)
})

new Vue({
  render: h => h(App)
}).$mount('#app')
