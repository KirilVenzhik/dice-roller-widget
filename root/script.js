document.getElementById('roll-button').addEventListener('click', rollDice);
document.getElementById('reset-button').addEventListener('click', resetResults);

function rollDice() {
    const diceType = parseInt(document.getElementById('dice-type').value);
    const diceCount = parseInt(document.getElementById('dice-count').value);
    const resultsList = document.getElementById('results-list');
    const totalResult = document.getElementById('total-result');

    resultsList.innerHTML = '';
    let total = 0;

    for (let i = 0; i < diceCount; i++) {
        const result = Math.floor(Math.random() * diceType) + 1;
        const listItem = document.createElement('li');
        listItem.textContent = `Dice ${i + 1}: ${result}`;
        resultsList.appendChild(listItem);
        total += result;
    }

    totalResult.textContent = `Total: ${total}`;
}

function resetResults() {
    document.getElementById('results-list').innerHTML = '';
    document.getElementById('total-result').textContent = '';
    document.getElementById('dice-count').value = 1;
    document.getElementById('dice-type').value = 2;
}
