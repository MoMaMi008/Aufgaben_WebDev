const plusMwst = document.querySelector("#plusMwSt") as HTMLInputElement;
const minusMwst = document.querySelector("#minusMwSt") as HTMLInputElement;
const mwst19 = document.querySelector("#MwSt19") as HTMLInputElement;
const mwst7 = document.querySelector("#MwSt7") as HTMLInputElement;
const betragInputLabel = document.querySelector("#betragInputLabel") as HTMLElement;
const betragInput = document.querySelector("#betragInput") as HTMLInputElement;
const fehlermeldung = document.querySelector("#fehlermeldung") as HTMLInputElement;
const berechnenBtn = document.querySelector("#berechnenBtn") as HTMLElement;
const mwstBetragOutput = document.querySelector("#mwstBetragOutput") as HTMLElement;
const betragOutputLabel = document.querySelector("#betragOutputLabel") as HTMLElement;
const betragOutput = document.querySelector("#betragOutput") as HTMLElement;

// Speichern der Funktion in einer Variablen
const berechnung = () => {
    if (betragInput.value.trim() === "") {
        fehlermeldung.innerHTML = "Bitte gib einen Wert ein!";
        // Prüfen, ob der User einen Wert in das Feld eingetragen hat
    } else {
        fehlermeldung.innerHTML = "";

        let betrag: number = Number(betragInput.value);
        let mehrwertsteuerbetrag: number;
        let ergebnis: number;
        firstUse = true;

        // MwSt-Satz in Abhängigkeit des ausgewählten Prozentsatzes
        if (mwst7?.checked) {
            mwst = Number(mwst7.value);
        } else {
            mwst = Number(mwst19.value);
        }

        // Rechenoperationen in Abhängigkeit der ausgewählten Berechnungsart
        if (minusMwst.checked) {
            mehrwertsteuerbetrag = Number(((betrag / (1 + mwst)) * mwst).toFixed(2));
            ergebnis = Number((betrag - (betrag / (1 + mwst)) * mwst).toFixed(2));
        } else {
            mehrwertsteuerbetrag = Number((betrag * mwst).toFixed(2));
            ergebnis = Number((betrag * (1 + mwst)).toFixed(2));
        }

        // Ausgabe der berechneten Werte
        mwstBetragOutput.innerHTML = `€ ${mehrwertsteuerbetrag}`;
        betragOutput.innerHTML = `€ ${ergebnis}`;
    }
};

// Vorbelegung der Radiobuttons, damit die Berechnung auf keinen Fehler läuft
plusMwst.checked = true;
mwst19.checked = true;
let mwst: number = Number(mwst19.value);

// Variable, um zu prüfen, ob der User die Berechnung das erste mal über den Button gestartet hat.
let firstUse: boolean = false;

berechnenBtn?.addEventListener("click", berechnung);

plusMwst.addEventListener("change", () => {
    betragInputLabel.innerHTML = "Nettobetrag (Preis ohne MwSt) in Euro<span>*</span>";
    betragOutputLabel.innerHTML = "Bruttobetrag";
    if (firstUse) {
        berechnung();
    }
});
minusMwst.addEventListener("change", () => {
    betragInputLabel.innerHTML = "Bruttobetrag (Preis mit MwSt) in Euro<span>*</span>";
    betragOutputLabel.innerHTML = "Nettobetrag";
    if (firstUse) {
        berechnung();
    }
});
mwst19.addEventListener("change", () => {
    if (firstUse) {
        berechnung();
    }
});
mwst7.addEventListener("change", () => {
    if (firstUse) {
        berechnung();
    }
});
