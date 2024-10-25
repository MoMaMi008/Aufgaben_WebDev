import Car from "./classes/Car";
import Driver from "./classes/Driver";
import CarType from "./enums/CarType";

const car_1 = new Car("mercedes", 1995, 180, CarType.Convertible);
const car_2 = new Car("bmw", 1997, 190, CarType.Coupe);
const car_3 = new Car("lada", 1986, 150, CarType.Hatchback);
const car_4 = new Car("ferrari", 2001, 260, CarType.Coupe);

const driver_1 = new Driver("Larry", "Lobster", 35, 2007, car_2);
const driver_2 = new Driver("Hennry", "Kloß", 67, 1977, car_4);
const driver_3 = new Driver("Michael", "Schumacher", 55, 1987, car_1);
const driver_4 = new Driver("Frank", "Waldemar", 70, 1976, car_3);

driver_1.showDriver();
driver_2.showDriver();
driver_3.showDriver();
driver_4.showDriver();
