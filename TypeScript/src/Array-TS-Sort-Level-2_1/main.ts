const string1: string = "Sergio";
const string2: string = "Hannah";
const string3: string = "Regallager";
const string4: string = "Reliefpfeiler";
const string5: string = "Rentner";
const string6: string = "Ella mag alle Bohnen";
const string7: string = "han nesaH has ennaH";

const umdrehen = (string: string): string => {
    // Prüfung ob Leerzeichen vorhanden sind
    if (string.includes(" ")) {
        // Hilfsarray, um die einzelnen Wörter zu speichern und um damit weiterarbeiten zu können
        let arr: string[] = string.split(" ");

        // Für jedes Array-Element wird der Inhalt umgedreht
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("").reverse().join("");
        }

        // Das Hilfsarray wird wieder zusammengesetzt und zurückgegeben
        return arr.join(" ");
    } else {
        return string.split("").reverse().join("");
    }
};

console.log(umdrehen(string1));
console.log(umdrehen(string2));
console.log(umdrehen(string3));
console.log(umdrehen(string4));
console.log(umdrehen(string5));
console.log("Hier wurden die Buchstaben jedes Wortes umgestellt: ", umdrehen(string6));
console.log(umdrehen(string7));
