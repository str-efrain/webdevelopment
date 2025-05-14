const global = {
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
}

const setup = () => {
    setupGame();
}
const setupGame = () => {
    let hokjes = document.querySelectorAll('.hokje');
    for (let i = 0; i < hokjes.length; i++) {
        hokjes[i].addEventListener('click', speelBeurt);
    }
}
const speelBeurt = (event) => {
    if (event.currentTarget.children.length === 0) {
        let newO = document.createElement("img");
        newO.src = global.IMAGE_PATH_PREFIX + "o" + global.IMAGE_PATH_SUFFIX;
        newO.classList.add("o");
        event.currentTarget.appendChild(newO);
        let player = "o";
        if (!checkForWin(player)) {
            setTimeout(speelBotBeurt, 500);
        }
    }
}
const speelBotBeurt = () => {
    let hokjes = document.querySelectorAll('.hokje');
    let atlLegeHokjes = 0;
    let legeHokjes = [];
    for (let i = 0; i < hokjes.length; i++) {
        if (hokjes[i].children.length === 0) {
            atlLegeHokjes++;
            legeHokjes.push(hokjes[i]);
        }
    }
    if (atlLegeHokjes > 0) {
        let randomIndex = Math.floor(Math.random() * atlLegeHokjes);
        let gekozenHokje = legeHokjes[randomIndex];
        appendNieuwX(gekozenHokje);
    } else {
        setTimeout(resetGame, 500);
    }
    let player = "x";
    checkForWin(player);
}
const appendNieuwX = (gekozenHokje) => {
    let newX = document.createElement("img");
    newX.src = global.IMAGE_PATH_PREFIX + "x" + global.IMAGE_PATH_SUFFIX;
    newX.classList.add("x");
    gekozenHokje.appendChild(newX);
}
const checkForWin = (player) => {
    let hokjes = document.querySelectorAll('.hokje');
    let winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let combo of winCombos) {
        if (
            hokjes[combo[0]].children.length > 0 &&
            hokjes[combo[1]].children.length > 0 &&
            hokjes[combo[2]].children.length > 0 &&
            hokjes[combo[0]].children[0].classList.contains(player) &&
            hokjes[combo[1]].children[0].classList.contains(player) &&
            hokjes[combo[2]].children[0].classList.contains(player)
        ) {
            setTimeout(resetGame, 500);
            return true;
        }
    }
}

const resetGame = () => {
    window.alert("Game Over!");
    let hokjes = document.querySelectorAll('.hokje');
    for (let i = 0; i < hokjes.length; i++) {
        if (hokjes[i].children.length > 0) {
            hokjes[i].children[0].remove();
        }
    }
}
window.addEventListener("load", setup);