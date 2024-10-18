const button = document.querySelector("#button") as HTMLButtonElement;
const resetBtn = document.querySelector("#resetBtn") as HTMLButtonElement;
const output = document.querySelector(".output") as HTMLElement;

const startDiv = document.createElement("div");
startDiv.textContent = "0";
startDiv.classList.add("weiss", "rechteck");
output.appendChild(startDiv);

let counter: number = 1;

button.addEventListener("click", () => {
    const newItem = document.createElement("div");
    newItem.classList.add("rechteck");
    newItem.textContent = `${counter}`;
    output.appendChild(newItem);
    counter += 1;
});

resetBtn.addEventListener("click", () => {
    output.replaceChildren(startDiv);
    counter = 1;
});
