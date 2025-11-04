<?php

class Mysql extends Conexion
{
    private $conexion;
    private $strquery;
    private $arrValues;

    public function __construct() {
        $this->conexion = new Conexion();
        $this->conexion = $this->conexion->connect();;
    }
    public function insert(string $query, array $arrValues)
	{
		$this->strquery = $query;
		$this->arrValues = $arrValues;
        $insert = $this->conexion->prepare($this->strquery);
        $resInsert = $insert->execute($this->arrValues);
        if($resInsert)
	    {
	       	$lastInsert = $this->conexion->lastInsertId();
	    }else{
	       	$lastInsert = 0;
	    }
	    return $lastInsert; 
	}
    public function get(string $query)
	{
		$this->strquery = $query;
        $result = $this->conexion->prepare($this->strquery);
		$result->execute();
        $data = $result->fetch(PDO::FETCH_ASSOC);
        return $data;
	}

    public function getAll(string $query){
        $this->strquery = $query;
        $result = $this->conexion->prepare($this->strquery);
        $result->execute();
        $data = $result->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }
    public function update(string $query, array $arrValues){
        $this->strquery = $query;
        $this->arrValues = $arrValues;
        $update = $this->conexion->prepare($this->strquery);
        $resUpdate = $update->execute($this->arrValues);
        return $resUpdate;
    }
    public function delete(string $query){
        $this->strquery = $query;
        $result = $this->conexion->prepare($this->strquery);
        $result->execute();
        return $result;

    }
}