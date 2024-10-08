let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const umrechnung = (arr: number[]) => {
    console.log(
        arr.map((deg) => {
            return ((deg - 32) / 1.8).toFixed(1); // .toFixed, weil ich der Meinung bin, dass Gradangaben mit einer Kommastelle sinnvoller sind
        })
    );
};

umrechnung(fahrenheit);
