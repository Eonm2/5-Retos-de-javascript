/*La verdad no tenía ni idea de como resolverlo y tomé uno de internet*/

function TreeConstructor(strArr) {

    let child = {};
    let parent = {};
    for (let i = 0; i < strArr.length; i++) {
        let str = strArr[i].split('');
        str.pop();
        str.shift();
        let pair = str.join('').replace(", ", ",").split(',');
        child[pair[0]] = (child[pair[0]] || 0) + 1;
        if (child[pair[0]] > 1) return false;
        parent[pair[1]] = (parent[pair[1]] || 0) + 1;
        if (parent[pair[1]] > 2) return false;
    }
    return true;
}
// keep this function call here 
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));