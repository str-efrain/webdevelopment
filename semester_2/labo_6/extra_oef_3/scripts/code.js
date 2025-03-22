const setup = () => {
    let btn = document.querySelector('#btn');
    btn.addEventListener('click', addP);
}
const addP = () => {
    let txtInput = document.querySelector('#txtInput');
    let pDiv = document.querySelector('#pDiv');
    let newP = document.createElement("p");
    newP.textContent = txtInput.value;
    pDiv.appendChild(newP);
    txtInput.value = "";
}
window.addEventListener("load", setup);