// En utilisant le langage JavaScript, vous devrez écrire 
// une fonction `checkNums(num1,num2)` prenant deux nombres 
// en arguments, et qui retournera la chaîne de caractères :

// - `num2 est supérieur à num1` si `num2` est plus grand 
//   que `num1`
// - `num2 est inférieur à num1` dans le cas où `num2` est 
//   plus petit que `num1`
// - `num1 et num2 sont équivalents` si `num1` et `num2` 
//   sont égaux

//Exemples
// - Input: `num1` = 3, `num2` = 122
// - Output: "num2 est supérieur à num1"
// - Input: `num1` = 67, `num2` = 67
// - Output: "num1 et num2 sont équivalents"

// Fonction fléchée
///////////////////////////////////////////////
const checkNums = (num3, num4) => {
    if (num4 > num3) {
        return "num4 est supérieur à num3";
    } else if (num4 < num3) {
        return "num4 est inférieur à num3";
    } else {
        return "num4 et num3 sont équivalents";
    }
}

const firstParam = 100;
const secondParam = 100;
const result = checkNums(firstParam, secondParam);
console.log(result); 
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function checkNums2 (num1, num2) {
    if (num2 > num1) {
        return "num2 est supérieur à num1";
    } else if (num2 < num1) {
        return "num2 est inférieur à num1";
    } else {
        return "num2 et num1 sont équivalent";
    }
};

const firstParam2 = 100;
const secondParam2 = 200;
const result2 = checkNums (firstParam2, secondParam2);
console.log(result2);
///////////////////////////////////////////////




