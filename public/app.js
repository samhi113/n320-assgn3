const theButton = document.getElementById("theButton");
const domManSec = document.getElementById("domManSec");

console.log(theButton, domManSec)

var count = 0;

theButton.addEventListener("click", function() {
    count += 1;
    domManSec.innerHTML = `<p>You did the thing where the thing is did ${count} time(s)!</p>
    <p>Isn't that cool? When the user clicks the button, a function is called to manipulate the DOM and add text locally.</p>
    <p>Now check this out. <button id="betterButton">Click me too!</button></p>`;

    const betterButton = document.getElementById("betterButton");
    betterButton.addEventListener("click", function() {
        var img = document.createElement("img");
        img.setAttribute("src", "./img/wave.gif");
        domManSec.append(img);
    })
});