const getNumberText = (num: number) => {
    const numNames: string[] = ["One", "Two", "Three", "Four", "Five"];
    return numNames[num - 1];
};

const userInput = Math.ceil(Math.random() * 5);
console.log(userInput);

const numberText = getNumberText(userInput);
console.log(numberText);
