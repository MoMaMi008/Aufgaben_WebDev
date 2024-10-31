import IShape from "../contracts/IShape";

class Circle implements IShape {
    _name: string;
    _color: string;
    _radius: number;

    constructor(name: string, color: string, radius: number) {
        this._name = name;
        this._color = color;
        this._radius = radius;
    }

    draw() {
        console.log("Drawing Circle");
    }
}

export default Circle;
