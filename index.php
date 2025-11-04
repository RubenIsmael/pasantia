<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require_once 'config/config.php';
require_once 'Helpers/Helpers.php';
$url = !empty($_GET['url']) ? $_GET['url'] : 'home/home';

$arrurl = explode('/',$url);

$controller = $arrurl[0];
$method = $arrurl[0];
$params = '';

if(!empty($arrurl[1])){
    if($arrurl[1] !== ''){
        $method = $arrurl[1];
    }
}
if(!empty($arrurl[2])){
    if($arrurl[2]!= ""){
        for($i=2;$i<count($arrurl);$i++){
            $params .= $arrurl[$i].",";
        }
        $params = trim($params,',');
    }
}

require_once 'Libraries/Core/Autoload.php';
require_once 'Libraries/Core/Load.php';

