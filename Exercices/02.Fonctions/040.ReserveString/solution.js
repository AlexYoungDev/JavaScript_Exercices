// Fonction fléchée
///////////////////////////////////////////////
const reserveString = str => {
    let result = "";
    for (let i = str.length -1; i >= 0; i--) {
        result = result + str.charAt(i);
    }
    return result;
}
console.log(reserveString("I Love Code"));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function reserveString2 (str) {
    let result2 = "";
    for (let i = str.length -1; i >= 0; i--) {
        result2 = result2 + str.charAt(i);
    }
    return result2;
}
console.log(reserveString2("I Love Code"));
///////////////////////////////////////////////

// let result = "";: Ceci initialise une variable result en 
// tant que chaîne de caractères vide. Cette variable sera 
// utilisée pour stocker les caractères inversés de la chaîne 
// d'origine.

// for (let i = str.length - 1; i >= 0; i--) {: Ceci définit 
// une boucle for qui parcourt chaque caractère de la 
// chaîne d'origine, de droite à gauche. La variable i 
// est initialisée avec la valeur de l'indice du dernier 
// caractère de la chaîne d'origine (str.length - 1) et 
// la boucle se poursuit tant que i est supérieur ou égal 
// à 0. À chaque itération, la valeur de i est décrémentée 
// de 1 (i--).

// result = result + str.charAt(i);: À chaque itération de 
// la boucle, le caractère actuel de la chaîne d'origine 
// (déterminé par l'indice i) est ajouté à la fin de la 
// variable result.

// return result;: Une fois la boucle terminée, la fonction 
// renvoie la chaîne de caractères inversée qui a été stockée 
// dans la variable result.

// console.log(reverseString("I Love Code"));: Ceci appelle 
// la fonction reverseString avec la chaîne de caractères 
// "I Love Code" comme argument, puis affiche le résultat de
// la fonction (qui est la chaîne de caractères "edoC evoL I") 
// dans la console.