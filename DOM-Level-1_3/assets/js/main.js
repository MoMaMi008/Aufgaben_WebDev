let gallery = document.querySelector("#gallery");
let counter = 1;
let x = 0;

document.addEventListener("DOMContentLoaded", function () {
    do {
        let neuesElement = document.createElement("figure");
        neuesElement.innerHTML = `<img src='assets/img/minimalism1.jpg'><figcaption>Fig. ${counter}</figcaption>`;
        gallery.appendChild(neuesElement);
        counter++;
        x++;
    } while (x < 3);
});