import AnimalTypes from "../enum/AnimalTypes";

class Animal {
    _animalType: AnimalTypes;
    _animalName: string;
    _yearOfBirth: number;
    _continent: string;
    _specialNeeds: string;
    _enclosureName: string;
    _enclosureID: number = -1;
    _enclosureType: string = "";

    constructor(animalType: AnimalTypes, animalName: string, yaerOfBirth: number, continent: string, specialNeeds: string, enclosureName: string) {
        this._animalType = animalType;
        this._animalName = animalName;
        this._yearOfBirth = yaerOfBirth;
        this._continent = continent;
        this._specialNeeds = specialNeeds;
        this._enclosureName = enclosureName;
    }
}
export default Animal;
