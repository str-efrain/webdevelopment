const setup = () => {
    let trigramBtn = document.getElementById("trigramBtn");
    trigramBtn.addEventListener("click", trigramise)
}
const trigramise = () => {
    let inputElement = document.getElementById("inputTxt");
    let input = inputElement.value;
    let output = "";
    for (let i = 0; i < input.length - 2; i++) {
        output += input.substring(i, i+3) + " ";
    }
    console.log(output);
}
window.addEventListener("load", setup);