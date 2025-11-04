<?php
class UsuariosModel extends Mysql
{

    private $intIdUsuario;
    private $strIdentificacion;
    private $strNombre;
    private $strApellido;
    private $strTelefono;
    private $strEmail;
    private $strPassword;
    private $strToken;
    private $intTipoId;
    private $intStatus;

    public function __construct()
    {
        parent::__construct();
    }
    public function insertUsuario(string $identificacion, string $nombre, string $apellido, string $telefono, string $email, string $password, int $tipoid, int $status)
    {
        $this->strIdentificacion = $identificacion;
        $this->strNombre = $nombre;
        $this->strApellido = $apellido;
        $this->strTelefono = $telefono;
        $this->strEmail = $email;
        $this->strPassword = $password;
        $this->intTipoId = $tipoid;
        $this->intStatus = $status;
        $return = "";

        $sql = "SELECT * FROM persona WHERE email_user = '{$this->strEmail}' or identificacion = '{$this->strIdentificacion}'";
        $request = $this->getAll($sql);

        if (!empty($request)) {
            $return = "existe";
        } else {
            $query_insert  = "INSERT INTO persona(identificacion,nombres,apellidos,telefono,email_user,password,rolid,status) 
								  VALUES(?,?,?,?,?,?,?,?)";
            $arrData = array(
                $this->strIdentificacion,
                $this->strNombre,
                $this->strApellido,
                $this->strTelefono,
                $this->strEmail,
                $this->strPassword,
                $this->intTipoId,
                $this->intStatus
            );
            $request_insert = $this->insert($query_insert, $arrData);
            $return = $request_insert;
        }
        return $return;
    }
    public function selectUsuarios()
    {
        $sql = "SELECT p.idpersona,p.identificacion,p.nombres,p.apellidos,p.telefono,p.email_user,p.status,r.idrol,r.nombrerol 
					FROM persona p 
					INNER JOIN rol r
					ON p.rolid = r.idrol
					WHERE p.status != 0 ";
        $request = $this->getAll($sql);
        return $request;
    }

    public function selectUsuario(int $idpersona)
    {
        $this->intIdUsuario = $idpersona;
        $sql = "SELECT p.idpersona,p.identificacion,p.nombres,p.apellidos,p.telefono,p.email_user,p.nombrefiscal,p.direccion,r.idrol,r.nombrerol,p.status, DATE_FORMAT(p.datecreated, '%d-%m-%Y') as fechaRegistro 
                FROM persona p
                INNER JOIN rol r
                ON p.rolid = r.idrol
                WHERE p.idpersona = $this->intIdUsuario";
        $request = $this->get($sql);
        return $request;
    }

    public function updateUsuario(int $idUsuario, string $identificacion, string $nombre, string $apellido, string $telefono, string $email, string $password, int $tipoid, int $status)
    {

        $this->intIdUsuario = $idUsuario;
        $this->strIdentificacion = $identificacion;
        $this->strNombre = $nombre;
        $this->strApellido = $apellido;
        $this->strTelefono = $telefono;
        $this->strEmail = $email;
        $this->strPassword = $password;
        $this->intTipoId = $tipoid;
        $this->intStatus = $status;

        $sql = "SELECT * FROM persona WHERE (email_user = '{$this->strEmail}' AND idpersona != $this->intIdUsuario)
                                      OR (identificacion = '{$this->strIdentificacion}' AND idpersona != $this->intIdUsuario) ";
        $request = $this->getall($sql);

        if (!empty($request)) {
            $res = "existe";
        } else {

            if ($this->strPassword  != "") {
                $sql = "UPDATE persona SET identificacion=?, nombres=?, apellidos=?, telefono=?, email_user=?, password=?, rolid=?, status=? 
                        WHERE idpersona = $this->intIdUsuario ";
                $arrData = array(
                    $this->strIdentificacion,
                    $this->strNombre,
                    $this->strApellido,
                    $this->strTelefono,
                    $this->strEmail,
                    $this->strPassword,
                    $this->intTipoId,
                    $this->intStatus
                );
            } else {
                $sql = "UPDATE persona SET identificacion=?, nombres=?, apellidos=?, telefono=?, email_user=?, rolid=?, status=? 
                        WHERE idpersona = $this->intIdUsuario ";
                $arrData = array(
                    $this->strIdentificacion,
                    $this->strNombre,
                    $this->strApellido,
                    $this->strTelefono,
                    $this->strEmail,
                    $this->intTipoId,
                    $this->intStatus
                );
            }
            $res = $this->update($sql, $arrData);
        }
        return $res;
    }
    public function deleteUsuario(int $intIdpersona)
    {
        $this->intIdUsuario = $intIdpersona;
        $sql = "UPDATE persona SET status = ? WHERE idpersona = $this->intIdUsuario ";
        $arrData = array(0);
        $request = $this->update($sql, $arrData);
        return $request;
    }
}
