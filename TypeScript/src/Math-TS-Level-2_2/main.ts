const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const ratenBtn = document.querySelector("#ratenBtn") as HTMLInputElement;
const neuBtn = document.querySelector("#neuBtn") as HTMLInputElement;
const output = document.querySelector("#output") as HTMLElement;

let randomNum: number = Math.ceil(Math.random() * 10);
let versuch: number = 0;

const counter = document.createElement("p");
output.appendChild(counter);

const antwort = document.createElement("p");
output.appendChild(antwort);

ratenBtn.addEventListener("click", () => {
    if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 1) {
        antwort.textContent = "Deine Eingegebene Zahl entspricht nicht den Voraussetzungen. Bitte wähle eine andere zwischen 1 und 10.";
    } else {
        versuch += 1;

        if (Number(inputNumber.value) === randomNum) {
            counter.textContent = `Benötigte Versuche: ${versuch}`;
            antwort.textContent = "Glückwunsch, du hast die richtige Zahl erraten!";
            ratenBtn.disabled = true;
        } else if (Number(inputNumber.value) > randomNum) {
            counter.textContent = `Benötigte Versuche: ${versuch}`;
            antwort.textContent = "Deine eingegebene zahl ist zu groß.";
        } else {
            counter.textContent = `Benötigte Versuche: ${versuch}`;
            antwort.innerText = "Deine eingegebene Zahl ist zu klein.";
        }
    }
});

neuBtn.addEventListener("click", () => {
    randomNum = Math.ceil(Math.random() * 10);
    ratenBtn.disabled = false;
    versuch = 0;
    counter.textContent = `Benötigte Versuche: ${versuch}`;
    antwort.textContent = "";
    inputNumber.value = "";
});
