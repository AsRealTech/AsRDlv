<?php 
session_start();
require_once dirname(dirname(dirname(__DIR__))) . "/app/http/controller/login.controller.php";

    if(isset($_POST["login"])){
		sleep(2);
        $login_name = htmlspecialchars($_POST["userEmail"]);
        $login_pass = htmlspecialchars($_POST["passWord"]);
   
        
    if($login_name == $nane && password_verify($login_pass, $password)){	
            $_SESSION['logged'] = $nane;
            $login->alert = "welcome back";
            header("location: admin/dashboard.php", true, 303); 
        } else {
			$login->alert = "inccorrect login details";
            // header("location: admin", true, 303); 
        } 
    } 

?>

<!doctype html>
<html lang="en" class="semi-dark">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	<link rel="icon" href="admin/assets/images/favicon-32x32.png" type="image/png" />
	<!--plugins-->
	<link href="admin/assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
	<link href="admin/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet" />
	<link href="admin/assets/plugins/metismenu/css/metisMenu.min.css" rel="stylesheet" />
	<!-- loader-->
	<link href="admin/assets/css/pace.min.css" rel="stylesheet" />
	<script src="admin/assets/js/pace.min.js"></script>
	<!-- Bootstrap CSS -->
	<link href="admin/assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="admin/assets/css/bootstrap-extended.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap" rel="stylesheet">
	<link href="admin/assets/css/app.css" rel="stylesheet">
	<link href="admin/assets/css/icons.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"/>
	<title><?= $_SERVER['HTTP_HOST'] ." - " . basename($_SERVER['REQUEST_URI']); ?></title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body class="">

<!--wrapper-->
<div class="wrapper">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="card mb-0">
							<div class="card-body">
								<div class="p-4">
									<div class="mb-3 text-center">
										<img src="user/admin/assets/images/logo-icon.png" width="60" alt="" />
									</div>
									<div class="text-center mb-4">
										<h5 class="">Admin Login&nbsp;</h5>
										<p class="mb-0">Please log in to your account</p>
									</div>
									<?php if(isset($login->alert)) echo $login->alert;?>
							
									<div class="form-body">
										<form class="row g-3" method="POST">
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Username</label>
												<input required type="text" name="userEmail" class="form-control" id="inputEmailAddress" placeholder="jhon@example.com">
											</div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Password</label>
												<div class="input-group" id="show_hide_password">
													<input required type="password" name="passWord" class="form-control border-end-0" id="inputChoosePassword"  placeholder="Enter Password"> <a href="javascript:;" class="input-group-text bg-transparent"><i class='bx bx-hide'></i></a>
												</div>
											</div>
                                            <div class="row m-2">
                                                <div class="col-12">
                                                    <div class="g-recaptcha" data-sitekey=""></div>
                                                </div>
                                            </div>
											<div class="col-md-6">
												<div class="form-check form-switch">
													<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
													<label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
												</div>
											</div>
											<div class="col-md-6 text-end">	<a href="#!forgot">Forgot Password ?</a>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<input type="submit" data-loading-text="processing data" data-title="Sign in" name="login" class="btn btn-primary" value="Sign in">
												</div>
											</div>
											<div class="col-12">
												<div class="text-center ">
													<p class="mb-0">Don't have an account yet? <a href="signup">Sign up here</a>
													</p>
												</div>
											</div>
										</form>
									</div>
									<div class="login-separater text-center mb-5"> <span>OR SIGN IN WITH</span>
										<hr/>
									</div>
									<div class="list-inline contacts-social text-center">
										<a href="javascript:;" class="list-inline-item bg-facebook text-white border-0 rounded-3"><i class="bx bxl-facebook"></i></a>
										<a href="javascript:;" class="list-inline-item bg-twitter text-white border-0 rounded-3"><i class="bx bxl-twitter"></i></a>
										<a href="javascript:;" class="list-inline-item bg-google text-white border-0 rounded-3"><i class="bx bxl-google"></i></a>
										<a href="javascript:;" class="list-inline-item bg-linkedin text-white border-0 rounded-3"><i class="bx bxl-linkedin"></i></a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				<!--end row-->
			</div>
		</div>
	</div>
	<!--end wrapper-->
	<!-- Bootstrap JS -->
	<script src="user/admin/assets/js/bootstrap.bundle.min.js"></script>
	<!--plugins-->
	<script src="user/admin/assets/js/jquery.min.js"></script>
	<script src="user/admin/assets/plugins/simplebar/js/simplebar.min.js"></script>
	<script src="user/admin/assets/plugins/metismenu/js/metisMenu.min.js"></script>
	<script src="user/admin/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></script>
	<!--Password show & hide js -->
	<script>
		$(document).ready(function () {
			$("#show_hide_password a").on('click', function (event) {
				event.preventDefault();
				if ($('#show_hide_password input').attr("type") == "text") {
					$('#show_hide_password input').attr('type', 'password');
					$('#show_hide_password i').addClass("bx-hide");
					$('#show_hide_password i').removeClass("bx-show");
				} else if ($('#show_hide_password input').attr("type") == "password") {
					$('#show_hide_password input').attr('type', 'text');
					$('#show_hide_password i').removeClass("bx-hide");
					$('#show_hide_password i').addClass("bx-show");
				}
			});

		});
    
	</script>
	<!--app JS-->
	<script src="user/admin/assets/js/app.js"></script>
</body>

</html>