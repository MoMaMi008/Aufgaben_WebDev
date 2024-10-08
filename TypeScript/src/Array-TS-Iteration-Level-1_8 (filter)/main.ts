const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Festlegen der Funktionen für die Filterfunktion
const printEvenNumbers = (number: number): boolean => {
    return number % 2 === 0;
};

const printOddNumbers = (number: number): boolean => {
    return number % 2 !== 0;
};

// Lösung durch aufrufen der Filterfunktion mit einer vordefinierten Funktion (siehe oben)
const evenNumbers: number[] = zahlen.filter(printEvenNumbers);
console.log(evenNumbers);

const oddNumbers: number[] = zahlen.filter(printOddNumbers);
console.log(oddNumbers);

// Lösung durch Arrow-Funktion in der Filterfunktion
console.log(
    "Gerade zahlen: ",
    zahlen.filter((number) => {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    })
);

console.log(
    "Ungerade zahlen: ",
    zahlen.filter((number) => {
        if (number % 2 !== 0) {
            return true;
        } else {
            return false;
        }
    })
);
