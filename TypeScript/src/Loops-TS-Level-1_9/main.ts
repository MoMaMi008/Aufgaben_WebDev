const wordInput = document.querySelector("#wordInput") as HTMLInputElement;
const wordBtn = document.querySelector("#wordBtn") as HTMLInputElement;
const filterInput = document.querySelector("#filterInput") as HTMLInputElement;
const filterBtn = document.querySelector("#filterBtn") as HTMLInputElement;
const error = document.createElement("p");
const ausgabe = document.createElement("p");

let words: string[] = ["hallo", "Auto", "Waschmaschine", "Schrank", "Katze", "Beispiel", "Eltern", "Fenster", "Geburtstag", "Himmel", "schwimmen", "Zeitung"];

wordBtn.addEventListener("click", () => {
    if (isNaN(Number(wordInput.value))) {
        words.push(wordInput.value);
        wordInput.value = "";
        error.remove();
    } else {
        document.body.appendChild(error);
        error.textContent = "Es können nur Wörter hinzugefügt werden!";
    }
});

filterBtn.addEventListener("click", () => {
    if (!isNaN(Number(filterInput.value)) && filterInput.value !== "") {
        ausgabe.textContent = "";
        for (let i = 0; i < words.length; i++) {
            const element = words[i];
            if (element.length === Number(filterInput.value)) {
                ausgabe.textContent += element + " ";
            }
        }
        error.remove();
        document.body.appendChild(ausgabe);
        filterInput.value = "";
    } else {
        document.body.appendChild(error);
        error.textContent = "Bitte trage eine Zahl in das Filterfeld ein!";
    }
});
