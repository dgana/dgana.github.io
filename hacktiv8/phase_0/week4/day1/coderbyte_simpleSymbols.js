function SimpleSymbols(str) {

    var regex1 = /^[a-z]/
    if (str.match(regex1)) {
        return false;
    }

    var regex = /\W\w\W/g;
    var string = str.match(regex);
    var total = 0;

    for (var i = 0; i < string.length; i++)
        if (string[i].search(/\=\w\+/) >= 0 || string[i].search(/\+\w\=/) >= 0) {
            total += 1;
        } else if (string[i] === '') {
        return false;
    }

    // if (string[i] === string[i].match(/\+\w\+/) || string[i] === string[i].match(/\=\w\=/)){
    //     total += 1;
    // }

    return (total > 0) ? false : true;
}

// keep this function call here
SimpleSymbols(readline());
