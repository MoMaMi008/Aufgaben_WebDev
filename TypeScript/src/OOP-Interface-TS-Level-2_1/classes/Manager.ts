import IEmployee from "../contracts/IEmployee";

class Manager implements IEmployee {
    _name: string;
    _age: number;
    _position: string;
    private _assignedEmployees: IEmployee[] = [];

    constructor(name: string, age: number, position: string) {
        this._name = name;
        this._age = age;
        this._position = position;
    }

    addSubordinate(subordinate: IEmployee) {
        this._assignedEmployees.push(subordinate);
    }
}

export default Manager;
