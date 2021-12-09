import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Experience from '@/views/Experience.vue'
import Portfolio from '@/views/Portfolio.vue'
import Courses from '@/views/Courses.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/service",
    component: Services,
  },
  {
    path: "/experience",
    component: Experience,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/courses",
    component: Courses,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
