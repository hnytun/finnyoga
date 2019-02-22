import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Dropins from './components/Dropins.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'homeLink', component: Home },
    { path: '/dropins', name: 'dropinsLink', component: Dropins },
  ]
})

