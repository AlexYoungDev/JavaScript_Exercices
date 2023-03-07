// Créez une fonction `powerFunc(num, power)`, qui 
// prend 2 entiers en paramètres et qui doit retourner
// le résultat du calcul `num` exposant `power`.

// Exemples
// - Input: `num` = 3, `power` = 3
// - Output: 27

// Notes
// - Attention aux cas particuliers (puissances négatives, nuls)
// - Vous ne traiterez pas les cas où l'exposant `power` 
// n'est pas un entier

// Il est interdit d'utiliser l'opérateur de puissance 
//  💪, ou la méthode `Math.pow`, étant donné que 
// le but de cet exercice est de coder cette fonction 🤓

// Aide
// - [Rendez-vous ici pour calculer des puissances]
// (https://www.rapidtables.com/calc/math/Exponent_Calculator.html)

// Fonction fléchée
///////////////////////////////////////////////
const powerFunction = (num, power) => {
    let result = num;
    if (power === 0) { 
        // le return suivant met fin à la fonction, le reste du code ne sera pas exécuté
        return 1;
    } else if (power > 0) {
        for (let i = 1; i < power; i++) {
            result = result * num;
        }
    } else {
            // en multipliant power par -1, power devient positif
        power = power * -1;
        for (let i = 1; i < power; i++) {
            result = result * num;
        }
        result = 1 / result;
    }
    return result;
};

console.log(powerFunction(3, 3)); // 27
console.log(powerFunction(3, -3)); // 0.037037037037037035
console.log(powerFunction(3, 0)); // 1

///////////////////////////////////////////////


// Autre méthode
///////////////////////////////////////////////
const abs = num => {
    let abs;
    if (num > 0) {
        abs = num;
    } else {
        abs = num * -1;
    }

    return abs;
};
const powerFunc = (num, power) => {
    let total = 1;
    const newValue = abs(power);
    for (let i = 0; i < newValue; i++) {
        total = total * num;
    }
    if (power > 0) {
        return total;
    } else {
        return 1 / total;
    }
};
console.log(powerFunc(4, -2)); // 0.0625
///////////////////////////////////////////////