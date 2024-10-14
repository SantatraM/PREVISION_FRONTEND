<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title">Insérer une nouvelle station</h3>
                        <button @click="goBack" class="btn btn-gradient-primary btn-sm">Retour</button>
                    </div>
                    <div class="row">
                        <div class="col-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div v-if="errorMessage"  style="margin-left: 50px;color: red;">
                                        {{ errorMessage }}
                                    </div>
                                    <div v-if="successMessage" style="margin-left: 50px;color: greenyellow;">
                                        {{ successMessage }}
                                    </div>
                                    <form @submit.prevent="submitForm" class="forms-sample">
                                        <div class="form-group">
                                            <label for="site">Site</label>
                                            <input type="text" v-model="station.site" class="form-control" id="site" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="idsousbassin">Sous bassin</label>
                                            <select v-model="station.idsousbassin" class="form-control" id="idsousbassin" required>
                                                <option value="">Choisir un sous-bassin</option>
                                                <option v-for="sousbassin in sousBassins" :key="sousbassin.idsousbassin" :value="sousbassin.idsousbassin">{{ sousbassin.sousbassin }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="idmesure">Mesure</label>
                                            <select v-model="station.idmesure" class="form-control" id="idmesure" required>
                                                <option value="">Choisir une mesure</option>
                                                <option v-for="mesure in mesures" :key="mesure.idmesure" :value="mesure.idmesure">{{ mesure.mesure }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="longitude">Longitude</label>
                                            <input type="number" v-model="station.longitude" step="any" class="form-control" id="longitude" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="latitude">Latitude</label>
                                            <input type="number" v-model="station.latitude" step="any" class="form-control" id="latitude" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="code">Code</label>
                                            <input type="text" v-model="station.code" class="form-control" id="code" required>
                                        </div>
                                        <button type="submit" class="btn btn-gradient-primary me-2">Insérer</button>
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
    name: 'insertionStation',
    components: {
        Menu,
    },
    data() {
        return {
            sousBassins: [],
            mesures: [],
            station: {
                site: '',
                idsousbassin: '',
                idmesure: '',
                longitude: null,
                latitude: null,
                code: '',
            },
            successMessage: '',
            errorMessage: '',
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },    
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:8000/createStation/', this.station);
                this.successMessage = response.data.message;
                this.errorMessage = '';
                this.resetForm();
            } catch (error) {
                if (error.response) {
                this.errorMessage = error.response.data.error || 'Erreur lors de la création de la station.';
                } else {
                this.error = 'Erreur réseau. Vérifiez votre connexion.';
                }
                this.successMessage = '';
            }
        },    
        resetForm() {
            this.station = {
                site: '',
                idsousbassin: '',
                idmesure: '',
                longitude: null,
                latitude: null,
                code: '',
            };
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
    },
    mounted() {
        this.listeSousBassin();
        this.listeMesures();
    }
};
</script>

<style scoped>
@import '@/assets/css/style.css';
</style>
