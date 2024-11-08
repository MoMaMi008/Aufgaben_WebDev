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

// Code aus Aufgabe Promise-TS-Level-1_3
// homework1()
//     .then((ergebnis) => {
//         output.textContent = ergebnis;
//         return homework2();
//     })
//     .then((ergebnis) => {
//         const p = document.createElement("p");
//         p.textContent = ergebnis;
//         document.body.appendChild(p);
//         return homework3();
//     })
//     .then((ergebnis) => {
//         const p = document.createElement("p");
//         p.textContent = ergebnis;
//         document.body.appendChild(p);
//     })
//     .then(() => {
//         const p = document.createElement("p");
//         p.textContent = "Fertig!";
//         document.body.appendChild(p);
//     });

Promise.all([homework1(), homework2(), homework3()])
    .then((resp: [string, string, string]) => {
        resp.forEach((string) => {
            const p = document.createElement("p");
            p.textContent = string;
            document.body.appendChild(p);
        });

        output.remove();
    })
    .finally(() => {
        const p = document.createElement("p");
        p.textContent = "Homework done!";
        document.body.appendChild(p);
    });
