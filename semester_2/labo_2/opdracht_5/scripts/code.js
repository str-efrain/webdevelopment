const setup = () => {

    let welkomButton=document.getElementById("welkomButton");
    welkomButton.addEventListener("click", wijzig);
}
const wijzig = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);