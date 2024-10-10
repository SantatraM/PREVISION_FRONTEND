import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/components/Menu.vue';
import insertionStation from '@/views/insertionStation.vue';

const routes = [
{
    path: '/',
    name: 'insertionStation',
    component: insertionStation
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;