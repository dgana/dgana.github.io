function SwapCase(str) {
    var result = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase()
        } else if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase()
        }
    }
    return result;

}

// keep this function call here
SwapCase(readline());
