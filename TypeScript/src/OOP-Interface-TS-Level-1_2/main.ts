import Circle from "./classes/Circle";

const circleArr: Circle[] = [];

for (let i = 1; i < 4; i++) {
    const circle = new Circle(`circle${i}`, `color${i}`, i);
    circleArr.push(circle);
}

console.log(circleArr);
