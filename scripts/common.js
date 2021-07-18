callLoginModalTemplate();
callFooterTemplate();
callHeaderTemplate();
let username = document.getElementById("username");
let password = document.getElementById("inputPassword");

function callFooterTemplate() {
    let footerTemplate = '<div class="contact-us">' +
        '<button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#contactUsModal">Contact Us</button>' +
        '</div>' +

        '<div class="copyright">' +
        '<span>&#169; 2020 ROOM SEARCH PVT. LTD.</span>' +
        '</div>' +

        '<div class="social-media">' +
        '<span>' +
        '<a href="https://en-gb.facebook.com/login/" target="_blank">' +
        '<img src="assests/images/facebook.png">' +
        '</a>' +
        '</span>' +
        '<span>' +
        '<a href="https://www.instagram.com/accounts/login/" target="_blank">' +
        '<img src="assests/images/instagram.png">' +
        '</a>' +
        '</span>' +
        '<span>' +
        '<a href="https://twitter.com/LOGIN" target="_blank">' +
        '<img src="assests/images/twitter.png">' +
        '</a>' +
        '</span>' +
        '</div>';
    document.getElementById("footer").innerHTML = footerTemplate;
}

function callHeaderTemplate() {
    let headerTemplate = '<button type="button" id="loginHeader" class="btn btn-light btn-sm" data-toggle="modal" data-target="#staticBackdrop" style="display: flex;">LOGIN</button>' +
        '<button type="button" id="logoutHeader" class="btn btn-light btn-sm" style="display: none;" onclick="logoutFunc()">LOGOUT</button>';
    document.getElementById("h2").innerHTML = headerTemplate;
}

function callLoginModalTemplate() {
    let loginTemplate = `<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Please login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group row">
              <label for="username" class="col-sm-2 col-form-label">Username:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="username" required autocomplete="on" placeholder="Enter Username">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password:</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" required placeholder="Enter Password">
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer" style="display: flex; justify-content: center;">
          <button type="submit" class="btn btn-primary" onclick="loginModalFunc()">Login</button>
        </div>
      </div>
    </div>
  </div>`

    document.getElementById("loginModalDiv").innerHTML = loginTemplate;
}

function loginModalFunc() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    let x = document.getElementById("loginHeader");
    let y = document.getElementById("logoutHeader");
    if (localStorage.getItem("username") == "admin" && localStorage.getItem("password") == "admin") {
        window.alert("Successfully Loggedin");
        x.style.display = "none";
        y.style.display = "flex";
        document.getElementById("paybutton").disabled = false;
    }
    else {
        window.alert("Username and/or Password incorrect");
    }
}

function logoutFunc() {
    localStorage.clear();
    var x = document.getElementById("loginHeader");
    var y = document.getElementById("logoutHeader");
    x.style.display = "flex";
    y.style.display = "none";
    document.getElementById("paybutton").disabled = true;
}