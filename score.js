const scoreMax = document.querySelector('#scoreMax');
let maxvalue = 7;
let isGameOver = false;
const resetButton = document.querySelector("#reset");
const saveButton = document.querySelector("#save");
const names = document.querySelector(".names");
const winnerName = document.querySelector(".winner");
winnerName.classList.add("display");
const p1 = {
    score: 0,
    button: document.querySelector('#playerOne'),
    display: document.querySelector('#score1'),
    name: document.querySelector("#name1")
}
const p2 = {
    score: 0,
    button: document.querySelector('#playerTwo'),
    display: document.querySelector('#score2'),
    name: document.querySelector("#name2")

}
scoreMax.addEventListener('change', () => {
    maxvalue = parseInt(scoreMax.value);
    reset();
});
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score === maxvalue) {
            isGameOver = true;
            winnerName.innerHTML = `Our winner is: <span style="color:green">${player.name.value}</span>`;
            winnerName.classList.remove("display");
            player.display.style.color = 'green';
            opponent.display.style.color = 'red';
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
function reset() {
    for (i of [p1, p2]) {
        i.score = 0;
        i.display.innerText = '0';
        i.display.style.color = 'black';
        i.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.innerText = '0';
    // p2.display.innerText = '0';
    // p1.display.style.color = 'black';
    // p2.display.style.color = 'black';
    // p1.button.disabled = false;
    // p2.button.disabled = false;
    isGameOver = false;
    names.classList.remove("display");
    winnerName.classList.add("display");
}
function updateNames() {
    p1.button.innerText = p1.name.value;
    p2.button.innerText = p2.name.value;
    names.classList.add("display");

}
p1.button.addEventListener('click', () => updateScores(p1, p2));
p2.button.addEventListener('click', () => updateScores(p2, p1));
resetButton.addEventListener('click', reset);
saveButton.addEventListener('click', updateNames);

