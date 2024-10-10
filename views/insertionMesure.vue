<template>

    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper">
            <Menu />
            <div class="main-panel" style="margin-top: 50px;">
                <div class="content-wrapper">
                    <div class="page-header">
                        <h3 class="page-title"> Inserer un mesure </h3>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Forms</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Form elements</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="row">
                        <div class="col-12 grid-margin stretch-card">
                            <div class="card">
                              <div class="card-body">
                                <form class="forms-sample">
                                    <div class="form-group">
                                        <label for="exampleInputName1">mesure </label>
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
            name: 'insertionMesure',
            components: {
                Menu,
            }
        };
    </script>
    
    <style scoped>
        @import '@/assets/css/style.css';
    </style>