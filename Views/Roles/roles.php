<?php headerAdmin($data);

?>


<div id="contentAjax"></div>
<div class="dashboard-wrapper">
    
    <div class="container-fluid  dashboard-content">
        <!-- ============================================================== -->
        <!-- pageheader -->
        <!-- ============================================================== -->
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="page-header">
                    <h2 class="pageheader-title"><?php echo $data['page_tag']?>
                        <a href="" class="btn btn-primary" data-toggle ='modal'  onclick="openModal()" ><i class="fas fa-plus-circle"></i> Nuevo</a> 
                    </h2>
                    
                    <div class="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><button href="#" class="breadcrumb-link">Dashboard</button></li>
                                <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Usuarios</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Roles</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
       
        <!-- ============================================================== -->
        <!-- end pageheader -->
        <!-- ============================================================== -->

        <div class="row">
            <!-- ============================================================== -->
            <!-- fixed header  -->
            <!-- ============================================================== -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card">

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="tablaroles" class="table table-striped table-bordered" >
                                <thead>
                                    <tr>
                                        <th >ID</th>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Status</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                   
                                </tbody>
                               
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- end fixed header  -->
            <!-- ============================================================== -->
        </div>

    </div>
<?php require_once 'Views/Templates/Modals/modalRoles.php';
?>
<script src="assets/libs/js/functions_roles.js"></script>
<?php footerAdmin($data); ?>