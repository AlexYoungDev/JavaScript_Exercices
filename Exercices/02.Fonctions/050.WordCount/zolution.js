// Fonction fléchée
///////////////////////////////////////////////
const wordCount = str => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            count = count + 1;
        }
    }
    if ((count === 0 && str.length > 0) || count > 0) {
        return count + 1;
    } else {
        return 0;
    }
}
console.log(wordCount("Hello World"));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function wordCount2 (str) {
    let count2 = 0;
    for (let i = 0; i< str.length; i++) {
        if (str.charAt(i) === " ") {
            count2 = count2 + 1;
        }
    }
    if ((count2 === 0 && str.count > 0) || count2 > 0) {
        return count2 +1;
    } else {
        return 0;
    }
}
console.log(wordCount2("Hello World"));
///////////////////////////////////////////////

// Ce code définit une fonction appelée wordCount qui prend 
// une chaîne de caractères (str) en entrée et retourne le 
// nombre de mots dans la chaîne.

// Le code utilise une boucle for pour parcourir tous les 
// caractères de la chaîne str. À chaque itération de la 
// boucle, la fonction utilise la méthode charAt(i) pour 
// récupérer le caractère à l'indice i de la chaîne et 
// vérifie s'il s'agit d'un espace. Si c'est le cas, cela 
// signifie qu'un mot vient de se terminer, donc la variable 
// count est augmentée de 1.

// Après avoir parcouru la chaîne, la fonction vérifie si count 
// est égal à zéro et que la longueur de la chaîne est supérieure 
// à zéro, ou si count est supérieur à zéro. Si l'une de ces deux 
// conditions est vraie, cela signifie qu'il y a au moins un mot 
// dans la chaîne, donc la fonction retourne le nombre de mots 
// (c'est-à-dire count + 1). Sinon, la fonction retourne zéro.

// Dans l'exemple donné, la fonction wordCount est appelée avec 
// la chaîne "Hello World". Le nombre de mots dans cette chaîne 
// est deux (il y a un espace entre "Hello" et "World"), donc 
// la fonction retourne 2. Cela est ensuite affiché dans la console
// en utilisant console.log().