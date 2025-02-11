<?php 
ob_start();  

require_once(__DIR__."/app/http/controller/track.controller.php");
require_once(__DIR__."/route/web.php");

use Routeing\wen\route;

$baseRoute = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$route = new route();

switch ($baseRoute){
    case"/home":
    $route->view('verify');
    break;
    case"/track":
    $route->view('trackin');
    break;
    case"/staff":
    $route->view('staff');
    break;
    
    default:
    echo "unknown page, redirecting tp main page in 10 seconds";
    sleep(10);
    header ("location: /", true, 303); 
    break;
}


/*

ob_start();
session_start();
defined("ds") ? null : define("ds", DIRECTORY_SEPARATOR);

// drfining paths!
defined("temp_back") ? null : define("temp_back",  __DIR__ . ds . "../template/back");
defined("temp_front") ? null : define("temp_front",  __DIR__ . ds . "../template/front");
defined("asreal") ? null : define("asreal", "../resources/template/front/asreal");


*/