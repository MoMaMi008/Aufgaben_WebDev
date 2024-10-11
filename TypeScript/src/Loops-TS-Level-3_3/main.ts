const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const inputBtn = document.querySelector("#inputBtn") as HTMLInputElement;
const output = document.createElement("p");
document.body.appendChild(output);

inputBtn.addEventListener("click", () => {
    let anzahlO: string = "";
    if (Number(inputNumber.value) === 0) {
        output.textContent = `Bitte gib eine Zahl größer 0 ein.`;
    } else if (Number(inputNumber.value) % 2 === 0) {
        for (let i = 0; i < Number(inputNumber.value); i++) {
            anzahlO += "o";
        }
        output.textContent = `L${anzahlO}p`;
    } else {
        for (let i = 0; i < Number(inputNumber.value); i++) {
            if (i % 2 === 0) {
                anzahlO += "o";
            } else {
                anzahlO += "O";
            }
        }
        output.textContent = `L${anzahlO}p`;
    }
});
