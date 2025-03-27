let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur

    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let startBtn = document.getElementById("start");
    startBtn.addEventListener("click", startGame);
    updateScore();
};
const startGame = () => {
    let img = document.querySelector("img");
    img.addEventListener("click", clickedSprite);
    moveSprite();
}
const gameOver = () => {
    window.alert("GAME OVER");
    global.score = 0;
    updateScore();
};
const clickedSprite = () => {
    window.clearTimeout(global.timeoutId);
    checkForBomb();
    moveSprite();
}
const checkForBomb = () => {
    let pictureClicked = document.querySelector("img").getAttribute("src");
    if (pictureClicked.indexOf("0") > 0) {
        gameOver();
    } else {
        global.score++;
        updateScore();
    }
};
const updateScore = () => {
    let scoreveld = document.querySelector("#scoreveld");
    scoreveld.textContent = "Aantal hits: " + global.score;
};
const moveSprite = () => {
    let sprite=document.querySelector("img");
    let speelveld=document.getElementById("speelveld");
    let maxLeft=speelveld.clientWidth - global.IMAGE_SIZE - 5;
    let maxHeight=speelveld.clientHeight - global.IMAGE_SIZE - 5;
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    sprite.style.left=left+"px";
    sprite.style.top=top+"px";
    changeSprite();
    global.timeoutId = setTimeout(moveSprite, global.MOVE_DELAY);
};
const changeSprite = () => {
    let sprite=document.querySelector("img");
    let url = global.IMAGE_PATH_PREFIX + Math.floor(Math.random()*global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX;
    sprite.setAttribute("src", url);
}
window.addEventListener("load", setup);