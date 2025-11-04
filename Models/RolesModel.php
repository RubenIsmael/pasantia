<?php
class RolesModel extends Mysql
{
    public $intIdRol;
    public $strRol;
    public $strDescripcion;
    public $intStatus;
    public function __construct()
    {
        parent::__construct();
    }

    public function getRoles()
    {
        $sql = "SELECT * FROM rol ";
        $result = $this->getAll($sql);
        return $result;
    }
    public function insertarRol(string $rol, string $descripcion, int $status)
    {
        $return = "";
        $this->strRol = $rol;
        $this->strDescripcion = $descripcion;
        $this->intStatus = $status;

        $sql = "SELECT * FROM rol WHERE nombrerol = '{$this->strRol}'";
        $request = $this->getAll($sql);
        if (empty($request)) {
            $query_insert = "INSERT INTO rol(nombrerol,descripcion,status) VALUES (?,?,?)";
            $arraData = array($this->strRol, $this->strDescripcion, $this->intStatus);
            $request_insert = $this->insert($query_insert, $arraData);
            $return = $request_insert;
        } else {
            $return = "exist";
        }
        return $return;
    }
    public function getRol(int $idrol)
    {
        $this->intIdRol = $idrol;
        $sql = "SELECT * FROM rol WHERE idrol = '{$this->intIdRol}'";
        $request = $this->get($sql);
        return $request;
    }

    public function updateRol(int $idrol, string $rol, string $descripcion, int $status)
    {
        $this->intIdRol = $idrol;
        $this->strRol = $rol;
        $this->strDescripcion = $descripcion;
        $this->intStatus = $status;

        $sql = "SELECT * FROM rol WHERE nombrerol = '$this->strRol' AND idrol != $this->intIdRol";
        $request = $this->getAll($sql);

        if (empty($request)) {
            $sql = "UPDATE rol SET nombrerol = ?, descripcion = ?, status = ? WHERE idrol = $this->intIdRol ";
            $arrData = array($this->strRol, $this->strDescripcion, $this->intStatus);
            $request = $this->update($sql, $arrData);
        } else {
            $request = "exist";
        }
        return $request;
    }

    public function deleteRol(int $idrol)
    {
        $this->intIdRol = $idrol;
        $sql = "SELECT * FROM persona WHERE rolid = '{$this->intIdRol}'";
        $request = $this->getall($sql);
        if (empty($request)) {
            //$sql = "UPDATE rol SET status = ? WHERE idrol = {$this->intIdRol} ";
            $sql = "DELETE FROM rol WHERE idrol = {$this->intIdRol}";
            $arrData = array(0);
            /*$request = $this->update($sql, $arrData);*/
            $request = $this->delete($sql);;
            if ($request) {
                $request = 'ok';
            } else {
                $request = 'error';
            }
        } else {
            $request = 'exist';
        }
        return $request;
    }
}
