import Employee from "./Employee";

class Subordinate extends Employee {
    constructor(name: string, age: number, startDate: Date) {
        super(name, age, "Subordinate", startDate);
    }
}

export default Subordinate;
