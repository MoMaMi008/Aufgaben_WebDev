let antwort = document.createElement("p");
document.body.appendChild(antwort);

document.querySelector("#go").addEventListener("click", function () {
    let quali = parseInt(document.querySelector("#eingabe").value);


    // Hier wird der switch-Block auf true gesetzt, und die case -Anweisungen prüfen, ob der aktuelle Tag in den jeweiligen Arrays enthalten ist. ACHTUNG: quali muss Int sein, damit der vergleich im Array funktioniert.
    switch (true) {
        case [8, 9, 10].includes(quali):
            antwort.innerText = "Das Wetter ist super!"
            break;
        case [6, 7].includes(quali):
            antwort.innerText = "Das Wetter ist gut."
            break;
        case [3, 4, 5].includes(quali):
            antwort.innerText = "Das Wetter ist okay."
            break;
        case [0, 1, 2].includes(quali):
            antwort.innerText = "Das Wetter ist schlecht..."
        default:
            break;
    }
})