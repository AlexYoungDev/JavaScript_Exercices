// Fonction fléchée
///////////////////////////////////////////////
const vowelCount = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) === "a" ||
            str.charAt(i) === "e" ||
            str.charAt(i) === "i" ||
            str.charAt(i) === "o" ||
            str.charAt(i) === "u" ||
            str.charAt(i) === "y" 
        ) {
            count++;
        }
    }
    return count;
}
console.log(vowelCount("confiance"));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function vowelCount2 (str) {
    let count2 = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) === "a" ||
            str.charAt(i) === "e" ||
            str.charAt(i) === "i" ||
            str.charAt(i) === "o" ||
            str.charAt(i) === "u" ||
            str.charAt(i) === "y" 
            ) {
                count2++;
            }
    }
    return count2;
}
console.log(vowelCount2("ordinateur"));
///////////////////////////////////////////////s