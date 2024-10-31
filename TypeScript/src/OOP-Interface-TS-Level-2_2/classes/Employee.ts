import IEmployee from "../contracts/IEmployee";

class Employee implements IEmployee {
    _name: string;
    _age: number;
    _position: string;
    _startDate: Date;

    constructor(name: string, age: number, position: string, startDate: Date) {
        this._name = name;
        this._age = age;
        this._position = position;
        this._startDate = startDate;
    }

    getYearsOfService(): number {
        const startYear: number = Number(this._startDate.getMilliseconds);
        const actualYear: number = Number(Date.now);
        return (actualYear - startYear) / 31536000000;
    }
}

export default Employee;
