<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title">Modifier une station</h3>
                        <button @click="goBack" class="btn btn-gradient-primary btn-sm">Retour</button>
                    </div>
                    <div class="row">
                        <div class="col-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div v-if="errorMessage" class="alert alert-danger" style="margin-left: 50px;">
                                        {{ errorMessage }}
                                    </div>
                                    <div v-if="successMessage" class="alert alert-success" style="margin-left: 50px;">
                                        {{ successMessage }}
                                    </div>
                                    <form @submit.prevent="submitForm" class="forms-sample">
                                        <div class="form-group">
                                            <label for="site">Site</label>
                                            <input type="text" v-model="site" class="form-control" id="site" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="idsousbassin">Sous bassin</label>
                                            <select v-model="idsousbassin" class="form-control" id="idsousbassin" required>
                                                <option value="">Choisir un sous-bassin</option>
                                                <option v-for="sousbassin in sousBassins" :key="sousbassin.idsousbassin" :value="sousbassin.idsousbassin">{{ sousbassin.sousbassin }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="idmesure">Mesure</label>
                                            <select v-model="idmesure" class="form-control" id="idmesure" required>
                                                <option value="">Choisir une mesure</option>
                                                <option v-for="mesure in mesures" :key="mesure.idmesure" :value="mesure.idmesure">{{ mesure.mesure }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="longitude">Longitude</label>
                                            <input type="number" v-model="longitude" step="any" class="form-control" id="longitude" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="latitude">Latitude</label>
                                            <input type="number" v-model="latitude" step="any" class="form-control" id="latitude" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="code">Code</label>
                                            <input type="text" v-model="code" class="form-control" id="code" required>
                                        </div>
                                        <button type="submit" class="btn btn-gradient-primary me-2">Mettre à jour</button>
                                    </form>
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
import axios from 'axios'; 
import '@mdi/font/css/materialdesignicons.min.css';
import Menu from '@/components/Menu.vue';

export default {
    name: 'modificationStation',
    components: {
        Menu,
    },
    props: {
        idstation: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            sousBassins: [],
            mesures: [],
            site: '',
            idsousbassin: '',
            idmesure: '',
            longitude: null,
            latitude: null,
            code: '',
            successMessage: '',
            errorMessage: '',
        };
    },
    async mounted() {
        this.listeSousBassin();
        this.listeMesures();
        await this.fetchMeasure();
    },  
    methods: {
        goBack() {
            this.$router.go(-1);
        },  
        async fetchMeasure() {
            try {
                const response = await axios.get(`http://localhost:8000/station/${this.idstation}`);
                const data = response.data.data;
                this.site = data.site;
                this.idsousbassin = data.idsousbassin;
                this.idmesure = data.idmesure;
                this.longitude = data.longitude;
                this.latitude = data.latitude;
                this.code = data.code;
            } catch (error) {
                this.errorMessage = 'Erreur lors de la récupération des données.';
            }
        },
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:8000/updateStation/', {
                    idstation: this.idstation,
                    site: this.site,
                    idsousbassin: this.idsousbassin,
                    idmesure: this.idmesure,
                    longitude: this.longitude,
                    latitude: this.latitude,
                    code: this.code
                });
                this.successMessage = 'Station mise à jour avec succès.';
                this.errorMessage = '';
            } catch (error) {
                this.errorMessage = error.response?.data?.error || 'Erreur lors de la mise à jour de la station.';
                this.successMessage = '';
            }
        },  
        listeSousBassin() {
            axios.get('http://localhost:8000/sousbassins/')
                .then(response => {
                    this.sousBassins = response.data.data;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des sous-bassins:', error);
                });
        },
        listeMesures() {
            axios.get('http://localhost:8000/mesures/')
                .then(response => {
                    this.mesures = response.data.data;
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des mesures:', error);
                });
        }
    }
};
</script>

<style scoped>
@import '@/assets/css/style.css';
</style>
