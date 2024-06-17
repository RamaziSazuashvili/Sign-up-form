const button  = document.querySelector('.btn');
const container = document.querySelector('.container')
const imageContainer = document.querySelector('image-container')
const main = document.querySelector('main')
const formWrap = document.querySelector('form-wrap')
const emailInput = document.querySelector('#email')
const yourmail = document.querySelector('yourmail')
const emailError = document.querySelector('#email-error')
const success = document.querySelector('.success-state')



form.addEventListener('submit', e =>{
    e.preventDefault();

   const emailValue = emailInput.value.trim();
   if(!isValidEmail(emailValue)){
        emailError.textContent = 'Valid email required'
        emailInput.classList.add('failure')
}  

    else{
        formWrapper.classList.add('hidden')
        pictureContainer.classList.add('hidden')
        success.classList.remove('hidden')
        main.classList.add('main-success')
        yourmail.textContent = emailValue;
    }
})


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 
