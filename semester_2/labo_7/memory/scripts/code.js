const global = {
    KAARTPREFIX: "images/kaart",
    ACHTERKANTPREFIX: "images/achterkant",
    KAARTSUFFIX: ".png",
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    lastcard: null,
    currentcard: null,
    timeId: 0,
};
const setup = () => {
    displayAchterkanten();
    styleCards();
}
const styleCards = () => {
    let speelveld = document.querySelector("#speelveld");
    let rows = "";
    let columns = "";
    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        rows += "auto ";
    }
    for (let i = 0; i < global.AANTAL_HORIZONTAAL; i++) {
        columns += "auto ";
    }
    speelveld.style.gridTemplateRows = rows;
    speelveld.style.gridTemplateColumns = columns;
}
const displayAchterkanten = () => {
    let speelveld = document.querySelector("#speelveld");
    let containers = [];
    for (let i = 0; i < global.AANTAL_KAARTEN * 2; i++) {
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        let achterkant = document.createElement("img");
        achterkant.classList.add("card", "achterkant");
        achterkant.setAttribute("src", global.ACHTERKANTPREFIX + global.KAARTSUFFIX);

        let voorkant = document.createElement("img");
        voorkant.classList.add("card", "voorkant");
        voorkant.setAttribute("src", global.KAARTPREFIX + (i % global.AANTAL_KAARTEN) + global.KAARTSUFFIX);
        voorkant.style.display = "none";

        cardContainer.appendChild(achterkant);
        cardContainer.appendChild(voorkant);
        cardContainer.addEventListener("click", turnCard);

        containers.push(cardContainer);
    }
    //shuffle(containers);
    for (let i = 0; i < global.AANTAL_KAARTEN * 2; i++) {
        speelveld.append(containers[i]);
    }
};
const turnCard = (event) => {
    let cardContainer = event.currentTarget;
    let achterkant = cardContainer.querySelector(".achterkant");
    let voorkant = cardContainer.querySelector(".voorkant");

    if (achterkant.style.display !== "none") {
        achterkant.style.display = "none";
        voorkant.style.display = "block";
    } else {
        achterkant.style.display = "block";
        voorkant.style.display = "none";
    }
    if (global.lastcard === null) {
        global.lastcard = voorkant;
    } else {
        if (global.lastcard.getAttribute("src") === voorkant.getAttribute("src")) {
            global.currentcard = voorkant;
            global.timeID = setTimeout(showMatchedCards, 2000);
        }
    }
};
const showMatchedCards = () => {
    console.log(global.lastcard);
    console.log(global.currentcard);
}
const shuffle = (array) => {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}
window.addEventListener("load", setup);