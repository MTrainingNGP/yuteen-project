<?php 

//Include database configuration file
    include('config.php');
    
    //Get all country data
    $query = mysql_query("SELECT * FROM tbl_countries WHERE status = 1 ORDER BY country_name ASC");
    
    //Count total number of rows
    $rowCount = mysql_num_rows($query);

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
    <!--link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet"-->

    <!-- Custom styles for this template -->
    <link href="css/theme.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

        <!--MY VALIDATIONS-->
    <script type="text/javascript" src="js/newValidations.js"></script>



    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php">Beginners Portal</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container" style="border: solid 10px; background-image: url('images/reg_back.jpg'); background-repeat: no-repeat; background-size: cover;">
        <h2 align="center">Registration Form</h2>
          <form class="form-horizontal" name="frmRegister" method="post" onsubmit="sign_in.php">
            <div class="form-group">
                <label class="control-label col-sm-4" for="fname">First Name :</label>
                <div class="col-sm-5" id="finame">
                  <input type="text" class="form-control" id="fname_id" name="fname" maxlength="25" 
                         placeholder="Enter first name" onkeypress="return onlyAlphabets(event);"
                         onblur="isEmpty(fname_id,err_fname,'First Name')" required>
                         <span class="help-block" id="err_fname" style="color: red;"></span>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-4" for="lname">Last Name :</label>
                <div class="col-sm-5" id="laname">
                  <input type="text" class="form-control" id="lname_id" name="lname" maxlength="20"
                         placeholder="Enter last name" onkeypress="return onlyAlphabets(event);"
                         onblur="isEmpty(lname_id,err_lname,'Last Name')" required>
                         <span class="help-block" id="err_lname" style="color: red;"></span>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-4" for="dad">Father's Name :</label>
                <div class="col-sm-5" id="dname">
                  <input type="text" class="form-control" id="dad_id" name="dad" maxlength="20" 
                         placeholder="Enter father's name" onkeypress="return onlyAlphabets(event);"
                         onblur="isEmpty(dad_id,err_dad,'Father Name')" required>
                         <span class="help-block" id="err_dad" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="mom">Mother's Name :</label>
                <div class="col-sm-5" id="mname">
                  <input type="mom" class="form-control" id="mom_id" name="mom" maxlength="20"
                         placeholder="Enter mother's name" onkeypress="return onlyAlphabets(event);"
                         onblur="isEmpty(mom_id,err_mom,'Mother Name')" required>
                        <span class="help-block" id="err_mom"  style="color: red;"></span>

                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-4" for="dob">DOB :</label>
                <div class="col-xs-5 date" id="datep">
                  <div class="input-group input-append date" id="datePicker">
                    <input type="text" class="form-control" name="dob" id="date" 
                           onblur="return validateDOB()" required />
                    <span class="help-block" id="err_dob"  style="color: red;"></span>
                  </div>
                </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-4" for="gender">Gender :</label>
                <div class="col-sm-5 radio" id="sex">
                    <label><input type="radio" id="male" name="gender" value="Male">Male</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" id="female" name="gender" value="Female" onblur="validateGender()">Female</label>
                    <span class="help-block" id="err_gender" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
              <label class="control-label col-sm-4" for="country">Country :</label>
              <div class="col-sm-5" id="countries">
                  <select name="country" id="country">
                      <option value="">Select Country</option>
                      <?php
                        if($rowCount > 0){
                          while($row = mysql_fetch_assoc($query)){ 
                              echo '<option value="'.$row['country_id'].'">'.$row['country_name'].'</option>';
                            }
                        }
                        else{
                          echo '<option value="">Country not available</option>';
                        }
                      ?>
                  </select>
                </div>
            </div>
            
            <div class="form-group">
              <label class="control-label col-sm-4" for="state">State :</label>
              <div class="col-sm-5" id="states">
                  <select name="state" id="state">
                     <option value="">Select country first</option>
                  </select>
                </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-4" for="city">City :</label>
              <div class="col-sm-5" id="cities">
                  <select name="city" id="city">
                      <option value="">Select state first</option>
                  </select>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="district">District :</label>
                <div class="col-sm-5" id="district">
                  <input type="pin" class="form-control" id="district_id" name="district" maxlength="20"
                         placeholder="Enter District" onkeypress="return onlyAlphabets(event);">
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-4" for="pin">Pincode :</label>
                <div class="col-sm-5" id="pincode">
                  <input type="pin" class="form-control" id="pin_id" name="pin" maxlength="6"
                         placeholder="Enter Pincode" onkeypress="return onlyNumeric(event);"
                         onblur="isEmpty(pin_id,err_pin,'Pincode')" required>
                         <span class="help-block" id="err_pin" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="nationality">Nationality :</label>
                <div class="col-sm-5" id="nation">
                  <input type="nationality" class="form-control" id="nationality_id" name="nationality"
                         maxlength="20" placeholder="Enter nationality" onkeypress="return onlyAlphabets(event);" onblur="isEmpty(nationality_id,err_nationality,'Nationality')" required>
                         <span class="help-block" id="err_nationality" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="religion">Religion :</label>
                <div class="col-sm-5" id="rel">
                  <input type="religion" class="form-control" id="religion_id" name="religion"
                         maxlength="20" placeholder="Enter religion" onkeypress="return onlyAlphabets(event);" onblur="isEmpty(religion_id,err_religion,'Religion')" required>
                         <span class="help-block" id="err_religion" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="phone">Phone No. :</label>
                <div class="col-sm-1">
                  <input type="text" class="form-control" id="cc" maxlength="2" value="+91" 
                         onkeypress="return onlyNumeric(event);" required>
                </div>
                <div class="col-sm-1" id="stdph">
                  <input type="text" class="form-control" id="std" placeholder="STD " maxlength="4" name="std"
                         onkeypress="return onlyNumeric(event);"
                         >
                         <span class="help-block" id="err_std" style="color: red;"></span>
                </div>
                <div class="col-sm-3" id="ph">
                  <input type="text" class="form-control" id="phone_id" name="phone" placeholder="Enter phone no."       maxlength="6" onkeypress="return onlyNumeric(event);"
                         >
                         <span class="help-block" id="err_phone" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="mob">Mobile No. :</label>
                <div class="col-sm-1">
                  <input type="ccode" class="form-control" id="ccode" value="+91" maxlength="2">
                </div>
                <div class="col-sm-4" id="mobile">
                  <input type="text" class="form-control" id="mob_id" name="mob" placeholder="Enter mobile"
                         maxlength="10" onkeypress="return onlyNumeric(event);"
                         onblur="isEmpty(mob_id,err_mob,'Mobile')" required>
                         <span class="help-block" id="err_mob" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="email">Email Id :</label>
                <div class="col-sm-5" id="mail">
                  <input type="text" class="form-control" id="email_id" name="email" maxlength="20"
                         placeholder="Enter email" 
                         onblur="return ValidateEmail(document.frmRegister.email),isEmpty(email_id,err_email,'Email')" required>
                         <span class="help-block" id="err_email" style="color: red;"></span>

                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-4" for="education">Education :</label>
                <div class="col-sm-5" id="edu">
                  <input type="text" class="form-control" id="education_id" name="education" maxlength="20"       placeholder="Enter education" onblur="isEmpty(education_id,err_education,'Education')" required>
                         <span class="help-block" id="err_education" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="yop">Year Of Passing :</label>
                <div class="col-sm-5 dropdown" id="passyr">
                    <select id="yop_id">
                      <option id ="" name="yop">Select</option>
                      <option id ="2011" name="yop">2011</option>
                      <option id ="2012" name="yop">2012</option>
                      <option id ="2013" name="yop">2013</option>
                      <option id ="2014" name="yop">2014</option>
                      <option id ="2015" name="yop">2015</option>
                      <option id ="2016" name="yop">2016</option>
                      <option id ="2017" name="yop">2017</option>
                    </select>
                    <span class="help-block" id="err_yop" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="uni">Board / University :</label>
                <div class="col-sm-5" id="boru">
                  <input type="text" class="form-control" id="uni_id" name="uni" maxlength="20"
                         placeholder="Enter Baord / University" onkeypress="return onlyAlphabets(event);"
                         onblur="isEmpty(uni_id,err_uni,'Board / University')" required>
                         <span class="help-block" id="err_uni" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="phy">Physical Attribute :</label>
                <div class="col-sm-2 radio">
                 <label><input type="radio" name="phy" id="phy_att_id" value="yes" 
                               onblur="validatePhysicalAttribute()">Yes</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" name="phy" value="ndo" id="phy_att_id" 
                               onblur="validatePhysicalAttribute()">No</label>
                </div>
                <div class="col-sm-3" id="phy_att">
                  <input type="text" class="form-control" id="phy_issue_id" maxlength="40"
                         placeholder="" name="phy_issue">
                         <span class="help-block" id="err_phy" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="password">Password :</label>
                <div class="col-sm-5" id="pass">
                  <input type="password" class="form-control" id="password_id" name="pwd"
                         onblur="isEmpty(password_id,err_password,'Password')" required>
                  <span class="help-block" id="err_password" style="color: red;"></span>

                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="repassword">Re-enter Password :</label>
                <div class="col-sm-5" id="repass">
                  <input type="password" class="form-control" id="re-password_id" name="repassword" 
                         placeholder="Re-enter Password" onblur="validateReEnterPassword()" required>
                  <span class="help-block" id="err_repassword" style="color: red;"></span>
                </div>
            </div>
            
            <div class="form-group">
                <label class="control-label col-sm-4" for="captcha">Captcha :</label>
                <div class="col-sm-5">
                  <div class="g-recaptcha" data-sitekey="6LdESwoUAAAAAO39Pz9rpUb-gVDC6XwiwYhGaJ7X"></div>
                </div>
            </div>

             <div class="form-group">
              <div class="col-sm-12 checkbox" align="center" id="chk" >
                  <input type="checkbox" name="terms" id="chkTerms_id" onblur="validateTerms()">
                  I Accept all the terms and conditions
                  <span class="help-block" id="err_terms" style="color: red;"></span>
              </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12" align="center">
                  <button type="submit" id="btnSubmit" class="btn btn-success btn-lg">Register</button>&nbsp; &nbsp;
                  <button type="reset" class="btn btn-danger btn-lg">Reset</button>&nbsp; &nbsp;
                  <button type="button" class="btn btn-warning btn-lg">Cancel</button>
                </div>
            </div>
            <div id="info"></div>
        </form>
      </div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->

    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script>
    $(function() {
      $( "#date" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        dateFormat: 'yy/mm/dd',
        onClose: function( selectedDate ) {
        $( "#date" ).datepicker( "option", "Date", selectedDate );
      }
    });
   
  });
  </script>
  <script src='https://www.google.com/recaptcha/api.js'></script>
  <script src="js/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
    $('#country').on('change',function(){
        var countryID = $(this).val();
        if(countryID){
            $.ajax({
                type:'POST',
                url:'ajaxData.php',
                data:'country_id='+countryID,
                success:function(html){
                    $('#state').html(html);
                    $('#city').html('<option value="">Select state first</option>'); 
                }
            }); 
        }else{
            $('#state').html('<option value="">Select country first</option>');
            $('#city').html('<option value="">Select state first</option>'); 
        }
    });
    
    $('#state').on('change',function(){
        var stateID = $(this).val();
        if(stateID){
            $.ajax({
                type:'POST',
                url:'ajaxData.php',
                data:'state_id='+stateID,
                success:function(html){
                    $('#city').html(html);
                }
            }); 
        }else{
            $('#city').html('<option value="">Select state first</option>'); 
        }
    });
});
</script>


<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src=" http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/jquery-ui.min.js">
</script>
        
<script type="text/javascript">
     $(document).ready(function(){
          $("#btnSubmit").click(function(){
 
                var first_name=$("#fname_id").val();
                var last_name=$("#lname_id").val();

                var father_name=$("#dad_id").val();
                var mother_name=$("#mom_id").val();

                var dob=$("#date").val();
                var gender=$("#sex").val();

                var country=$("#country").val();
                var state=$("#state").val();

                var city=$("#city").val();
                var district=$("#district_id").val();

                var pincode=$("#pin_id").val();
                var nationality=$("#nationality_id").val();

                var religion=$("#religion_id").val();
                var phone_no=$("#phone_id").val();

                var mobile_no=$("#mob_id").val();
                var email=$("#email_id").val();

                var education=$("#education_id").val();
                var year_of_passing=$("#yop_id").val();

                var board_university=$("#uni_id").val();
                var phy_attr=$("#phy_att_id").val();

                var phy_issue=$("#phy_issue_id").val();
                var password=$("#password_id").val();
 
                $.ajax({
                      type:"post",
                      url:"ajaxInsert.php",
                      data:"first_name="+first_name+
                           "&last_name="+last_name+

                           "&father_name="+father_name+
                           "&mother_name="+mother_name+
                           
                           "&dob="+dob+
                           "&gender="+gender+
                           
                           "&country="+country+
                           "&state="+state+
                           
                           "&city="+city+
                           "&district="+district+

                           "&pincode="+pincode+
                           "&nationality="+nationality+
                           
                           "&religion="+religion+
                           "&phone_no="+phone_no+
                           
                           "&mobile_no="+mobile_no+
                           "&email="+email+
                           
                           "&education="+education+
                           "&year_of_passing="+year_of_passing+
                           
                           "&board_university="+board_university+
                           "&phy_attr="+phy_attr+
                           
                           "&phy_issue="+phy_issue+
                           "&password="+password
                           ,
                      success:function(data){
                                 $("#info").html(data);
                              }
 
                });
 
          });
      });
       </script>
   
  </body>
</html>

