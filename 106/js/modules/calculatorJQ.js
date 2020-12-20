var CalculatorJQ;
(function (CalculatorJQ) {
    class SimpleCalculator {
        constructor(number1Id, number2Id, outputId, addButtonId, subtractButtonId) {
            this._number1 = $("#" + number1Id);
            this._number2 = $("#" + number2Id);
            this._output = $("#" + outputId);
            this.wireEvents(addButtonId, subtractButtonId);
        }
        wireEvents(addButtonId, subtractButtonId) {
            $("#" + addButtonId).on("click", event => {
                event.preventDefault();
                const result = parseInt(this._number1.val().toString()) + parseInt(this._number2.val().toString());
                this._output.html(result.toString());
            });
            $("#" + subtractButtonId).on("click", event => {
                event.preventDefault();
                const result = parseInt(this._number1.val().toString()) - parseInt(this._number2.val().toString());
                this._output.html(result.toString());
            });
        }
    }
    CalculatorJQ.SimpleCalculator = SimpleCalculator;
})(CalculatorJQ || (CalculatorJQ = {}));
window.onload = function () {
    const calculator = new CalculatorJQ.SimpleCalculator("number1", "number2", "output", "addButton", "subtractButton");
};
//# sourceMappingURL=calculatorJQ.js.map