// Créez une fonction reverseString(str) qui prend en 
// paramètre une string et qui retourne cette string en 
// ordre inverse.

// Exemples
// - Input: `"I Love Code"`
// - Output: "edoC evoL I"
// - Input: `"Hello World and Coders"`
// - Output: sredoC dna dlroW olleH

// Vous ne devrez pas utiliser la méthode `.reverse()`

// Aide
// - Vous aurez probablement besoin d'une boucle, d'une 
// décrémentation, de la fonction `charAt()` et d'une 
// concaténation.

// Fonction fléchée
///////////////////////////////////////////////
const reserveString = str => {
    let result = "";
    for (let i = str.length -1; i >= 0; i--) {
        result = result + str.charAt(i);
    }
    return result;
}
console.log(reserveString("I Love Football"));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function reserveString2(str) {
    let result2 = "";
    for (let i = str.length -1; i >= 0; i--) {
        result2 = result2 + str.charAt(i);
    }
    return result2;
}
console.log(reserveString2("I Love Code"));
///////////////////////////////////////////////