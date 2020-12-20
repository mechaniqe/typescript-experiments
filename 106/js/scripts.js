class Engine {
    constructor(horsepower, engineType) {
        this.horsepower = horsepower;
        this.engineType = engineType;
    }
}
class Car {
    constructor(engine) {
        this._engine = engine;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value === undefined)
            throw "Error: value is undefined";
        this._engine = value;
    }
}
let engine = new Engine(1020, "V8");
let car = new Car(engine);
console.log("Engine: " + car.engine.engineType);
engine.engineType = "V4";
console.log("Engine: " + car.engine.engineType);
//# sourceMappingURL=scripts.js.map