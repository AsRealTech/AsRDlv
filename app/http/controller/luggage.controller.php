<?php

require_once __DIR__ . "/../../core/config.php";
require_once __DIR__ . "/../model/model.luggage.php";

use App\core\luggage\luggage;

$connect = new database();
$conn = $connect->getDatabase();
$luggage = new luggage($conn);
$luggages = $luggage->read();