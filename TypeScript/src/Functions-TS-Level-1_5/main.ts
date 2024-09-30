function multiplyAndDivide(x: number, y: number) {
    console.log(x * y);

    if (y === 0) {
        console.log("ACHTUNG: Eine Division durch 0 ist nicht lösbar!");
    } else {
        console.log(x / y);
    }
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);
