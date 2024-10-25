enum gender {
    male = "male",
    female = "female",
}

class Person {
    _name: string;
    private _birthday: Date;
    _gender: gender;

    get birthday() {
        return this._birthday;
    }

    constructor(name: string, birthday: Date, gender: gender) {
        this._name = name;
        this._birthday = birthday;
        this._gender = gender;
    }
}

export default Person;
