/* Tampoco pude resolverlo :( */
function BracketCombinations(num) {

    const ns = [0, 1, 2];
    for (let i = 3; i <= num; i++) {
        let sum = ns[i - 1] * 2;

        for (let j = 1; j < i - 1; j++) {
            sum += ns[j] * ns[i - j - 1];
        }
        ns.push(sum);
    }
    return ns[num];

}

// keep this function call here 
console.log(BracketCombinations(3));