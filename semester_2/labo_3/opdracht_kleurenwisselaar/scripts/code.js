const setup = () => {
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");

    btn1.addEventListener("click", switchColorBtn1);
    btn2.addEventListener("click", switchColorBtn2);
    btn3.addEventListener("click", switchColorBtn3);
}

const switchColorBtn1 = () => {
    let btn = document.getElementById("btn1");
    btn.classList.toggle("switchColor");
}
const switchColorBtn2 = () => {
    let btn = document.getElementById("btn2");
    btn.classList.toggle("switchColor");
}
const switchColorBtn3 = () => {
    let btn = document.getElementById("btn3");
    btn.classList.toggle("switchColor");
}

window.addEventListener("load", setup);