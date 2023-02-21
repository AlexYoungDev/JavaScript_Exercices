// Dans cet exercice, vous devrez compter le nombre de 
// e dans la chaîne de caractères le code c'est 
// super ! (toutes les lettres sont volontairement en 
// minuscule). Il faudra ensuite afficher le nombre total 
// de e dans le terminal.

// Copiez / collez ce code dans le fichier :


// const str = "le code c'est super !";
// let counter = 0; // stocke le nombre de e
// ...
// console.log(counter);


// Résultat attendu dans le terminal (la console) :


// 4


// N'hésitez pas à tester votre code avec d'autres chaines 
// de caractères.

// ## Aide

// - Essayez, dans un premier temps, de parcourir la chaine 
// de caractères afin d'afficher chaque lettre dans le terminal
// - Pour accéder à une lettre dans une chaine de caractères,
//  vous pouvez utiliser la syntaxe suivante :


// const str = "le code c'est super !";
// console.log(str[0]); // affichera la lettre en position 0, 
// c'est-à-dire "l"
// console.log(str[1]); // affichera la lettre en position 1, 
// c'est-à-dire "e"

///////////////////////////////////////////////
const str = "le code c'est super !";
let counter = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
        count++;
    }
}
///////////////////////////////////////////////