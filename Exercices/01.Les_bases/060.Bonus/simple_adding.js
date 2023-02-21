// Créez une variable `num` et assignez-lui un 
// nombre comme valeur.

// Créez ensuite une boucle qui additionnera tous 
// les nombres en partant de `1` jusqu'au nombre 
// `num`. Par exemple, si `num` vaut `4`, 
// alors notre code affichera `10` car 
// `1 + 2 + 3 + 4 = 10`.

//Exemples

// - Input: `num` = 12
//     - Output: 78
// - Input: `num` = 140
//     - Output: 9870 

///////////////////////////////////////////////
const num = 5;
let total = 0;

for (let i = 0; i < num; i++) {
    total = total + i;
}

console.log(total);
///////////////////////////////////////////////