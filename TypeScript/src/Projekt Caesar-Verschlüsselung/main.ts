const nachrichtInput = document.querySelector("#nachrichtInput") as HTMLInputElement;
const keyInput = document.querySelector("#keyInput") as HTMLInputElement;
const verschlüsselnBtn = document.querySelector("#verschlüsselnBtn") as HTMLButtonElement;
const entschlüsselnBtn = document.querySelector("#entschlüsselnBtn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLElement;

const verschlüsseln = (nachricht: string, verschiebung: number) => {
    output.replaceChildren("");
    const ausgabe = document.createElement("p");
    output.appendChild(ausgabe);

    const verschlüsselteNachricht: string = nachricht
        .split("")
        .map((zeichen) => {
            //Prüfung, ob es sich um einen Buchstaben handelt
            if (zeichen.match(/[a-z]/i)) {
                const uniCode: number = zeichen.charCodeAt(0);
                let verschobenerUniCode: number = uniCode;

                if (uniCode >= 65 && uniCode <= 90) {
                    //Großbuchstaben
                    verschobenerUniCode = ((uniCode - 65 + verschiebung) % 26) + 65;
                } else if (uniCode >= 97 && uniCode <= 122) {
                    //Kleinbuchstaben
                    verschobenerUniCode = ((uniCode - 97 + verschiebung) % 26) + 97;
                }
                return String.fromCharCode(verschobenerUniCode);
            } else {
                //wenn es kein Buchstabe ist
                return zeichen;
            }
        })
        .join("");

    ausgabe.textContent = verschlüsselteNachricht;
};

verschlüsselnBtn.addEventListener("click", () => {
    const originalNachricht = nachrichtInput.value;
    const verschiebung: number = Number(keyInput.value);

    verschlüsseln(originalNachricht, verschiebung);
});

entschlüsselnBtn.addEventListener("click", () => {
    const originalNachricht = nachrichtInput.value;
    const verschiebung: number = Number(keyInput.value);

    verschlüsseln(originalNachricht, -verschiebung);
});
