const setup = () => {
    let trigramBtn = document.getElementById("hetBtn");
    trigramBtn.addEventListener("click", het)
}
const het = () => {
    let inputElement = document.getElementById("inputTxt");
    let input = inputElement.value.toLowerCase();
    let output = "";
    let lastIndex = 0;

    for (let i = 0; i < input.length - 1; i++) {
        if (input.substring(i, i+2).localeCompare("de") === 0) {
            output += input.substring(lastIndex, i) + "het";
            lastIndex = i+2;
        }
    }
    output += input.substring(lastIndex);
    console.log(output);
}
window.addEventListener("load", setup);