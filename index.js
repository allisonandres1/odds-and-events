const numberInput = document.getElementById("numberInput");
const addButton = document.getElementById("addButton");
const sort1Button = document.getElementById("sort1Button");
const sortAllButton = document.getElementById("sortAllButton");

const bankBox = document.querySelector(".bank-box");
const oddsBox = document.querySelector(".odds-box");
const evensBox = document.querySelector(".evens-box");

const BANK = [];
const ODDS = [];
const EVENS = [];

addButton.addEventListener("click", function () {
  const value = Number(numberInput.value);
  if (!isNaN(value)) {
    BANK.push(value);
    numberInput.value = "";
    render();
  }
});

sort1Button.addEventListener("click", function () {
  if (BANK.length > 0) {
    const num = BANK.shift();
    if (num % 2 === 0) {
      EVENS.push(num);
    } else {
      ODDS.push(num);
    }
    render();
  }
});

sortAllButton.addEventListener("click", function () {
  while (BANK.length > 0) {
    const num = BANK.shift();
    if (num % 2 === 0) {
      EVENS.push(num);
    } else {
      ODDS.push(num);
    }
  }
  render();
});

function render() {
  bankBox.innerHTML = "";
  oddsBox.innerHTML = "";
  evensBox.innerHTML = "";

  BANK.forEach((num) => {
    const div = document.createElement("div");
    div.textContent = num;
    bankBox.appendChild(div);
  });

  ODDS.forEach((num) => {
    const div = document.createElement("div");
    div.textContent = num;
    oddsBox.appendChild(div);
  });

  EVENS.forEach((num) => {
    const div = document.createElement("div");
    div.textContent = num;
    evensBox.appendChild(div);
  });
}
