const input = document.querySelector("#input") as HTMLInputElement;
const checkBtn = document.querySelector("#check") as HTMLInputElement;
const antwort = document.createElement("p");
document.body.appendChild(antwort);

function adult() {
    let ergebnis: string = Number(input.value) >= 18 ? "Volljährig" : "Minderwertig";
    antwort.innerText = ergebnis;
}

checkBtn?.addEventListener("click", adult);
