import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/battle',
    component: () => import('./pages/battle.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
