<?php  include"header.php"; ?>
    
     

            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4"><a style="text-decoration:none;" href="dadmin.php">Dashboard</a></h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>

                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                 Working Staff 
                            </div>
                      
                            
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <?php  
                                   $dataStmt = "SELECT * FROM profile";  
                                   $dateQuery = $connection->prepare($dataStmt);
                                   $dateQuery->execute();
                       $dateAll = $dateQuery->fetchAll(PDO::FETCH_ASSOC); 
                       
                        ?>
                                    <thead>
                                        <tr>
                                            <th>Del</the>
                                            <th>X</th>
                                            <th>FullName</th>
                                            <th>Contact Details</th>
                                            <th>Address</th>
                                            <th>DOB</th>
                                            <th>Job</th>
                                            <th>EmployeeID</th>
                                            <th>Reporting Manager</th>
                                            <th>work Location</th>
                                            <th>Educational</th>
                                            <th>Certifications</th>
                                            <th>Training Certifications</th>
                                            <th>Security Clearance Level</th>
                                            <th>Background Check</th>
                                            <th>Language</th>
                                            <th>Skills</th>
                                            <th>Specialized Training</th>
                                           
                                            

                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Del</th>
                                            <th>X</th>
                                            <th>FullName</th>
                                            <th>Contact Details</th>
                                            <th>Address</th>
                                            <th>DOB</th>
                                            <th>Job</th>
                                            <th>EmployeeID</th>
                                            <th>Reporting Manager</th>
                                            <th>work Location</th>
                                            <th>Educational</th>
                                            <th>Certifications</th>
                                            <th>Training Certifications</th>
                                            <th>Security Clearance Level</th>
                                            <th>Background Check</th>
                                            <th>Language</th>
                                            <th>Skills</th>
                                            <th>Specialized Training</th>
                                            
                                    
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    
                                     <?php  
                                    
if (isset($_GET['dee'])) {
    echo "<b>". $_GET['dee'] . "</b>";
    unset($_GET['dee']);
}
                                  foreach($dateAll as $userData): 
                                  
                                  
                       ?> <tr>
                                 <td>  
        <form  method="POST">  
            <input  name="pId" value="<?= $userData['id']; ?>" hidden>
            <input type="submit" style="background:red;" name="del" value="Delete">
        </form>
                           </td>
                           <td><a href="updatestaffs.php?id=<?= $userData['id']; ?>" style="background:green;color:#fff;padding:6px;text-decoration:none;"> Edit </a> </td>
                            <td>   <?= $userData['FullName']; ?> </td>
                            <td>  <?= $userData['ContactDetails']; ?> </td>
                            <td>  <?= $userData['Address']; ?> </td>
                            <td>    <?= $userData['dob']; ?> </td>
                            <td>   <?= $userData['job']; ?> </td>
                            <td> <?= $userData['EmployeeID']; ?> </td>
                            <td>  <?= $userData['ReportingManager']; ?> </td>
                            <td>   <?= $userData['workLocation']; ?> </td>
                            <td> <?= $userData['Educational']; ?> </td>
                            <td>   <?= $userData['Certifications']; ?> </td>
                            <td>   <?= $userData['TrainingCertifications']; ?> </td>
                            <td>  <?= $userData['SecurityClearanceLevel']; ?> </td>
                            <td>   <?= $userData['BackgroundCheck']; ?> </td>
                            <td>   <?= $userData['Language']; ?> </td>
                            <td> <?= $userData['Skills']; ?> </td>
                            <td>  <?= $userData['SpecializedTraining']; ?></td>

        
           </tr>
           <?php endforeach; ?>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
     
     
           
                <?php 
                                    
                                    if(isset($_POST['del'])){
                                        $piDD = $_POST['pId'];
                                        $r_delete = $connection->exec("DELETE FROM profile WHERE id = {$piDD}");
                                        $imgPath =  "../views/id/".$userData['EmployeeID'].".jpg";
                                        if(file_exists($imgPath)){
                                            unlink($imgPath);
                                        }
                                        // if($r_delete){
                                        //     set_message("recode successfully deleted");
                                        // } else {
                                        //     set_message("error deleting record");
                                        // }
                                        header("location: dadmin.php?dee='record deletd'");
                                    }
                                
                                    ?>
   
                <?php include"footer.php"; ?>
    