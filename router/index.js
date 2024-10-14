import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/components/Menu.vue';
import insertionStation from '@/views/insertionStation.vue';
import insertionMesure from '@/views/insertionMesure.vue';
import insertionSousBassin from '@/views/insertionSousBassin.vue';
import station from '@/views/station.vue';

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  { path: '/parametre-station' , name: 'station' , component: station},
  { path: '/insert-station' , name: 'insertionStation' , component:insertionStation},
  { path: '/insert-mesure' , name: 'insertionMesure',component:insertionMesure},
  { path: '/insert-sous-bassin', name: 'insertionSousBassin',component:insertionSousBassin},
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;