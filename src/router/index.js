import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../modules/pages/BienvenidaPage')
  },
  {
    path: '/generarToken',
    component: () => import('../modules/pages/GenerarToken.vue')
  },
  {
    path: '/guardarEstudiante',
    component: () => import('../modules/pages/GuardarEstudiante.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
