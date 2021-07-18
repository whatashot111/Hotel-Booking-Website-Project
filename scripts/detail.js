window.addEventListener('load', (event) => {
    checkFunc();
});

$(function () {
    var dates = $("#fromDate, #toDate").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        minDate: 0,
        onSelect: function (selectedDate) {
            if (this.id == 'fromDate') {
                var dateMin = $('#fromDate').datepicker("getDate");
                var rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(), dateMin.getDate() + 1); // Min Date = Selected + 1d
                $('#toDate').datepicker("option", "minDate", rMin);
            }
        }
    });
});

function totalCalc() {
    let z = document.getElementById("toDate").value;
    let y = document.getElementById("fromDate").value;
    let dateTo = parseInt(z.substr(3, 2));
    let dateFrom = parseInt(y.substr(3, 2));
    let toMonth = parseInt(z.substr(0, 2));
    let fromMonth = parseInt(y.substr(0, 2));
    const price = 1000;
    let x = parseInt(document.getElementById("adults").value);
    let amount;
    if (toMonth === fromMonth) {
        amount = "Rs. " + x * price * (dateTo - dateFrom);
    }
    else {
        let offsetFrom = offsetCalc(fromMonth);
        amount = "Rs. " + x * price * (offsetFrom - dateFrom + dateTo);
    }
    document.getElementById("total").setAttribute("value", amount);
}

function offsetCalc(n) {
    if ((n <= 7 && n % 2 != 0) || (n > 7 && n % 2 == 0)) return 31;
    else if (n === 2) return 28;
    else if ((n < 7 && n % 2 == 0) || (n > 7 && n % 2 != 0)) return 30;
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