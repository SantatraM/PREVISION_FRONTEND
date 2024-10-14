<template>

    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title"> Inserer un formule </h3>
                        <button @click="goBack" class="btn btn-gradient-primary btn-sm">Retour</button>
                    </div>
                    <div class="row">
                        <div class="col-12 grid-margin stretch-card">
                            <div class="card">
                              <div class="card-body">
                                <form class="forms-sample">
                                    <div class="form-group">
                                        <label for="exampleSelectGender">Station</label>
                                        <select class="form-control" id="exampleSelectGender">
                                        <option>Male</option>
                                        <option>Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName1">condition (si hauteur inferieur ou egal a)</label>
                                        <input type="number" class="form-control" id="exampleInputName1">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName1">formule</label>
                                        <input type="text" class="form-control" id="exampleInputName1">
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
    
        export default {
            name: 'insertionFormule',
            components: {
                Menu,
            },
            methods: {
                goBack() {
                    this.$router.go(-1);
                },
            }
        };
    </script>
    
    <style scoped>
        @import '@/assets/css/style.css';
    </style>