const first=document.getElementById('first-name')
const last=document.getElementById('last-name')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('confirm-Password')
const submit=document.getElementById('submit')

submit.addEventListener('click',(e)=> {
   e.preventDefault();
    if(first.value !='' && last.value != '' && email.value != '' && password.value===confirmPassword.value){
        localStorage.setItem('first',first.value.trim());
        localStorage.setItem('last',last.value.trim());
        localStorage.setItem('email',email.value.trim());
        localStorage.setItem('password',password.value.trim());
        localStorage.setItem('confirm-Password',confirmPassword.value.trim());

              setTimeout(()=>{
            location.assign('login.html')
        },1000)
        
    }else {
        alert('Invalid password')            
    }
})
