let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

// Change heading text
document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

// Change background color
document.getElementById("bgColorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});

// Increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});