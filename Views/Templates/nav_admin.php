<body>
    <!-- ============================================================== -->
    <!-- main wrapper -->
    <!-- ============================================================== -->
    <div class="dashboard-main-wrapper">

        <div id="divLoading">
            <div>
                <img src="assets/images/loader.svg" alt="Loading">
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- navbar -->
        <!-- ============================================================== -->
        <div class="dashboard-header">

            <nav class="navbar navbar-expand-lg bg-white fixed-top">

                <a class="navbar-brand" href="<?php base_url() ?>/dashboard">Tienda Virtual</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navbar-right-top">



                        <li class="nav-item dropdown nav-user">

                            <a class="nav-link nav-user" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <i class="fa fa-user fa-lg" aria-hidden="true"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                                <div class="nav-user-info">
                                    <h5 class="mb-0 text-white nav-user-name"><?= $_SESSION['userData']['nombres'] . " " . $_SESSION['userData']['apellidos']; ?></h5>
                                    <span class="status"></span><span class=""><?= $_SESSION['userData']['nombrerol']; ?></span>
                                </div>
                                <a class="dropdown-item" href="<?php base_url() ?>/perfil"><i class="fas fa-user mr-2"></i>Perfil</a>
                                <a class="dropdown-item" href="<?php base_url() ?>/opciones"><i class="fas fa-cog mr-2"></i>Configuracion</a>
                                <a class="dropdown-item" href="<?php base_url() ?>/logout"><i class="fas fa-power-off mr-2"></i>Salir</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="nav-left-sidebar">
            <div class="menu-list">

                <nav class="navbar navbar-expand-lg navbar-light">

                    <a class="d-xl-none d-lg-none" href="#">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav flex-column">

                            <li class="nav-divider">
                                Menu
                            </li>

                            <?php if (!empty($_SESSION['permisos'][1]['r'])) { ?>
                                <li class="nav-item ">
                                    <a class="nav-link" href="<?php base_url() ?>/dashboard" aria-expanded="false"><i class="fa fa-fw fa-user-circle"></i>Dashboard</a>
                                </li>
                            <?php } ?>
                            <?php if (!empty($_SESSION['permisos'][2]['r'])) { ?>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i class="fa fa-fw fa-rocket"></i>Usuarios</a>
                                    <div id="submenu-2" class="collapse submenu">
                                        <ul class="nav flex-column">

                                            <li class="nav-item">
                                                <a class="nav-link" href="<?php base_url() ?>/usuarios"><i class="fa fa-circle-notch"></i>Usuarios</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="<?php base_url() ?>/roles"><i class="fa fa-circle-notch"></i>Roles</a>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                            <?php } ?>

                            <?php if (!empty($_SESSION['permisos'][3]['r'])) { ?>
                                <li class="nav-item ">
                                    <a class="nav-link" href="<?php base_url() ?>/clientes" aria-expanded="false"><i class="fa fa-fw fa-user-circle"></i>Clientes</a>
                                </li>
                            <?php } ?>

                            <?php if (!empty($_SESSION['permisos'][4]['r']) || !empty($_SESSION['permisos'][6]['r'])) { ?>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i class="fas fa-fw fa-archive"></i>Tienda</a>
                                    <div id="submenu-3" class="collapse submenu">
                                        <ul class="nav flex-column">
                                            <?php if (!empty($_SESSION['permisos'][6]['r'])) { ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php base_url() ?>/categorias"><i class="fa fa-circle-notch"></i>Categoria</a>
                                                </li>
                                            <?php } ?>

                                            <?php if (!empty($_SESSION['permisos'][4]['r'])) { ?>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="<?php base_url() ?>/productos"><i class="fa fa-circle-notch"></i>Productos</a>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    </div>
                                </li>
                            <?php } ?>
                            <?php if (!empty($_SESSION['permisos'][5]['r'])) { ?>
                                <li class="nav-item ">
                                    <a class="nav-link" href="<?php base_url() ?>/pedidos" aria-expanded="false"><i class="fa fa-fw fa-dolly-flatbed"></i>Pedidos</a>
                                </li>
                            <?php } ?>
                            <?php if (!empty($_SESSION['permisos'][7]['r'])) { ?>
                                <li class="nav-item ">
                                    <a class="nav-link" href="<?php base_url() ?>/suscriptores" aria-expanded="false"><i class="fa fa-fw fa-users"></i>Suscriptores</a>
                                </li>
                            <?php } ?>
                            <?php if (!empty($_SESSION['permisos'][8]['r'])) { ?>
                                <li class="nav-item ">
                                    <a class="nav-link" href="<?php base_url() ?>/mensajes" aria-expanded="false"><i class="fa fa-fw fa-envelope"></i>Mensajes</a>
                                </li>
                            <?php } ?>
                            <?php if (!empty($_SESSION['permisos'][9]['r'])) { ?>
                                <li class="nav-item ">
                                    <a class="nav-link" href="<?php base_url() ?>/paginas" aria-expanded="false"><i class="fa fa-fw fa-file"></i>Paginas</a>
                                </li>
                            <?php } ?>
                            <li class="nav-item ">
                                <a class="nav-link" href="<?php base_url() ?>/logout" aria-expanded="false"><i class="fa fa-fw fa-sign-in-alt"></i>Logout</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>