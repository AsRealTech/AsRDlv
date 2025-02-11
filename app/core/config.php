<?php 

// database details

defined("db_host") ? null : define("db_host", "localhost");
defined("db_name") ? null : define("db_name", "AsRDlv");
defined("db_user") ? null : define("db_user", "root");
defined("db_pass") ? null : define("db_pass", "");

try {
    $dsn = "mysql:host=" . db_host . ";dbname=" . db_name;
    $connection = new PDO($dsn,db_user,db_pass);

    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Error " . $e->getMessage();
}



?>