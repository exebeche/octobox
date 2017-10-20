const elGameField = document.getElementById('tab-game-field');
const elOutDebug = document.getElementById('out-debug');
const buttonStart = document.getElementById('button-start');

const dataField = [];
// говорит, чей ход
// 1 игрок - крестики
// 2 игрок - нолики
let playerTurn = 1;

elGameField.addEventListener('click', onAction);
buttonStart.addEventListener('click', onStart);


/**
 * Обработчик клика на таблице
 */
function onAction(e) {
    const el = e.target;
    const num = el.dataset.num;

    if (!isFinite(num) || dataField[num]) {
        return;
    }
    dataField[num] = playerTurn;
    el.innerHTML = playerTurn === 1 ? "X" : "O";
    playerTurn = playerTurn === 1 ? 2 : 1;

    // проверка хода - линий
    // dataField

}

/**
 * Обработчик кнопки старт
 */
function onStart() {
    const els = elGameField.getElementsByTagName('TD');
    dataField.length = 0;
    for (let i = 0; i < 9; i++) {
        els[i].innerHTML = '';
    }
}
