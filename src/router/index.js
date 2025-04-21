import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../Pages/Home.vue';
import AlternativesPage from '../Pages/AlternativesPage.vue';
import GroundingTechniquesPage from '../Pages/GroundingTechniquesPage.vue';
import HotlinesPage from '../Pages/HotlinesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    component: Home
  },
  
  {
    path: '/alternatives',
    component: AlternativesPage
  },

  {
    path: '/grounding',
    component: GroundingTechniquesPage
  },

  {
    path: '/hotlines',
    component: HotlinesPage
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router


