import Alien from "./classes/Alien";

const allAliensArr: Alien[] = [];

const alien1 = new Alien("Albert", "B4I78G", "Milchstraße", "Lila");
const alien2 = new Alien("Josie", "N93L5E", "Andromeda Galaxie", "Grün");
const alien3 = new Alien("Leo", "NJO9Z4", "Milchstraße", "Gelb");
const alien4 = new Alien("Paulina", "K12ER0", "Milchstraße", "Orange");

allAliensArr.push(alien1, alien2, alien3, alien4);

console.log(allAliensArr);
