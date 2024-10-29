import Animal from "./classes/Animal";
import Enclosure from "./classes/Enclosure";
import AnimalTypes from "./enum/AnimalTypes";
import EnclosureType from "./enum/EnclosureType";

const animalTypeInput = document.querySelector("#animalTypeInput") as HTMLSelectElement;
const animalNameInput = document.querySelector("#animalNameInput") as HTMLInputElement;
const animalYearOfBirthInput = document.querySelector("#animalYearOfBirthInput") as HTMLInputElement;
const animalContinentInput = document.querySelector("#animalContinentInput") as HTMLSelectElement;
const animalEnclosureInput = document.querySelector("#animalEnclosureInput") as HTMLSelectElement;
const animalSpecialNeedsInput = document.querySelector("#animalSpecialNeedsInput") as HTMLInputElement;
const crateAnimalBtn = document.querySelector("#crateAnimalBtn") as HTMLButtonElement;

const allAnimals: Animal[] = [];
const AnimalTypesArr: [string, string][] = Object.entries(AnimalTypes);
export const allEnclosure: Enclosure[] = [];
const allContinents: string[] = ["Asien", "Europa", "Afrika", "Nordamerika", "Südamerika", "Australien", "Pazzifik", "Atlantik", "Anderer..."];

// Enclosure Objekte
const enclosure1 = new Enclosure(EnclosureType.SavannahHabitat, "Savannen Haus", 2005);
const enclosure2 = new Enclosure(EnclosureType.JungleHabitat, "Wilder Jungel", 2010);
const enclosure3 = new Enclosure(EnclosureType.AquaticHabitat, "Südsee Aquarium", 2015);
const enclosure4 = new Enclosure(EnclosureType.ReptileHouse, "Schuppen Kammer", 2000);

// Hinzufügen zur allEnclosure Liste
allEnclosure.push(enclosure1, enclosure2, enclosure3, enclosure4);

// Animal Objekte
const animal1 = new Animal(AnimalTypes.Lion, "Simba", 2012, "Afrika", "Keine", enclosure1._enclosureName);
const animal2 = new Animal(AnimalTypes.Elephant, "Dumbo", 2010, "Asien", "Arthritis", enclosure1._enclosureName);
const animal3 = new Animal(AnimalTypes.Bear, "Baloo", 2015, "Nordamerika", "Keine", enclosure2._enclosureName);
const animal4 = new Animal(AnimalTypes.Monkey, "George", 2018, "Südamerika", "Keine", enclosure2._enclosureName);
const animal5 = new Animal(AnimalTypes.Dolphin, "Flipper", 2016, "Pazifik", "Extra Raum", enclosure3._enclosureName);
const animal6 = new Animal(AnimalTypes.Shark, "Bruce", 2013, "Atlantik", "Keine", enclosure3._enclosureName);
const animal7 = new Animal(AnimalTypes.Snake, "Nagini", 2011, "Asien", "Wärmelampe", enclosure4._enclosureName);
const animal8 = new Animal(AnimalTypes.Turtle, "Leonardo", 2009, "Atlantik", "Spezialfutter", enclosure4._enclosureName);
const animal9 = new Animal(AnimalTypes.Eagle, "Freedom", 2014, "Nordamerika", "Flugbereich", enclosure2._enclosureName);
const animal10 = new Animal(AnimalTypes.Tiger, "Shere Khan", 2012, "Asien", "Keine", enclosure1._enclosureName);
const animal11 = new Animal(AnimalTypes.Panda, "Bao Bao", 2016, "Asien", "Bambus", enclosure2._enclosureName);
const animal12 = new Animal(AnimalTypes.Crocodile, "Snap", 2008, "Afrika", "Keine", enclosure4._enclosureName);
const animal13 = new Animal(AnimalTypes.Flamingo, "Pinkie", 2017, "Afrika", "Keine", enclosure3._enclosureName);
const animal14 = new Animal(AnimalTypes.Camel, "Humphrey", 2011, "Asien", "Keine", enclosure1._enclosureName);

// Hinzufügen zur allAnimals Liste
allAnimals.push(animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14);

console.log(allAnimals);
console.log(AnimalTypesArr);
console.log(allEnclosure);
console.log(allContinents);

//Befüllen des <select id="animalTypeInput"> beim aufrufen der Seite
AnimalTypesArr.forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = `AnimalTypes.${key}`;
    option.textContent = value;
    animalTypeInput.appendChild(option);
});

//Befüllen des <select id="animalContinentInput"> beim aufrufen der Seite
allContinents.forEach((continent) => {
    const option = document.createElement("option");
    option.value = continent;
    option.textContent = continent;
    animalContinentInput.appendChild(option);
});

allEnclosure.forEach((habitat) => {
    const option = document.createElement("option");
    option.value = option.textContent = animalEnclosureInput.appendChild(option);
});
