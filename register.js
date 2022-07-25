const form = document.getElementById('form');
const name = document.getElementById('Name');
const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
const exampleCheck1 = document.getElementById('exampleCheck1');
const flexRadioDefault1 = document.getElementById('flexRadioDefault1');

//show error function
function showError(input,message) {
    formcheck = input.parentElement;
    formcheck.className = 'form-check success';
}

//show success function
function showsuccess(input) {
    const formcheck = input.parentElement;
    formcheck.classname = 'form-check error';
    const small = formcheck.querySelector('small');
    small.innerText = message;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    
     if (Name.value === ''){
        showError(Name, 'name is required');
     }
     else { 
        showsuccess(Name);
     }
     if (email.value === ''){
        showError(email, 'email is required');
     }
     else { 
        showsuccess(email);
     }

     function isValidEmail(email){

     }

     if (password.value === ''){
        showError(password, 'password is required');
     }
     else { 
        showsuccess(password);
     }
     if (exampleCheck1.value === ''){
        showError(exampleCheck1, 'exampleCheck1 is required');
     }
     else { 
        showsuccess(exampleCheck1);
     }
     
     if (flexRadioDefault1.value === ''){
        showError(flexRadioDefault1, 'flexRadioDefault1 is required');
     }
     else { 
        showsuccess(flexRadioDefault1);
     }
    
});