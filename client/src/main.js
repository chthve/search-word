import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/home'
import Info from './components/word-info'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/info/:language/:word', component: Info }
]

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
