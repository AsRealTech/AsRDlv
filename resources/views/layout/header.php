<?php

$assets = 'resources/views/layout/assets/';
?>
<!doctype html>
<html lang="en" class="semi-dark">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	<link rel="icon" href="<?=$assets;?>images/favicon-32x32.png" type="image/png" />
	<!--plugins-->
	<link href="<?=$assets;?>plugins/simplebar/css/simplebar.css" rel="stylesheet" />
	<link href="<?=$assets;?>plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
	<link href="<?=$assets;?>plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
	<!-- loader-->
	<link href="<?=$assets;?>css/pace.min.css" rel="stylesheet" />
	<script src="<?=$assets;?>js/pace.min.js"></script>
	<!-- Bootstrap CSS -->
	<link href="<?=$assets;?>css/bootstrap.min.css" rel="stylesheet">
	<link href="<?=$assets;?>css/bootstrap-extended.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap" rel="stylesheet">
	<link href="<?=$assets;?>css/app.css" rel="stylesheet">
	<link href="<?=$assets;?>css/icons.css" rel="stylesheet">
	<title>tracking</title>
    <style>
        .row{
            position: relative;
            margin-top: 4px;
            display: flex;
            justify-content: space-between;
        }
        .col-6{
            width: 45%;
        }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color:rgb(227, 238, 223);
            color: #333;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            background-color: rgb(227, 238, 223);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #4CAF50;
        }
        .details, .items, .footer {
            margin-bottom: 20px;
        }
        .details div, .items div {
            margin: 5px 0;
        }
        .details .label, .items .label {
            font-weight: bold;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .table th, .table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        .table th {
            background-color: #f2f2f2;
        }
        .total {
            text-align: right;
            font-size: 18px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>

<body class="">