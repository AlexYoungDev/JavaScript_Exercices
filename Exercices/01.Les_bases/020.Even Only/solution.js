///////////////////////////////////////////////
// for loop
// const limit = 20;

// for (let i=1; i<=limit; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
///////////////////////////////////////////////

///////////////////////////////////////////////
// while loop
const limit2 = 20;

let i = 1;
while (i <= limit2) {
    if (i % 2 === 0) {
    console.log(i);
    }
    i++;
}
///////////////////////////////////////////////

// Tout d'abord, la ligne const limit = 20; déclare une 
// constante nommée "limit" avec une valeur de 20.

// Ensuite, le code utilise une boucle for pour itérer à 
// partir de 1 jusqu'à la valeur de "limit" en incrémentant 
// de 1 à chaque itération. La boucle s'arrête lorsque la 
// valeur de "i" atteint la valeur de "limit".

// À l'intérieur de la boucle, il y a une condition if qui 
// vérifie si la valeur de "i" est divisible par 2 sans 
// reste (c'est-à-dire si "i" est un nombre pair). Si c'est 
// le cas, la console affiche la valeur de "i".

// En fin de compte, le code affichera les nombres pairs 
// allant de 2 à 20, en incréments de 2 à chaque fois.


// Pour afficher les nombres impairs, il suffit de changer la 
// condition dans le if pour vérifier si "i" est divisible par 
// 2 avec un reste. Vous pouvez le faire en utilisant l'opérateur 
// modulo (%) et en vérifiant si le reste est égal à 1. 
// Voici le code modifié :

///////////////////////////////////////////////
// Afficher les nomnbres impairs
// const limit = 20;

// for (let i = 1; i <= limit; i++) {
//     if (i % 2 === 1) {
//     console.log(i);
//     }
// }
///////////////////////////////////////////////

// Maintenant, le code affichera les nombres impairs allant 
// de 1 à 19, en incréments de 2 à chaque fois.