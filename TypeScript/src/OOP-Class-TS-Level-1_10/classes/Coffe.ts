import CoffeTypes from "../enums/CoffeTypes";
import Beverage from "./Beverage";

class Coffe extends Beverage {
    _type: CoffeTypes;

    constructor(name: string, price: number, type: CoffeTypes) {
        super(name, price);
        this._type = type;
    }
}

export default Coffe;
