import TeaTypes from "../enums/TeaTypes";
import Beverage from "./Beverage";

class Tea extends Beverage {
    _type: TeaTypes;

    constructor(name: string, price: number, type: TeaTypes) {
        super(name, price);
        this._type = type;
    }
}

export default Tea;
