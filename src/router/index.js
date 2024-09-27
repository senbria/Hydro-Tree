import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import compositiontest from '../views/compositiontest.vue'
import tables from '../views/tables.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/test',
      name: 'CompositionTest',
      component: compositiontest

    },
    { path:'/tables',
      name:'tables',
      component:tables

    },

    
  
  ]
    
})

export default router
