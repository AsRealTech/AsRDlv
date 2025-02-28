<?php
ob_start();

require_once dirname(dirname(dirname(__DIR__))) . '/app/http/controller/settings.controller.php';
require_once dirname(dirname(dirname(__DIR__))) . '/app/http/controller/luggage.controller.php';
require_once dirname(dirname(dirname(__DIR__))) . '/app/http/controller/track.controller.php';
require_once dirname(dirname(dirname(__DIR__))) . '/app/http/controller/mailer.controller.php';
// $id = $_GET['id'];
// $snd = $luggage->readId($id);
// $lugg = $snd->fetch(PDO::FETCH_ASSOC);
// extract(array: $lugg);
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function







