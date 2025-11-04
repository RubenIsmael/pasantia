<?php
class Roles extends Controllers
{

    public function __construct()
    {
        parent::__construct();
        session_start();
        if (empty($_SESSION['login'])) {
            header('Location: ' . base_url() . 'login');
            die();
        }
    }
    public function Roles()
    {

        $data['page_ide'] = 3;
        $data['page_tag'] = 'Roles Usuarios';
        $data['page_name'] = 'Roles Usuarios';
        $data['page_title'] = 'Roles Usuario <small>Tienda Virtual</small>';

        $this->views->getView($this, 'roles', $data);
    }

    public function getRoles()
    {
        $arrData = $this->model->getRoles();
        //<span class="badge badge-success">Success</span>
        for ($i = 0; $i < count($arrData); $i++) {
            if ($arrData[$i]['status'] == 1) {
                $arrData[$i]['status'] = '<span class="badge badge-success">Activo</span>';
            } else {
                $arrData[$i]['status'] = '<span class="badge badge-danger">Inactivo</span>';
            }
            $arrData[$i]['ids'] = $i + 1;
            $arrData[$i]['options'] = '<div class="text-center">
            <button type="" class="btn btn-dark btn-sm btnPermisosRol data-toggle ="modal" onClick="fntPermisos(' . $arrData[$i]['idrol'] . ')" title="Permisos"><i class="fas fa-key"></i></button>
            <button type="" class="btn btn-success btn-sm btnEditRol" data-toggle ="modal" onClick="fntEditRol(' . $arrData[$i]['idrol'] . ')"  title="Editar"><i class="fas fa-pencil-alt"></i></button>
            <button type="" class="btn btn-danger btn-sm btnDelRol"  onClick="fntDelRol(' . $arrData[$i]['idrol'] . ')" title="Eliminar"><i class="fas fa-trash-alt"></i></button>';
        }

        echo json_encode($arrData, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function getRol(int $idrol)
    {
        $intIdrol = intval(strClean($idrol));
        if ($intIdrol > 0) {
            $arrData = $this->model->getRol($intIdrol);
            if (empty($arrData)) {
                $arraResponse = array('status' => false, 'msg' => 'Datos no encontrados');
            } else {

                $arraResponse = array('status' => true, 'data' => $arrData);
            }
            echo json_encode($arraResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }
    public function setRoles()
    {

        $intIdrol = intval($_POST['idRol']);
        $strRol = strClean($_POST['txtNombre']);
        $strDescripcion = strClean($_POST['txtDescripcion']);
        $intStatus = intval($_POST['listStatus']);

        $request = "";
        if ($intIdrol == 0) {
            $request = $this->model->insertarRol($strRol, $strDescripcion, $intStatus);
            $option = 1;
        } else {
            $request = $this->model->updateRol($intIdrol, $strRol, $strDescripcion, $intStatus);
            $option = 2;
        }

        if ($request > 0) {
            if ($option == 1) {
                $arraResponse = array('status' => true, 'msg' => 'Datos guardados correctamente');
            } else {
                $arraResponse = array('status' => true, 'msg' => 'Datos Actualizados correctamente');
            }
        } else if ($request == 'exist') {
            $arraResponse = array('status' => false, 'msg' => 'ATENCION! El rl ya existe');
        } else {
            $arraResponse = array('status' => false, 'msg' => 'No es posible almacenar los datos');
        }
        echo json_encode($arraResponse, JSON_UNESCAPED_UNICODE);
        die();
    }

    public function delRol()
    {
        if ($_POST) {

            $intIdrol = intval($_POST['idRol']);
            $requestDelete = $this->model->deleteRol($intIdrol);
            if ($requestDelete == 'ok') {
                $arrResponse = array('status' => true, 'msg' => 'Se ha eliminado el Rol');
            } else if ($requestDelete == 'exist') {
                $arrResponse = array('status' => false, 'msg' => 'No es posible eliminar un Rol asociado a usuarios.');
            } else {
                $arrResponse = array('status' => false, 'msg' => 'Error al eliminar el Rol.');
            }
            echo json_encode($arrResponse, JSON_UNESCAPED_UNICODE);
        }
        die();
    }

    public function getSelectRoles()
    {
        $htmlOptions = "";
        $arrData = $this->model->getRoles();
        if (count($arrData) > 0) {
            for ($i = 0; $i < count($arrData); $i++) {

                $htmlOptions .= '<option value="' . $arrData[$i]['idrol'] . '">' . $arrData[$i]['nombrerol'] . '</option>';
            }
        }
        echo $htmlOptions;
        die();
    }
}
