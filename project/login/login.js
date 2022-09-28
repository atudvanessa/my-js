
const login = document.getElementById("login")
const Button = document.getElementById("Button");
Button.addEventListener("click",(e) => {
    const email = login.email.value;
    const password = form.password.value;

    if (email ==="user" && password === "alpha"){
        alert("your email is user password is alpha")
        location.reload();
    }
})