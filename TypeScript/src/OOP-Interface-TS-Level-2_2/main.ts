import Manager from "./classes/Manager";
import Subordinate from "./classes/Subordinate";
import Trainee from "./classes/Trainee";

const sub1 = new Subordinate("Peter", 45, new Date(2000, 9, 16));
const sub2 = new Subordinate("Heinz", 37, new Date(2010, 4, 26));
const sub3 = new Subordinate("Klaudia", 21, new Date(2023, 11, 11));

const manager1 = new Manager("Egon", 53, new Date(2018, 5, 18));

const trainee1 = new Trainee("Anton", 16, new Date(2024, 8, 2));
const trainee2 = new Trainee("Isabella", 17, new Date(2023, 8, 1));

manager1.addSubordinate(sub1);
manager1.addSubordinate(sub2);
manager1.addSubordinate(sub3);
manager1.addSubordinate(trainee1);
manager1.addSubordinate(trainee2);

console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(trainee1);
console.log(trainee2);
console.log(manager1);
