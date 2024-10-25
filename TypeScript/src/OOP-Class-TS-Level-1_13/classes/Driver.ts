import Car from "./Car";

class Driver {
    _firstname: string;
    _lastname: string;
    _age: number;
    private _licenseFromYear: number;
    _car: Car;

    constructor(firstname: string, lastname: string, age: number, licenseFrmYear: number, car: Car) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this._licenseFromYear = licenseFrmYear;
        this._car = car;
    }

    get licenseFromYear() {
        return this._licenseFromYear;
    }

    showDriver(): void {
        console.log(this);
    }

    showCarType(): void {
        console.log(this._car._carType);
    }
}
export default Driver;
