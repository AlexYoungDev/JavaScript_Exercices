const generateString = num => {
    let str = "";

    for (let i =0; i < num; i++) {
        if (i === num -1) {
            str = str + "o";
        } else {
            str = str + "-";
        }
    } 
    return str; 
};

console.log(generateString(1)); // Doit afficher `o`
console.log(generateString(2)); // Doit afficher `-o`
console.log(generateString(4)); // Doit afficher `---o`
console.log(generateString(19)); // Doit afficher `------------------o`