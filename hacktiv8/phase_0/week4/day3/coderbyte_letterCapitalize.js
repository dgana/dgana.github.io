function LetterCapitalize(str) {
    var string = str.toLowerCase();
    var words = string.split(' ');

    for (i = 0; i < words.length; i++) {
        var letters = words[i].split('')
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join('');
    }

    return words.join(' ');
}

// keep this function call here
LetterCapitalize(readline());
