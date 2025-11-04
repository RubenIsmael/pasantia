<?php

class Conexion {
    
    private $conection;

    public function __construct()
    {
        $connectionString = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";" . DB_CHARSET;
        try {
            $this->conection = new \PDO($connectionString, DB_USER, DB_PASSWORD);
            $this->conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Error:" . $e->getMessage();
        }
    }

    public function connect() {
        return $this->conection;
    }
}
