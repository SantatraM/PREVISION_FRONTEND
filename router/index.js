import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/components/Menu.vue';
import insertionStation from '@/views/insertionStation.vue';
import station from '@/views/station.vue';

const routes = [
{
    path: '/',
    name: 'station',
    component: station
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;