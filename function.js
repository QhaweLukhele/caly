document.addEventListener("DOMContentLoaded", function () {
    const resultElement = document.querySelector(".result span");
    const buttons = document.querySelector(".buttons");

    let currentInput = "";

    function updateResult() {
        resultElement.textContent = currentInput;
    }

    buttons.addEventListener("click", function (event) {
        if (event.target.classList.contains("item")) {
            const buttonValue = event.target.textContent;

            if (buttonValue === "AC") {
                currentInput = "";
            } else if (buttonValue === "+/-") {
                currentInput = (parseFloat(currentInput) * -1).toString();
            } else if (buttonValue === "%") {
                currentInput = (parseFloat(currentInput) / 100).toString();
            } else if (buttonValue === "=") {
                try {
                    currentInput = evalWithMultiplication(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else {
                currentInput += buttonValue;
            }

            updateResult();
        }
    });
    function evalWithMultiplication(input) {
        
        const sanitizedInput = input.replace(/x/gi, '*');
        return eval(sanitizedInput);
    }
});
