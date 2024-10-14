<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="template-demo" style="text-align: center;">
                                        <button type="button" @click="viewStation" class="btn btn-outline-info btn-fw">Station</button>
                                        <button type="button" @click="viewSousBassin" class="btn btn-outline-info btn-fw">Sous bassin</button>
                                        <button type="button" @click="viewMesure" class="btn btn-outline-info btn-fw">Mesure</button>
                                    </div>
                                    <div class="col-lg-12 grid-margin stretch-card">
                                        <div class="card">
                                            <div v-if="isStationVisible">
                                                <listeStation :data="stations" />
                                            </div>
                                            <div v-if="isSousBassinVisible">
                                                <listeSousBassin :data="sousBassins" />
                                            </div>
                                            <div v-if="isMesureVisible">
                                                <listeMesure :data="mesures" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@mdi/font/css/materialdesignicons.min.css';
    import Menu from '@/components/Menu.vue';
    import listeMesure from './listeMesure.vue';
    import listeSousBassin from './listeSousBassin.vue';
    import listeStation from './listeStation.vue';
    import axios from 'axios';

    export default {
        name: 'Station',
        components: {
            Menu,
            listeMesure,
            listeSousBassin,
            listeStation,
        },
        data() {
            return {
                isMesureVisible: false,
                isSousBassinVisible: false,
                isStationVisible: false,
                sousBassins: [] ,
                mesures: [] , 
                stations: [],
            }
        },
        mounted() {
            this.viewStation();
        },
        methods: {
            viewMesure() {
                axios.get('http://localhost:8000/mesures/').then(response => {
                    this.mesures = response.data.data;
                }).catch(error => {
                    console.error('Erreur lors de la récupération des mesures');
                });
                this.isMesureVisible = true;
                this.isSousBassinVisible = false;
                this.isStationVisible = false;
            },
            viewSousBassin() {
                axios.get('http://localhost:8000/sousbassins/')
                    .then(response => {
                        this.sousBassins = response.data.data; 
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des sous-bassins:', error);
                    });
                this.isMesureVisible = false;
                this.isSousBassinVisible = true;
                this.isStationVisible = false;
            },
            viewStation() {
                axios.get('http://localhost:8000/stations/')
                .then(response => {
                    this.stations = response.data.data;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des stations:', error);
                });
                this.isMesureVisible = false;
                this.isSousBassinVisible = false;
                this.isStationVisible = true;
            }
        }
    };
</script>

<style scoped>
    @import '@/assets/css/style.css';
</style>
