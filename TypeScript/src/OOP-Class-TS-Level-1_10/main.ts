import Beverage from "./classes/Beverage";
import Coffe from "./classes/Coffe";
import Tea from "./classes/Tea";
import CoffeTypes from "./enums/CoffeTypes";
import TeaTypes from "./enums/TeaTypes";

const allBeveragesArr: Beverage[] = [];

const coffe1 = new Coffe("Dubble Cream Choco", 5.49, CoffeTypes.Americano);
const coffe2 = new Coffe("Pumpkin Spice Latte", 3.49, CoffeTypes.Latte);
const tea1 = new Tea("Black Tea", 2.99, TeaTypes.Black);
const tea2 = new Tea("Green Tea", 2.99, TeaTypes.Green);

allBeveragesArr.push(coffe1, coffe2, tea1, tea2);

console.log(allBeveragesArr);
