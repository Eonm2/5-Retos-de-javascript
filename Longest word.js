function LongestWord(sen) {


    var palabras = sen.match(/\w+/g);

    var masLarga = palabras[0];

    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > masLarga.length) {
            masLarga = palabras[i];
        }
    }

    return masLarga;
}

// keep this function call here 
console.log(LongestWord("La palabra mas larga"));