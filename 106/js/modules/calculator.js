var Calculator;
(function (Calculator) {
    class SimpleCalculator {
        constructor(number1Id, number2Id, outputId, addButtonId, subtractButtonId) {
            this.wireEvents = function (addButtonId, subtractButtonId) {
                document.getElementById(addButtonId).addEventListener('click', event => {
                    event.preventDefault();
                    this._output.innerHTML = this.add(parseInt(this._number1.value), parseInt(this._number2.value));
                });
                document.getElementById(subtractButtonId).addEventListener('click', event => {
                    event.preventDefault();
                    this._output.innerHTML = parseInt(this._number1.value) - parseInt(this._number2.value);
                });
            };
            this.add = function (num1, num2) {
                return num1 + num2;
            };
            this._number1 = document.getElementById(number1Id);
            this._number2 = document.getElementById(number2Id);
            this._output = document.getElementById(outputId);
            this.wireEvents(addButtonId, subtractButtonId);
        }
    }
    Calculator.SimpleCalculator = SimpleCalculator;
})(Calculator || (Calculator = {}));
window.onload = function () {
    const calculator = new Calculator.SimpleCalculator("number1", "number2", "output", "addButton", "subtractButton");
};
//# sourceMappingURL=calculator.js.map