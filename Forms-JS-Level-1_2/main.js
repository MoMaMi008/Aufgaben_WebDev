let aktuellesDatum = new Date();
let history = document.querySelector("#history");

document.querySelector("button").addEventListener("click", function () {
    let eingabe = parseInt(document.querySelector("input").value);
    let alter = aktuellesDatum.getFullYear() - eingabe;
    let antwort = document.createElement("p");
    antwort.innerText = `Du bist ${alter} Jahre alt.`
    document.history.appendChild(antwort);
})
