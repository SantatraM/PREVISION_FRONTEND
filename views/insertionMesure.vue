<template>

    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title"> Inserer un mesure </h3>
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
                                <form @submit.prevent="submitForm"  class="forms-sample">
                                    <div class="form-group">
                                        <label for="exampleInputName1">mesure </label>
                                        <input type="text" v-model="mesure" class="form-control" id="exampleInputName1">
                                    </div>
                                  <button type="submit" class="btn btn-gradient-primary me-2">Submit</button>
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
            name: 'insertionMesure',
            components: {
                Menu,
            },
            data() {
                return {
                    mesure: '',
                    successMessage: '',
                    errorMessage: ''
                };
            },
            methods: {
                goBack() {
                    this.$router.go(-1);
                },
                async submitForm() {
                    try {
                        const response = await axios.post('http://localhost:8000/createMesure/', { mesure: this.mesure });
                        this.successMessage = response.data.message;
                        this.errorMessage = '';
                        this.resetForm();
                    } catch (error) {
                        if (error.response) {
                            this.errorMessage = error.response.data.error || 'Erreur lors de la création du mesure.';
                        } else {
                            this.errorMessage = 'Erreur réseau. Vérifiez votre connexion.';
                        }
                        this.successMessage = '';
                    }
                },
                resetForm() {
                    this.sousbassin = '';
                }
            }
        };
    </script>
    
    <style scoped>
        @import '@/assets/css/style.css';
    </style>