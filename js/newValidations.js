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