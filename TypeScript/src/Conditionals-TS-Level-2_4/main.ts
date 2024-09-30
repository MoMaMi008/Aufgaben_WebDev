let x: number = Math.floor(Math.random() * 77);
let y: number = Math.floor(Math.random() * 77);

console.log(`Zahl 1: ${x}
Zahl 2: ${y}`);

if (x < y) {
    console.log("Die zweite Zahl ist größer als die erste.");
} else if (y < x) {
    console.log("Die erste zahl ist größer als die zweite.");
} else {
    console.log("Was für ein Zufall! Die beiden Zahlen sind gleichgroß.");
}
