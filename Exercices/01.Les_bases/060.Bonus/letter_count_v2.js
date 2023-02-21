// Dans cet exercice, vous devrez compter le nombre 
// de e et de r dans la chaîne de caractères la programmation 
// c'est super ! (toutes les lettres sont volontairement en
// minuscule). Il faudra ensuite afficher le nombre total 
// de e et de r dans le terminal (il n'y aura qu'un seul 
// compteur pour les deux lettres).

// Résultat attendu dans le terminal (la console) :
// 5

///////////////////////////////////////////////
const str = "la programmation c'est super !";
let counter = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "e" || str[i] === "r") {
        counter++;
    }
}
console.log(counter);
///////////////////////////////////////////////