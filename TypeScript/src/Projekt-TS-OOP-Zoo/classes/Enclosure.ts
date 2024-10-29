import EnclosureType from "../enum/EnclosureType";

class Enclosure {
    private static _currentId: number = 0;
    _id: number;
    _enclosureType: EnclosureType;
    _enclosureName: string;
    _builtInYear: number;

    constructor(enclosureType: EnclosureType, enclosureName: string, builtInYear: number) {
        this._id = Enclosure._currentId++;
        this._enclosureType = enclosureType;
        this._enclosureName = enclosureName;
        this._builtInYear = builtInYear;
    }
}

export default Enclosure;
