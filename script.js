const display = document.getElementById('display');

function appendOperator(value) {
  display.value += value;
}

function appendFunction(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
