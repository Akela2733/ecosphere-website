import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IssuesAndSolutions from '../views/IssuesAndSolutions.vue'
import ContactView from '../views/ContactView.vue'
import ForumView from '../views/ForumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/issues-and-solutions',
      name: 'issuesAndSolutions',
      component: IssuesAndSolutions
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/forum',
      name: 'forum',
      component: ForumView
    },
  ]
})

export default router
