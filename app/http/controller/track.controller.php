<?php

require_once __DIR__ . "/../../core/config.php";
require_once __DIR__ . "/../model/model.track.php";

use App\core\track\Track;

$connect = new database();
$conn = $connect->getDatabase();
$track = new Track($conn);
?>
