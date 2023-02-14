///////////////////////////////////////////////
const limit = 0;

for (let i = 12; i >= limit; i--) {
    if (i === 8) {
        console.log("Ignition sequence start");
    } else if (i !== 7) {
        console.log(i);
    }
}

console.log("All engines running\nLiftoff! 🚀");
///////////////////////////////////////////////

// Tout d'abord, la ligne const limit = 0; déclare une constante nommée 
// "limit" avec une valeur de 0.

// Ensuite, le code utilise une boucle for pour itérer à partir de 12 
// jusqu'à la valeur de "limit" en décrémentant de 1 à chaque itération. 
// La boucle s'arrête lorsque la valeur de "i" atteint la valeur de "limit".

// À l'intérieur de la boucle, il y a plusieurs conditions if et else if 
// qui vérifient la valeur de "i". Si "i" est égal à 8, la console affiche 
// le message "Ignition sequence start". Si "i" n'est pas égal à 7, la console 
// affiche la valeur de "i". Si "i" est égal à 7, rien ne se passe.

// En fin de compte, le code affichera les valeurs décroissantes de 12 à 1, 
// sauf la valeur 7, et affichera également le message "Ignition sequence 
// start" lorsque "i" atteint 8.