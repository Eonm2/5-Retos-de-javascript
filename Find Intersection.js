function FindIntersection(strArr) {
    var array1 = strArr[0].split(', ');
    var array2 = strArr[1].split(', ');
    strArr = [];

    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) != -1) {
            strArr.push(array1[i]);
        }
    }
    if (strArr.length === 0) {
        return 'No hay intersección';
    }
    return strArr.join(',');
}
// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));