import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';  
import about from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/home',
      name:'home-intro',
      component:HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },{
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
