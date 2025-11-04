<?php
require_once('Libraries/Core/Mysql.php');
trait TProducto
{
    private $con;
    private $strCategoria;
    private $intIdcategoria;
    private $intIdProducto;
    private $strProducto;
    private $cant;
    private $option;
    private $strRuta;
    private $strRutaCategoria;
    public function getProductosT()
    {
        $this->con = new Mysql();
        $sql = "SELECT p.idproducto,
                        p.codigo,
                        p.nombre,
                        p.descripcion,
                        p.idcategoria,
                        c.nombre as categoria,
                        p.precio,
                        p.stock
                        
                FROM productos p 
                INNER JOIN categoria c
                ON p.idcategoria = c.idcategoria
                WHERE p.status != 0 ";
        $request = $this->con->getall($sql);
        if (count($request) > 0) {
            for ($c = 0; $c < count($request); $c++) {
                $intIdProducto = $request[$c]['idproducto'];
                $sqlImg = "SELECT img
								FROM imagen
								WHERE productoid = $intIdProducto";
                $arrImg = $this->con->getall($sqlImg);
                if (count($arrImg) > 0) {
                    for ($i = 0; $i < count($arrImg); $i++) {
                        $arrImg[$i]['url_image'] = media() . '/images/uploads/' . $arrImg[$i]['img'];
                    }
                }
                $request[$c]['images'] = $arrImg;
            }
        }
        return $request;
    }
    public function getProductosCategoriaT(string $categoria)
    {
        $this->strCategoria = $categoria;
        $this->con = new Mysql();
        $sql_cat = "SELECT idcategoria FROM categoria WHERE nombre ='{$this->strCategoria}'";

        $request = $this->con->get($sql_cat);

        if (!empty($request)) {
            $this->intIdCategoria = $request['idcategoria'];
            $sql = "SELECT p.idproducto,
						p.codigo,
						p.nombre,
						p.descripcion,
						p.idcategoria,
						c.nombre as categoria,
						
						p.precio,

						p.stock
				FROM productos p 
				INNER JOIN categoria c
				ON p.idcategoria = c.idcategoria
				WHERE p.status != 0 AND p.idcategoria = '{$this->intIdCategoria}'";
            $request = $this->con->getAll($sql);
            if (count($request) > 0) {
                for ($c = 0; $c < count($request); $c++) {
                    $intIdProducto = $request[$c]['idproducto'];
                    $sqlImg = "SELECT img FROM imagen WHERE productoid = $intIdProducto";
                    $arrImg = $this->con->getAll($sqlImg);
                    if (count($arrImg) > 0) {
                        for ($i = 0; $i < count($arrImg); $i++) {
                            # code...
                            $arrImg[$i]['url_image'] = media() . '/images/uploads/' . $arrImg[$i]['img'];
                        }
                    }
                    $request[$c]['images'] = $arrImg;
                }
            }
        }
        return $request;
    }
    public function getProductoT(string $producto)
    {
        $this->con = new Mysql();
        $this->strProducto = $producto;
        $sql = "SELECT p.idproducto,
                        p.codigo,
                        p.nombre,
                        p.descripcion,
                        p.idcategoria,
                        c.nombre as categoria,
                        p.precio,
                        p.stock
                        
                FROM productos p 
                INNER JOIN categoria c
                ON p.idcategoria = c.idcategoria
                WHERE p.status != 0 AND p.nombre = '{$this->strProducto}'";
        $request = $this->con->get($sql);
        if (count($request) > 0) {

            $intIdProducto = $request['idproducto'];
            $sqlImg = "SELECT img
								FROM imagen
								WHERE productoid = $intIdProducto";
            $arrImg = $this->con->getall($sqlImg);
            if (count($arrImg) > 0) {
                for ($i = 0; $i < count($arrImg); $i++) {
                    $arrImg[$i]['url_image'] = media() . '/images/uploads/' . $arrImg[$i]['img'];
                }
            }
            $request['images'] = $arrImg;
        }
        return $request;
    }
    public function getProductosRandom(int $idcategoria, int $cant, string $option)
    {
        $this->intIdcategoria = $idcategoria;
        $this->cant = $cant;
        $this->option = $option;

        if ($option == "r") {
            $this->option = " RAND() ";
        } else if ($option == "a") {
            $this->option = " idproducto ASC ";
        } else {
            $this->option = " idproducto DESC ";
        }

        $this->con = new Mysql();
        $sql = "SELECT p.idproducto,
						p.codigo,
						p.nombre,
						p.descripcion,
						p.idcategoria,
						c.nombre as categoria,
						p.precio,
						/*p.ruta,*/
						p.stock
				FROM productos p 
				INNER JOIN categoria c
				ON p.idcategoria = c.idcategoria
				WHERE p.status != 0 AND p.idcategoria = $this->intIdcategoria
				ORDER BY $this->option LIMIT  $this->cant ";
        $request = $this->con->getall($sql);
        if (count($request) > 0) {
            for ($c = 0; $c < count($request); $c++) {
                $intIdProducto = $request[$c]['idproducto'];
                $sqlImg = "SELECT img
								FROM imagen
								WHERE productoid = $intIdProducto";
                $arrImg = $this->con->getall($sqlImg);
                if (count($arrImg) > 0) {
                    for ($i = 0; $i < count($arrImg); $i++) {
                        $arrImg[$i]['url_image'] = media() . '/images/uploads/' . $arrImg[$i]['img'];
                    }
                }
                $request[$c]['images'] = $arrImg;
            }
        }
        return $request;
    }
    public function getProductoIDT(int $idproducto){
		$this->con = new Mysql();
		$this->intIdProducto = $idproducto;
		$sql = "SELECT p.idproducto,
						p.codigo,
						p.nombre,
						p.descripcion,
						p.idcategoria,
						c.nombre as categoria,
						p.precio,

						p.stock
				FROM productos p 
				INNER JOIN categoria c
				ON p.idcategoria = c.idcategoria
				WHERE p.status != 0 AND p.idproducto = '{$this->intIdProducto}' ";
				$request = $this->con->get($sql);
				if(!empty($request)){
					$intIdProducto = $request['idproducto'];
					$sqlImg = "SELECT img
							FROM imagen
							WHERE productoid = $intIdProducto";
					$arrImg = $this->con->getAll($sqlImg);
					if(count($arrImg) > 0){
						for ($i=0; $i < count($arrImg); $i++) { 
							$arrImg[$i]['url_image'] = media().'/images/uploads/'.$arrImg[$i]['img'];
						}
					}else{
						$arrImg[0]['url_image'] = media().'/images/uploads/product.png';
					}
					$request['images'] = $arrImg;
				}
		return $request;
	}
}
