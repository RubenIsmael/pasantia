<div class="modal fade" id="modalFormRol" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header headerRegister">
                <h5 class="modal-title" id="titulomodalrol">Nuevo Rol</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card">
                    <form id="formRol" name="formRol" class="needs-validation">
                        <div class="card-body">
                            <input type="hidden" name="idRol" id="idRol" value="">
                            <div class="form-group">
                                <label for="nombre" class="col-form-label">Nombre</label>
                                <input id="txtNombre" name="txtNombre" type="text" class="form-control" placeholder="Nombre de Rol">
                            </div>
                            <div class="form-group">
                                <label for="descripcion">Descripcion</label>
                                <textarea class="form-control" id="txtDescripcion" name="txtDescripcion" rows="2" placeholder="Descripción del rol"></textarea>

                            </div>
                            <div class="form-group">
                                <label for="input-select">Estado</label>
                                <select class="form-control" id="listStatus" name="listStatus">
                                    <option value="1">Activo</option>
                                    <option value="2">Inactivo</option>
                                </select>
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
</div>
