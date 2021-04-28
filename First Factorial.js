function FirstFactorial(num) {

    // code goes here  
    for (i = num - 1; i > 0; i--) {
        num = num * i;
    }
    return num;

}

// keep this function call here 
console.log(FirstFactorial(8));