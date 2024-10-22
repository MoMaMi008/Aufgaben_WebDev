const inputText = document.querySelector("#inputText") as HTMLInputElement;
const uppercaseBtn = document.querySelector("#uppercaseBtn") as HTMLButtonElement;
const spaceBtn = document.querySelector("#spaceBtn") as HTMLButtonElement;
const vocalsBtn = document.querySelector("#vocalsBtn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLElement;

const count = (input: string, ausdruck: RegExp): number => {
    const result = input.match(ausdruck);
    return result ? result.length : 0;
};

const createNewOutputElement = (number: number, target: string) => {
    output.replaceChildren("");
    const outputElement = document.createElement("p");
    outputElement.textContent = `Der eingegebene Text enthält ${number} ${target}.`;
    output.appendChild(outputElement);
};

uppercaseBtn.addEventListener("click", () => {
    createNewOutputElement(count(inputText.value, /[A-Z]/g), "Großbuchstaben");
});

spaceBtn.addEventListener("click", () => {
    createNewOutputElement(count(inputText.value, /[" "]/g), "Leerzeichen");
});

vocalsBtn.addEventListener("click", () => {
    createNewOutputElement(count(inputText.value, /[a,e,i,o,u]/gi), "Vokale");
});
