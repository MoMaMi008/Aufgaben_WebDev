const checkBtn = document.querySelector("#check");
const antwort = document.createElement("p");
document.querySelector("#bundeslandInfoErgebnis")?.appendChild(antwort);

function infos() {
    const bundesland = document.querySelector("#bundesland") as HTMLInputElement;

    switch (bundesland?.value) {
        case "baden-württemberg":
            antwort.innerText = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "bayern":
            antwort.innerText = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "berlin":
            antwort.innerText = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "brandenburg":
            antwort.innerText = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "bremen":
            antwort.innerText = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "hamburg":
            antwort.innerText = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "hessen":
            antwort.innerText = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "mecklenburg-vorpommern":
            antwort.innerText = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "niedersachsen":
            antwort.innerText = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "nordrhein-westfalen":
            antwort.innerText = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "rheinland-pfalz":
            antwort.innerText = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "saarland":
            antwort.innerText = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "sachsen":
            antwort.innerText = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "sachsen-anhalt":
            antwort.innerText = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "schleswig-holstein":
            antwort.innerText = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "thüringen":
            antwort.innerText = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
            antwort.innerText = "Bitte wähle ein Bundesland aus!";
            break;
    }
}

checkBtn?.addEventListener("click", infos);
