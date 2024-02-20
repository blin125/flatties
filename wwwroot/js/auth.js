document.addEventListener("DOMContentLoaded", function(){
    const showPassword = document.querySelectorAll(".toggle-password");
    showPassword.forEach(function(icon){
        icon.addEventListener("click", function(){
            const password= this.previousElementSibling;
            if(password.type == 'password'){
                password.type = 'text';
                this.classList.remove('fa-eye')
                this.classList.add('fa-eye-slash')
            }else{
                password.type = 'password';
                this.classList.add('fa-eye')
                this.classList.remove('fa-eye-slash')
            }
        }) 
    })
})