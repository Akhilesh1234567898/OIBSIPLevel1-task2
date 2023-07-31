document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "0";
    let previousInput = null;
    let operator = null;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function clearDisplay() {
        currentInput = "0";
        previousInput = null;
        operator = null;
        updateDisplay();
    }

    function handleNumberClick(number) {
        if (currentInput === "0") {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    function handleOperatorClick(selectedOperator) {
        if (previousInput !== null) {
            evaluate();
        }
        previousInput = currentInput;
        currentInput = "0";
        operator = selectedOperator;
    }

    function evaluate() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case "+":
                currentInput = (num1 + num2).toString();
                break;
            case "-":
                currentInput = (num1 - num2).toString();
                break;
            case "*":
                currentInput = (num1 * num2).toString();
                break;
            case "/":
                currentInput = (num1 / num2).toString();
                break;
        }

        previousInput = null;
        operator = null;
        updateDisplay();
    }

    const numberButtons = document.querySelectorAll(".number");
    numberButtons.forEach(button => {
        button.addEventListener("click", function() {
            handleNumberClick(button.textContent);
        });
    });

    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => {
        button.addEventListener("click", function() {
            handleOperatorClick(button.textContent);
        });
    });

    document.querySelector(".equal").addEventListener("click", evaluate);
    document.querySelector(".clear").addEventListener("click", clearDisplay);
});
