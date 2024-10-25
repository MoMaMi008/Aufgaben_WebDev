class Customer {
    private _name: string;
    private _email: string;
    private _address: string;
    private _postalCode: number;
    private _city: string;

    get name() {
        return this._name;
    }

    set name(value: string) {
        if (value.length <= 60) {
            this._name = value;
        } else {
            console.error("Name wurde nicht gespeichert, da der Name maximal 60 Zeichen lang sein darf. Bitte wähle einen kürzeren!");
        }
    }

    get email() {
        return this._email;
    }

    set email(value: string) {
        if (value.includes("@") && value.includes(".")) {
            this._email = value;
        } else {
            console.error("Email-Adresse wurde nicht gespeichrt, da sie weder ein @ noch einen . enthält. Bitte gib eine korrekte Email-Adresse ein!");
        }
    }

    get address() {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get postalCode() {
        return this._postalCode;
    }

    set postalCode(value: number) {
        if (value.toString().length === 4 && value >= 0 && value <= 99999) {
            this._postalCode = value;
        } else {
            console.error("Postleitzahl wurde nicht gespeichert, da sie nicht aus genau fünf Ziffern besteht. bitte gib eine korrekte Postleitzahl ein!");
        }
    }

    get city() {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }
}

export default Customer;
