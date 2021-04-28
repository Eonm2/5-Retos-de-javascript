// No lo pude realizar, revisé varios códigos para intentar entender

function MinWindowSubstring(strArr) {

    const [strN, strK] = strArr;
    const letters = {};

    for (let i = 0; i < strK.length; i++) {
        if (letters[strK[i]]) {
            letters[strK[i]]++;
        } else {
            letters[strK[i]] = 1;
        }
    }

    const match = [];
    for (let i = 0; i < strN.length; i++) {
        if (letters[strN[i]]) {
            match.push([strN[i], i]);
        }
    }

    const size = Object.keys(letters).length;
    let length = 50;
    let result = "";
    for (let i = 0; i < match.length - size + 1; i++) {
        let j = i, flag = size, lettersTmp = Object.assign({}, letters);
        while (flag != 0 && j < match.length) {
            if (lettersTmp[match[j][0]]) {
                --lettersTmp[match[j][0]];
                if (lettersTmp[match[j][0]] === 0) {
                    flag--;
                }
            }
            ++j;
        }

        if (flag === 0) {
            let tmp = match[j - 1][1] - match[i][1] + 1;
            if (length > tmp) {
                length = tmp;
                result = strN.substr(match[i][1], length)
            }
        }
    }

    return result;

}

// keep this function call here 
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));