<?php 
ob_start();
require_once dirname(dirname(__DIR__)) . '/app/http/controller/settings.controller.php';
require_once dirname(dirname(__DIR__)) . '/app/http/controller/luggage.controller.php';
require_once dirname(dirname(__DIR__)) . '/app/http/controller/track.controller.php';

if($_SERVER['REQUEST_METHOD'] == 'POST' AND isset($_POST['asreal'])){
    $id = htmlspecialchars($_POST['asreal']);
    $snd = $luggage->readId($id);
    $tra = $track->readId($id);
    $res = $tra->fetch(PDO::FETCH_ASSOC);
    if(($lugg = $snd->fetch(PDO::FETCH_ASSOC)) == false){
        header("location: /track");
        
    }else{
        extract(array: $lugg);
        extract($res);
    }
}else{
    header("location: /track");
}

require_once __DIR__ . DIRECTORY_SEPARATOR . "layout/header.php";
?>
<body>
<div class="d-grid gap-2">
    <a href="/" class="btn btn-light"><i class='bx bx-arrow-back mr-1'></i>Back to home</a>
</div>
<div class='container'>
    <div class='header'>
        <h1><?=$company_name;?> Delivery Tracking </h1>
        <p>Thank you for your choosing us!</p>
        <p>Tracking Number: <b><?=$tracking_no;?></b> </p>
        <p>Luggage Status: <b><?=$statuss;?></b> </p>
    </div>
<br>
    <div class='row'>
    <!-- First Delivery Details -->
    <div class='col-6'>
        <div class='details'>
            <div><span class='label'>Sender Name:</span> <?=$sender_name;?></div>
            <div><span class='label'>Sender Address:</span> <?=$sender_address;?></div>
            <div><span class='label'>Phone Number:</span> <?=$sender_phone;?></div>
            <div><span class='label'>Date of Delivery:</span> <?=$delivery_date;?></div>
        </div>
    </div>

    <!-- Second Delivery Details -->
    <div class='col-6'>
        <div class='details'>
            <div><span class='label'>Reciever Name:</span> <?=$recv_name;?></div>
            <div><span class='label'>Address:</span> <?=$sender_address;?></div>
            <div><span class='label'>Email:</span> <?=$recv_email;?></div>
            <div><span class='label'>Phone Number:</span> <?=$recv_phone;?></div>
            <div><span class='label'>Date of Pickup:</span> <?=$pickup_date;?></div>
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
                    <th>current location</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><?=$content;?></td>
                    <td><?=$luggage_type;?></td>
                    <td><?=$currency.$delivery_fee;?></td>
                    <td><?=$locationn;?></td>
                    <td><?=$statuss;?></td>
                </tr>
            </tbody>
        </table>

        <div class='total'>
            <div><span class='label'>Subtotal:</span> <?=$currency.$delivery_fee;?></div>
            <div><span class='label'>Remark:</span> <?=$remark;?></div>
            <div><span class='label'>Timestamp:</span> <?= date('Y-m-d H-i-s');?></div>
        </div>
    </div>
<hr>




        <div style="padding:10px; margin-bottom:20px;">
            <div class="card" style="margin: 2px; border: 2px solid #ccc;">
                <div class="card-body" style="background-color: #f8f9fa; padding: 15px;">
                    <div id="map" style="height: 280px; width: 100%;"></div>
                </div>
            </div>
        </div>





    <div class='footer'>
        <p>If you have any questions or concerns, feel free to contact us!</p>
        <p>Contact us at: <?=$email;?></p>
        <p>Thank you for shopping with us!</p>
    </div>
</div>


<script type="text/javascript">
            var map;

            function initMap() {
                var latitude = <?= $latitude; ?>;
                var longitude = <?= $longtitude; ?>;
                var myLatLng = {lat: latitude, lng: longitude};

                map = new google.maps.Map(document.getElementById('map'), {
                    center: myLatLng,
                    zoom: 5
                });

                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: latitude + ', ' + longitude
                });
            }
        </script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxl0mYcEgW3YxZ8aH12wZYYbcPmn-bwcw&callback=initMap"
async defer></script>
</body>
</html>