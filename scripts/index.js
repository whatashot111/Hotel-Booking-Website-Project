function showMoreCityCards() {
    var x = document.getElementById("2");
    var y = document.getElementById("buttontoview");
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.innerHTML = "View Less"
    }
    else if (x.style.display === "flex") {
        x.style.display = "none";
        y.innerHTML = "View More";
    }
}