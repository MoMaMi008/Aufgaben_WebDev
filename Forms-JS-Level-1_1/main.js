let input = document.querySelector("#input");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    let wert = input.value;
    wert = wert * 2;
    let ergebnis = document.createElement("p");
    ergebnis.textContent = `Das Ergebnis lautet: ${wert}`;
    document.body.appendChild(ergebnis);
})

