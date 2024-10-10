const inputText = document.querySelector("#inputText") as HTMLInputElement;
const startBtn = document.querySelector("#startBtn") as HTMLInputElement;
const output = document.createElement("p");
document.body.appendChild(output);

startBtn.addEventListener("click", () => {
    let count: number = 0;
    const vokale: string[] = ["a", "e", "i", "o", "u"];
    const lowerStr: string = inputText.value.toLowerCase();

    for (let i = 0; i < inputText.value.length; i++) {
        if (vokale.includes(lowerStr[i])) {
            count += 1;
        }
    }
    output.textContent = `Anzahl der Vokale: ${count}`;
});
