import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestView from '@/views/TestView.vue'
import UserByIdView from '@/views/UserByIdView.vue'
// shif + alt + fecha hacia abajo "para repetir la ultima linea"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },// http://localhost:5173/
    { path: '/test', name: 'Test', component: TestView}, // http://localhost:5173/test
    { path: '/user/:id', name:'userById', component: UserByIdView}
  ]
})

export default router

//* http://127.0.0.1:5173/user/7
// http://localhost:5173/