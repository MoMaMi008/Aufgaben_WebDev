import Car from "./classes/Car";
import Driver from "./classes/Driver";

const car_1 = new Car("mercedes", 1995, 180);
const car_2 = new Car("bmw", 1997, 190);
const car_3 = new Car("lada", 1986, 150);
const car_4 = new Car("ferrari", 2001, 260);

const driver_1 = new Driver("Larry", "Lobster", 35, car_2);
const driver_2 = new Driver("Hennry", "Kloß", 67, car_4);
const driver_3 = new Driver("Michael", "Schumacher", 55, car_1);
const driver_4 = new Driver("Frank", "Waldemar", 70, car_3);

driver_1.showDriver();
driver_2.showDriver();
driver_3.showDriver();
driver_4.showDriver();
