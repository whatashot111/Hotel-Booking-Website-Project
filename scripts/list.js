window.addEventListener('load', (event) => {
    checkFunc();
});

function myFunction() {
    var x = document.getElementById("map-view");
    var y = document.getElementById("list-view");

    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none";
    }

}

function myFunction1() {
    var x = document.getElementById("list-view");
    var y = document.getElementById("map-view");

    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none";
    }

}
function checkFunc() {
    let x = document.getElementById("loginHeader");
    let y = document.getElementById("logoutHeader");
    if (localStorage.getItem("username") == "admin" && localStorage.getItem("password") == "admin") {
        x.style.display = "none";
        y.style.display = "flex";
        document.getElementById("paybutton").disabled = false;
    }
    else {
        y.style.display = "none";
        x.style.display = "flex";
    }
}