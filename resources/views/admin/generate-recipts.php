<?php
ob_start();
require_once dirname(dirname(dirname(__DIR__))) . "/vendor/autoload.php";
require_once dirname(dirname(dirname(__DIR__))) . '/app/http/controller/settings.controller.php';
require_once dirname(dirname(dirname(__DIR__))) . '/app/http/controller/luggage.controller.php';
require_once dirname(dirname(dirname(__DIR__))) . '/app/http/controller/track.controller.php';
$id = $_GET['id'];
$snd = $luggage->readId($id);
$lugg = $snd->fetch(PDO::FETCH_ASSOC);
extract(array: $lugg);

$body =
"
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Delivery Receipt</title>
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
<body>

<div class='container'>
    <div class='header'>
        <h1>$company_name Delivery Receipt</h1>
        <p>Thank you for your choosing us!</p>
        <p>Tracking Number: <b>$tracking_no</b> </p>
    </div>
<br>
    <div class='row'>
    <!-- First Delivery Details -->
    <div class='col-6'>
        <div class='details'>
            <div><span class='label'>Sender Name:</span> $sender_name></div>
            <div><span class='label'>Sender Address:</span> $sender_address</div>
            <div><span class='label'>Phone Number:</span> $sender_phone</div>
            <div><span class='label'>Date of Delivery:</span> $delivery_date</div>
        </div>
    </div>

    <!-- Second Delivery Details -->
    <div class='col-6'>
        <div class='details'>
            <div><span class='label'>Reciever Name:</span> recv_name</div>
            <div><span class='label'>Address:</span> $sender_address</div>
            <div><span class='label'>Email:</span> $recv_email</div>
            <div><span class='label'>Phone Number:</span> $recv_phone</div>
            <div><span class='label'>Date of Pickup:</span> $pickup_date</div>
        </div>
    </div>
</div><br>


    <div class='items'>
        <h3>luggage Details:</h3>
        <table class='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Luggage Type</th>
                    <th>Delivery Fee</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>$content</td>
                    <td>$luggage_type</td>
                    <td>$currency.$delivery_fee</td>
                    <td>$currency.$delivery_fee</td>
                </tr>
            </tbody>
        </table>

        <div class='total'>
            <div><span class='label'>Subtotal:</span> $currency.$delivery_fee</div>
            <div><span class='label'>Shipping:</span> $currency.$delivery_fee</div>
            <div><span class='label'>Total Amount:</span> $currency.$delivery_fee</div>
        </div>
    </div>

    <div class='footer'>
        <p>If you have any questions or concerns, feel free to contact us!</p>
        <p>Contact us at: $email</p>
        <p>Thank you for shopping with us!</p>
    </div>
</div>

</body>
</html>
";

use Dompdf\Dompdf;
use Dompdf\Options;
$options = new Options();
// instantiate and use the dompdf class
$dompdf = new Dompdf($options);

$dompdf->loadHtml($body);

// (Optional) Setup the paper size and orientation
// $dompdf->setPaper('A4', 'landscape');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream($company_name."".$tracking_no."-".'reciept', ['Attachment' => 0]);
ob_end_flush();
?>