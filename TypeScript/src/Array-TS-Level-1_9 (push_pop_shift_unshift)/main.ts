const numbers: number[] = [23, 54, 75];

console.log("Ausgangs-Array: ", numbers);

console.log(".push(24, 45, 92, 58, 93)");
numbers.push(24, 45, 92, 58, 93);
console.log(numbers);

console.log(".unshift(74, 38, 19, 76, 50)");
numbers.unshift(74, 38, 19, 76, 50);
console.log(numbers);

console.log("numbers.pop()");
numbers.pop();
console.log(numbers);

console.log("numbers.shift()");
numbers.shift();
console.log(numbers);
