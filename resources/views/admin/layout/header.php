<?php 
session_start();
ob_start();
if(!isset($_SESSION['logged'])){
    header("location: /", true, 303);
}
$adminAssets  =  "";
require_once dirname(dirname(dirname(dirname(__DIR__))) ). "/app/http/controller/settings.controller.php";
require_once dirname(dirname(dirname(dirname(__DIR__))) ). "/app/http/controller/luggage.controller.php";
require_once dirname(dirname(dirname(dirname(__DIR__))) ). "/app/http/controller/track.controller.php";
require_once dirname(dirname(dirname(dirname(__DIR__))) ). "/app/http/controller/mailer.controller.php";
?>
<!doctype html>
<html lang="en" class="semi-dark">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	<link rel="icon" href="<?= $adminAssets;?>assets/images/favicon.png" type="image/png"/>
	<!--plugins-->
	<link href="<?= $adminAssets;?>assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet"/>
	<link href="<?= $adminAssets;?>assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
	<link href="<?= $adminAssets;?>assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
	<link href="<?= $adminAssets;?>assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet"/>
	<!-- loader-->
	<link href="<?= $adminAssets;?>assets/css/pace.min.css" rel="stylesheet"/>
	<script src="<?= $adminAssets;?>assets/js/pace.min.js"></script>
	<!-- Bootstrap CSS -->
	<link href="<?= $adminAssets;?>assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?= $adminAssets;?>assets/css/bootstrap-extended.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap" rel="stylesheet">
	<link href="<?= $adminAssets;?>assets/css/app.css" rel="stylesheet">
	<link href="<?= $adminAssets;?>assets/css/icons.css" rel="stylesheet">
	<!-- Theme Style CSS -->
	<link rel="stylesheet" href="<?= $adminAssets;?>assets/css/dark-theme.css"/>
	<link rel="stylesheet" href="<?= $adminAssets;?>assets/css/semi-dark.css"/>
	<link rel="stylesheet" href="<?= $adminAssets;?>assets/css/ckeditor5.css" />

	<link rel="stylesheet" href="<?= $adminAssets;?>assets/css/header-colors.css"/>
	<title> Admin Dashboard</title>
	<link rel="stylesheet" href="https://cdn.datatables.net/2.1.4/css/dataTables.bootstrap5.css">
</head>

<body>
<?php include_once(__DIR__."/nav_admin.php"); ?>