/* app.js
Jasper Jan Tan
301249471
Feb 2, 2023 */

// IIFE - Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started..");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons){
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?")){
                    event.preventDefault();
                    window.location.assign('/user-lists');
                }
            });
        }
    }





    window.addEventListener("load", Start);
})();   

//getting user input from contacts page.
/*function getDetails(){
    //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //for email validation

    var name = document.getElementById('userField').value;
    var email = document.getElementById('emailField').value;
    var inquiry = document.getElementById('inquiryField').value;    
}*/
