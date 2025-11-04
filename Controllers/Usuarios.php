<?php
class Usuarios extends Controllers
{

    public function __construct()
    {
        parent::__construct();
        session_start();
        if (empty($_SESSION['login'])) {
            header('Location: ' . base_url() . 'login');
            die();
        }
        getPermisos(2);
    }
    public function usuarios($params)
    {

        $data['page_tag'] = 'Usuarios<small> - Tienda Virtual </small>';
        $data['page_title'] = 'Usuarios';
        $data['page_name'] = 'Usuarios';
        $data['pagee_content'] = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae consequuntur perferendis aperiam, quaerat ab voluptatum laudantium temporibus eveniet dolore officiis, consequatur dolores id iusto qui quos a maiores nemo.';
        $this->views->getView($this, 'usuarios', $data);
    }
    public function setUsuario()
    {
        if ($_POST) {
            if (empty($_POST['txtIdentificacion']) || empty($_POST['txtNombre']) || empty($_POST['txtApellido']) || empty($_POST['txtTelefono']) || empty($_POST['txtEmail']) || empty($_POST['listRolid']) || empty($_POST['listStatus'])) {
                $arrResponse = array("status" => false, "msg" => 'Datos incorrectos.');
            } else {
                $idUsuario = intval($_POST['idUsuario']);
                $strIdentificacion = strClean($_POST['txtIdentificacion']);
                $strNombre = ucwords(strClean($_POST['txtNombre']));
                $strApellido = ucwords(strClean($_POST['txtApellido']));
                $intTelefono = strClean($_POST['txtTelefono']);
                $strEmail = strtolower(strClean($_POST['txtEmail']));
                $intTipoId = intval(strClean($_POST['listRolid']));
                $intStatus = intval(strClean($_POST['listStatus']));
                $request_usera = "";
                $exist = "existe";

                if ($idUsuario == 0) {
                    $option = 1;
                    $strPassword =  empty($_POST['txtPassword']) ? hash("SHA256", passGenerator()) : hash("SHA256", $_POST['txtPassword']);

                    $request_usera = $this->model->insertUsuario(

                        $strIdentificacion,
                        $strNombre,
                        $strApellido,
                        $intTelefono,
                        $strEmail,
                        $strPassword,
                        $intTipoId,
                        $intStatus
                    );
                } else {
                    $option = 2;
                    $strPassword =  empty($_POST['txtPassword']) ? "" : hash("SHA256", $_POST['txtPassword']);
                    $request_usera = $this->model->updateUsuario(
                        $idUsuario,
                        $strIdentificacion,
                        $strNombre,
                        $strApellido,
                        $intTelefono,
                        $strEmail,
                        $strPassword,
                        $intTipoId,
                        $intStatus
                    );
                }


                if ($request_usera > 0) {
                    if ($option == 1) {
                        $arrResponse = array('status' => true, 'msg' => 'Datos guardados correctamente.');
                    } else {
                        $arrResponse = array('status' => true, 'msg' => 'Datos Actualizados correctamente.');
                    }
                } else {


                    if ($request_usera == $exist) {
                        $arrResponse = array('status' => false, 'msg' => '¡Atención! el email o la identificación ya existe, ingrese otro.');
                    } else {
                        $arrResponse = array("status" => false, "msg" => 'No es posible almacenar los datos.');
                    }
                }
            }

            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
    }

    public function getUsuarios()
    {
        $arrData = $this->model->selectUsuarios();
        for ($i = 0; $i < count($arrData); $i++) {
            if ($arrData[$i]['status'] == 1) {
                $arrData[$i]['status'] = '<span class="badge badge-success">Activo</span>';
            } else {
                $arrData[$i]['status'] = '<span class="badge badge-danger">Inactivo</span>';
            }
            $arrData[$i]['ids'] = $i + 1;
            $arrData[$i]['options'] = '<div class="text-center">
            <button type="" class="btn btn-brand btn-sm btnViewUsuario data-toggle ="modal" onClick="fntVerUsuario(' . $arrData[$i]['idpersona'] . ')" title="Ver usuario"><i class="fas fa-eye"></i></button>
            <button type="" class="btn btn-success btn-sm btnEditUsuario" data-toggle ="modal" onClick="fntEditUsuario(' . $arrData[$i]['idpersona'] . ')"  title="Editar usuario"><i class="fas fa-pencil-alt"></i></button>
            <button type="" class="btn btn-danger btn-sm btnDelUsuario"  onClick="fntDelUsuario(' . $arrData[$i]['idpersona'] . ')" title="Eliminar"><i class="fas fa-trash-alt"></i></button>';
        }
        echo json_encode($arrData, JSON_UNESCAPED_UNICODE);
        die();
    }

    public function getUsuario(int $idpersona)
    {
        $idusuario = intval($idpersona);
        if ($idusuario > 0) {
            $arrData = $this->model->selectUsuario($idusuario);
            if (empty($arrData)) {
                $arrResponse = array('status' => false, 'msg' => 'Datos no encontrados.');
            } else {
                $arrResponse = array('status' => true, 'data' => $arrData);
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
    }
    public function delUsuario()
    {
        if ($_POST) {
            
            $intIdpersona = intval($_POST["idUsuario"]);
            $requestDelete = $this->model->deleteUsuario($intIdpersona);
            if ($requestDelete) {
                $arrResponse = array('status' => true, 'msg' => 'Se ha eliminado el usuario');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Error al eliminar el usuario.');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }
}
