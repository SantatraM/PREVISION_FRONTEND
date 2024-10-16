import { createRouter, createWebHistory } from 'vue-router';
import Menu from '@/components/Menu.vue';
import insertionStation from '@/views/insertionStation.vue';
import insertionMesure from '@/views/insertionMesure.vue';
import insertionSousBassin from '@/views/insertionSousBassin.vue';
import modificationMesure from '@/views/modificationMesure.vue';
import modificationSousBassin from '@/views/modificationSousBassin.vue';
import modificationStation from '@/views/modificationStation.vue';
import listeFormule from '@/views/listeFormule.vue';
import insertionFormule from '@/views/insertionFormule.vue';
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
  { path: '/update-mesure/:idmesure', name: 'modificationMesure',component:modificationMesure, props:true},
  { path: '/update-sousbassin/:idsousbassin', name: 'modificationSousBassin',component:modificationSousBassin, props:true},
  { path: '/update-station/:idstation', name: 'modificationStation',component:modificationStation, props:true},
  { path: '/list-formule', name: 'listeFormule',component:listeFormule},
  { path: '/insert-formule', name: 'insertionFormule',component:insertionFormule},
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;