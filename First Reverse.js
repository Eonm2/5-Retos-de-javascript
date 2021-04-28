function FirstReverse(str) {
    // code goes here
    let cadena = str;
    let x = str.length;
    str = "";
    while (x >= 0) {
        str = str + cadena.charAt(x);
        x--;
    }
    return (str);
}

// keep this function call here 
console.log(FirstReverse("Ejercicio1"));