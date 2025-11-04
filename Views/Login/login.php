<!doctype html>
<html lang="es">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?= $data['page_tag'] ?></title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/vendor/bootstrap4.3/css/bootstrap.min.css">
    <link href="assets/vendor/fonts/circular-std/style.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/libs/css/style.css">
    <link rel="stylesheet" href="assets/libs/css/main.css">
    <link rel="stylesheet" href="assets/vendor/fonts/fontawesome/css/fontawesome-all.css">
    <style>
        html,
        body {
            height: 100%;
        }

        body {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
        }
    </style>
</head>

<body>
    <!-- ============================================================== -->
    <!-- login page  -->
    <!-- ============================================================== -->
    <div class="splash-container">
        <div class="card ">
            <div id="divLoadingLogin">
                <div>
                    <img src="assets/images/loader.svg" alt="Loading">
                </div>
            </div>
            <div class="card-header text-center"><a href="<?= base_url()?>"><img class="logo-img" src="assets/images/logo.png" alt="logo"></a><span class="splash-description">Iniciar Sesion</span></div>
            <div class="card-body">

                <form class="login-form" name="formLogin" id="formLogin">
                    <div class="form-group">
                        <input class="form-control form-control-lg" id="txtEmail" type="text" placeholder="Email" name="txtEmail" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <input class="form-control form-control-lg" id="txtPassword" type="password" name="txtPassword" placeholder="Contraseña">
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg btn-block">Iniciar Sesion</button>
                </form>
            </div>
            <div class="card-footer bg-white p-0 text-center">

                <div class="card-footer-item card-footer-item-bordered">
                    <a href="<?php base_url() ?>/forgetpassword" class="footer-link">Olvidaste tu contraseña?</a>
                </div>
            </div>
        </div>
    </div>

    <!-- ============================================================== -->
    <!-- end login page  -->
    <!-- ============================================================== -->
    <!-- Optional JavaScript -->
    <script src="assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <script src="assets/vendor/bootstrap4.3/js/bootstrap.min.js"></script>
    <script src="assets/libs/js/sweetalert.min.js"></script>
    <script src="assets/libs/js/functions_login.js"> </script>

    <script>
        const base_url = "<?= base_url(); ?>"
    </script>
</body>

</html>