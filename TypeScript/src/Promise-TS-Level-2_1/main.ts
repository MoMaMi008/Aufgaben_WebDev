function getNumbers() {
    return new Promise<number[]>((resolve, reject) => {
        const numberArr: number[] = [];

        while (numberArr.length < 3) {
            const randomNum: number = Math.ceil(Math.random() * 130);
            numberArr.push(randomNum);
        }

        numberArr.forEach((number) => {
            if (number > 100) {
                reject("Eine zahl ist größer als 100!");
            } else {
                resolve(numberArr);
            }
        });
    });
}

getNumbers()
    .then((arr: number[]) => {
        console.log(arr);
        return arr;
    })
    .then((arr: number[]) => {
        const modifiedArr: number[] = arr.map((number) => {
            return number + 7;
        });
        console.log(modifiedArr);
        return modifiedArr;
    })
    .then((arr: number[]) => {
        const modifiedArr: number[] = arr.map((number) => {
            return number * 2;
        });
        console.log(modifiedArr);
        return modifiedArr;
    })
    .then((arr: number[]) => {
        const modifiedArr = arr.map((number) => {
            return number - 1;
        });
        console.log(modifiedArr);
        return modifiedArr;
    })
    .then((arr: number[]) => {
        const modiefiedArr: number[] = arr.map((number) => {
            return number % 2;
        });
        console.log(modiefiedArr);
        return modiefiedArr;
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Finish!");
    });
