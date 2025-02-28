<?php  
include __DIR__ . "/layout/header.php"; 

if(isset($_POST['createl'])){
    sleep(2);

        $TrackingNo = $prefix .'-'. $_POST['TrackingNo'];
        $sendername = $_POST['sendername'];
        $senderphone = $_POST['senderphone'];
        $senderaddress = $_POST['senderaddress'];
        $senderemail = $_POST['senderemail'];
        $luggagetype = $_POST['luggagetype'];
        $weights = $_POST['weights'];
        $content = $_POST['content'];
        $pickupdate = $_POST['pickupdate'];
        $deliverydate = $_POST['deliverydate'];
        $recvname = $_POST['recvname'];
        $recvemail = $_POST['recvemail'];
        $recvphone = $_POST['recvphone'];
        $recvaddress = $_POST['recvaddress'];
        $deliveryfee = $_POST['deliveryfee'];
        $paymentstatus = $_POST['paymentstatus'];

        $location = $_POST['location'];
        $status = $_POST['status'];
        $latitude = $_POST['latitude'];
        $longtitude = $_POST['longtitude'];
        $remark = $_POST['remark'];


    $luggage->create($TrackingNo,$sendername,$senderemail,$senderphone,$senderaddress
    ,$luggagetype,$weights,$content,$pickupdate,$deliverydate,
                            $recvname,$recvemail,$recvphone,$recvaddress,
                            $deliveryfee,$paymentstatus);
     $track->create($TrackingNo,$location,$status,$latitude,$longtitude,$remark);

     $mailer->Mailreg($recvemail,$recvemail,$TrackingNo,$company_name);
                        
   

}
?>
   
		<!--start page wrapper -->
		<div class="page-wrapper">
			<div class="page-content">
				<!--breadcrumb-->
				<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div class="breadcrumb-title pe-3">All</div>
					<div class="ps-3">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb mb-0 p-0">
								<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">luggage</li>
							</ol>
						</nav>
					</div>
					<div class="ms-auto">
						<div class="btn-group">
							<a class="btn btn-primary back">Back</a>
						</div>
					</div>
				</div>
				<!--end breadcrumb-->
				<div class="row">
					<div class="col-xl-9 mx-auto">
						<h6 class="mb-0 text-uppercase">create / luggage </h6>
						<hr/>
						<div class="card mb-3" id="pd"><br>
                        <div class='m-2 alert alert-primary' role='alert'> <?php if(isset($luggage->alert)) echo $luggage->alert . ' '; if(isset($track->alert)) echo $track->alert;?></div>
							<div class="card-body">
                            <h3 class="title mb-3">Sender Details</h3>
							   <form method="POST">
                                            <div class="row">

                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">sender_email</label>
                                                    <input class="form-control mt-1" required  name="senderemail" value="" type="email" aria-label="default input example">
												</div>
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">sender_name</label>
                                                    <input class="form-control mt-1" required name="sendername"  value="" type="text" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
                                            <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">sender_phone</label>
                                                    <input class="form-control mt-1" required name="senderphone" value="" type="phone" aria-label="default input example">
                                                </div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">sender_address</label>
                                                    <input class="form-control mt-1"  required name="senderaddress" value="" type="text" aria-label="default input example">
                                                </div>
											</div>
                                           

                                            <br><hr><h3 class="title mb-3">Package Details</h3>
                                            
                                            <div class="row">
                                                
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">luggage_type </label>
                                                    <input class="form-control mt-1" required  name="luggagetype" value="" type="phone" aria-label="default input example">
												</div>
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">weights</label>
                                                    <input class="form-control mt-1" required name="weights" value="" type="number" aria-label="default input example">
												</div>
                                                
											</div>
                                            <div class="row">
                                                
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">content</label>
                                                    <input class="form-control mt-1" required name="content" value="" type="text" aria-label="default input example">
												</div>
                                                
											</div>
                                            <div class="row">
                                                
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">pickup_date</label>
                                                    <input class="form-control mt-1" required  name="pickupdate" value="" type="date" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked"> delivery_date</label>
                                                    <input class="form-control mt-1" required name="deliverydate" value="" type="date" aria-label="default input example">
                                                </div>
											</div>
                                            <br><hr><h3 class="title mb-3">Reciever Details</h3>
                                            <div class="row">
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">recv_name</label>
                                                    <input class="form-control mt-1"  required name="recvname" value="" type="text" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">recv_email</label>
                                                    <input class="form-control mt-1" required  name="recvemail" value="" type="text" aria-label="default input example">
												</div>
												
											</div>
                                            <div class="row">
												
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">recv_phone</label>
                                                    <input class="form-control mt-1" required  name="recvphone" value="" type="number" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked"> recv_address</label>
                                                    <input class="form-control mt-1" required name="recvaddress" value="" type="text" aria-label="default input example">
                                                </div>
											</div>

                                            <div class="row">
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">delivery_fee</label>
                                                    <input class="form-control mt-1" required name="deliveryfee" value="<?=$currency;?>" type="text" aria-label="default input example">
												</div>
                                                <div class="col">
													<label for="clientStatus" class="mt-3">payment_status</label>
													<select class="form-select mb-3" name="paymentstatus" id="payment_status" aria-label="Default select example">
														<option value="" >Deactivated</option>
													</select>
                                                </div>
											</div>

                                            <br><hr><h3 class="title mb-3">Other Details</h3>
                                            <div class="row">
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">Tracking No</label>
                                                    <input class="form-control mt-1" required name="TrackingNo"  value="" type="number" aria-label="default input example">
                                                </div>
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">location</label>
                                                    <input class="form-control mt-1" name="location"  value="" type="text" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">status</label>
                                                    <input class="form-control mt-1"  name="status" value="" type="text" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">latitude</label>
                                                    <input class="form-control mt-1"   name="latitude" value="" type="text" aria-label="default input example">
                                                </div>
											</div>
                                            <div class="row">
                                                
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">longtitude </label>
                                                    <input class="form-control mt-1"  name="longtitude" value="" type="text" aria-label="default input example">
												</div>
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">remark</label>
                                                    <input class="form-control mt-1"  name="remark" value="" type="text" aria-label="default input example">
												</div>
											</div>
                    
                                            <div class="btn-group mt-2">
                                                <input class="btn btn-primary" name="createl" type="submit" value="create">
                                            </div>
							   </form>	
							</div>
						</div>

					</div>
				</div>
				<!--end row-->
			</div>
		</div>
		<!--end page wrapper -->



                <?php include __DIR__ . "/layout/footer.php";  ?>
    