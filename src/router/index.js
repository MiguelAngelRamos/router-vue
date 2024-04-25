import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'
// shif + alt + fecha hacia abajo "para repetir la ultima linea"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },// http://localhost:5173/
    { path: '/test', name: 'Test', component: TestView} // http://localhost:5173/test
  ]
})

export default router


// http://localhost:5173/test