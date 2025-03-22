const setup = () => {
    let txt = document.querySelectorAll('p');
    txt[0].innerText = "Good job!";
}
window.addEventListener("load", setup);