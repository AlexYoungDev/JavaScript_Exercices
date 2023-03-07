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
    newStr2 = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== " ") {
            newStr2 = newStr2 + str.charAt(i);
        }
    }

    newStr2 = newStr2.toLowerCase();

    let reversed2 = "";
    for (let i = newStr2.length -1; i >= 0; i--) {
        reversed2 = reversed2 + newStr2.charAt(i);
    }
    
    if (reversed2 === newStr2) {
        return true;
    } else {
        return false;
    }
};
console.log(palindrome2("Pokemon"));
///////////////////////////////////////////////