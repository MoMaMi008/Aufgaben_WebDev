import Person from "./Person";

class SchoolClass {
    _id: string;
    _name: string;
    _endDate?: number;
    _persons: object[] = [];

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;

        console.log("School class creation successful!");
    }

    addPerson(person: Person): void {
        this._persons.push(person);
    }

    showPersons(): void {
        console.log(`In "${this._name}" sind  folgende Personen: `, this._persons);
    }
}
export default SchoolClass;
