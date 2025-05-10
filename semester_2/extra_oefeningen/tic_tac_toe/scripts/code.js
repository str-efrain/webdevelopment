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
        event.currentTarget.appendChild(newO);
        speelBotBeurt();
    }
}
const speelBotBeurt = (event) => {
    let hokjes = document.querySelectorAll('.hokje');
    let legeHokjes = 0;
    for (let i = 0; i < hokjes.length; i++) {
        if (hokjes[i].children.length === 0) {
            legeHokjes++;
        }
    }
    console.log(legeHokjes);
}
window.addEventListener("load", setup);