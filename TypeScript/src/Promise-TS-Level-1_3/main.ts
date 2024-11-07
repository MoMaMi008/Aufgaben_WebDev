const output = document.querySelector("#output") as HTMLParagraphElement;

function homework1() {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Aufgabe 1 erledigt.");
        }, 2000);
    });
}
function homework2() {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Aufgabe 2 erledigt.");
        }, 2000);
    });
}
function homework3() {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Aufgabe 3 erledigt.");
        }, 2000);
    });
}

homework1()
    .then((ergebnis) => {
        output.textContent = ergebnis;
    })
    .then(() => {
        return homework2();
    })
    .then((ergebnis) => {
        const p = document.createElement("p");
        p.textContent = ergebnis;
        document.body.appendChild(p);
    })
    .then(() => {
        return homework3();
    })
    .then((ergebnis) => {
        const p = document.createElement("p");
        p.textContent = ergebnis;
        document.body.appendChild(p);
    })
    .then(() => {
        const p = document.createElement("p");
        p.textContent = "Fertig!";
        document.body.appendChild(p);
    });
