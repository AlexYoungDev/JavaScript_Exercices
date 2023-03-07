// Dans cette fonction, définissez une variable nommée 
// total et assignez-lui la valeur 0. Créez une seconde variable 
// nommée limit et assignez-lui la valeur 10. Créez une boucle
// for avec une variable i commençant à 0 et s'incrémentant 
// à chaque itération de la boucle. La boucle doit s'exécuter 
// aussi longtemps que i est strictement inférieur à limit.
// À chaque itération de la boucle, ajoutez le nombre i à la 
// variable total.

// Pour faire cela, vous pouvez utiliser l'instruction suivante :
// total = total + i;

// Après la boucle, utilisez `console.log()` pour afficher 
// la variable `total` dans la console.

// En cas de boucle infinie, appuyez sur `Control + C` pour 
// terminer le processus.

// Résultat attendu
// 45

// Aide
// N'oubliez pas d'appeler la fonction que vous avez déclarée.

// Fonction fléchée 
///////////////////////////////////////////////
    const loop = () => {
        let total = 0;
        const limit = 10;
        for (let i = 0; i < limit; i++) {
            total = total + i;
        }
        console.log(total);
    }
loop()

///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function loop2 () {
    let total2 = 0;
    const limit2 = 10;
    for (let i = 0; i < limit2; i++) {
        total2 = total2 + i;
    }
    console.log(total2);
}
//Appel
loop2();
///////////////////////////////////////////////