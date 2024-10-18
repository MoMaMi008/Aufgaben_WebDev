const inputText = document.querySelector("#inputText") as HTMLInputElement;
const addBtn = document.querySelector("#addBtn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLElement;
const error = document.createElement("p");

const aufgabenArr: string[] = [];

addBtn.addEventListener("click", () => {
    if (inputText.value.trim() === "") {
        error.textContent = "Gib eine Aufgabe ein!";
        document.body.appendChild(error);
    } else {
        aufgabenArr.push(inputText.value.trim());
        output.replaceChildren("");
        console.log(aufgabenArr);

        aufgabenArr.forEach((aufgabe) => {
            const div = document.createElement("div");

            const eintrag = document.createElement("input");
            eintrag.setAttribute("type", "checkbox");
            eintrag.setAttribute("id", `${aufgabenArr.indexOf(aufgabe)}`);
            div.appendChild(eintrag);

            const label = document.createElement("label");
            label.textContent = aufgabe;
            label.setAttribute("for", `${aufgabenArr.indexOf(aufgabe)}`);
            div.appendChild(label);

            output.appendChild(div);
        });
    }
});
