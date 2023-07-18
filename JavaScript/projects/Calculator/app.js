let firstNumber = null;
let secondNumber = null;
let operator = null;

const calculatorScreen = document.querySelector(".form-control");

document.querySelectorAll(".btn-dark, .btn-secondary").forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            calculatorScreen.value = "";
            firstNumber = null;
            secondNumber = null;
            operator = null;
        } else if (value === "+/-") {
            if (calculatorScreen.value !== "") {
                calculatorScreen.value = -calculatorScreen.value;
            }
        } else if (value === "%") {
            if (calculatorScreen.value !== "") {
                calculatorScreen.value = calculatorScreen.value / 100;
            }
        } else if (value === "x" || value === "-" || value === "+" || value === ":") {
            operator = value;
            firstNumber = calculatorScreen.value;
            calculatorScreen.value = "";
        } else if (value === ",") {
            if (calculatorScreen.value === "") {
                calculatorScreen.value = "0.";
            } else if (!calculatorScreen.value.includes(".")) {
                calculatorScreen.value += ".";
            }
        } else if (value === "=") {
            secondNumber = calculatorScreen.value;
            calculatorScreen.value = calculate(firstNumber, secondNumber, operator);
            firstNumber = calculatorScreen.value;
            secondNumber = null;
            operator = null;
        } else {
            calculatorScreen.value += value;
        }
    });
});

function calculate(firstNumber, secondNumber, operator) {
    if (firstNumber !== null && secondNumber !== null && operator !== null) {
        switch (operator) {
            case "+":
                return parseFloat(firstNumber) + parseFloat(secondNumber);
            case "-":
                return parseFloat(firstNumber) - parseFloat(secondNumber);
            case "x":
                return parseFloat(firstNumber) * parseFloat(secondNumber);
            case ":":
                return parseFloat(firstNumber) / parseFloat(secondNumber);
        }
    } else {
        return "";
    }
}