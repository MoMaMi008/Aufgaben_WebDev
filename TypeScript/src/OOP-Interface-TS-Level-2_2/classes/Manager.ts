import Employee from "./Employee";

class Manager extends Employee {
    private _assignedEmployees: Employee[] = [];

    constructor(name: string, age: number, startDate: Date) {
        super(name, age, "Manager", startDate);
    }

    addSubordinate(subordinate: Employee) {
        this._assignedEmployees.push(subordinate);
    }
}

export default Manager;
