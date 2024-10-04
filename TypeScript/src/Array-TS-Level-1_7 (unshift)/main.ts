const testArr: string[] = ["London", "Paris", "New York"];
const testArr2: string[] = [...testArr];
const testArr3: string[] = [...testArr];
const testArr4: string[] = [...testArr];
const testArr5: string[] = [...testArr];

console.log("der ursprüngliche Array: ", testArr);
console.log("--------------------");

testArr2.push("Istanbul", "Shanghai");
console.log("Array nach der funktion .push('Istanbul', 'Shanghai'): ", testArr2);
console.log("--------------------");

console.log("entfernt wurde: " + testArr3.pop());
console.log("Array nach der funktion .pop(): ", testArr3);
console.log("--------------------");

console.log("entfernt wurde: ", testArr4.shift());
console.log("Array nach der funktion .shift()", testArr4);
console.log("--------------------");

console.log("Array nach der funktion .unshift('Istanbul', 'Shanghai'): ", testArr5);
