import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../Pages/Home.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    component: Home
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
