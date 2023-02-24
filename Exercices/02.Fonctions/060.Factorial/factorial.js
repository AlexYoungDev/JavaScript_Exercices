// Créez une fonction `factorial(num)` qui prendra 
// en paramètre un nombre `num`, et qui retournera 
// la factorielle de celui-ci. Pour vos tests, votre 
// `num` sera compris entre `1` et `18`, et sera 
// toujours un entier.

// Exemples

// - Input: `4`
// - Output: 24
// - Input: `8`
// - Output: 40320

// Aide

// - La factorielle de 4 vaut 24 car `1 * 2 * 3 * 4 = 24`

// Fonction fléchée
///////////////////////////////////////////////
const factorial = num => {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total = total * i;
    }
    return total;
};
const result = factorial(8);
console.log(result);
///////////////////////////////////////////////


// Fonction 
///////////////////////////////////////////////
function factorial2(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total = total * i;
    }
    return total;
}
const result2 = factorial2(8);
console.log(result2);
///////////////////////////////////////////////