let email = document.getElementById("email");
let error= document.getElementById("error");
let password=document.getElementById("psw1");
let strengthBadge = document.getElementById('StrengthDisp')

let pass_err=document.getElementById("passerr");
let phone= document.getElementById("phone");
let phonerr=document.getElementById("phonerrr");

function validate()
{
    if (emailvalidate() && passwordval()&& phoneval())
    {

        return true;
    }
    else{
        return false;
    }
}

function phoneval()
{
    let regg=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regg.test(phone.value)!="1")
    {
       
    
        window.alert("Please enter a valid phone number :");
        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
}



// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))')

function passwordval(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => passwordval(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});


function emailvalidate()
{
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if(regexp.test(email.value))
    {
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML = "invalid";
        error.style.color ="red";
        return false;
    }
}

