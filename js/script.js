function changeColor() {
    var color = document.getElementById("background-color").value;
    var background = document.getElementsByTagName("body")[0];

    background.style.backgroundColor = color;
}