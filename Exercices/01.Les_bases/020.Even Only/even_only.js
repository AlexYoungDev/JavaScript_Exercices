// Dans cet exercice, vous devrez afficher dans 
// la console tous les nombres pairs compris entre 
// 1 et 20 inclus.

// Vous aurez besoin de l'opérateur % (modulo)

// const limit = 20;
// // début de votre code

// // fin de votre code

// Vous ne pouvez écrire du code qu'entre les deux commentaires.

// Résultat attendu dans le terminal :
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

///////////////////////////////////////////////
// "for" loop
const limit = 20;

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}
///////////////////////////////////////////////

///////////////////////////////////////////////
// "while" loop
// const limit2 = 20;

// let i = 1;
// while (i <= limit2) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }
///////////////////////////////////////////////