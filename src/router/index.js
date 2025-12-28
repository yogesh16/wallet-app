import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaparaCardView from '../views/PaparaCardView.vue'
import SpendingSummaryView from '../views/SpendingSummaryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/card',
      name: 'card',
      component: PaparaCardView
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: SpendingSummaryView
    }
  ],
})

export default router
