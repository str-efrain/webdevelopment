const setup = () => {
    let listitems = document.querySelectorAll('li');
    for (let i = 0; i < listitems.length; i++) {
        let child = listitems[i];
        child.classList.add('listitem');
    }
    let img = document.createElement("img");
    img.setAttribute("src", "images/myself.png");
    img.setAttribute("alt", "picture of myself");
    let body = document.querySelector('body');
    body.appendChild(img);
}
window.addEventListener("load", setup);