<?php
require_once("mailer/PHPMailer.php");
require_once("mailer/SMTP.php");
require_once("mailer/Exception.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// HELPERS FUNCTIONS


function set_message($mgs){
    $_SESSION['mgs'] = $mgs;
}

function display_message(){
    if(isset($_SESSION['mgs'])) {
        echo $_SESSION['mgs'];
        unset($_SESSION['mgs']);
    }
}

function redirect_function($loca){
    header("location: $loca");
}

function injection_function($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// sql helper functions 

function query_function($sql_Stmt) {
    global $connection;
    try {
        $sql_Query = $connection->prepare($sql_Stmt);
        $sql_Query->execute();
        return $sql_Query;
    } catch (PDOException $e) {
        // Handle errors gracefully, log them, and possibly notify administrators
        error_log('Database Error: ' . $e->getMessage());
        // You may choose to throw an exception or return false to indicate failure
        return false;
    }
}

function fetch_asreal($fetch_var){
    try {
        $fetch_r = $fetch_var->fetch(PDO::FETCH_ASSOC);
        return $fetch_r;
    } catch (PDOException $e) {
        // Handle errors gracefully, log them, and possibly notify administrators
        error_log('Fetch Error: ' . $e->getMessage());
        // You may choose to throw an exception or return false to indicate failure
        return false;
    }
}



// LOGIN FUNCTION

function login_funtion(){

    if(isset($_POST["submit"])){
        $login_name = injection_function($_POST["uname"]);
        $login_pass = injection_function($_POST["password"]);

        $fetch_r = query_function("SELECT * FROM admin");
        $r_fetch = fetch_asreal($fetch_r);
        
       
    /*    
       if($login_name == $r_fetch['name'] && $login_pass == $r_fetch['pass']){
            $_SESSION['logged_user'] = $login_name;
            set_message("Welcome back $login_name");
            redirect_function("dadmin.php");
        } else {
            set_message("Wrong Login details...");
            redirect_function("index.php");
        } */
    }
}

    // search function 

    function search_funtion(){

        if(isset($_POST["submit"])){
            $search_name = injection_function($_POST["staffId"]);
    
            $fetch_r = query_function("SELECT * FROM profile WHERE EmployeeID='{$search_name}'");
            $r_fetch = fetch_asreal($fetch_r);

            if($search_name == $r_fetch['EmployeeID']){
                $_SESSION['staff_user'] =  $r_fetch;
                // set_message("Welcome back $login_name");
                redirect_function("views/staff.php");
            } else {
                set_message("Wrong Number ID...");
                redirect_function("/");
            }

            // $connection = null;
        }
    }
    

// select details function **profile**

// class sql_helper_asreal{
//     public $select_table;

//     public function __construct($data){
//          $this->select_table = $data;
//     }
//     public function sql_helper_asreal(){
//         return  $this->select_table;
//     }
// }

// ALL SQL QUERY COMMAND FUNCTIONS

function delete_asreal($xx,$xx2,$xx3){
    if(isset($_POST['del'])){
        $r_delete = query_function("DELETE * FROM {$xx} WHERE {$xx2} = {$xx3}");
        if($r_delete){
            set_message("recode successfully deleted");
        } else {
            set_message("error deleting record");
        }
    }
    }

function update_asreal($xx){
    $r_update = query_function("UPDATE {$xx} SET {$xx2} = {$xx222} WHERE {$xx3} = {$xx4}");
    if($r_update){
        set_message("recode successfully updated");
    } else {
        set_message("error updating record");
    }
}

function select_asreal($xx){
    $r_select = query_function("SELECT * FROM {$xx}");
    $select_r = fetch_asreal($r_select);
    return $select_r;
}

//   insert function 

 function insert_asreal(){
 

     
        // $CDetails = $_POST["CDetails"];  $address =    $_POST["address"];
        // $dob =    $_POST["dob"];  $job =    $_POST["job"];  $EID =    $_POST["EID"];  
        // $RManager =    $_POST["RManager"]; /* $RManager =    $_POST["RManager"]; */  $wLocation =    $_POST["wLocation"];  
        // $educational =    $_POST["educational"];  $certifications =    $_POST["certifications"];  $TCertifications =    $_POST["TCertifications"];  
        // $SClearanceLevel =    $_POST["SClearanceLevel"];  $BCheck =    $_POST["BCheck"];  $language =    $_POST["language"];  
        // $skills =    $_POST["skills"];  $STraining =    $_POST["STraining"];

        if(isset($_POST["cstaff"])){

            $FName = $_POST["FName"];

    // $insertStmt = "INSERT INTO `profile` (`FullName`, `ContactDetails`, 
    //     `Address`, `dob`, `job`, `EmployeeID`, `ReportingManager`,
    //     `workLocation`, `Educational`, `Certifications`, `TrainingCertifications`,
    //     `SecurityClearanceLevel`, `BackgroundCheck`, `Language`, `Skills`, `SpecializedTraining`, `m3`)
    //     VALUES ('{$FName}', '{$CDetails}', '{$address}', '{$dob}', '{$job}', '{$EID}', '{$RManager}', '{$wLocation}', '{$educational}', '{$certifications}', '{$TCertifications}', 
    //     '{$SClearanceLevel}', '{$BCheck}', '{$language}', '{$skills}', '{$STraining}', 'L')";

    //     $insertQuery = query_function($insertStmt);
    //     if($insertQuery){
    //         set_message("Staff created successfilly");
    //     } else {
    //         set_message("Error occured");
    //         header("location: dadmin.php");
    //     }
    } 
 }

// message function

   function message_asreal(){
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $emai = $_POST['email'];    

        $mail = new PHPmailer();
        $mail->SMTPDEBUG = SMTP::DEBG_SERVER;
        $mail->isSMTP();

        $mail->Host = "mail.asrealtech.com.ng";
        $mail->Port = 465;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "ssl";
        
        $mail->Username = "info@asrealtech.com.ng";
        $mail->Password = "";
        
        $mail->setFrom("info@asrealtech.com.ng", "AsReal Tech");
        $mail->addAddress("{$this->email}", "{$this->name}");
        $mail->subject("{$this->subject}");
        $mail->body("{$this->message}");

        if($mail->send()){
            set_message("Message sent.."); //ErrorInfo
        } else {
            set_message("error sending mail");
        }


    }



?>