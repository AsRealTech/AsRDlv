<?php  
include __DIR__ . "/layout/header.php"; 
?>
    
     

                		<!--start page wrapper -->
		<div class="page-wrapper">
		
        <div class="page-content">
                            <!--breadcrumb-->
            <div class="page-breadcrumb d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">All</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Packages</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto" style="float: inline-end;">
                    <div class="btn-group"><a class="btn btn-primary btn-sm mt-2" href="createluggage.php">Add luggage</a></div>
                </div>
            </div>
            <h6 class="mb-0 text-uppercase">&nbsp;&nbsp;Packages >>></h6>
            <hr/>
            <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-4">
                <!--end row-->
            </div>
            <div class="row">
             <div class="card radius-10">
                     <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <div>
                                <h6 class="mb-0">Packages Details</h6>
                            </div>
                            <div class="dropdown ms-auto">
                                <a class="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i class='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:;">Action</a>
                                    </li>
                                    <li><a class="dropdown-item" href="javascript:;">Another action</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="javascript:;">Something else here</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                <?php if(!empty($luggages)): ?>
                     <div class="table-responsive">
                       <table class="table align-middle mb-0">
                        <thead class="table-light">
                         <tr>
                            <th>Edit</th>
                            <th>update</th>
                            <th>Reciept</th>
                            <th>Tracking No</th>
                            <th>Sender</th>
                            <th>Type</th>
                            <th>Reciever</th>
                            <th>del</th>
                         </tr>
                         </thead>
                         <tbody>
                         <?php foreach($luggages as $luggagesKey): extract($luggagesKey); ?>
                         <tr>
                            <td><a href="luggagedit.php?id=<?= $tracking_no;?>"><i class="bx bx-pen"></i></a></td>
                            <td><a href="trackupdt.php?id=<?= $tracking_no;?>"><i class="bx bx-book"></i></a></td>
                            <td><a href="generate-recipts.php?id=<?= $tracking_no;?>"><i class="bx bx-book text-danger"></i></a></td>
                            <td><?= $tracking_no;?></td>
                            <td style="color: #49db3f;"><?= $sender_name; ?></td>
                            <td><?= $luggage_type; ?></td>
                            <td><?= $recv_name ?></td>
                            <td><a href="luggagedel.php?id=<?= $tracking_no;?>">del</a></td>
                        </tr>
                         <?php endforeach; ?>
                        </tbody>
                      </table>
                      </div>
                      <?php else: echo "<h6 class='mb-0 text-uppercase text-center'>no record</h6>"; endif;?>
                     </div>
                </div>
            </div><!--end row-->
        </div>
    </div>
    <!--end page wrapper -->
                
   
<?php include __DIR__ . "/layout/footer.php";  ?>
    