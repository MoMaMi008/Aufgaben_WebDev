const calculateSum = (number: number): void => {
    let ergebnis: number = 0;
    for (let i = 1; i <= number; i++) {
        ergebnis += i;
    }
    console.log(ergebnis);
};

calculateSum(5);
