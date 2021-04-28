function QuestionsMarks(str) {
    respuesta = false;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (Number(str[i]) + Number(str[j]) === 10) {
                respuesta = true;
                if (str.slice(i, j).split("?").length - 1 < 3) {
                    return false;
                }
            }
        }
    }
    return respuesta;
}

// keep this function call here 
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));