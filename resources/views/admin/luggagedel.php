<?php 
ob_start();
require_once dirname(dirname(dirname(__DIR__))). "/app/http/controller/luggage.controller.php";
require_once dirname(dirname(dirname(__DIR__))). "/app/http/controller/track.controller.php";

if(isset($_GET['id'])){
    
    $luggage->delete($_GET['id']);
    $track->delete($_GET['id']);
    header('location: createluggage.php');
} else {
    header('location: dashboard.php');
}