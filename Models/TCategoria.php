<?php
require_once('Libraries/Core/Mysql.php');
trait TCategoria{
    public $cone;

    public function getCategoriasT(string $categorias){
        $this->cone = new Mysql();
        $sql = "SELECT idcategoria, nombre,descripcion, portada FROM categoria WHERE status !=0 AND  idcategoria IN ($categorias)";
        $request = $this->cone->getAll($sql);
        if(count($request)>0){
            for($c = 0; $c<count($request);$c++){
                $request[$c]['portada'] = BASE_URL.'/Assets/images/uploads/'.$request[$c]['portada'];
            }
        }

        return $request;
    }

}