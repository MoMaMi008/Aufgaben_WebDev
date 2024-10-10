const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;
const inputBtn = document.querySelector("#inputBtn") as HTMLInputElement;
const output = document.createElement("p");
document.body.appendChild(output);

inputBtn.addEventListener("click", () => {
    let anzahlO: string = "";
    for (let i = 0; i < Number(inputNumber.value); i++) {
        anzahlO += "o";
    }
    output.textContent = `L${anzahlO}p`;
});
