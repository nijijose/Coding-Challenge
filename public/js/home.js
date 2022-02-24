let mail = document.getElementById("mail");
let error = document.getElementById("error");

function check(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(mail.value)){
        error.innerHTML = "";
        mail.style.border = "2px solid green";
        return true;
    }
    else{
        error.innerHTML = "Please enter a valid email id.";
        error.style.color = "red";
        mail.style.border = "2px solid red";
        return false;
    }   
}