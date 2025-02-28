<?php  
include __DIR__ . "/layout/header.php"; 
$luggages = $track->readId($_GET['id']);
$rr = $luggages->fetch(PDO::FETCH_ASSOC);

if(isset($_POST['update'])){
	$location = $_POST['location'];
	$status = $_POST['status'];
	$latitude = $_POST['latitude'];
	$longtitude = $_POST['longtitude'];
	$remark = $_POST['remark'];
	$id = $_GET['id'];

	$track->update($location,$status,$latitude,$longtitude,$remark,
	 $id);
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
						<h6 class="mb-0 text-uppercase">luggage / update </h6>
						<hr/>

						<div class="card" id="pd">
							<div class="alert text-info">
								<?php if(isset($track->alert)) echo $track->alert;?>
							</div>
							<div class="card-body">
                           		 
							<?php extract($rr); ?>
							   <form method="POST">
                                            <div class="row">
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">ID</label>
                                                    <input class="form-control mt-1" disabled value="<?= $tracking_no;?>" type="text" aria-label="default input example">
                                                </div>
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">location</label>
                                                    <input class="form-control mt-1" name="location"  value="<?= $locationn;?>" type="text" aria-label="default input example">
												</div>
											</div>
                                            <div class="row">
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">status</label>
                                                    <input class="form-control mt-1"  name="status" value="<?= $statuss;?>" type="text" aria-label="default input example">
												</div>
                                                <div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">latitude</label>
                                                    <input class="form-control mt-1"   name="latitude" value="<?= $latitude;?>" type="text" aria-label="default input example">
                                                </div>
											</div>
                                            <div class="row">
                                                
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">longtitude </label>
                                                    <input class="form-control mt-1"  name="longtitude" value="<?= $longtitude;?>" type="text" aria-label="default input example">
												</div>
												
												<div class="col">
                                                    <label class="form-control-label mt-3" for="flexSwitchCheckChecked">remark</label>
                                                    <input class="form-control mt-1"  name="remark" value="<?= $remark;?>" type="text" aria-label="default input example">
												</div>
											</div>
                                           
                    
                                            <div class="btn-group mt-2">
                                                <input name="update" class="btn btn-primary" type="submit" value="update">
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
    