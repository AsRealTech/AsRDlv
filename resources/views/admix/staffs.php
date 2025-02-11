<?php  
 include"header.php"; ?>
    
    <?php



        if(isset($_POST["cstaff"])){
    
            $FName = $_POST["FName"];
            $CDetails = $_POST["CDetails"];  $address =    $_POST["address"];
            $dob =    $_POST["dob"];  $job =    $_POST["job"];  $EID =    $_POST["EID"];  
            $RManager =    $_POST["RManager"]; /* $RManager =    $_POST["RManager"]; */  $wLocation =    $_POST["wLocation"];  
            $educational =    $_POST["educational"];  $certifications =    $_POST["certifications"];  $TCertifications =    $_POST["TCertifications"];  
            $SClearanceLevel =    $_POST["SClearanceLevel"];  $BCheck =    $_POST["BCheck"];  $language =    $_POST["language"];  
            $skills =    $_POST["skills"];  $STraining =    $_POST["STraining"];

            $insertStmt = "INSERT INTO `profile` (`FullName`, `ContactDetails`, 
                `Address`, `dob`, `job`, `EmployeeID`, `ReportingManager`,
                `workLocation`, `Educational`, `Certifications`, `TrainingCertifications`,
                `SecurityClearanceLevel`, `BackgroundCheck`, `Language`, `Skills`, `SpecializedTraining`, `m3`)
                VALUES ('{$FName}', '{$CDetails}', '{$address}', '{$dob}', '{$job}', '{$EID}', '{$RManager}', '{$wLocation}', '{$educational}', '{$certifications}', '{$TCertifications}', 
                '{$SClearanceLevel}', '{$BCheck}', '{$language}', '{$skills}', '{$STraining}', 'L')";

 
 
 
 // Assuming you have retrieved the username from the form data
// $username = $_POST['username'];

// Get the original file name
$originalFileName = $_FILES['fileToUpload']['name'];

// Get the file extension
$fileExtension = strtolower(pathinfo($originalFileName, PATHINFO_EXTENSION));

// Construct the new file name using the username and file extension
$newFileName = $EID . '.' . $fileExtension;

// Path to the directory where you want to store the uploaded files
$uploadDirectory = "../views/id/";

// Move the uploaded file to the desired directory with the new file name
move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $uploadDirectory . $newFileName);



  // Assuming you have retrieved the username from the form data
// $username = $_POST['username'];

// Get the original file name
$originalFileNamee = $_FILES['fileToUploadd']['name'];

// Get the file extension
$fileExtensionn = strtolower(pathinfo($originalFileNamee, PATHINFO_EXTENSION));

// Construct the new file name using the username and file extension
$newFileNamee = $EID . 'logo.' . $fileExtensionn;

// Path to the directory where you want to store the uploaded files
$uploadDirectoryy = "../views/id/";

// Move the uploaded file to the desired directory with the new file name
move_uploaded_file($_FILES['fileToUploadd']['tmp_name'], $uploadDirectoryy . $newFileNamee);

 
 
 
 
 
 
                    $insertQuery = query_function($insertStmt);
                    
                    if($insertQuery){
                        set_message("Staff created successfilly");
                    } else {
                        set_message("Error occured");
                        // header("location: dadmin.php");
                    }
                    // elseif($insertQuery->ErrorInfo[1] == 1062){
                    //     set_message("Staff I already exist");
                    // } 
        } 
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
                            <em>Avoid using existing ID Number</em><br>
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
                                                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Staff</h3></div>
                                                        <div class="card-body">
                                                            <form method="POST" enctype="multipart/form-data">
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="FName" id="FName" type="text" placeholder="Enter your first name" required>
                                                                            <label for="FName">Full Name</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="CDetails" id="CDetails" type="text" placeholder="Enter your last name" required/>
                                                                            <label for="CDetails">Contact Details</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="address" id="Address" type="text" placeholder="Enter your first name" required/>
                                                                            <label for="Address">Address</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="dob" id="dob" type="date" placeholder="Enter your last name" required/>
                                                                            <label for="dob">Date of Birth</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="job" id="job" type="text" placeholder="Enter your first name" required/>
                                                                            <label for="job">Current Status</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="EID" id="EID" type="text" placeholder="Enter your last name" required/>
                                                                            <label for="EID">Number ID</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="RManager" id="RManager" type="text" placeholder="Enter your first name" required/>
                                                                            <label for="RManager">Reporting Officer</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="wLocation" id="wLocation" type="text" placeholder="Enter your last name" required/>
                                                                            <label for="wLocation">deployment</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="educational" id="educational" type="text" placeholder="Enter your first name" required/>
                                                                            <label for="educational">Educational Qualifications</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="certifications" id="certifications" type="text" placeholder="Enter your last name" required/>
                                                                            <label for="certifications">Certifications</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="TCertifications" id="TCertifications" type="text" placeholder="Enter your first name" required/>
                                                                            <label for="TCertifications">Current Rank </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="SClearanceLevel" id="SClearanceLevel" type="text" placeholder="Enter your last name" required/>
                                                                            <label for="SClearanceLevel">Security Clearance Level</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="BCheck" id="BCheck" type="text" placeholder="Enter your first name" required/>
                                                                            <label for="BCheck">Background Check</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating">
                                                                            <input class="form-control" name="language" id="language" type="text" placeholder="Enter your last name" required/>
                                                                            <label for="language">Language</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3">
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="skills" id="skills" type="text" placeholder="Create a password" required/>
                                                                            <label for="skills">Skills</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" name="STraining" id="STraining" type="text" placeholder="Confirm password" required/>
                                                                            <label for="STraining">Specialized Training</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row mb-3" >
                                                                     <div class="col-md-6" hidden><em> select ( .png ) image </em>
                                                                        <div class="form-floating mb-3 mb-md-0">
                                                                            <input class="form-control" type="file"  accept="image/*" name="fileToUploadd" id="fileToUploadd"/>
                                                                            <label for="fileToUploadd">company Logo</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-floating mb-3 mb-md-0"> 
                                                                            <input class="form-control" type="file"  accept="image/*" name="fileToUpload" id="fileToUpload" required/>
                                                                            <label for="fileToUpload">Profile image</label>
                                                                        </div><em> select ( .jpeg ) image </em>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div class="mt-4 mb-0">
                                                                    <div class="d-grid"><input type="submit" name="cstaff" class="btn btn-primary btn-block" value="Create Staff"></div>
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