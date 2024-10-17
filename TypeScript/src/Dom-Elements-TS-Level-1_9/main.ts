const farbauswahl = document.querySelector("#farbauswahl") as HTMLSelectElement;
const button = document.querySelector("#button") as HTMLInputElement;

button.addEventListener("click", () => {
    farbauswahl.remove(farbauswahl?.selectedIndex);
});
