// La fonction `exOh(str)` prend le paramètre `str` 
// transmis et renvoie `true` s'il y a un nombre égal 
// de `x` et `o`, sinon retourne `false`. Seules 
// ces deux lettres seront entrées dans la chaîne, pas de 
// ponctuation ou de chiffres. Par exemple : si `str` est 
// "xooxxxxooxo" alors la sortie devrait retourner `false`
//  car il y a 6 `x` et 5 `o`.

// ## Exemples

// - Input: "xooxxo"
// - Output: true
// - Input: "x"
// - Output: false

// Fonction fléchée
///////////////////////////////////////////////
const exOh = str => {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "x") {
            countX++;
        } else if (str.charAt(i) === "o") {
            countO++;
        }
    }
    if (countX === countO) {
        return true; 
    } else {
        return false;
    }
}
console.log(exOh("xoxoxo"));
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
console.log(exOh2("pyp"));
///////////////////////////////////////////////