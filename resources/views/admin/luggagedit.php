<?php  
include __DIR__ . "/layout/header.php"; 
$luggages = $luggage->readId($_GET['id']);

if(isset($_POST['update'])){
	$pickupdate = $_POST['pickupdate'];
	$deliveryfee = $_POST['deliveryfee'];
	$paymentstatus = $_POST['paymentstatus'];
	$id = $_GET['id'];

	$luggage->update($pickupdate,$deliveryfee,$paymentstatus,$id);
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
								<li class="breadcrumb-item active" aria-current="page">Clients</li>						</ol>
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
						<h6 class="mb-0 text-uppercase">Clients / Edit </h6>
						<hr/>

						<div class="card" id="pd">
							<div class="alert text-info">
								<?php if(isset($luggage->alert)) echo $luggage->alert;?>
							</div>
							<div class="card-body">
                            <?php if(!empty($luggages)): ?>
                                <?php foreach($luggages as $luggagesKey): extract($luggagesKey); ?>
							   <form method="POST">
                                            <div class="row">
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">first Name</label>
                                                    <input class="form-control mt-1" name="clientName" disabled value="<?= $tracking_no;?>" type="text" aria-label="default input example">
                                                </div>
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">Last Name</label>
                                                    <input class="form-control mt-1" name="clientlast" disabled value="<?= $sender_name;?>" type="text" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">Email</label>
                                                    <input class="form-control mt-1" disabled name="clientEmail" value="<?= $sender_email;?>" type="text" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">sender_address</label>
                                                    <input class="form-control mt-1"  disabled name="clientUser" value="<?= $sender_address;?>" readonly type="text" aria-label="default input example">
                                                </div>
											</div>
                                            <div class="row">
                                                
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">luggage_type </label>
                                                    <input class="form-control mt-1" disabled name="clientMobile" value="<?= $luggage_type;?>" type="phone" aria-label="default input example">
												</div>
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">weights</label>
                                                    <input class="form-control mt-1" disabled name="clientCou" value="<?= $weights;?>" type="text" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
                                                
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">content</label>
                                                    <input class="form-control mt-1" disabled name="clientState" value="<?= $content;?>" type="text" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">pickup_date</label>
                                                    <input class="form-control mt-1" name="pickupdate" value="<?= $pickup_date;?>" type="date" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked"> delivery_date</label>
                                                    <input class="form-control mt-1" name="deliverydate" disabled value="<?=$delivery_date;?>" type="text" aria-label="default input example">
                                                </div>
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">recv_name</label>
                                                    <input class="form-control mt-1" disabled name="clientType" value="<?= $recv_name;?>" type="text" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">recv_email</label>
                                                    <input class="form-control mt-1" disabled name="clientWal" value="<?= $recv_email;?>" type="text" aria-label="default input example">
												</div>
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">recv_phone</label>
                                                    <input class="form-control mt-1" disabled name="clientWal" value="<?= $recv_phone;?>" type="text" aria-label="default input example">
												</div>
											</div>

                                            <div class="row">
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked"> recv_address</label>
                                                    <input class="form-control mt-1" disabled name="clientref" value="<?=$recv_address;?>" type="text" aria-label="default input example">
                                                </div>
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">delivery_fee</label>
                                                    <input class="form-control mt-1" name="deliveryfee" value="<?= $delivery_fee;?>" type="number" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="paymentstatus">payment_status (<?= $payment_status;?>)</label>
													<select class="form-select mb-3" name="paymentstatus" id="paymentstatus" aria-label="Default select example">
														<option value="paid" <?php if($payment_status == 'paid')echo'selected';?>>paid</option>
														<option value="unpaid" <?php if($payment_status == 'unpaid')echo'selected';?>>unpaid</option>
														<option value="pending" <?php if($payment_status == 'pending')echo'selected';?>>pending</option>
														<option value="installment" <?php if($payment_status == 'installment')echo'selected';?>>installment</option>
													</select>
												</div>
												
                                                <div class="col">
													<label for="clientStatus" class="mt-3">Status()</label>
													<select class="form-select mb-3" name="clientStatus" id="clientStatus" aria-label="Default select example">
														<option value="">Deactivated</option>
													</select>
                                                </div>
											</div>
                    
                                            <div class="btn-group mt-2">
                                                <input name="update" class="btn btn-primary" type="submit" value="update">
                                            </div>
							   </form>	
                               <?php endforeach;?>
                               <?php else: echo "<h6 class='mb-0 text-uppercase text-center'>no record</h6>"; endif;?>
							</div>
						</div>

					</div>
				</div>
				<!--end row-->
			</div>
		</div>
		<!--end page wrapper -->



                <?php include __DIR__ . "/layout/footer.php";  ?>
    