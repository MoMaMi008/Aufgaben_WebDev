const example_Elements = document.querySelectorAll(".example");
const button = document.querySelector("button");

let schalter: boolean = false;

const changeColor = (element: NodeListOf<Element>) => {
    if (schalter === false) {
        for (let i = 0; i < element.length; i++) {
            const htmlElement = element[i] as HTMLElement;
            htmlElement.style.backgroundColor = "orange";
        }
        schalter = true;
    } else {
        for (let i = 0; i < element.length; i++) {
            const htmlElement = element[i] as HTMLElement;
            htmlElement.style.backgroundColor = "revert-layer"; // "revert-layer" setzt den Wert auf dem im User-Stylesheet zurück
            schalter = false;
        }
    }
};

button?.addEventListener("click", () => {
    changeColor(example_Elements);
});
