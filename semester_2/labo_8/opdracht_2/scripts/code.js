const setup = () => {
    vanObjectNaarString();
    vanJsonNaarObject();
}
const vanObjectNaarString = () => {
    let student={
        voornaam : "Maxime",
        familienaam : "Taquet",
        geboorteDatum : new Date("2007-01-15"),
        adres : {
            straat : "Broekstraat 25",
            postcode : "9700",
            gemeente : "Oudenaarde"
        },
        isIngeschreven : true,
        namenVanExen : ["Clara", "Lyna", "Jana", "Samnson"],
        aantalKatten : 2
    }

    let jsonStudent = JSON.stringify(student);
    console.log(jsonStudent);
}
const vanJsonNaarObject = () => {
    let student = JSON.parse('{"voornaam":"Maxime","familienaam":"Taquet","geboorteDatum":"2007-01-15T00:00:00.000Z","adres":{"straat":"Broekstraat 25","postcode":"9700","gemeente":"Oudenaarde"},"isIngeschreven":true,"namenVanExen":["Clara","Lyna","Jana","Samnson"],"aantalKatten":2}');
    console.log(student.voornaam);
    console.log(student.adres.gemeente);
}
window.addEventListener("load", setup);