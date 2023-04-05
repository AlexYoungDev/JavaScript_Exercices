const generateString = num => {
    let str = ""; 

    for (let i = 0; i < num; i++) {
        str = str + "-"
    }

    return str;
};

console.log(generateString(1)); // Doit afficher `-`
console.log(generateString(2)); // Doit afficher `--`
console.log(generateString(4)); // Doit afficher `----`
console.log(generateString(19)); // Doit afficher `-------------------`


// Ce code est une fonction nommée generateString qui prend un 
// paramètre num qui est un nombre entier. Cette fonction crée 
// une chaîne de caractères contenant le caractère "-" répété 
// num fois, puis la renvoie.

// La fonction commence par initialiser une variable str à une 
// chaîne de caractères vide.

// Ensuite, elle utilise une boucle for pour ajouter le caractère 
// "-" à la variable str num fois en concaténant le caractère à 
// la fin de la chaîne à chaque itération de la boucle.

// Enfin, la fonction renvoie la variable str qui contient la chaîne 
// de caractères "-" répétée num fois.

// Les exemples d'utilisation de cette fonction generateString 
// avec différentes valeurs de paramètre sont imprimés sur la 
// console en utilisant console.log. Chaque appel de fonction 
// renvoie une chaîne de caractères différente contenant le 
// caractère "-" répété un nombre spécifique de fois.