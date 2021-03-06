import Vue from 'vue'
import App from './App.vue'
import storeReal from './store'
import storeMock from './store.mock'
import './registerServiceWorker'

const store = process.env.NODE_ENV === 'test' ? storeMock : storeReal

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
