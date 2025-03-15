const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", showResult)
}
const showResult = () => {
    checkRoker();
    checkTaal();
    checkBuurland();
    checkBestelling();
}

const checkRoker = () => {
    let isRoker = document.getElementById("isRoker").checked;
    if (isRoker) {
        console.log("Is een roker");
    } else {
        console.log("Is geen roker");
    }
}
const checkTaal = () => {
    let talen = document.getElementsByName("moedertaal");
    for (let i = 0; i < talen.length; i++) {
        if (talen[i].checked) {
            console.log("Moedertaal is " + talen[i].value);
        }
    }
}
const checkBuurland = () => {
    let buurlandOptions = document.getElementById("buurland").options;
    for (let i = 0; i < buurlandOptions.length; i++) {
        if (buurlandOptions[i].selected) {
            console.log("Favoriete buurland is " + buurlandOptions[i].text);
        }
    }
}
const checkBestelling = () => {
    let bestellingsOpties = document.getElementById("bestelling").options;
    let bestelling = "Bestelling bestaat uit ";
    for (let i = 0; i < bestellingsOpties.length; i++) {
        if (bestellingsOpties[i].selected) {
            bestelling += bestellingsOpties[i].text + " ";
        }
    }
    console.log(bestelling);
}
window.addEventListener("load", setup);