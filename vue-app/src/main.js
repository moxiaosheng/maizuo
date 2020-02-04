import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './globel.scss'
import { Tabbar, TabItem} from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
