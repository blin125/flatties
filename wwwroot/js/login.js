// document.addEventListener('DOMContentLoaded', function(){
//     const loginForm = document.getElementById('login-form');
//     const formBackground = document.getElementById('form-background');

//     function updateBackgroundPosition() {
//         const formShape = loginForm.getBoundingClientRect();
//         const formTop = formShape.top;
//         formBackground.style.top = `calc(5rem + ${formTop}px)`;
//     }
//     function handleResize() {
//         if(window.innerWidth < 1024){
//             window.addEventListener('scroll', updateBackgroundPosition);
//         } else {
//             window.removeEventListener('scroll', updateBackgroundPosition);
//         }
//     }
    
//     updateBackgroundPosition();
//     handleResize(); 
//     window.addEventListener('resize', handleResize);
// });
