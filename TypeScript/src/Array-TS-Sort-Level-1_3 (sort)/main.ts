let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

const aufsteigendSort = (a: number, b: number) => {
    return a - b;
};

const absteigendSort = (a: number, b: number) => {
    return b - a;
};

console.log(numArray1.sort(aufsteigendSort));
console.log(numArray1.sort(absteigendSort));
