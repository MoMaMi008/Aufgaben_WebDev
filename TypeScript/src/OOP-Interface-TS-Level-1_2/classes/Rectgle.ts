import IShape from "../contracts/IShape";

class Rectangle implements IShape {
    _name: string;
    _color: string;
    _isRound: boolean = false;
    _width: number;
    _height: number;

    constructor(name: string, color: string, width: number, height: number) {
        this._name = name;
        this._color = color;
        this._width = width;
        this._height = height;
    }

    draw() {
        console.log("Drawing Rectangle");
    }
}

export default Rectangle;
