// Fonction fléchée
///////////////////////////////////////////////
const exOh = str => {
    let countO = 0;
    let countX = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "o") {
            countO++
        } else if (str.charAt(i) === "x") {
            countX++
        }
    } 
    if (countO === countX) {
        return true;
    } else {
        return false;
    }
}
console.log(exOh("xoxo"));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function exOh2 (str) {
    let countP = 0;
    let countY = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "p") {
            countP++;
        } else if (str.charAt(i) === "y") {
            countY++;
        }
    }
    if (countP === countY) {
        return true
    } else {
        return false
    }
}
console.log(exOh2("ypy"));
///////////////////////////////////////////////