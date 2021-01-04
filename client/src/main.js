import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/home'
import Info from './components/word-info'
import About from './components/about'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/info/:language/:word', component: Info },
  { path: '/about', component: About }
]

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
