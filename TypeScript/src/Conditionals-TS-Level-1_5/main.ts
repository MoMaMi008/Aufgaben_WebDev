let weekDayAsNumber: number;
let weekDayAsString: string | null;
const antwort = document.createElement("p");
document.body.appendChild(antwort);

weekDayAsString = window.prompt("Gib eine Zahl zwischen 1 und 7 ein!");
weekDayAsNumber = Number(weekDayAsString);

switch (weekDayAsNumber) {
    case 1:
        antwort.innerText = "Montag";
        break;
    case 2:
        antwort.innerText = "Dienstag";
        break;
    case 3:
        antwort.innerText = "Mittwoch";
        break;
    case 4:
        antwort.innerText = "Donnerstag";
        break;
    case 5:
        antwort.innerText = "Freitag";
        break;
    case 6:
        antwort.innerText = "Samstag";
        break;
    case 7:
        antwort.innerText = "Sonntag";
        break;
    default:
        antwort.innerText = "Der Eingegebene Wert liegt nicht im Bereich von 1 bis 7 oder ist keine Zahl.";
        break;
}
