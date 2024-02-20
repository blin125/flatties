var headingElement = document.querySelector('.heading');
if (headingElement) {
    headingElement.parentNode.removeChild(headingElement);
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
passwordIcon.className = 'fas fa-lock';
passwordInputContainer.insertBefore(passwordIcon, passwordInputContainer.firstChild);

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

var rememberForgot = document.createElement("div");
rememberForgot.classList.add("remember-forgot");
if (rememberMeDiv && passwordLabel && passwordInputContainer) {
    rememberForgot.appendChild(rememberMeDiv);
    rememberForgot.appendChild(passwordLabel);
    passwordInputContainer.insertAdjacentElement('afterend', rememberForgot);
}

var passwordInput = document.getElementById("password");
passwordInput.removeAttribute("aria-label");
passwordInput.removeAttribute("aria-required");

passwordInput.style.border = "none";
passwordInput.addEventListener("mouseover", function(event) {
    event.preventDefault();
});