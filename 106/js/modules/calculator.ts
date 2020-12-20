module Calculator {
    export class SimpleCalculator {
        private _number1: HTMLInputElement;
        private _number2: HTMLInputElement;
        private _output: HTMLSpanElement;

        constructor (number1Id: string, number2Id: string, outputId: string, addButtonId: string, subtractButtonId: string) {
            this._number1 = <HTMLInputElement> document.getElementById (number1Id);
            this._number2 = <HTMLInputElement> document.getElementById (number2Id);
            this._output = <HTMLSpanElement> document.getElementById (outputId);

            this.wireEvents (addButtonId, subtractButtonId);
        }

        wireEvents = function (addButtonId: string, subtractButtonId: string) {
            document.getElementById (addButtonId).addEventListener ('click', event => {
                event.preventDefault ();
                this._output.innerHTML = this.add (parseInt (this._number1.value), parseInt (this._number2.value));
            });
            document.getElementById (subtractButtonId).addEventListener ('click', event => {
                event.preventDefault ();
                this._output.innerHTML = parseInt (this._number1.value) - parseInt (this._number2.value);
            });
        }

        add = function (num1: number, num2: number) {
            return num1 + num2;
        }
    }
}

window.onload = function () {
    const calculator = new Calculator.SimpleCalculator ("number1", "number2", "output", "addButton", "subtractButton");
}