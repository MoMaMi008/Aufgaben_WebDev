const numArr1: number[] = [3, 1, 4, 5, 2];
const numArr2: number[] = [8, 6, 9, 7, 10];
const NumArr3: number[] = [3784, 898, 4939, 237, 8345];

function processData(numberArr: number[], callback1: (param: number[]) => number[], callback2: (param: number[]) => number[]) {
    console.log("Ausgangs Array: ", numberArr);

    const processedArr: number[] = callback2(callback1(numberArr));
    const map = new Map<number, string>();

    for (let i = 0; i < processedArr.length; i++) {
        map.set(processedArr[i], processedArr[i].toString(16));
    }

    console.log(map);
}

function sortDesc(numberArr: number[]): number[] {
    const modifiedArr: number[] = numberArr.sort((a: number, b: number) => b - a);
    console.log("Absteigend sortiertes Array: ", modifiedArr);
    return modifiedArr;
}

function multiplyNumbers(numberArr: number[]): number[] {
    const modifiedArr: number[] = numberArr.map((number) => {
        return number * 2;
    });
    return modifiedArr;
}

processData(numArr1, sortDesc, multiplyNumbers);
console.log("");
processData(numArr2, sortDesc, multiplyNumbers);
console.log("");
processData(NumArr3, sortDesc, multiplyNumbers);
