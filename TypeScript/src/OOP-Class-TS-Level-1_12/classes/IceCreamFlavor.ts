class IceCreamFlavor {
    _name: string;
    _price: number = 0;
    _isPopular: boolean = false;
    _description?: string = undefined;

    constructor(name: string, price: number, isPopular: boolean, description?: string) {
        this._name = name;
        this._price = price;
        this._isPopular = isPopular;
        this._description = description;
    }

    getTotalPrice(numberOfScoops: number) {
        console.log(`${numberOfScoops} Kugeln ${this._name} kosten ${numberOfScoops * this._price}.`);
    }

    printInfo() {
        let popularity: string = this._isPopular ? "popular" : "unpopular";
        console.log(`Flavor ${this._name} is ${popularity} and costs ${this._price} Euro.`);
    }

    getLenghtOfDescription() {
        if (this._description) {
            console.log(`Die länge der Beschreibung beträgt ${this._description.length} Zeichen.`);
        } else {
            console.log("Es ist keine Beschreibung verfügbar.");
        }
    }
}
export default IceCreamFlavor;
