
const login = document.getElementById("login")
button.addEventListener("click",(e) => {
    const email = login.email.value;
    const password = Form.password.value;

    if (email ==="user" && password === "alpha"){
        alert("your email is user password is alpha")
        location.reload();
    }
})