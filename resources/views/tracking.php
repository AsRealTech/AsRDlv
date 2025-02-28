<?php require_once __DIR__ . DIRECTORY_SEPARATOR . "layout/header.php";?>
	<!--wrapper-->
	<div class="wrapper">
		<header class="login-header shadow">
			<nav class="navbar navbar-expand-lg navbar-light rounded-0 bg-white fixed-top rounded-0 shadow-none border-bottom">
				<div class="container-fluid">
					<a class="navbar-brand" href="javascript:;">
						<img src="<?=$assets;?>images/logo-img.png" width="160" alt="" />
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent1">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item"> <a class="nav-link active" aria-current="page" href="#"><i class='bx bx-home-alt me-1'></i>Home</a>
							</li>
							<li class="nav-item"> <a class="nav-link" href="#"><i class='bx bx-user me-1'></i>About</a>
							</li>
							<li class="nav-item"> <a class="nav-link" href="#"><i class='bx bx-category-alt me-1'></i>Features</a>
							</li>
							<li class="nav-item"> <a class="nav-link" href="#"><i class='bx bx-microphone me-1'></i>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
			<div class="container">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="card my-5 my-lg-0 shadow-none border">
							<div class="card-body">
								<form action="resources/views/track-result.php" method="post">
                                <div class="p-4">
									<div class="text-start mb-4">
										<h5 class="">Track your luggage</h5>
										<p class="mb-0">We received your reset password request. Please enter your new password!</p>
									</div>
									<div class="mb-4">
										<label class="form-label">Enter your tracking number</label>
										<input type="text" name="asreal" required class="form-control" placeholder="tracking number" />
									</div>
									<div class="d-grid gap-2">
										<input type="submit" class="btn btn-primary" value="Find luggage">
                                        <a href="/" class="btn btn-light"><i class='bx bx-arrow-back mr-1'></i>Back to home</a>
									</div>
								</div>
                                </form>
							</div>
						</div>
					</div>
				</div>
				<!--end row-->
			</div>
		</div>
    <?php require_once __DIR__ . DIRECTORY_SEPARATOR . "layout/footer.php";?>