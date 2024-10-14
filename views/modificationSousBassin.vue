<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title"> Modifier un sous bassin </h3>
                        <button @click="goBack" class="btn btn-gradient-primary btn-sm">Retour</button>
                    </div>
                    <div class="row">
                        <div class="col-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div v-if="errorMessage" style="margin-left: 50px; color: red;">
                                        {{ errorMessage }}
                                    </div>
                                    <div v-if="successMessage" style="margin-left: 50px; color: greenyellow;">
                                        {{ successMessage }}
                                    </div>
                                    <form @submit.prevent="submitForm" class="forms-sample">
                                        <div class="form-group">
                                            <label for="mesureInput">Sous bassin</label>
                                            <input type="text" v-model="sousbassin" class="form-control" id="mesureInput">
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
import '@mdi/font/css/materialdesignicons.min.css';
import Menu from '@/components/Menu.vue';
import axios from 'axios';

export default {
    name: 'ModificationMesure',
    components: {
        Menu,
    },
    props: {
        idsousbassin: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            sousbassin: '',
            successMessage: '',
            errorMessage: '',
        };
    },
    async mounted() {
        await this.fetchMeasure();
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        async fetchMeasure() {
            try {
                const response = await axios.get(`http://localhost:8000/sousbassin/${this.idsousbassin}`);
                this.sousbassin = response.data.data.sousbassin;
            } catch (error) {
                this.errorMessage = 'Erreur lors de la récupération des données.';
            }
        },
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:8000/updateSousBassin/', {
                    idsousbassin: this.idsousbassin,
                    sousbassin: this.sousbassin
                });
                this.successMessage = response.data.message;
                this.errorMessage = '';
            } catch (error) {
                this.errorMessage = error.response?.data?.error || 'Erreur lors de la mise à jour du bassin.';
                this.successMessage = '';
            }
        }
    },
};
</script>

<style scoped>
@import '@/assets/css/style.css';
</style>
