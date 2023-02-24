// Faites en sorte que la fonction wordCount(str) prenne le 
// paramètre string str transmis et retourne le nombre de mots 
// que contient la chaîne. Les mots seront séparés par un seul 
// espace.

// Exemples

// - Input: "Hello World"
// - Output: 2
// - Input: "one 22 three"
// - Output: 3

// Fonction fléchée
///////////////////////////////////////////////
const wordCount = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            count = count + 1;
        }
    }
    if ((count === 0 && str.length > 0) || count > 0) {
        return count + 1;
    } else {
        return 0;
    }
}
console.log(wordCount("Hello World"));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function wordCount2 (str) {
    let count2 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            count2 = count2 + 1;
        }          
    }
    if ((count2 === 0 && str.length > 0 ) || count2 > 0) {
        return count2 + 1;
    }
}
console.log(wordCount2("Hello World Two"));
///////////////////////////////////////////////