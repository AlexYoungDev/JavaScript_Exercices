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

// Ce code définit une fonction nommée powerFunction qui prend 
// deux paramètres: num et power. La fonction calcule la 
// puissance de num à la puissance power et renvoie le résultat. 
// Voici comment la fonction calcule la puissance:

// La variable result est initialisée à num.
// Si power est égal à 0, la fonction renvoie 1 car tout nombre 
// à la puissance 0 est égal à 1.
// Si power est supérieur à 0, la boucle for multiplie result par 
// num power-1 fois pour calculer la puissance. Le résultat est 
// renvoyé à la fin de la boucle.
// Si power est inférieur à 0, la boucle for multiplie result par 
// num power-1 fois, tout comme dans le cas précédent, mais à la 
// fin, result est inversé en prenant la valeur 1/result pour 
// obtenir la puissance négative. Le résultat est renvoyé à la fin 
// de la boucle.

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

// Le code commence par déclarer la fonction "abs" qui prend 
// un paramètre "num". Ensuite, il déclare une variable locale 
// "abs" pour stocker le résultat de la valeur absolue du nombre. 
// La fonction vérifie si le paramètre "num" est supérieur à zéro, 
// et si c'est le cas, la variable "abs" est définie comme "num". 
// Sinon, la variable "abs" est définie comme "num" multiplié par 
// -1 pour obtenir la valeur absolue.

// // Ensuite, la fonction "powerFunc" est déclarée. Elle prend 
// deux paramètres : "num" et "power". La fonction déclare une 
// variable locale "total" et initialise sa valeur à 1. Elle 
// utilise également la fonction "abs" pour obtenir la valeur 
// absolue de "power" et stocke le résultat dans une variable 
// locale "newValue".

// // La fonction utilise ensuite une boucle "for" pour itérer 
// "newValue" fois. Dans chaque itération, la valeur de "total" 
// est multipliée par "num". Après l'itération de la boucle, la 
// fonction vérifie si la valeur de "power" est supérieure à zéro. 
// Si c'est le cas, elle renvoie "total". Sinon, elle renvoie 1 
// divisé par "total", ce qui donne l'inverse de "total" et donc 
// la puissance négative de "num".

// // Enfin, la fonction "powerFunc" est appelée avec les arguments 
// 4 et -2. Le résultat de l'appel est renvoyé à la console avec 
// la fonction "console.log". Le résultat est 0.0625, 
// car 4^-2 = 1/4^2 = 1/16 = 0.0625.





