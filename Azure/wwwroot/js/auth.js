var headingElement = document.querySelector('.heading h1');
if (headingElement) {
    headingElement.textContent = 'FLATTIES';
}
else{
    var parentElement = document.querySelector('.panel-body');
    var headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    var titleElement = document.createElement('h1');
    titleElement.textContent = 'FLATTIES';
    headingDiv.appendChild(titleElement);
    var subtitleElement = document.createElement('h2');
    subtitleElement.textContent = 'Create your Account';
    headingDiv.appendChild(subtitleElement);
    parentElement.insertBefore(headingDiv, document.getElementById('api'));
}
var workingElement = document.querySelector('.working');
if (workingElement) {
    workingElement.parentNode.removeChild(workingElement);
}

var introElement = document.querySelector('.intro');
if (introElement) {
    introElement.parentNode.removeChild(introElement);
}
var introElement = document.querySelector('.divider');
if (introElement) {
    introElement.parentNode.removeChild(introElement);
}

var emailLabel = document.querySelector('label[for="email"]');
if (emailLabel) {
    emailLabel.parentNode.removeChild(emailLabel);
}

var passwordLabel = document.querySelector('label[for="password"]');
if (passwordLabel) {
    passwordLabel.parentNode.removeChild(passwordLabel);
}

var emailInputContainer = document.querySelector('.entry-item:first-child');
var emailIcon = document.createElement('i');
if(emailIcon && emailInputContainer){
    emailIcon.className = 'fas fa-user';
    emailInputContainer.insertBefore(emailIcon, emailInputContainer.firstChild);
}

var passwordInputContainer = document.querySelector('.entry-item:nth-child(2)');
var passwordIcon = document.createElement('i');
if(passwordIcon && passwordInputContainer){
    passwordIcon.className = 'fas fa-lock';
    passwordInputContainer.insertBefore(passwordIcon, passwordInputContainer.firstChild);
}

var rememberMeLabel = document.querySelector('.rememberMe label');
if (rememberMeLabel) {
    rememberMeLabel.textContent = 'Remember Me';
}

var forgotPassword = document.querySelector('.password-label');
var rememberMeDiv = document.querySelector('.rememberMe')
if(forgotPassword && rememberMeDiv){
    rememberMeDiv.insertAdjacentElement('afterend', forgotPassword);
}

var passwordLabel = document.querySelector('#forgotPassword');
if (passwordLabel) {
    passwordLabel.textContent = "Forgot Password?";
}

var createAccount = document.querySelector('#createAccount');
if(createAccount){
    createAccount.textContent = "Sign Up"
}

var rememberForgot = document.createElement("div");
rememberForgot.classList.add("remember-forgot");
if (rememberMeDiv && passwordLabel && passwordInputContainer) {
    rememberForgot.appendChild(rememberMeDiv);
    rememberForgot.appendChild(passwordLabel);
    passwordInputContainer.insertAdjacentElement('afterend', rememberForgot);
}

var passwordInput = document.getElementById("password");
if(passwordInput){
    const eyeIcon = document.createElement('i');
    eyeIcon.classList.add("fas", "fa-eye-slash", "toggle-password");
    eyeIcon.id = "toggle-password";
    passwordInput.insertAdjacentElement("afterend", eyeIcon);    
    passwordInput.style.border = "none";
    passwordInput.addEventListener("mouseover", function(event) {
        event.preventDefault();
    });
    eyeIcon.addEventListener("click", function(){
        const password= this.previousElementSibling;
        if (password.type === 'password') {
            password.type = 'text';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            password.type = 'password';
            this.classList.add('fa-eye-slash');
            this.classList.remove('fa-eye');
        }
    }) 
}

var helpLinks = document.querySelectorAll('.helpLink');
if(helpLinks){
    helpLinks.forEach(function(link) {
        link.parentNode.removeChild(link);
    });
}

const ulElement = document.querySelector("#attributeList > ul");
const liElements = Array.from(ulElement.querySelectorAll("li"));
const order = [
  "givenName_li",
  "surname_li",
  "displayName_li",
  "emailVerificationControl_li",
  "newPassword_li",
  "reenterPassword_li"
];
const liMap = {};
liElements.forEach(li => {
  const className = li.className.split(" ").find(cls => order.includes(cls));
  if (className) liMap[className] = li;
});
ulElement.innerHTML = "";
order.forEach(className => {
  if (liMap[className]) {
    ulElement.appendChild(liMap[className]);
  }
});

var newPasswordInput = document.getElementById("newPassword");
if (newPasswordInput) {
    const eyeIcon = document.createElement('i');
    eyeIcon.classList.add("fas", "fa-eye-slash", "toggle-password");
    eyeIcon.id = "toggle-new-password";
    newPasswordInput.parentNode.insertBefore(eyeIcon, newPasswordInput.nextSibling);

    newPasswordInput.style.border = "none";
    newPasswordInput.addEventListener("mouseover", function(event) {
        event.preventDefault();
    });

    eyeIcon.addEventListener("click", function(){
        const password = newPasswordInput;
        if (password.type === 'password') {
            password.type = 'text';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            password.type = 'password';
            this.classList.add('fa-eye-slash');
            this.classList.remove('fa-eye');
        }
    });
}