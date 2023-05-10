const password=document.querySelector('#password');
const confirmpassword=document.querySelector('#confirmpassword')
const errortext=document.querySelectorAll("#aerror");

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(password.value);
    if (password.value=="") {
        errortext.forEach(element=>{
            element.style.display="block"
        })
    } 
    else if(password.value!=confirmpassword.value) {
        errortext.forEach(element=>{
            element.style.display="block"})
    }
    else{
        errortext.forEach(element=>{
            element.style.display="none"});
    }

})