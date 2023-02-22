// Créez une fonction simpleAdding(num) qui additionne 
// tous les nombres en partant de 1 jusqu'au nombre num. 
// Par exemple, si nous avons 4 en argument, alors notre 
// fonction nous retournera 10 car 1 + 2 + 3 + 4 = 10. Pour
// tester votre fonction, n'utilisez que des nombres compris 
// entre 1 et 1000.

// Exemples

// - Input: `12`
// - Output: 78
// - Input: `140`
// - Output: 9870

// Aide
// const simpleAdding = (num) => {
//     let total = 0;
//     // Début de votre code
//     // Fin de votre code
//     return total;
//   };
//   console.log(simpleAdding(4));

// Fonction fléchée
///////////////////////////////////////////////
const simpleAdding = (num) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
        total = total + i;
    }
    return total;
};
console.log(simpleAdding(4));
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function simpleAdding2 (num) {
    let total2 = 0;
    for (let i = 0; i < num; i++) {
        total2 = total2 + i;
    }
    return total2;
}
console.log(simpleAdding2(4));
///////////////////////////////////////////////