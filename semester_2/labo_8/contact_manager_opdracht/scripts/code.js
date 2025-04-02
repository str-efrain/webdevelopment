let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];
const bewaarBewerktePersoon = () => {
    valideer();
    let fouteElementen = document.querySelectorAll(".invalid");
    if (fouteElementen.length < 1) {
        let alreadyInList;
        let indexOfPerson;
        for (let i = 0; i < personen.length; i++) {
            if (document.getElementById("txtVoornaam").value === (personen[i].voornaam) && document.getElementById("txtFamilienaam").value === personen[i].familienaam) {
                alreadyInList = true;
                indexOfPerson = i;
            }
        }
        if (!alreadyInList) {
            let nieuwePersoon = {
                voornaam: document.getElementById("txtVoornaam").value,
                familienaam: document.getElementById("txtFamilienaam").value,
                geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value),
                email: document.getElementById("txtEmail").value,
                aantalKinderen: document.getElementById("txtAantalKinderen").value,
            };
            personen.push(nieuwePersoon);
        } else {
            let bestaandContact = personen[indexOfPerson];
            bestaandContact.voornaam = document.getElementById("txtVoornaam").value;
            bestaandContact.familienaam = document.getElementById("txtFamilienaam").value;
            bestaandContact.geboorteDatum = new Date(document.getElementById("txtGeboorteDatum").value);
            bestaandContact.email = document.getElementById("txtEmail").value;
            bestaandContact.aantalKinderen = document.getElementById("txtAantalKinderen").value;
        }
    }
    updateList();
};
const updateList = () => {
    let lstPersonen = document.querySelector("#lstPersonen");
    let listCleared = false;
    let j = lstPersonen.length;
    while (!listCleared && j > 0) {
        lstPersonen.children[j-1].remove();
        j--;
    }
    for (let i = 0; i < personen.length; i++) {
            let newPerson = document.createElement("option");
            newPerson.textContent = personen[i].voornaam + " " + personen[i].familienaam;
            newPerson.setAttribute("value", i + "contact");
            newPerson.addEventListener("click", loadPerson);
            lstPersonen.append(newPerson);
    }
};
const loadPerson = (event) => {
    let indexPersoon = event.target.value.substring(0, 1);
    let datumObject = personen[indexPersoon].geboorteDatum
    let maand = datumObject.getMonth() + 1;
    if (maand < 10) {
        maand = "0" + maand;
    }
    let dag = datumObject.getDate();
    if (dag < 10) {
        dag = "0" + dag;
    }
    let datum = datumObject.getFullYear() + "-" + maand + "-" + dag;
    document.getElementById("txtVoornaam").value = personen[indexPersoon].voornaam;
    document.getElementById("txtFamilienaam").value = personen[indexPersoon].familienaam;
    document.getElementById("txtGeboorteDatum").value = datum;
    document.getElementById("txtEmail").value = personen[indexPersoon].email;
    document.getElementById("txtAantalKinderen").value = personen[indexPersoon].aantalKinderen;
};
const bewerkNieuwePersoon = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    let btnNieuw = document.getElementById("btnNieuw");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    updateList();
};
window.addEventListener("load", setup);