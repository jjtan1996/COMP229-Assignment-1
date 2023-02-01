// IIFE - Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started..");
    }

    window.addEventListener("load", Start);
})()   

function getDetails(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //for email validation

    var name = document.getElementById('userField').value;
    var email = document.getElementById('emailField').value;
    var inquiry = document.getElementById('inquiryField').value;    
}
