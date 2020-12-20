class Engine {
    horsepower: number;
    engineType: string;

    constructor (horsepower: number, engineType: string) {
        this.horsepower = horsepower;
        this.engineType = engineType;
    }
}

class Car {
    private _engine: Engine;

    constructor (engine: Engine) {
        this._engine = engine;
    }

    get engine (): Engine {
        return this._engine;
    }

    set engine (value: Engine) {
        if (value === undefined)
            throw "Error: value is undefined";

        this._engine = value;
    }
}

let engine = new Engine (1020, "V8");
let car = new Car (engine);
console.log ("Engine: " + car.engine.engineType);

engine.engineType = "V4";
console.log ("Engine: " + car.engine.engineType);