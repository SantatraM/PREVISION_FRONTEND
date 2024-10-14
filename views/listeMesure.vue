<template>
    <div class="card-body">
        <p>
            <RouterLink to="insert-mesure" class="btn btn-gradient-primary btn-sm">Inserer un nouveu mesure</RouterLink>
        </p>
        <table class="table table-striped">
            <thead>
            <tr>
                <th> Mesure </th>
                <th> Action </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="mesure in paginatedData" :key="mesure.idmesure">
                <td class="py-1"> {{ mesure.mesure }}
                </td>
                <td> 
                    <button type="button" class="btn btn-social-icon btn-twitter" style="width: 30px; height: 30px;"><i class="mdi mdi-pencil"></i></button>
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
</template>

<script>
    export default{
        name: 'listeMesure',
        props: {
            data: {
                type: Array,
                required: true
            }
        },
        data() {
            return { 
                currentPage: 1,
                itemsPerPage: 5,
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.data.length / this.itemsPerPage)
            },
            paginatedData() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.data.slice(start,end);
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