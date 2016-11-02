<?php
require_once('config.php');

if (isset($_POST['btnSignIn'])) {
  session_start();
  extract($_POST);
  //print_r($_POST);
  $email = $_POST['email'];
  $pwd = md5($_POST['pwd']);
  //md5('".$_POST['pwd']."')
  //SELECT reg_id from tbl_registration where email="max@gmail.com";
  $query="SELECT reg_id from tbl_registration where email='$email' and password='$pwd'";
  $row = mysql_fetch_assoc(mysql_query($query));

  if (!empty($row['reg_id'])){
    echo $_SESSION['id']=$row['reg_id'];
    header('location:http://localhost/yuteen-project/profile.php');
  }
  else{
    echo "<script>alert('please check login data')</script>";
  }
}
?>