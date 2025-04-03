const global = {
    maanden: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    dagen: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
}
const setup = () => {
    let btnLogin = document.querySelector('#goToPageBtn');
    btnLogin.addEventListener('click', bootPage);
    setDate();
    setInterval(updateTime, 100);
}
const setDate = () => {
    let vandaag = new Date();
    let dag = document.querySelector('#dag');
    let dagVoluit = document.querySelector('#dagVoluit');
    let maand = document.querySelector('#maand');
    let jaar = document.querySelector('#jaar');

    dag.innerText = vandaag.getDate();
    dagVoluit.innerText = global.dagen[vandaag.getDay()];
    maand.innerText = global.maanden[vandaag.getMonth()];
    jaar.innerText = vandaag.getFullYear();
}
const updateTime = () => {
    let klokje = document.querySelector("#tijd");
    let nu = new Date();

    let uur = checkForLeadingZero(nu.getHours());
    let minuut = checkForLeadingZero(nu.getMinutes());
    let seconden = checkForLeadingZero(nu.getSeconds());

    klokje.innerText = uur + ":" + minuut + ":" + seconden;
}
const checkForLeadingZero = (getal) => {
    if (getal < 10) {
        return getal = "0" + getal;
    } else return getal;
}
const bootPage = () => {
    let naam = document.querySelector('#naam');
    let errorOutput = document.querySelector('#errorOutput');
    if (naam.value === "") {
        errorOutput.innerText = "Dit veld is verplicht";
        naam.classList.add('error');
    } else {
        naam.classList.remove('error');
        errorOutput.innerText = "";
        let welkomBericht = document.querySelector('#welkomBericht');
        welkomBericht.innerText = "Fijne " + getTimeOfDay() + ", " + naam.value;
        let banner = document.querySelector('#banner');
        let kalenderContainer = document.querySelector('#kalenderContainer');
        banner.classList.toggle("disappearForLogin");
        kalenderContainer.classList.toggle("disappearForLogin");
        let loginContainer = document.querySelector('#loginContainer');
        loginContainer.classList.toggle("disappearForLogin");
    }
}
const getTimeOfDay = () => {
    let uur = new Date().getHours();
    if (uur < 6) {
        return "nacht";
    } else if (uur < 9) {
        return "ochtend";
    } else if (uur < 12) {
        return "voormiddag";
    } else if (uur < 14) {
        return "middag";
    } else if (uur < 17) {
        return "namiddag";
    } else if (uur < 22) {
        return "avond";
    } else {
        return "nacht";
    }
}
window.addEventListener("load", setup);