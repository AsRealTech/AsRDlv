<?php require_once("resources/core/config.php"); 

//function login_funtion(){

    if(isset($_POST["submit"])){
        $login_name = injection_function($_POST["uname"]);
        $login_pass = injection_function($_POST["password"]);

        $fetch_r = query_function("SELECT * FROM admin");
        $r_fetch = fetch_asreal($fetch_r);
        
       
        
    if($login_name == $r_fetch['name'] && $login_pass == $r_fetch['pass']){
            $_SESSION['logged_user'] = $login_name;
            set_message("Welcome back $login_name");
            redirect_function("dadmin.php"); 
            //echo $_SESSION['logged_user'];
        } else {
            set_message("Wrong Login details...");
            redirect_function("index.php");
        } 
    } 
//}


?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Login - Admin</title>
        <link href="css/styles.css" rel="stylesheet" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    </head>
    <body class="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div> 
                                    
                                    <div class="card-body">
                                    <?php 
                                    display_message();
                                     ?>
                                        <form method="POST">
                                            <div class="form-floating mb-3">
                                                <input required class="form-control" name=uname id="inputEmail" type="text" placeholder="UserName" />
                                                <label for="inputEmail">Your UserName</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input required class="form-control" name=password id="inputPassword" type="password" placeholder="Password" />
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            <div class="form-check mb-3">
                                                <input  class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="small" href="3">Forgot Password?</a>
                                                <input value="Login" name="submit" class="btn btn-primary" type="submit">
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="#">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; 2024</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
