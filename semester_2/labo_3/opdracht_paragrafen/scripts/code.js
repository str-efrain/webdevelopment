const setup = () => {
    let belangrijkeP = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < belangrijkeP.length; i++) {
        belangrijkeP[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);