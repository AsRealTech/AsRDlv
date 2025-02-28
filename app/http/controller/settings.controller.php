<?php

require_once __DIR__ . "/../../core/config.php";
require_once dirname(__DIR__) . "/model/model.settings.php";

use App\core\setting\settings;

$connect = new database();
$conn = $connect->getDatabase();
$setting = new settings(connection: $conn);
$settings = $setting->read();
extract($settings->fetch(PDO::FETCH_ASSOC));
