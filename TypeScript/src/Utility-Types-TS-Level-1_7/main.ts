import { Donkey } from "./enums/EDonkey";
import { IDonkey } from "./interfaces/IDonkey";

const donkeyRecord: Record<Donkey, IDonkey> = {
    [Donkey.Daisy]: { name: "Daisy", age: 5, fluffyness: 10, favoriteFood: "Carrots" },
    [Donkey.Gus]: { name: "Gus", age: 7, fluffyness: 8, favoriteFood: "Apples" },
    [Donkey.Rosie]: { name: "Rosie", age: 4, fluffyness: 9, favoriteFood: "Hay" },
    [Donkey.Coco]: { name: "Coco", age: 6, fluffyness: 7, favoriteFood: "Grass" },
    [Donkey.Jasper]: { name: "Jasper", age: 3, fluffyness: 6, favoriteFood: "Oats" },
};

console.log(donkeyRecord);
