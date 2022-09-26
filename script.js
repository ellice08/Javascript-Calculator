const OPERATORS = ["+", "-", "*", "/"];

let data = {
  operation: [],
  formula: [],
};

let ans = 0;

let calculator_buttons = [
  {
    name: "open-parenthesis",
    symbol: "(",
    formula: "(",
    type: "number",
  },
  {
    name: "close-parenthesis",
    symbol: ")",
    formula: ")",
    type: "number",
  },
  {
    name: "clear",
    symbol: "AC",
    formula: false,
    type: "key",
  },
  {
    name: "delete",
    symbol: "⌫",
    formula: false,
    type: "key",
  },
  {
    name: "7",
    symbol: 7,
    formula: 7,
    type: "number",
  },
  {
    name: "8",
    symbol: 8,
    formula: 8,
    type: "number",
  },
  {
    name: "9",
    symbol: 9,
    formula: 9,
    type: "number",
  },
  {
    name: "division",
    symbol: "÷",
    formula: "/",
    type: "operator",
  },
  {
    name: "4",
    symbol: 4,
    formula: 4,
    type: "number",
  },
  {
    name: "5",
    symbol: 5,
    formula: 5,
    type: "number",
  },
  {
    name: "6",
    symbol: 6,
    formula: 6,
    type: "number",
  },
  {
    name: "multiplication",
    symbol: "×",
    formula: "*",
    type: "operator",
  },
  {
    name: "1",
    symbol: 1,
    formula: 1,
    type: "number",
  },
  {
    name: "2",
    symbol: 2,
    formula: 2,
    type: "number",
  },
  {
    name: "3",
    symbol: 3,
    formula: 3,
    type: "number",
  },
  {
    name: "subtraction",
    symbol: "–",
    formula: "-",
    type: "operator",
  },
  {
    name: "comma",
    symbol: ".",
    formula: ".",
    type: "number",
  },
  {
    name: "0",
    symbol: 0,
    formula: 0,
    type: "number",
  },
  {
    name: "calculate",
    symbol: "=",
    formula: "=",
    type: "calculate",
  },
  {
    name: "addition",
    symbol: "+",
    formula: "+",
    type: "operator",
  },
];

const input_element = document.querySelector(".input");

const output_operation_element = document.querySelector(".operation .value");

const output_result_element = document.querySelector(".result .value");

function createCalculatorbutton() {
  const buttons_per_row = 4;
  let added_buttons = 0;
  calculator_buttons.forEach((button) => {
    if (added_buttons % buttons_per_row == 0) {
      input_element.innerHTML += `<div class = "row"></div>`;
    }

    const row = document.querySelector(".row:last-child");
    row.innerHTML += `<button id = ${button.name}>
        ${button.symbol}
        </button>`;

    added_buttons++;
  });
}

createCalculatorbutton();

input_element.addEventListener("click", (event) => {
  const target_btn = event.target;
  calculator_buttons.forEach((button) => {
    if (button.name == target_btn.id) {
      calculator(button);
    }
  });
});

function calculator(button) {
  if (button.type == "operator") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  } else if (button.type == "number") {
    data.operation.push(button.symbol);
    data.formula.push(button.formula);
  } else if (button.type == "trigo_function") {
    data.operation.push(button.symbol + "(");
    data.formula.push(button.formula);
  } else if (button.type == "key") {
    if (button.name == "clear") {
      data.operation = [];
      data.formula = [];
      updateOutputresult(0);
    } else if (button.name == "delete") {
      data.operation.pop();
      data.formula.pop();
    }
  } else if (button.type == "calculate") {
    formula_str = data.formula.join("");

    let result;

    result = eval(formula_str);

    updateOutputresult(result);
    return;
  }

  updateOutputOperation(data.operation.join(""));
}

function updateOutputOperation(operation) {
  output_operation_element.innerHTML = operation;
}

function updateOutputresult(result) {
  output_result_element.innerHTML = result;
}
