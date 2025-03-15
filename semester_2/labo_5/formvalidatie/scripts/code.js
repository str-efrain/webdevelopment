const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid";
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className="";
		errVoornaam.innerHTML = "";
	}
};

const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let familienaam = txtFamilienaam.value.trim();
	let error = "";
	if (familienaam.length > 50) {
		error = "max. 50 karakters ";
		txtFamilienaam.className="invalid";
	} else if (familienaam.length === 0) {
		error = "verplicht veld";
		txtFamilienaam.className="invalid";
	} else {
		txtFamilienaam.className="";
	}

	errFamilienaam.innerHTML = error;
}

const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById("txtGeboortedatum");
	let errGeboortedatum = document.getElementById("errGeboortedatum");
	let geboortedatum = txtGeboortedatum.value.trim();
	let jaar = geboortedatum.substring(0, 4);
	let maand = geboortedatum.substring(5, 7);
	let dag = geboortedatum.substring(8,10);

	if (geboortedatum.length === 0) {
		errGeboortedatum.innerHTML = "verplicht veld";
		txtGeboortedatum.className="invalid";
	}
	else if (!isGetal(jaar) || !isGetal(maand) || !isGetal(dag)) {
		errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
		txtGeboortedatum.className="invalid";
	} else {
		txtGeboortedatum.className="";
		errGeboortedatum.innerHTML="";
	}


}
const isGetal = (tekst) => {
	return !isNaN(tekst);
}
const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	if (email.length === 0) {
		errEmail.innerHTML = "verplicht veld";
		txtEmail.className = "invalid";
	} else {
		errEmail.innerHTML = "";
		txtEmail.className = "";
	}
}
const valideerKinderen = () => {
	let txtKinderen = document.getElementById("txtKinderen");
	let errKinderen = document.getElementById("errKinderen");
	let kinderen = txtKinderen.value.trim();
	if (!isGetal(kinderen) || Number.parseInt(kinderen) < 0) {
		txtKinderen.className="invalid";
		errKinderen.innerHTML = "is geen positief getal";
	} else if (Number.parseInt(kinderen) > 99) {
		txtKinderen.className="invalid";
		errKinderen.innerHTML = "is te vruchtbaar";
	} else {
		errKinderen.innerHTML="";
		txtKinderen.className="";
	}
}
window.addEventListener("load", setup);