<?php
session_start();
if ($_SESSION['id']) 
{
	session_destroy();
	header("location:sign_in.php");
}

?>