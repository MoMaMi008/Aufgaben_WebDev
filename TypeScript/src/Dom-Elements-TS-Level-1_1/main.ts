const inputText = document.querySelector("#inputText") as HTMLInputElement;
const addBtn = document.querySelector("#addBtn") as HTMLInputElement;
const myList = document.querySelector("#myList") as HTMLElement;

const error = document.createElement("p");
error.textContent = "Bitte gib etwas in das Eingabefeld ein!";

addBtn.addEventListener("click", () => {
    if (inputText.value === "") {
        myList.prepend(error);
    } else {
        error.remove();
        const newItem = document.createElement("li");
        newItem.textContent = inputText.value.trim();
        myList.appendChild(newItem);
        inputText.value = "";
    }
});
