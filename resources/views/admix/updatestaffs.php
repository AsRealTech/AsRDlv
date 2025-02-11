<?php  
 include"header.php"; 
 function asreal_injection(string $data){
    $data = stripslashes(trim($data));
    $data = filter_var($data, FILTER_SANITIZE_STRING);
    return $data;
 }
$ID = $_GET['id'];

function asreal_select(string $members){
    global $connection;
    global $ID;
    try {
        $query = $connection->prepare("SELECT * FROM $members WHERE id='$ID'");
        $query->execute();

        $userData = $query->fetch(PDO::FETCH_ASSOC);
        return $userData;
        
    } catch(PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        return false; // Returning false to indicate an error occurred
    }
}





    function asreal_update(string $user){
        global $connection;
        global $ID;
        
      try{
        if(isset($_POST['update'])){
         //   $name = asreal_injection($_POST['Name']);
            $FName = $_POST["FName"];
            $CDetails = $_POST["CDetails"];  $address = $_POST["address"];
            $dob =    $_POST["dob"];  $job = $_POST["job"]; $EID = $_POST["EID"];  
            $RManager = $_POST["RManager"];  $wLocation = $_POST["wLocation"];  
            $educational = $_POST["educational"];  $certifications = $_POST["certifications"];  $TCertifications = $_POST["TCertifications"];  
            $SClearanceLevel = $_POST["SClearanceLevel"];  $BCheck = $_POST["BCheck"];  $language = $_POST["language"];  
            $skills = $_POST["skills"];  $STraining = $_POST["STraining"];
            
            
            $stmtQuery = "UPDATE $user SET FullName=:FName,ContactDetails=:CDetails,Address=:address,
            dob=:dob,job=:job,EmployeeID=:EID,ReportingManager=:RManager,workLocation=:wLocation,Educational=:educational,
            Certifications=:certifications,TrainingCertifications=:TCertifications,SecurityClearanceLevel=:SClearanceLevel,
            BackgroundCheck=:BCheck,Language=:language,Skills=:skills,SpecializedTraining=:STraining WHERE id='$ID'";
            $stmt = $connection->prepare($stmtQuery);
            $stmt->bindParam(':FName', $FName);$stmt->bindParam(':CDetails', $CDetails);$stmt->bindParam(':address', $address);
            $stmt->bindParam(':dob', $dob);$stmt->bindParam(':job', $job);$stmt->bindParam(':EID', $EID);
            $stmt->bindParam(':RManager', $RManager);$stmt->bindParam(':wLocation', $wLocation);$stmt->bindParam(':educational', $educational);
            $stmt->bindParam(':certifications', $certifications);$stmt->bindParam(':TCertifications', $TCertifications);$stmt->bindParam(':SClearanceLevel', $SClearanceLevel);
            $stmt->bindParam(':BCheck', $BCheck);$stmt->bindParam(':language', $language);$stmt->bindParam(':skills', $skills);
            $stmt->bindParam(':STraining', $STraining);
            $stmt->execute();
            if($stmt){
                set_message('Record updated Successfully!');
              //  header("location: updatestaffs.php");
            } else {
                set_message('Record update failed');
              //  header("location: updatestaffs.php");
            }
          }
       }catch(PDOException $e){
           echo'Error Updating Record ' . $e->getMessage(); 
       }
    }
    

        asreal_update('profile');
        $userDatar = asreal_select('profile');
?>
<br>
            <div id="layoutSidenav_content">
                <main>
     
                    <div class="container-fluid px-4" >
                        <!-- <h1 class="mt-4">Charts</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Staffs</li>
                        </ol> -->
                        <div class="card m-4">
                        <div class="card-body">
                            
                            <?php display_message(); ?>
                            </div>
                        </div>
                        <div class="row">
                            <div id="layoutAuthentication">
                                <div id="layoutAuthentication_content">
                                    <main>
                                        <div class="container">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-7">
                                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Edit Staff</h3></div>
                                                        <div class="card-body">
                                                            <form method="POST" enctype="multipart/form-data">
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="FName" id="FName" type="text" value='<?= $userDatar["FullName"]; ?> '>
                                                                            <label for="FName">FullName</label>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="CDetails" id="CDetails" type="text" value="<?= $userDatar['ContactDetails']; ?>" />
                                                                            <label for="CDetails">Contact Details</label>
                                                                              
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="address" id="Address" type="text" value="<?= $userDatar['Address']; ?>" />
                                                                            <label for="Address">Address</label>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="dob" id="dob" type="date" value="<?= $userDatar['dob']; ?>" />
                                                                            <label for="dob">Date of Birth</label>
                                                                             
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="job" id="job" type="text" value="<?= $userDatar['job']; ?>" />
                                                                            <label for="job">Current Status</label>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="EID" id="EID" type="text" value="<?= $userDatar['EmployeeID']; ?>" disabled/>
                                                                            <label for="EID">Number ID</label>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="RManager" id="RManager" type="text" value="<?= $userDatar['ReportingManager']; ?>" />
                                                                            <label for="RManager">Reporting Officer</label>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="wLocation" id="wLocation" type="text" value="<?= $userDatar['workLocation']; ?>" />
                                                                            <label for="wLocation">deployment</label>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="educational" id="educational" type="text" value="<?= $userDatar['Educational']; ?>" />
                                                                            <label for="educational">Educational Qualifications</label>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="certifications" id="certifications" type="text" value="<?= $userDatar['Certifications']; ?>" />
                                                                            <label for="certifications">Certifications</label>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="TCertifications" id="TCertifications" type="text" value="<?= $userDatar['TrainingCertifications']; ?>" />
                                                                            <label for="TCertifications">Current Rank </label>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="SClearanceLevel" id="SClearanceLevel" type="text" value="<?= $userDatar['SecurityClearanceLevel']; ?>" />
                                                                            <label for="SClearanceLevel">Security Clearance Level</label>
                                                                             
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="BCheck" id="BCheck" type="text" value="<?= $userDatar['BackgroundCheck']; ?>" />
                                                                            <label for="BCheck">Background Check</label>
                                                                             
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="language" id="language" type="text" value="<?= $userDatar['Language']; ?>" />
                                                                            <label for="language">Language</label>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="skills" id="skills" type="text" value="<?= $userDatar['Skills']; ?>" />
                                                                            <label for="skills">Skills</label>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="STraining" id="STraining" type="text" value="<?= $userDatar['SpecializedTraining']; ?>" />
                                                                            <label for="STraining">Specialized Training</label>
                                                                           
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                         
                                                                <div class="mt-4 mb-0">
                                                                    <div class="d-grid"><input type="submit" name="update" class="btn btn-primary btn-block" value="Update Staff"></div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="card-footer text-center py-3">
                                                            <div class="small">staffing</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>

                                <?php include"footer.php"; ?>