let antwort = document.createElement("p");
document.body.appendChild(antwort);

document.querySelector("#berechnen").addEventListener("click", function () {
    let alter1 = document.querySelector("#alter1").value;
    let alter2 = document.querySelector("#alter2").value;
    let ergebnis;

    if (alter1 < alter2) {
        ergebnis = alter2 - alter1;
    } else {
        ergebnis = alter1 - alter2;
    }

    antwort.innerText = `Der Altersunterschied beträgt ${ergebnis} Jahre.`
})
