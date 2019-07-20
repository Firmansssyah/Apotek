import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/about', name: 'about',
      component: () => import('./views/About.vue')},
    { path: '/kasir', name: 'kasir',
      component: () => import('./views/Kasir.vue')},
    { path: '/pasien', name: 'pasien',
      component: () => import('./views/Pasien.vue')},
    { path: '/laporan', name: 'laporan',
      component: () => import('./views/Laporan.vue')},
    { path: '/profile', name: 'profile',
      component: () => import('./views/Profile.vue')},
    { path: '/obat', name: 'obat',
      component: () => import('./views/Obat.vue')},
  ]
})
