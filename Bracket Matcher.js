function BracketMatcher(str) {

    var apertura = 0;
    var cierre = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(') apertura++;
        if (str[i] == ')') cierre++;
    }
    if (cierre == apertura) return 1;
    return 0;
}
// keep this function call here 
console.log(BracketMatcher("(c(oder)) b(yte)"));