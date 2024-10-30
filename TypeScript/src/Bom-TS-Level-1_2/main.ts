const percent = document.querySelector("#percent") as HTMLDivElement;
const btn = document.querySelector("#btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
    const rgbString = getComputedStyle(document.body).backgroundColor;
    const rgbValues: number[] | undefined = rgbString.match(/\d+/g)?.map(Number);
    let red: number;
    let green: number;
    let blue: number;
    let counter: number = 100;

    if (rgbValues != undefined) {
        red = rgbValues[0];
        green = rgbValues[1];
        blue = rgbValues[2];
    } else {
        console.error("Fehler bei der Zuweisung der RGB-Werte");
    }

    const interval = window.setInterval(() => {
        if (counter > 0) {
            counter--;
            percent.textContent = `${counter}%`;
        } else {
            clearInterval(interval);
        }

        document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${counter / 100})`;
    }, 20); // = 0,02 Sekunden pro Durchlauf
});
