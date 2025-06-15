const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function handleRegisterSuccess() {
    alert("Đăng ký thành công!");
    setTimeout(() => {
        window.location.href = "LoginBWD.html";
    }, 1000);
}

function handleLoginSuccess() {
    alert("Đăng nhập thành công!");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}
