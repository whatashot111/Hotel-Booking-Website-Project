window.addEventListener('load', (event) => {
    checkFunc();
});

function payFunc() {
    window.alert("Hi! Your booking is successful!!!")
}
function checkFunc() {
    let x = document.getElementById("loginHeader");
    let y = document.getElementById("logoutHeader");
    if (localStorage.getItem("username") == "admin" && localStorage.getItem("password") == "admin") {
        x.style.display = "none";
        y.style.display = "flex";
        document.getElementById("paybutton").disabled = false;
    }
}