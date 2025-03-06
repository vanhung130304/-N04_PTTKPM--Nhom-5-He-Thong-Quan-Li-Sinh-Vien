function changeTypePass(){
    let password = document.getElementById('password');
    if(password.type == 'text'){
        password.type = 'password';
    }else{
        password.type = 'text';
    }
}
function changeTypePass_2(){
    let password = document.getElementById('re-password');
    if(password.type == 'text'){
        password.type = 'password';
    }else{
        password.type = 'text';
    }
}
const account=document.getElementById('account');
const pass=document.getElementById('password');
const re_pass=document.getElementById('re-password');
const form=document.getElementById('form-resigter');
form.addEventListener("submit",function(e){
    e.preventDefault();
    if(!account.value || !pass.value || !re_pass.value){
        document.getElementById('none-info').style.display="block";
    }else{
        document.getElementById('none-info').style.display="none";
        if(pass.value!=re_pass.value){
            document.getElementById('error-re-pass').style.display="block";
        }else{
            document.getElementById('error-re-pass').style.display="none";
            var email =account.value;
            var password =pass.value;
            var user={
            email : email,
            password : password,
            };
            var Json= JSON.stringify(user);
            localStorage.setItem(email,Json);
            alert("Đăng kí thành công");
            window.location.href="Login.html";
        }
    }
});