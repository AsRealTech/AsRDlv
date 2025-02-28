<?php

require_once __DIR__ . "/../../core/config.php";
require_once __DIR__ . "/../model/model.login.php";

use App\core\Login\login;

$connect = new database();
$conn = $connect->getDatabase();
$login = new login($conn);
$login = $login->read();
extract($logins = $login->fetch(PDO::FETCH_ASSOC));