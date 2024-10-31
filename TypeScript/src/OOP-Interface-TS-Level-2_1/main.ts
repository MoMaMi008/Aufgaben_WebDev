import Manager from "./classes/Manager";
import Subordinate from "./classes/Subordinate";

const sub1 = new Subordinate("Peter", 45, "worker");
const sub2 = new Subordinate("Heinz", 37, "worker");
const sub3 = new Subordinate("Klaudia", 21, "worker");

const manager1 = new Manager("Egon", 53, "BOSS");

manager1.addSubordinate(sub1);
manager1.addSubordinate(sub2);
manager1.addSubordinate(sub3);

console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(manager1);
