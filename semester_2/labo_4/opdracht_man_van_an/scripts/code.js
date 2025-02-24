const setup = () => {
    let btnCount1 = document.getElementById('btnCount1');
    btnCount1.addEventListener('click', countWithIndexOf);
    let btnCount2 = document.getElementById('btnCount2');
    btnCount2.addEventListener('click', countWithLastIndexOf);
}

const countWithIndexOf = () => {
    let txtInput = document.getElementById('txtInput');
    let txt = txtInput.value;
    let outputTxt = document.getElementById('txtOutput');
    let outputCount = 0;
    let i = txt.indexOf("an");

    while(i !== -1) {
        outputCount++;
        i = txt.indexOf("an", i + 1);
    }

    outputTxt.textContent = "Met index of: " + outputCount;
}
const countWithLastIndexOf = () => {
    let txtInput = document.getElementById('txtInput');
    let txt = txtInput.value;
    let outputTxt = document.getElementById('txtOutput');
    let outputCount = 0;
    let i = txt.lastIndexOf("an");

    while(i !== -1) {
        outputCount++;
        txt = txt.substring(0, i);
        i = txt.lastIndexOf("an", i);
    }

    outputTxt.textContent = "Met last index of: " + outputCount;
}
window.addEventListener("load", setup);