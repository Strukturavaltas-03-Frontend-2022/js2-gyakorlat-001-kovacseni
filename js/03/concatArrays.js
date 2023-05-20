
function concatArrays(char, ...arrays) {
    let result = getConcattedArray(arrays);
    result = removeRepeatedElements(result);
    result = removeStringsStartingWith(result, char);
    result = removeWhitespaces(result);
    console.log(result);
    return result;
}

function getConcattedArray(arrays) {
    let result = [];
    for (let index in arrays) {
        for (let key in arrays[index]) {
            result.push(arrays[index][key]);
        }
    }
    return result;
}

function removeRepeatedElements(arrays) {
    return new Set(arrays);
}

function removeStringsStartingWith(arrays, char) {
    let result = [];
    arrays.forEach(element => {
        if (typeof element != "string") {
            result.push(element);
        }
        if (typeof element == "string" && !(element).includes(char)) {
            result.push(element);
        }
    });
    return result;
}

function removeWhitespaces(arrays) {
    for (let index in arrays) {
        if (typeof arrays[index] == "string") {
            arrays[index] = (arrays[index]).trimEnd();
        }
    }
    return arrays;
}

export default concatArrays;