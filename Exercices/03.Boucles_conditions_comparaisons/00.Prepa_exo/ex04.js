    // L'objectif de cet exercice est d'afficher "o---o" sur 
    // plusieurs lignes.
    // Exemple si `height` vaut 4 :
    // o---o
    // o---o
    // o---o
    // o---o


const generateString = num => {
    let str = "";
    for (let i = 0; i < num; i++) {
        // Pour éviter la ligne vide en bas, mettre des conditions
        //  pour ne pas avoir "\n" au dernier tour de boucle :
        if (i === num -1) {
            str = str + "o---o";
        } else {
            // si on est au dernier tour :
            str = str + "o---o\n";
        }
    }
    return str;
};

let height = 4;
console.log(generateString(height));