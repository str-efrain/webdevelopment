const setup = () => {
    let userInput = "startstring";
    let gemeentes = [];
    while (userInput !== null) {
        userInput = window.prompt('Voer een gemeente in:');
        gemeentes.push(userInput);
    }
    outputGemeentes(gemeentes.sort());
}
const outputGemeentes = (gemeentes) => {
    for (let i = 0; i < gemeentes.length; i++) {
        if (gemeentes[i] !== null) {
            let outputVeld = document.getElementById("gemeenten");
            outputVeld.innerHTML += "<option value='" + gemeentes[i] + "'>" + gemeentes[i] + "</option>";
        }
    }
}
window.addEventListener("load", setup);