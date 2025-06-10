console.log("vives".charAt(3)); //Returns e

let vraag = "Wat was was eer was was was?";
console.log(vraag.length);//String met lengte van 28
console.log(vraag.includes("was"));//Return true
console.log(vraag.includes("was", 25));//Tweede parameter is de startindex, returns false
console.log(vraag.indexOf("was"));//Returns 4
console.log(vraag.lastIndexOf("was"));//Return 24

let zin = "hondjes zijn mijn lievelingsdieren, ik heb zelf een hond.";
console.log(zin.replace("hond", "kat"));
                                // Vervangt eerste keer dat hond voorkomt
console.log(zin.replaceAll("hond", "kat"));
                                //Vervangt elke keer dat hond voorkomt

"       Hello world    ".trim();//Knipt alle witruimte voor en na weg

'Jan, Piet, Joris, Corneel'.split(',');
            // ['Jan', ' Piet', ' Joris', ' Corneel']
'vives'.split('');
            // ['v', 'i', 'v', 'e', 's']
let zin2 = "Programmeren vind ik super leuk";
console.log(zin2.split(" "));
    //['Programmeren', 'vind', 'ik', 'super', 'leuk']

let quote = 'To infinity and beyond!';
console.log(quote.slice(3, 11));//Returns "infinity"
console.log(quote.substring(3, 11));//Returns "infinity"









