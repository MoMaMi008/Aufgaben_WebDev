let antwort = document.createElement("p");
document.body.appendChild(antwort);

document.querySelector("#check").addEventListener("click", function () {
    let alter = document.querySelector("#number").value;

    if (alter < 18) {
        antwort.innerText = "unter 18";
    } else {
        antwort.innerText = "freigabe"
    }
})