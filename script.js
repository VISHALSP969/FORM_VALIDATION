
var nameCheck = true;
var emailCheck = true;
var mobileCheck = true; 
var dobCheck = true;
var passwordCheck = true;   
var cpasswordCheck = true;

// Function for submit actions
function validate() {
    validateName();
    validateEmail();
    validateMobile();
    validateDOB();
    validatePassword();
    validateConfirmPassword();
    
    if (nameCheck && emailCheck && mobileCheck && dobCheck && passwordCheck && cpasswordCheck) {
        return true;
    } else {
        alert("Form not submitted");
        return false;
    }
}

function validateName() {
    // Name validation
    if(document.getElementById("Name").value.trim() == ""){
        nameCheck = false;
        document.getElementById("NameCheckMessage").innerHTML = "&#x2716; Name field empty.";
        document.getElementById("NameCheckMessage").style.color = "red";
        document.getElementById("Name").style.borderColor = "red";
    }
    else if(/^[A-Za-z\s]{3,}$/.test(document.getElementById("Name").value.trim()) == true){
        nameCheck = true;
        document.getElementById("NameCheckMessage").innerHTML = "&#x2714; Valid";
        document.getElementById("NameCheckMessage").style.color = "green";
        document.getElementById("Name").style.borderColor = "green";
    }
    else{
        nameCheck = false;
        document.getElementById("NameCheckMessage").innerHTML = "&#x2716; Only alphabets allowed in name field (minimum length:3).";
        document.getElementById("NameCheckMessage").style.color = "red";
        document.getElementById("Name").style.borderColor = "red";
    }
}

function validateEmail() {
    // Email validation
    if(document.getElementById("Email").value.trim() == ""){
        emailCheck = false;
        document.getElementById("EmailCheckMessage").innerHTML = "&#x2716; Email field empty.";
        document.getElementById("EmailCheckMessage").style.color = "red";
        document.getElementById("Email").style.borderColor = "red";
    }
    else if(/^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/.test(document.getElementById("Email").value) == false){
        emailCheck = false;
        document.getElementById("EmailCheckMessage").innerHTML = "&#x2716; Enter email id in correct format.";
        document.getElementById("EmailCheckMessage").style.color = "red";
        document.getElementById("Email").style.borderColor = "red";
    }
    else{
        emailCheck = true;
        document.getElementById("EmailCheckMessage").innerHTML = "&#x2714; Valid.";
        document.getElementById("EmailCheckMessage").style.color = "green";
        document.getElementById("Email").style.borderColor = "green";
    }
}

function validateMobile() {
    // Mobile validation
    if(document.getElementById("Mobile").value == ""){
        mobileCheck = false;
        document.getElementById("MobileCheckMessage").innerHTML = "&#x2716; Mobile number field is empty.";
        document.getElementById("MobileCheckMessage").style.color = "red";
        document.getElementById("Mobile").style.borderColor = "red";
    }
    else if(/^[6-9]\d{9}$/.test(document.getElementById("Mobile").value) == false){
        mobileCheck = false;
        document.getElementById("MobileCheckMessage").innerHTML = "&#x2716; Mobile number field only allows digits(10 digits needed).First number should be 6/7/8/9.";
        document.getElementById("MobileCheckMessage").style.color = "red";
        document.getElementById("Mobile").style.borderColor = "red";
    }
    else{
        mobileCheck = true;
        document.getElementById("MobileCheckMessage").innerHTML = "&#x2714; Valid.";
        document.getElementById("MobileCheckMessage").style.color = "green";
        document.getElementById("Mobile").style.borderColor = "green";
    }
}

function validateDOB() {
    // DOB validation
    var dob = document.getElementById("DOB").value;
    if (dob === "") {
        dobCheck = false;
        document.getElementById("DobCheckMessage").innerHTML = "&#x2716; Date of birth field is empty.";
        document.getElementById("DobCheckMessage").style.color = "red";
        document.getElementById("DOB").style.borderColor = "red";
    } else {
        // Validate the DOB format
        if (!validateDateOfBirth(dob)) {
            dobCheck = false;
            document.getElementById("DobCheckMessage").innerHTML = "&#x2716; Invalid date of birth.";
            document.getElementById("DobCheckMessage").style.color = "red";
            document.getElementById("DOB").style.borderColor = "red";
        } else {
            // Compare the DOB with today's date
            var dobDate = new Date(dob);
            var currentDate = new Date();

            if (dobDate > currentDate) {
                dobCheck = false;
                document.getElementById("DobCheckMessage").innerHTML = "&#x2716; DOB cannot be a future date.";
                document.getElementById("DobCheckMessage").style.color = "red";
                document.getElementById("DOB").style.borderColor = "red";
            } else {
                dobCheck = true;
                document.getElementById("DobCheckMessage").innerHTML = "&#x2714; Valid.";
                document.getElementById("DobCheckMessage").style.color = "green";
                document.getElementById("DOB").style.borderColor = "green";
            }
        }
    }
}

function validateDateOfBirth(dateString) {
    // Attempt to create a Date object from the provided string
    var dateObject = new Date(dateString);

    // Check if the created Date object is a valid date
    return Object.prototype.toString.call(dateObject) === "[object Date]" && !isNaN(dateObject.getTime());
}

function validatePassword() {
    // Password validation
    if(document.getElementById("Password").value == ""){
        passwordCheck = false;
        document.getElementById("PasswordCheckMessage").innerHTML = "&#x2716; Password field empty.";
        document.getElementById("PasswordCheckMessage").style.color = "red";
        document.getElementById("Password").style.borderColor = "red";
    }
    else if(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(document.getElementById("Password").value) == false){
        passwordCheck = false;
        document.getElementById("PasswordCheckMessage").innerHTML = "&#x2716; Password must contain atleast one digit,one sybol,upper case and lower case letter(minimum length:8).";
        document.getElementById("PasswordCheckMessage").style.color = "red";
        document.getElementById("Password").style.borderColor = "red";    
    }
    else{
        passwordCheck = true;
        document.getElementById("PasswordCheckMessage").innerHTML = "&#x2714; Valid";
        document.getElementById("PasswordCheckMessage").style.color = "green";
        document.getElementById("Password").style.borderColor = "green"; 
    }
}

function validateConfirmPassword() {
    // Confirm Password validation
    if(document.getElementById("CPassword").value == ""){
        cpasswordCheck = false;
        document.getElementById("CPasswordCheckMessage").innerHTML = "&#x2716; Password field empty."
        document.getElementById("CPasswordCheckMessage").style.color = "red";
        document.getElementById("CPassword").style.borderColor = "red";
    }
    else if(document.getElementById("Password").value != document.getElementById("CPassword").value){
        cpasswordCheck = false;
        document.getElementById("CPasswordCheckMessage").innerHTML = "&#x2716; Password mismatch."
        document.getElementById("CPasswordCheckMessage").style.color = "red";
        document.getElementById("CPassword").style.borderColor = "red";
    }
    else{
        cpasswordCheck = true;
        document.getElementById("CPasswordCheckMessage").innerHTML = "&#x2714; Valid"
        document.getElementById("CPasswordCheckMessage").style.color = "green";
        document.getElementById("CPassword").style.borderColor = "green";
    }
}

// Attach event listeners
document.getElementById("Name").addEventListener("input", validateName);
document.getElementById("Email").addEventListener("input", validateEmail);
document.getElementById("Mobile").addEventListener("input", validateMobile);
document.getElementById("DOB").addEventListener("input", validateDOB);
document.getElementById("Password").addEventListener("input", validatePassword);
document.getElementById("CPassword").addEventListener("input", validateConfirmPassword);

// Function for reset actions
function resetForm() {
    // Reset form logic
    document.getElementById("NameCheckMessage").innerHTML = "";
    document.getElementById("EmailCheckMessage").innerHTML = "";
    document.getElementById("MobileCheckMessage").innerHTML = "";
    document.getElementById("DobCheckMessage").innerHTML = "";
    document.getElementById("PasswordCheckMessage").innerHTML = ""; 
    document.getElementById("CPasswordCheckMessage").innerHTML = "";
    

    document.getElementById("Name").style.borderColor = "black";
    document.getElementById("Email").style.borderColor = "black";
    document.getElementById("Mobile").style.borderColor = "black";
    document.getElementById("DOB").style.borderColor = "black";
    document.getElementById("Password").style.borderColor = "black";
    document.getElementById("CPassword").style.borderColor = "black";
}