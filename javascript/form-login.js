function changeTypePass() {
    let password = document.getElementById('password');
    if (password.type == 'text') {
        password.type = 'password';
    } else {
        password.type = 'text';
    }
}
const account = document.getElementById('account');
const pass = document.getElementById('password');
const form = document.getElementById('form-login');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!account.value || !pass.value) {
        document.getElementById('none-info').style.display = "block";
    } else {
        document.getElementById('none-info').style.display = "none";
        var email = account.value;
        var password = pass.value;
        var user = localStorage.getItem(email);
        if (user != undefined && user != null) {
            var data = JSON.parse(user);
            if (email == data.email && password == data.password) {
                alert("Đăng nhập thành công");
                window.location.href = "main.html";
            }
            else {
                document.getElementById('error-info').style.display = "block";
            }
        }else{
            document.getElementById('error-info').style.display = "block";
        }

    }
});