<?php
  //Include database configuration file
    include('config.php');

    $id = $_SESSION['id'];

    if(!isset($_SESSION['id']))
    {
      session_destroy();
      header('location:sign_in.php');
    }
    //echo $id;
    
    //Get user data
    $query = mysql_query("SELECT first_name,last_name,email,image FROM tbl_registration WHERE reg_id = '".$id."'");
    $details = mysql_fetch_assoc($query);
    //echo $details['first_name'];
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Beginners Portal</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/profile.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/custom.css">



    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<!--     <script src="../../assets/js/ie-emulation-modes-warning.js"></script>-->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php">Beginners Portal</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-left">
            <li><a href="#"><span class="glyphicon glyphicon-home"></span> Home</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> About</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-phone-alt"></span> Contact</a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
              <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Account
                <b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li>
                      <div class="navbar-content">
                        <div class="row">
                          <div class="col-md-5">
                            <img src="<?php echo $details['image'];?>" alt="Alternate Text" class="img-responsive" />
                            <p class="text-center small">
                            <a href="#">Change Photo</a></p>
                          </div>
                          <div class="col-md-7">
                            <span><?php echo $details['first_name']." ".$details['last_name'];?></span>
                            <p class="text-muted small"><?php echo $details['email'];?></p>
                            <div class="divider">
                            </div>
                            <a href="#" class="btn btn-primary btn-sm active">View Profile</a>
                          </div>
                        </div>
                      </div>
                      <div class="navbar-footer">
                        <div class="navbar-footer-content">
                          <div class="row">
                            <div class="col-md-6">
                              <a href="#" class="btn btn-default btn-sm">Change Passowrd</a>
                            </div>
                            <div class="col-md-6">
                              <a href="logout.php" class="btn btn-default btn-sm pull-right">Sign Out</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid" style="background-image: url('images/back.jpg'); background-repeat: no-repeat; background-size: cover;">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> Recommendations</a></li>
            <li><a href="#"> Subscriptions</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Profile</h1>

          <div class="row placeholders">
            
            <div class="col-sm-11 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script> -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!--     <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script> -->
  </body>
</html>