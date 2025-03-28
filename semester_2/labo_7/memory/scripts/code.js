const global = {
    KAARTPREFIX: "images/kaart",
    ACHTERKANTPREFIX: "images/achterkant",
    KAARTSUFFIX: ".png",
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    lastcard: null,
    currentcard: null,
    isBusy: false,
    foundPairs: 0
}
const setup = () => {
    displayAchterkanten();
    styleCards();
}
const styleCards = () => {
    let speelveld = document.querySelector("#speelveld");
    speelveld.style.gridTemplateRows = `repeat(${global.AANTAL_VERTICAAL}, auto)`;
    speelveld.style.gridTemplateColumns = `repeat(${global.AANTAL_HORIZONTAAL}, auto)`;
}
const displayAchterkanten = () => {
    let speelveld = document.querySelector("#speelveld");
    let containers = [];
    let kaarten = [];

    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        kaarten.push(i, i);
    }
    shuffle(kaarten);

    for (let i = 0; i < kaarten.length; i++) {
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        let achterkant = document.createElement("img");
        achterkant.classList.add("card", "achterkant");
        achterkant.setAttribute("src", global.ACHTERKANTPREFIX + global.KAARTSUFFIX);

        let voorkant = document.createElement("img");
        voorkant.classList.add("card", "voorkant");
        voorkant.setAttribute("src", global.KAARTPREFIX + kaarten[i] + global.KAARTSUFFIX);
        voorkant.style.display = "none";

        cardContainer.appendChild(achterkant);
        cardContainer.appendChild(voorkant);
        cardContainer.addEventListener("click", playTurn);

        containers.push(cardContainer);
    }

    containers.forEach(container => speelveld.append(container));
}
const playTurn = (event) => {
    if (global.isBusy) return;

    let cardContainer = event.currentTarget;
    let gedraaideKaart = turnCard(cardContainer);
    if (!gedraaideKaart) return;

    if (!global.lastcard) {
        global.lastcard = gedraaideKaart;
    } else {
        global.isBusy = true;
        setCursorZandloper(true);
        global.currentcard = gedraaideKaart;

        if (global.lastcard.getAttribute("src") === global.currentcard.getAttribute("src")) {
            setTimeout(matched, 1000);
        } else {
            setTimeout(() => {
                turnCard(global.lastcard.parentElement, true);
                turnCard(global.currentcard.parentElement, true);
                global.lastcard = null;
                global.currentcard = null;
                global.isBusy = false;
                setCursorZandloper(false);
            }, 1000);
        }
    }
}
const matched = () => {
    global.lastcard.parentElement.remove();
    global.currentcard.parentElement.remove();

    global.foundPairs++;
    if (global.foundPairs === global.AANTAL_KAARTEN) {
        alert("BOOM SHAKALAKA");
    }

    global.lastcard = null;
    global.currentcard = null;
    global.isBusy = false;
    setCursorZandloper(false);
}
const setCursorZandloper = (isBusy) => {
    let speelveld = document.querySelector("#speelveld");
    speelveld.style.cursor = isBusy ? "wait" : "default";
};

const turnCard = (cardContainer, hide = false) => {
    let achterkant = cardContainer.querySelector(".achterkant");
    let voorkant = cardContainer.querySelector(".voorkant");

    if (!hide && achterkant.style.display === "none") return null;

    if (hide) {
        achterkant.style.display = "block";
        voorkant.style.display = "none";
    } else {
        achterkant.style.display = "none";
        voorkant.style.display = "block";
    }
    return voorkant;
}
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
window.addEventListener("load", setup);
