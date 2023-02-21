///////////////////////////////////////////////
const str = "le code c'est super !";
let counter = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
        counter++;
    }
}
///////////////////////////////////////////////

// La boucle for commence à la troisième ligne et utilise 
// une variable i pour parcourir chaque caractère de la chaîne 
// str. La condition de la boucle for est i < str.length, ce 
// qui signifie que la boucle s'exécutera jusqu'à ce que la 
// variable i atteigne la longueur de la chaîne str.

// Dans le corps de la boucle, la condition if vérifie si le 
// caractère actuel de str est égal à "e". Si c'est le cas, 
// alors le compteur counter est incrémenté de 1.

// Après que la boucle a parcouru tous les caractères de str, 
// le nombre total d'occurrences de "e" est stocké dans la 
// variable counter.

// Enfin, la dernière ligne affiche le résultat du comptage 
// en affichant la valeur de la variable counter dans la console. 
// Dans cet exemple, la chaîne de caractères "le code c'est super !"
//  contient trois lettres "e", donc la sortie du programme sera 3.