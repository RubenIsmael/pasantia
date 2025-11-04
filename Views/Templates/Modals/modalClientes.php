<div class="modal fade" id="modalFormCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header headerRegister">
                <h5 class="modal-title color" id="titleModal">Nuevo Usuario</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <form id="formCliente" name="formCliente" class="form-horizontal">
                    <input type="hidden" id="idUsuario" name="idUsuario" value="">
                    <p class="text-primary">Los campos con asterisco son oblicatorios (*)</p>
                    <div class="card-body">
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="txtIdentificacion">Identificación</label>
                                <input type="text" class="form-control" id="txtIdentificacion" name="txtIdentificacion">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtNombre">Nombres</label>
                                <input type="text" class="form-control valid validText" id="txtNombre" name="txtNombre" required="">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtApellido">Apellidos</label>
                                <input type="text" class="form-control valid validText" id="txtApellido" name="txtApellido" required="">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="txtTelefono">Teléfono</label>
                                <input type="text" class="form-control valid validNumber" id="txtTelefono" name="txtTelefono" required="" onkeypress="return controlTag(event);">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="txtEmail">Email</label>
                                <input type="email" class="form-control valid validEmail" id="txtEmail" name="txtEmail" required="">
                            </div>
                            
                            <div class="form-group col-md-4">
                                <label for="txtPassword">Password</label>
                                <input type="password" class="form-control" id="txtPassword" name="txtPassword">
                            
                            </div>
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-12">
                                <label for="txtPassword">Direccion</label>
                                <input type="text" class="form-control" id="txtDirFiscal" name="txtDirFiscal">
                            
                            </div>
                            
                        </div>
                        
                    </div>


                    <div class="card-body border-top">
                        <button id="btnActionForm" class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle" aria-hidden="true"></i><span id="btnText">Guardar</span></button>
                        <a class="btn btn-secondary" href="#" data-dismiss="modal"><i class="fa fa-fw fa-lg fa-times-circle" aria-hidden="true"></i>Cancelar</a>
                    </div>
                </form>

            </div>

        </div>
    </div>
</div>
<div class="modal fade" id="modalViewCliente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header headerView">
                <h5 class="modal-title color" id="titleModal">Datos del Usuario</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Identificación:</td>
                            <td id="celIdentificacion">654654654</td>
                        </tr>
                        <tr>
                            <td>Nombres:</td>
                            <td id="celNombre">Jacob</td>
                        </tr>
                        <tr>
                            <td>Apellidos:</td>
                            <td id="celApellido">Jacob</td>
                        </tr>
                        <tr>
                            <td>Teléfono:</td>
                            <td id="celTelefono">Larry</td>
                        </tr>
                        <tr>
                            <td>Email (Usuario):</td>
                            <td id="celEmail">Larry</td>
                        </tr>
                        <tr>
                            <td>Direccion:</td>
                            <td id="celDirFiscal">Larry</td>
                        </tr>

                        <tr>
                            <td>Fecha registro:</td>
                            <td id="celFechaRegistro">Larry</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>

        </div>
    </div>
</div>