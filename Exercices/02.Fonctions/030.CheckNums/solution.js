// Fonction fléchée
///////////////////////////////////////////////
const checkNums2 = (num3, num4) => {
    if (num4 > num3) {
        return("num4 est supérieur à num3");
    } else if ( num4 < num3) {
        return("num4 est inférieur à num3");
    } else {
        return("num4 et num3 sont équivalent");
    }
}

const firstParam2 = 100;
const secondParam2 = 200;
const result2 = checkNums2 (firstParam2, secondParam2);
console.log(result2);
///////////////////////////////////////////////


// Fonction
///////////////////////////////////////////////
function simpleAdding (num1, num2) {
    if (num2 > num1) {
        return "num2 est supérieur à num1";
    } else if (num2 < num1) {
        return "num2 est inférieur à num1" 
    } else {
        return "num2 et num1 sont équivalent"
    }
}

const firstParam = 100;
const secondParam = 200;
const result = simpleAdding (firstParam, secondParam)
console.log(result);
///////////////////////////////////////////////


