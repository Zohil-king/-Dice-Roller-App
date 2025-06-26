const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollBtn = document.getElementById("rollBtn");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let history = [];

// Handle rolling dice
function rollDice() {
  const value1 = Math.floor(Math.random() * 6);
  const value2 = Math.floor(Math.random() * 6);

  // Add animation
  dice1.classList.add("roll");
  dice2.classList.add("roll");

  setTimeout(() => {
    dice1.textContent = diceFaces[value1];
    dice2.textContent = diceFaces[value2];
    dice1.classList.remove("roll");
    dice2.classList.remove("roll");

    const entry = `🎲 ${diceFaces[value1]} + ${diceFaces[value2]} = ${value1 + value2 + 2}`;
    history.unshift(entry);
    updateHistory();
  }, 400);
}

// Show roll history
function updateHistory() {
  historyList.innerHTML = "";
  history.slice(0, 10).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

// Clear history
clearHistoryBtn.addEventListener("click", () => {
  history = [];
  updateHistory();
});

rollBtn.addEventListener("click", rollDice);
