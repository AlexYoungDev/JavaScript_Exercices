///////////////////////////////////////////////
const str = "la programmation c'est super !";
let counter = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "e" || str[i] === "r") {
        counter++;
    }
}
console.log(counter);
///////////////////////////////////////////////