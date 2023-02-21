// Dans cet exercice, vous devrez vérifier si un email 
// est valide. On considèrera comme valide un email 
// contenant le caractère `@`.

// const email = "dorothy@mail.com";
// let valid = false
// ...
// console.log(valid);

// Résultat attendu dans le terminal (la console) :
// true
// Pensez à vérifier votre code en enlevant le caractère @ de 
// l'adresse. La console devra alors afficher false.

// Créez un fichier valid-email.js.

///////////////////////////////////////////////
const email = "dorothy@mail.com";
let valid = false

for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        valid = true;
    }
}
console.log(valid);
///////////////////////////////////////////////

// En utilisant indexOf() :
///////////////////////////////////////////////
const email2 = "dorothy@mail.com";
let valid2 = false

if (email2.indexOf("@") !== -1) {
    valid2 = true 
}
console.log(valid2);
///////////////////////////////////////////////