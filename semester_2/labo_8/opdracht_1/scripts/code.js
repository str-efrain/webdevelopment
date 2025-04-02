const setup = () => {
    berekenDagen();
}
const berekenDagen = () => {
    let txt = document.querySelector("#txt");
    let vandaag = new Date();
    let geboorteDatum = new Date(2007, 1, 15);

    let verschil = vandaag - geboorteDatum;
    let verschilInDagen = Math.floor(verschil/1000/60/60/24);
    console.log(verschilInDagen);
    txt.textContent += verschilInDagen;
}
window.addEventListener("load", setup);