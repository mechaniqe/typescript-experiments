module CalculatorJQ {
    export class SimpleCalculator {
        private _number1: JQuery;
        private _number2: JQuery;
        private _output: JQuery;

        constructor (number1Id: string, number2Id: string, outputId: string, addButtonId: string, subtractButtonId: string) {
            this._number1 = $("#" + number1Id); 
            this._number2 = $("#" + number2Id);
            this._output = $("#" + outputId);

            this.wireEvents (addButtonId, subtractButtonId);
        }

        wireEvents (addButtonId: string, subtractButtonId: string) {
            $("#" + addButtonId).on ("click", event => {
                event.preventDefault ();

                const result = parseInt (this._number1.val ().toString ()) + parseInt (this._number2.val ().toString ());
                this._output.html (result.toString ());
            });
            $("#" + subtractButtonId).on ("click", event => {
                event.preventDefault ();

                const result = parseInt (this._number1.val ().toString ()) - parseInt (this._number2.val ().toString ());
                this._output.html (result.toString ());
            });
        }
    }
}

window.onload = function () {
    const calculator = new CalculatorJQ.SimpleCalculator ("number1", "number2", "output", "addButton", "subtractButton");
}