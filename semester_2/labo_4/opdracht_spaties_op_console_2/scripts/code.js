const setup = () => {
    let btnSpacer = document.getElementById('btnSpacer');
    let inputTxt = document.getElementById('txtInput');

    btnSpacer.addEventListener('click', () => { maakMetSpacies(inputTxt.value); });
}
const maakMetSpacies = (inputTxt) => {
    let outputString = "";

    for (let i = 0; i < inputTxt.length; i++) {
        outputString += inputTxt.charAt(i) + " ";
    }
    console.log(outputString);
}
window.addEventListener("load", setup);