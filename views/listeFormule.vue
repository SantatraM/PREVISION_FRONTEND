<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title"> Liste des formules de calcul de debit </h3>
                    </div>
                    <div class="row">
                        <div class="col-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <p>
                                        <RouterLink to="insert-formule" class="btn btn-gradient-primary btn-sm">Inserer un nouveu formule</RouterLink>
                                    </p>
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th> Station </th>
                                            <th> Condition </th>
                                            <th> Formule </th>
                                            <th> Formule final </th>
                                            <th> Action </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="formule in paginatedData" :key="formule.idformule">
                                            <td class="py-1"> {{ formule.station }}</td>
                                            <td> {{ "si hauteur <= "+ formule.condition }} </td>
                                            <td> {{ formule.formule }} </td>
                                            <td> {{ formule.formulefinal }} </td>
                                            <td> 
                                                <!-- <RouterLink :to="{ name: 'modificationMesure', params: { idmesure: mesure.idmesure } }">
                                                    <button type="button" class="btn btn-social-icon btn-twitter" style="width: 30px; height: 30px;">
                                                        <i class="mdi mdi-pencil"></i>
                                                    </button>
                                                </RouterLink> -->
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="pagination-controls">
                                        <button @click="prevPage" :disabled="currentPage === 1">précédent</button>
                                        <span>Page {{ currentPage }} sur {{ totalPages }}</span>
                                        <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
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
    import Menu from '@/components/Menu.vue';
    import axios from 'axios';

    export default{
        name: 'listeFormule',
        components: {
            Menu,
        },
        data() {
            return { 
                formules : [],
                currentPage: 1,
                itemsPerPage: 5,
            }
        },        
        async mounted() {
            axios.get('http://localhost:8000/formules/').then(response => {
                this.formules = response.data.data;
            }).catch(error => {
                console.error('Erreur lors de la récupération des formules');
            });
        },
        computed: {
            totalPages() {
                return Math.ceil(this.formules.length / this.itemsPerPage)
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.formules.slice(start,end);
            }
        },
        methods: {
            nextPage() {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                }
            },
            prevPage() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            }
        }
    };
</script>

<style scoped>
    @import '@/assets/css/style.css';
</style>