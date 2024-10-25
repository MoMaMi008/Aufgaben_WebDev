import CarType from "../enums/CarType";

class Car {
    _brand: string;
    private _constructionYear: number;
    _maxSpeed: number;
    _carType: CarType;

    constructor(brand: string, constructionYear: number, maxSpeed: number, carType: CarType) {
        this._brand = brand;
        this._constructionYear = constructionYear;
        this._maxSpeed = maxSpeed;
        this._carType = carType;
    }

    get constructionYear() {
        return this._constructionYear;
    }

    speedInfo() {
        if (this._maxSpeed <= 40) {
            console.log("Driving slowly");
        } else if (this._maxSpeed >= 41 && this._maxSpeed <= 70) {
            console.log("Driving normally");
        } else if (this._maxSpeed >= 71 && this._maxSpeed <= 120) {
            console.log("Driving fast");
        } else if (this._maxSpeed >= 121 && this._maxSpeed <= 190) {
            console.log("Driving really fast");
        } else {
            console.log("WTF?!");
        }
    }
}
export default Car;
