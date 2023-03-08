// Fonction fléchée
///////////////////////////////////////////////
const palindrome = str => {
    //Supprimer les espaces
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== " ") {
            newStr = newStr + str.charAt(i);
        }
    }

    //Ne pas prendre en compte les miniscules et les majuscules
    newStr = newStr.toLowerCase();

    //Créer la même chaîne de caractères mais inversée
    let reversed = "";

    for (let i = newStr.length -1; i >= 0; i--) {
        reversed = reversed + newStr.charAt(i);
    }

    //Comparer reversed et newStr
    if (reversed === newStr) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("Girafarig"));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function palindrome2 (str) {
    let newStr2 = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== " ") {
            newStr2 = newStr2 + str.charAt(i);
        }
    }

    newStr2 = newStr2.toLowerCase();

    let reversed2 = "";
    for (let i = str.length -1; i >= 0; i--) {
        reversed2 = reversed2 + str.charAt(i);
    }

    if (reversed2 === newStr2) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome2("Pokemon"));
///////////////////////////////////////////////

// Ce code définit une fonction nommée palindrome qui prend 
// une chaîne de caractères str en entrée. La fonction vérifie 
// si str est un palindrome et renvoie true si c'est le cas, 
// sinon elle renvoie false. Voici comment la fonction travaille:

// La première étape consiste à supprimer les espaces de la chaîne 
// de caractères en créant une nouvelle chaîne de caractères newStr.
// La boucle for parcourt chaque caractère de str et, s'il ne 
// s'agit pas d'un espace, ajoute ce caractère à newStr.

// La deuxième étape consiste à convertir newStr en minuscules en 
// utilisant la méthode toLowerCase() afin que la fonction ne 
// prenne pas en compte les différences de casse.

// La troisième étape consiste à créer une nouvelle chaîne de 
// caractères reversed qui est la chaîne de caractères newStr 
// inversée. La boucle for parcourt newStr en partant de la fin 
// et ajoute chaque caractère à reversed.

// Enfin, la fonction compare newStr et reversed. Si elles sont 
// identiques, cela signifie que la chaîne de caractères d'origine 
// est un palindrome et la fonction renvoie true. Sinon, elle 
// renvoie false.

// La dernière ligne du code appelle la fonction palindrome 
// avec l'argument "Aromate et Amora" et imprime le résultat 
// à la console à l'aide de console.log(). Le résultat sera 
// true car la chaîne de caractères d'origine est un palindrome, 
// c'est-à-dire que sa lecture de gauche à droite et de droite à 
// gauche donne la même chose.