function CodelandUsernameValidation(str) {
    // code goes here  
    var expresionR = /^[a-zA-Z]([a-zA-Z0-9_]*[a-zA-Z0-9])?$/;

    if ((str.length >= 4) && (str.length <= 25)) {
        if (str.match(expresionR)) {
            return true;
        }
    }
    return false;
}

// keep this function call here 
console.log(CodelandUsernameValidation("u__hello_world123"));