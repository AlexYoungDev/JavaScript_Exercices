///////////////////////////////////////////////
const email = "dorothy@mail.com";
let valid = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        valid = true;
    }
} 
console.log(valid);
///////////////////////////////////////////////

// Ce code vérifie si l'adresse e-mail stockée dans la 
// variable email contient le symbole "@" qui est généralement 
// présent dans les adresses e-mail valides.

// La variable valid est initialisée à false, ce qui signifie 
// que l'adresse e-mail n'est pas encore considérée comme valide.

// Le code utilise une boucle for pour parcourir chaque caractère 
// de l'adresse e-mail. La condition de la boucle for est i 
// < email.length, ce qui signifie que la boucle se poursuivra 
// jusqu'à ce que tous les caractères de l'adresse e-mail aient 
// été parcourus.

// Dans la boucle, chaque caractère de l'adresse e-mail est 
// comparé au symbole "@" en utilisant l'opérateur de comparaison 
// strictement égal ===. Si le caractère actuel est "@" alors 
// la variable valid est mise à true, ce qui signifie que 
// l'adresse e-mail est considérée comme valide.

// Après que la boucle soit terminée, le code affiche la 
// valeur de la variable valid en utilisant la fonction 
// console.log(). Si l'adresse e-mail contient le symbole 
// "@" alors la variable valid aura la valeur true, sinon 
// elle conservera la valeur initiale false.