function power() {
    var x = document.getElementById("display-content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // Declare variables to store the first number, second number, and operator
let firstNumber = null;
let secondNumber = null;
let operator = null;

// 2.Create a function to update the display with the current number
function updateDisplay(number) {
  const resultDisplay = document.getElementById("given-numbers");
  console.log(resultDisplay);
  resultDisplay.innerText += number;
}

// Create a function to perform the calculation
function calculate() {
  const resultDisplay = document.getElementById("result");
  const result = eval(`${firstNumber} ${operator} ${secondNumber}`);
  resultDisplay.value = result;
}

// 1.Add event listeners to the number buttons
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    console.log(number);
    updateDisplay(number);
  });
});

// Add event listeners to the operation buttons
const operationButtons = document.querySelectorAll(".operation-button");
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;
    firstNumber = parseFloat(resultDisplay.value);
    resultDisplay.value = "";
  });
});

// Add an event listener to the equals button
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
  secondNumber = parseFloat(resultDisplay.value);
  calculate();
});