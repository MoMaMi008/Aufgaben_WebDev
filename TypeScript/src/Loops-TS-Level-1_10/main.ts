const numArr: number[] = [];

// zufällige Befüllung des Arrays
for (let i = 0; i < 10; i++) {
    let num: number = Math.ceil(Math.random() * 100);
    numArr.push(num);
}

const getHighestNumber = (arr: number[]) => {
    let high: number = 0;
    let small: number = 100;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }

        if (arr[i] < small) {
            small = arr[i];
        }
    }
    console.log("Zufälliges Array: ", arr);
    console.log("Höchste Zahl im Array: ", high);
    console.log("Nedrigste Zahl im Array: ", small);
};

getHighestNumber(numArr);
