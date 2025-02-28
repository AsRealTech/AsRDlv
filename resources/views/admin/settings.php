<?php  
include __DIR__ . "/layout/header.php"; 

if(isset($_POST['updatecmpy'])){
    sleep(2);
	$company_name = $_POST['company_name'];
	$office_address = $_POST['office_address'];
	$email = $_POST['email'];
	$phone_no = $_POST['phone_no'];
	$prefix = $_POST['prefix'];
	$currency = $_POST['currency'];

	$setting->update($company_name,$office_address,$email,$phone_no,$prefix
    ,$currency);
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
								<li class="breadcrumb-item active" aria-current="page">Clients</li>						
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
						<h6 class="mb-0 text-uppercase">setting / setting </h6>
						<hr/>

						<div class="card" id="pd">
							<div class="alert text-info">
								<?php if(isset($track->alert)) echo $track->alert;?>
							</div>
							<div class="card-body">
                           		
							   <form method="POST">
                                            <div class="row">
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">company_name</label>
                                                    <input class="form-control mt-1" name="company_name" value="<?= $company_name;?>" type="text" aria-label="default input example">
                                                </div>
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">office_address</label>
                                                    <input class="form-control mt-1" name="office_address"  value="<?= $office_address;?>" type="text" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">email</label>
                                                    <input class="form-control mt-1"  name="email" value="<?= $email;?>" type="email" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">phone_no</label>
                                                    <input class="form-control mt-1"   name="phone_no" value="<?= $phone_no;?>" type="number" aria-label="default input example">
                                                </div>
											</div>
                                            <div class="row">
												
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">currency synbol</label>
                                                    <input class="form-control mt-1"   name="currency" value="<?= $currency;?>" type="text" aria-label="default input example">
                                                </div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">track prefix</label>
                                                    <input class="form-control mt-1"   name="prefix" value="<?= $prefix;?>" type="text" aria-label="default input example">
                                                </div>
											</div>
                                           
                    
                                            <div class="btn-group mt-2">
                                                <input name="updatecmpy" class="btn btn-primary" type="submit" value="update">
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
    