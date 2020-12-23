import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Memories from '@/views/Memories.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/memories',
    component: Memories
  },
  {
    path: '/memories/:id',
    component: () => import('../views/MemoryDetail.vue')
  },
  {
    path: '/memories/add',
    component: () => import('../views/AddMemory.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
