// Fonction fléchée
///////////////////////////////////////////////
const factorial = num => {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total = total * i;
    }
    return total
}
const result = factorial(8);
console.log(result);
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function factorial2(num) {
    let total2 = 1;
    for (let i = 1; i <= num; i++) {
        total2 = total2 * i;
    }
    return total2
}
const result2 = factorial2(8);
console.log(result2);
///////////////////////////////////////////////

// La factorielle d'un nombre entier n est le produit de 
// tous les nombres entiers positifs de 1 jusqu'à n. Par 
// exemple, la factorielle de 4 (notée 4!) est égale à 
// 4 x 3 x 2 x 1, soit 24.

// La fonction utilise une boucle for pour calculer la 
// factorielle du nombre num. Elle initialise une variable 
// total à 1, puis multiplie cette variable par chaque nombre 
// entier positif de 1 jusqu'à num. À la fin de la boucle, 
// la fonction retourne la valeur de total, qui représente 
// la factorielle de num.

// Le code exécute ensuite la fonction factorial avec 8 comme 
// argument et stocke le résultat dans une variable result. 
// Enfin, le code affiche le résultat dans la console en 
// utilisant la fonction console.log.

// Ainsi, lors de l'exécution du code, la console affichera 
// 40320, car c'est le résultat de la factorielle de 8.