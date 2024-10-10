<template>
    <!-- <div class="container-scroller"> -->
        <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a href="" style="margin-top: 5%;"><img src="@/assets/Capture.png" alt="logo" /></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-stretch">
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item d-none d-lg-block full-screen-link">
                        <a class="nav-link">
                            <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                            <i class="mdi mdi-bell-outline"></i>
                            <span class="count-symbol bg-danger"></span>
                        </a>
                    </li>
                    <li class="nav-item nav-logout d-none d-lg-block">
                        <a class="nav-link" href="#">
                            <i class="mdi mdi-power"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="sidebar sidebar-offcanvas" id="sidebar" style="margin-top: 7%;">
            <ul class="nav">
                <li class="nav-item" style="display: block;">
                    <a class="nav-link" href="../../index.html">
                        <span class="menu-title">Tableau de bord</span>
                        <i class="mdi mdi-home menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <span class="menu-title">Formule</span>
                        <i class="mdi mdi-crosshairs-gps menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../pages/icons/mdi.html">
                        <span class="menu-title">Parametre</span>
                        <i class="mdi mdi-contacts menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../pages/forms/basic_elements.html">
                        <span class="menu-title">Seuil</span>
                        <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../pages/charts/chartjs.html">
                        <span class="menu-title">Crues</span>
                        <i class="mdi mdi-chart-bar menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../pages/tables/basic-table.html">
                        <span class="menu-title">Analyse</span>
                        <i class="mdi mdi-table-large menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../pages/tables/basic-table.html">
                    <span class="menu-title">Information terrain</span>
                    <i class="mdi mdi-table-large menu-icon"></i>
                    </a>
                </li>
            </ul>
        </nav>
</template>
  
<script>
    // import '@fortawesome/fontawesome-free/css/all.css';
    // import '@fortawesome/fontawesome-free/js/all.js';
    import '@mdi/font/css/materialdesignicons.min.css';
  
    export default {
        name: 'Menu',
    };
</script>
  
<style scoped>
    @import '@/assets/css/style.css';
</style>