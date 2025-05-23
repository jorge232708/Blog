import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Registro from '../views/Registro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;