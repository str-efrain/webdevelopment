const setup = () => {
    const familieLeden = ['Febe', 'Mark', 'Freddy', 'Dario', 'Evy'];
    console.log(familieLeden.length);
    console.log(familieLeden[0]);
    console.log(familieLeden[2]);
    console.log(familieLeden[4]);
    const voegNaamToe = () => {
        let nieuweNaam = prompt("Geef een extra naam in.");
        if (nieuweNaam) {
            familieLeden.push(nieuweNaam);
        }
    }
    voegNaamToe();
    console.log(familieLeden);
    console.log(familieLeden.join(", "));
}
window.addEventListener("load", setup);