import Car from "./Car";

class Driver {
    _firstname: string;
    _lastname: string;
    _age: number;
    _car: Car;

    constructor(firstname: string, lastname: string, age: number, car: Car) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this._car = car;
    }

    showDriver(): void {
        console.log(this);
    }
}
export default Driver;
