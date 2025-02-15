const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substringWoord);
}
const substringWoord = () => {
    let txtInput = document.getElementById("txtInput");
    let tekstOutput = document.getElementById("btnTekstOutput");
    let substringParam1 = document.getElementById("btnSubstringParam1");
    let substringParam2 = document.getElementById("btnSubstringParam2");

    let param1 = substringParam1.value;
    let param2 = substringParam2.value;

    let tekst = txtInput.value;
    tekstOutput.innerHTML = ") = " + tekst.substring(param1, param2);
}
window.addEventListener("load", setup);