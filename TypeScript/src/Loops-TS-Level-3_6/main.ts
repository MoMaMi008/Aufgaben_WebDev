const Punkte: number[] = [];

for (let i = 0; i < 30; i++) {
    Punkte.push(Math.ceil(Math.random() * 100));
}

console.log(`Folgende Punkte wurden in der Arbeit erreicht:`, Punkte);

const durchschnittBerechnen = (arr: number[]) => {
    let addPunkte: number = 0;

    for (let i = 0; i < arr.length; i++) {
        addPunkte += arr[i];
    }

    const durchschnitt = addPunkte / arr.length;
    console.log(`Der Punktedurchschnitt liegt bei: ${durchschnitt} Punkten`);

    switch (true) {
        case durchschnitt < 50:
            console.log("Das Ergebnis ist Ungenügend.");
            break;
        case durchschnitt >= 50 && durchschnitt < 60:
            console.log("Das Ergebnis ist Mangelhaft");
            break;
        case durchschnitt >= 60 && durchschnitt < 70:
            console.log("Das Ergebnis ist Ausreichend");
            break;
        case durchschnitt >= 70 && durchschnitt < 80:
            console.log("Das Ergebnis ist Befriedigend");
            break;
        case durchschnitt >= 80 && durchschnitt < 90:
            console.log("Das Ergebnis ist Gut");
            break;
        case durchschnitt >= 90:
            console.log("Das Ergebnis ist Fanta Tastisch");
            break;
        default:
            console.log("Scheinbar ist in der switch-Anweisung etwas schiefgelaufen...");
            break;
    }
};

durchschnittBerechnen(Punkte);
