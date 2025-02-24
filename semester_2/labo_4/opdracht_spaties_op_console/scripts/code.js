const setup = () => {
    let btnSpacer = document.getElementById('btnSpacer');
    btnSpacer.addEventListener('click', spaceIt)
}

const spaceIt = () => {
    let txtInput = document.getElementById('txtInput');
    let txt = txtInput.value;
    let outputString = "";

    for (let i = 0; i < txt.length; i++) {
        outputString += txt.charAt(i) + " ";
    }
    console.log(outputString);
}
window.addEventListener("load", setup);