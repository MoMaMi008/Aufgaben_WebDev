const senden = document.querySelector("#senden");
const antwort = document.createElement("p");
document.body.appendChild(antwort);

function weather() {
    const quality = document.querySelector("#input") as HTMLInputElement;

    if (isNaN(Number(quality.value))) {
        antwort.innerText = "Eingabe ist keine Zahl! Bitte gib eine Zahl zwischen 1 und 10 ein.";
    } else if (Number(quality.value) > 10) {
        antwort.innerText = "Wert ist zu groß! Bitte gib einen Wert zwischen 1 und 10 ein.";
    } else if (8 <= Number(quality.value) && Number(quality.value) <= 10) {
        antwort.innerText = "Wetterqualität ist super!";
    } else if (Number(quality.value) === 6 || Number(quality.value) === 7) {
        antwort.innerText = "Die Wetterqualität ist gut.";
    } else if (Number(quality.value) >= 3 && Number(quality.value) <= 5) {
        antwort.innerText = "Die Wetterqualität ist okay.";
    } else if (Number(quality.value) <= 2 && Number(quality.value) >= 0) {
        antwort.innerText = "Die Wetterqualität ist schlecht...";
    }
}

senden?.addEventListener("click", weather);
