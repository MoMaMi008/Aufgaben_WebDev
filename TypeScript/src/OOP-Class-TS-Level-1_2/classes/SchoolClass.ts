class SchoolClass {
    _id: string;
    _name: string;
    _endDate?: number;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;

        console.log("School class creation successful!");
    }
}
export default SchoolClass;
