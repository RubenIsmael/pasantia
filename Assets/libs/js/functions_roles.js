function openModal() {
    $('#modalFormRol').modal();
    document.querySelector('#idRol').value = "";
    document.querySelector('.modal-header').classList.replace("headerUpdate", "headerRegister");
    document.querySelector('#btnActionForm').classList.replace("btn-success", "btn-primary");
    document.querySelector('#btnText').innerHTML = "Guardar";
    document.querySelector('#titulomodalrol').innerHTML = "Nuevo Rol";
    document.querySelector("#formRol").reset();
}
var ids = 1
var tableRoles;
document.addEventListener('DOMContentLoaded', function () {
    tableRoles = $('#tablaroles').dataTable({
        "aProcessing": true,
        "aServerSide": true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
        "ajax": {
            "url": " " + base_url + "/Roles/getRoles",
            "dataSrc": ""
        },
        "columns": [
            { "data": "ids" },
            { "data": "nombrerol" },
            { "data": "descripcion" },
            { "data": "status" },
            { "data": "options" }
        ],
        "resonsieve": "true",
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [[0, "asc"]]
    })
});

var formRol = document.querySelector("#formRol");
formRol.onsubmit = function (e) {
    e.preventDefault();


    var strNombre = document.querySelector('#txtNombre').value;
    var strDescripcion = document.querySelector('#txtDescripcion').value;
    var intStatus = document.querySelector('#listStatus').value;
    if (strNombre == '' || strDescripcion == '' || intStatus == '') {
        swal("Atención", "Todos los campos son obligatorios.", "error");
        return false;
    }
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var ajaxUrl = base_url + '/Roles/setRoles';
    var formData = new FormData(formRol);
    request.open("POST", ajaxUrl, true);
    request.send(formData);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {

            var objData = JSON.parse(request.responseText);
            if (objData.status) {
                $('#modalFormRol').modal("hide");
                formRol.reset();
                swal("Roles de usuario", objData.msg, "success");
                tableRoles.api().ajax.reload();
            } else {
                swal("Error", objData.msg, "error");
            }
        }

    }



}


function fntEditRol(id) {

    document.querySelector('#titulomodalrol').innerHTML = "Actualizar Rol";
    document.querySelector('.modal-header').classList.replace("headerRegister","headerUpdate");
    document.querySelector('#btnActionForm').classList.replace("btn-primary", "btn-success");
    document.querySelector('#btnText').innerHTML = "Actualizar";


    var idrol = id;
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var ajaxUrl = base_url + '/Roles/getRol/' + idrol;

    request.open("GET", ajaxUrl, true);
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var datos = JSON.parse(request.responseText);
            if (datos.status) {
                document.querySelector("#idRol").value = datos.data.idrol;
                document.querySelector("#txtNombre").value = datos.data.nombrerol;
                document.querySelector("#txtDescripcion").value = datos.data.descripcion;

                if (datos.data.status == 1) {
                    var opSelect = '<option value ="1" selected class="notBlock">Activo</option>';
                } else {
                    var opSelect = '<option value ="2" selected class="notBlock">Inactivo</option>';
                }

                var htmlSelect = `${opSelect}
                                    <option value="1">Activo</option>
                                    <option value = "2">Inactivo</option>`;

                document.querySelector("#listStatus").innerHTML = htmlSelect;
                $('modalFormRol').modal();

            } else {
                swal("Error", datos.msg, "error");
            }
        }
    }
    $('#modalFormRol').modal();



}

function fntDelRol(id) {
    var idrol = id;
    swal({
        title: "Eliminar Rol",
        text: "¿Realmente quiere eliminar el Rol?",
        icon: "warning",
        buttons: {
            confirm: "Si",
            cancel: "No",

        },

    }).then((result) => {


        if (result) {
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url + '/Roles/delRol/';
            var strData = "idRol=" + idrol;
            request.open("POST", ajaxUrl, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(strData);
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    var objData = JSON.parse(request.responseText);
                    if (objData.status) {
                        swal("Eliminar!", objData.msg, "success");
                        tableRoles.api().ajax.reload();
                    } else {
                        swal("Atención!", objData.msg, "error");
                    }
                }
            }
        }

    });

}

function fntPermisos(id) {
    var idrol = id;
    
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var ajaxUrl = base_url + '/Permisos/getPermisosRol/' + idrol;
    request.open("GET", ajaxUrl, true);
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            
            document.querySelector('#contentAjax').innerHTML = request.responseText;
            
            document.querySelector('#formPermisos').addEventListener('submit', fntSavePermisos, false);
           
            $('.modalPermisos').modal('show');
        }
    }
    
}
function fntSavePermisos(evnet) {
    evnet.preventDefault();
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    var ajaxUrl = base_url+'/Permisos/setPermisos'; 
    var formElement = document.querySelector("#formPermisos");
    var formData = new FormData(formElement);
    request.open("POST",ajaxUrl,true);
    request.send(formData);

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            var objData = JSON.parse(request.responseText);
            if(objData.status)
            {
                swal("Permisos de usuario", objData.msg ,"success");
            }else{
                swal("Error", objData.msg , "error");
            }
        }
    }
 }

