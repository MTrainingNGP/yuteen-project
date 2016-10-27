// function validateFirstName()
// {
//     var fname = document.forms["frmRegister"]["fname"].value;
//     document.getElementById('err_fname').innerHTML = "";
//     var err = document.getElementById("finame");
//     err.className += " has-error";
//     if(fname == "" || fname == null)
//         {
//             document.getElementById('err_fname').innerHTML = "First name cannot be empty";
//             frmRegister.fname.focus();
//         }
//         else if(fname.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_fname').innerHTML = "";
//         }
// }

// function validateLastName()
// {
//     var lname = document.forms["frmRegister"]["lname"].value;
//     document.getElementById('err_lname').innerHTML = "";
//     var err = document.getElementById("laname");
//     err.className += " has-error";
//     if(lname == "" || lname == null)
//         {
//             document.getElementById('err_lname').innerHTML = "Last name cannot be empty";
//             frmRegister.lname.focus();
//         }
//         else if(lname.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_lname').innerHTML = "";
//         }
// }

// function validateFatherName()
// {
//     var dad = document.forms["frmRegister"]["dad"].value;
//     document.getElementById('err_dad').innerHTML = "";
//     var err = document.getElementById("dname");
//     err.className += " has-error";
//     if(dad == "" || dad == null)
//         {
//             document.getElementById('err_dad').innerHTML = "Father name cannot be empty";
//             frmRegister.dad.focus();
//         }
//         else if(dad.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_dad').innerHTML = "";
//         }
// }

// function validateMotherName()
// {
//     var mom = document.forms["frmRegister"]["mom"].value;
//     document.getElementById('err_mom').innerHTML = "";
//     var err = document.getElementById("mname");
//     err.className += " has-error";
//     if(mom == "" || mom == null)
//         {
//             document.getElementById('err_mom').innerHTML = "Mother name cannot be empty";
//             frmRegister.mom.focus();
//         }
//         else if(mom.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_mom').innerHTML = "";
//         }
// }

function validateDOB()
{
    var dob = document.forms["frmRegister"]["dob"].value;
    document.getElementById('err_dob').innerHTML = "";
    var err = document.getElementById("datep");
    err.className += " has-error";
    if(dob == "" || dob == null)
        {
            document.getElementById('err_dob').innerHTML = "DOB cannot be empty";
            frmRegister.dob.focus();
        }
        else if(dob.match())
        {
            err.classList.remove("has-error");
            return true;
        }
        else
        {
            document.getElementById('err_dob').innerHTML = "";
        }
}

function validateGender()
{
    var gender = document.forms["frmRegister"]["gender"].value;
    document.getElementById('err_gender').innerHTML = "";
    var err = document.getElementById("sex");
    err.className += " has-error";
    if((frmRegister.gender[0].checked == false) && (frmRegister.gender[1].checked == false))
        {
            document.getElementById('err_gender').innerHTML = "Please select gender";
            frmRegister.gender.focus();
        }
        else if(gender.match())
        {
            err.classList.remove("has-error");
            return true;
        }
        else
        {
            document.getElementById('err_gender').innerHTML = "";
        }
}

// function validateCountry()
// {
//     var country = document.forms["frmRegister"]["country"].value;
//     document.getElementById('err_country').innerHTML = "";
//     var err = document.getElementById("countries");
//     err.className += " has-error";
//     if(country == "" || country == null)
//         {
//             document.getElementById('err_country').innerHTML = "Country cannot be empty";
//             frmRegister.country.focus();
//         }
//         else if(country.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_country').innerHTML = "";
//         }
// }

// function validateState()
// {
//     var state = document.forms["frmRegister"]["state"].value;
//     document.getElementById('err_state').innerHTML = "";
//     var err = document.getElementById("states");
//     err.className += " has-error";
//     if(state == "" || state == null)
//         {
//             document.getElementById('err_state').innerHTML = "State cannot be empty";
//             frmRegister.state.focus();
//         }
//         else if(state.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_state').innerHTML = "";
//         }
// }

// function validateCity()
// {
//     var city = document.forms["frmRegister"]["city"].value;
//     document.getElementById('err_city').innerHTML = "";
//     var err = document.getElementById("cities");
//     err.className += " has-error";
//     if(city == "" || city == null)
//         {
//             document.getElementById('err_city').innerHTML = "City cannot be empty";
//             frmRegister.city.focus();
//         }
//         else if(city.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_city').innerHTML = "";
//         }
// }

// function validatePin()
// {
//     var pin = document.forms["frmRegister"]["pin"].value;
//     document.getElementById('err_pin').innerHTML = "";
//     var err = document.getElementById("pincode");
//     err.className += " has-error";
//     if(pin == "" || pin == null)
//         {
//             document.getElementById('err_pin').innerHTML = "Pincode cannot be empty";
//             frmRegister.pin.focus();
//         }
//         else if(pin.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_pin').innerHTML = "";
//         }
// }

// function validateNationality()
// {
//     var nationality = document.forms["frmRegister"]["nationality"].value;
//     document.getElementById('err_nationality').innerHTML = "";
//     var err = document.getElementById("nation");
//     err.className += " has-error";
//     if(nationality == "" || nationality == null)
//         {
//             document.getElementById('err_nationality').innerHTML = "Nationality cannot be empty";
//             frmRegister.nationality.focus();
//         }
//         else if(nationality.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_nationality').innerHTML = "";
//         }
// }

// function validateReligion()
// {
//     var religion = document.forms["frmRegister"]["religion"].value;
//     document.getElementById('err_religion').innerHTML = "";
//     var err = document.getElementById("rel");
//     err.className += " has-error";
//     if(religion == "" || religion == null)
//         {
//             document.getElementById('err_religion').innerHTML = "Religion cannot be empty";
//             frmRegister.religion.focus();
//         }
//         else if(religion.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_religion').innerHTML = "";
//         }
// }

// function validateSTD()
// {
//     var std = document.forms["frmRegister"]["std"].value;
//     document.getElementById('err_std').innerHTML = "";
//     var err = document.getElementById("stdph");
//     err.className += " has-error";
//     if(std == "" || std == null)
//         {
//             document.getElementById('err_std').innerHTML = "STD cannot be empty";
//             frmRegister.std.focus();
//         }
//         else if(std.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_std').innerHTML = "";
//         }
// }

// function validatePhone()
// {
//     var phone = document.forms["frmRegister"]["phone"].value;
//     document.getElementById('err_phone').innerHTML = "";
//     var err = document.getElementById("ph");
//     err.className += " has-error";
//     if(phone == "" || phone == null)
//         {
//             document.getElementById('err_phone').innerHTML = "Phone cannot be empty";
//             frmRegister.phone.focus();
//         }
//         else if(phone.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_phone').innerHTML = "";
//         }
// }

// function validateMobile()
// {
//     var mob = document.forms["frmRegister"]["mob"].value;
//     document.getElementById('err_mob').innerHTML = "";
//     var err = document.getElementById("mobile");
//     err.className += " has-error";
//     if(mob == "" || mob == null)
//         {
//             document.getElementById('err_mob').innerHTML = "Mobile cannot be empty";
//             frmRegister.mob.focus();
//         }
//         else if(mob.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_mob').innerHTML = "";
//         }
// }

// function validateEmail()
// {
//     var email = document.forms["frmRegister"]["email"].value;
//     document.getElementById('err_email').innerHTML = "";
//     var err = document.getElementById("mail");
//     err.className += " has-error";
//     if(email == "" || email == null)
//         {
//             document.getElementById('err_email').innerHTML = "Email cannot be empty";
//             frmRegister.email.focus();
//         }
//         else if(email.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_email').innerHTML = "";
//         }
// }

// function validateEducation()
// {
//     var education = document.forms["frmRegister"]["education"].value;
//     document.getElementById('err_education').innerHTML = "";
//     var err = document.getElementById("edu");
//     err.className += " has-error";
//     if(education == "" || education == null)
//         {
//             document.getElementById('err_education').innerHTML = "Education cannot be empty";
//             frmRegister.education.focus();
//         }
//         else if(education.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_education').innerHTML = "";
//         }
// }

// function validateYearOfPassing()
// {
//     var yop = document.forms["frmRegister"]["yop"].value;
//     document.getElementById('err_yop').innerHTML = "";
//     var err = document.getElementById("passyr");
//     err.className += " has-error";
//     if(yop == "select" || yop == null)
//         {
//             document.getElementById('err_yop').innerHTML = "Please select Year of passing";
//             frmRegister.yop.focus();
//         }
//         else if(yop.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_yop').innerHTML = "";
//         }
// }

// function validateBoardUniversity()
// {
//     var uni = document.forms["frmRegister"]["uni"].value;
//     document.getElementById('err_uni').innerHTML = "";
//     var err = document.getElementById("boru");
//     err.className += " has-error";
//     if(uni == "" || uni == null)
//         {
//             document.getElementById('err_uni').innerHTML = "Board / University cannot be empty";
//             frmRegister.uni.focus();
//         }
//         else if(uni.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_uni').innerHTML = "";
//         }
// }

function validatePhysicalAttribute()
{
    var phy = document.forms["frmRegister"]["phy"].value;
    document.getElementById('err_phy').innerHTML = "";
    var err = document.getElementById("phy_att");
    err.className += " has-error";
    if((frmRegister.phy[0].checked == false) && (frmRegister.phy[1].checked == false))
        {   
            document.getElementById('err_phy').innerHTML = "Please select Physical attribute";
            frmRegister.phy[0].focus();
            return false;
        }
        else
        {
            if((frmRegister.phy[0].checked == true) || (frmRegister.phy[1].checked == false))
            {
                document.getElementById('err_phy').innerHTML = "Please enter physical issue";
                frmRegister.phy_issue.focus();
                return false;
            }
            else if((frmRegister.phy[1].checked == true) || (frmRegister.phy[0].checked == false))
            {
                document.getElementById("phy_issue_id").disabled = true;    
            }
            else{
                document.getElementById("phy_issue_id").disabled = false;
            }
            document.getElementById('err_phy').innerHTML = ""; 
        }
}

// function validatePassword()
// {
//     var password = document.forms["frmRegister"]["pwd"].value;
//     document.getElementById('err_password').innerHTML = "";
//     var err = document.getElementById("pass");
//     err.className += " has-error";
//     if(password == "" || password == null)
//         {
//             document.getElementById('err_password').innerHTML = "Password cannot be empty";
//             frmRegister.password.focus();
//         }
//         else if(password.match())
//         {
//             err.classList.remove("has-error");
//             return true;
//         }
//         else
//         {
//             document.getElementById('err_password').innerHTML = "";
//         }
// }

function validateReEnterPassword()
{
    var repassword = document.forms["frmRegister"]["repassword"].value;
    document.getElementById('err_repassword').innerHTML = "";
    var err = document.getElementById("repass");
    err.className += " has-error";
    if(repassword == "" || repassword == null)
        {
            document.getElementById('err_repassword').innerHTML = "Re Password cannot be empty";
            frmRegister.repassword.focus();
        }
        else if(repassword != document.forms["frmRegister"]["pwd"].value)
        {
            document.getElementById('err_repassword').innerHTML = "Password not match";
            err.classList.remove("has-error");
        }
        else
        {
            document.getElementById('err_repassword').innerHTML = "";
        }
}

function validateTerms()
{
    var terms = document.forms["frmRegister"]["terms"].value;
    document.getElementById('err_terms').innerHTML = "";
    var err = document.getElementById("chk");
    err.className += " has-error";
    if((frmRegister.terms.checked == false))
        {
            document.getElementById('err_terms').innerHTML = "Please follow terms and conditions";
            frmRegister.terms.focus();
            return false;
        }
}

// function allValidations()
// {
//     validateFirstName();
//     validateLastName();
//     validateFatherName();
//     validateMotherName();
//     validateDOB();
//     validateGender();
//     validateCountry();
//     validateState();
//     validateCity();
//     validatePin();
//     validateNationality();
//     validateReligion();
//     validateSTD();
//     validatePhone();
//     validateMobile();
//     validateEmail();
//     validateEducation();
//     validateYearOfPassing();
//     validateBoardUniversity();
//     validatePhysicalAttribute();
//     validatePassword();
//     validateReEnterPassword();
// }

function isEmpty(id,err,fieldName)
{
    
    if(id.value == "")
    {
        err.innerHTML = "Please Enter "+fieldName;
        return false;
    }
    else if(id.value != "")
        {
            err.innerHTML = "";
            //alert(id.value);
            return true;
        }
        else
        {
            err.innerHTML = "";
        }
}

// function validateForm()
//     {
//         var fname = document.forms["frmRegister"]["fname"].value;
//         var lname = document.forms["frmRegister"]["lname"].value;
//         var dad = document.forms["frmRegister"]["dad"].value;
//         var mom = document.forms["frmRegister"]["mom"].value;


//         var dob = document.forms["frmRegister"]["dob"].value;
//         var gender = document.forms["frmRegister"]["gender"].value;
//         var country = document.forms["frmRegister"]["country"].value;
//         var state = document.forms["frmRegister"]["state"].value;

//         var district = document.forms["frmRegister"]["district"].value;
//         var pin = document.forms["frmRegister"]["pin"].value;
//         var nationality = document.forms["frmRegister"]["nationality"].value;
//         var religion = document.forms["frmRegister"]["religion"].value;

//         var std = document.forms["frmRegister"]["std"].value;
//         var phone = document.forms["frmRegister"]["phone"].value;
//         var mob = document.forms["frmRegister"]["mob"].value;
//         var email = document.forms["frmRegister"]["email"].value;
//         var education = document.forms["frmRegister"]["education"].value;

//         //var yop = document.forms["frmRegister"]["yop"].value;
//         var uni = document.forms["frmRegister"]["uni"].value;
//         var phy = document.forms["frmRegister"]["phy"].value;
//         var password = document.forms["frmRegister"]["password"].value;
//         var repassword = document.forms["frmRegister"]["repassword"].value;
//         var terms = document.forms["frmRegister"]["terms"].value;

//         //for first name
//         if(fname == "" || fname == null)
//         {
//             var err = document.getElementById("finame");
//             err.className += "has-error";
//             document.getElementById('err_fname').innerHTML = "First name cannot be empty";
//             frmRegister.fname.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_fname').innerHTML = "";
//         }

//          //for last name
//         if(lname == "" || lname == null)
//         {
//             document.getElementById('err_lname').innerHTML = "Last name cannot be empty";
//             frmRegister.lname.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_lname').innerHTML = "";
//         }

//         //for father name
//         if(dad == "" || dad == null)
//         {
//             document.getElementById('err_dad').innerHTML = "Father's name cannot be empty";
//             frmRegister.dad.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_dad').innerHTML = "";
//         }

//         //for mother name
//         if(mom == "" || mom == null)
//         {
//             document.getElementById('err_mom').innerHTML = "Mother's name cannot be empty";
//             frmRegister.mom.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_mom').innerHTML = "";
//         }

//         //for dob
//         if(dob == "" || dob == null)
//         {
//             document.getElementById('err_dob').innerHTML = "DOB cannot be empty";
//             frmRegister.dob.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_dob').innerHTML = "";
//         }

//         //for gender
//         if((frmRegister.gender[0].checked == false) && (frmRegister.gender[1].checked == false))
//         {
//             document.getElementById('err_gender').innerHTML = "Please select gender";
//             frmRegister.gender[0].focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_gender').innerHTML = "";
//         }

//         //for country name
//         if(country == "" || country == null)
//         {
//             document.getElementById('err_country').innerHTML = "Please enter country";
//             frmRegister.country.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_country').innerHTML = "";
//         }

//         //for state name
//         if(state == "" || state == null)
//         {
//             document.getElementById('err_state').innerHTML = "Please enter state";
//             frmRegister.state.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_state').innerHTML = "";
//         }

//         //for district name
//         if(district == "" || district == null)
//         {
//             document.getElementById('err_district').innerHTML = "City cannot be empty";
//             frmRegister.district.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_district').innerHTML = "";
//         }

//         //for pincode
//         if(pin == "" || pin == null)
//         {
//             document.getElementById('err_pin').innerHTML = "Pincode cannot be empty";
//             frmRegister.pin.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_pin').innerHTML = "";
//         }

//         //for nationality
//         if(nationality == "" || nationality == null)
//         {
//             document.getElementById('err_nationality').innerHTML = "Nationality cannot be empty";
//             frmRegister.nationality.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_nationality').innerHTML = "";
//         }

//         //for religion
//         if(religion == "" || religion == null)
//         {
//             document.getElementById('err_religion').innerHTML = "Religion cannot be empty";
//             frmRegister.religion.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_religion').innerHTML = "";
//         }

//         //for std
//         if(std == "" || std == null)
//         {
//             document.getElementById('err_std').innerHTML = "STD cannot be empty";
//             frmRegister.std.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_std').innerHTML = "";
//         }

//         //for phone
//         if(phone == "" || phone == null)
//         {
//             document.getElementById('err_phone').innerHTML = "Phone cannot be empty";
//             frmRegister.phone.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_phone').innerHTML = "";
//         }

//         //for mobile
//         if(mob == "" || mob == null)
//         {
//             document.getElementById('err_mob').innerHTML = "Mobile cannot be empty";
//             frmRegister.mob.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_mob').innerHTML = "";
//         }

//         //for email
//         if(email == "" || email == null)
//         {
//             document.getElementById('err_email').innerHTML = "Email cannot be empty";
//             frmRegister.email.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_email').innerHTML = "";
//         }

//         //for education
//         if(education == "" || education == null)
//         {
//             document.getElementById('err_education').innerHTML = "Education cannot be empty";
//             frmRegister.education.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_education').innerHTML = "";
//         }

//         //for year of passing
//         // if(yop == "select" || yop == null)
//         // {
//         //     document.getElementById('err_yop').innerHTML = "Year of Passing cannot be empty";
//         //     frmRegister.yop.focus();
//         //     return false;
//         // }
//         // else
//         // {
//         //     document.getElementById('err_yop').innerHTML = "";
//         // }

//         //for Board /University
//         if(uni == "" || uni == null)
//         {
//             document.getElementById('err_uni').innerHTML = "Board / University cannot be empty";
//             frmRegister.uni.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_uni').innerHTML = "";
//         }

//         //for physical attribute
//         if((frmRegister.phy[0].checked == false) && (frmRegister.phy[1].checked == false))
//         {   
//             document.getElementById('err_phy').innerHTML = "Please select Physical attribute";
//             frmRegister.phy[0].focus();
//             return false;
//         }
//         else
//         {
//             if((frmRegister.phy[0].checked == true) || (frmRegister.phy[1].checked == false))
//             {
//                 document.getElementById('err_phy').innerHTML = "Please enter physical issue";
//                 frmRegister.phy_issue.focus();
//                 return false;
//             }
//             else if((frmRegister.phy[1].checked == true) || (frmRegister.phy[0].checked == false))
//             {
//                 document.getElementById("phy_issue_id").disabled = true;    
//             }
//             else{
//                 document.getElementById("phy_issue_id").disabled = false;
//             }
//             document.getElementById('err_phy').innerHTML = ""; 
//         }

//         //for password
//         if(password == "" || password == null)
//         {
//             document.getElementById('err_password').innerHTML = "Password cannot be empty";
//             frmRegister.password.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_password').innerHTML = "";
//         }

//         //for re-enter password
//         if(repassword == "" || repassword == null)
//         {
//             document.getElementById('err_repassword').innerHTML = "Repassword cannot be empty";
//             frmRegister.repassword.focus();
//             return false;
//         }
//         else
//         {
//             document.getElementById('err_repassword').innerHTML = "";
//         }

//         //for terms and conditions
//         if((frmRegister.terms.checked == false))
//         {
//             alert("Please follow terms and conditions");
//             frmRegister.terms.focus();
//             return false;
//         }

//     }

function onlyAlphabets(e) 
    {
        try {
            if (e) {
                var charCode = e.which;
            }
            else 
            {
                return true; 
            }
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) ||(e.keyCode == 8) || 
                (e.keyCode == 9) || (e.keyCode == 16) || (e.keyCode == 17))
                return true;
            else
                return false;
        }
        catch (err) {
            alert(err.Description);
        }
    }

function onlyNumeric(e) 
    {
        try {
            if (e) {
                var charCode = e.which;
            }
            else { return true; }
            if ((charCode > 47 && charCode < 58) || (e.keyCode == 8) || (e.keyCode == 9))
                return true;
            else
                return false;
        }
        catch (err) {
            alert(err.Description);
        }
    }

function ValidateEmail(mail)   
    {  
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frmRegister.email.value))  
        {  
            return (true)  
        }
        else
        {  
            alert("You have entered an invalid email address!");
            frmRegister.email.focus();
            return (false);
        }  
    }
