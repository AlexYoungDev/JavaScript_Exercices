// Le 16 juillet 1969 à Cape Kennedy en Floride a 
// eu lieu le décollage d'Apollo 11. Pour la première 
// fois, des Hommes allaient se poser sur la Lune ...

// Affichez dans la console les commentaires de [Jack King]
// (https://en.wikipedia.org/wiki/Jack_King_(NASA)) à 
// l'aide d'une boucle. La boucle devra décrémenter un 
// compteur de 12 à 0.

// Résultat attendu dans le terminal :

// 12
// 11
// 10
// 9
// Ignition sequence start
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// All engines running
// Liftoff! 🚀

///////////////////////////////////////////////

const limit = 0;

for (let i = 12; i >= limit; i--) {
    if (i === 8) {
        console.log("Ignition sequence start");
    } else if (i !== 7) {
        console.log(i);
    }
}

console.log("All engines running \nLiftoff! 🚀");

///////////////////////////////////////////////