const pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
const button = document.getElementById('btn');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');


function EmailCheck () {
    if(!emailInput.value.match(/^[^ ]+@[^ ]+.[a-z]{2,3}$/)) {
        emailInput.style.backgroundColor="hsl(4, 100%, 67%)";
        emailError.style.visibility="visible";
    }
    
    else{
        emailInput.style.backgroundColor="hsl(0, 0%, 100%)";
        emailError.style.visibility="hidden";
    }
}

button.addEventListener("click", function() {

const travel = `success.html?email=${inputValue}`;
location.href = travel;


});
