function LetterChanges(str) {

    var string = str.toLowerCase();
    var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var regex = /[\W0-9\s]/g
    var misc = string.match(regex);
    var vowel = ['a', 'i', 'u', 'e', 'o'];
    var arr = [];

    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < letter.length; j++) {
            if (letter[j] === string[i]) {
                arr.push(letter[j + 1]);
            }

            if (misc === null) {
                continue
            } else if (misc[j] === string[i]) {
                arr.push(misc[j]);
            }
        }
    }

    for (var k = 0; k < arr.length; k++) {
        for (var l = 0; l < vowel.length; l++) {
            if (arr[k] === vowel[l]) {
                arr[k] = arr[k].toUpperCase();
            }
        }
    }

    var join = arr.join('');
    var newString = join.replace(/\s+/g, ' ')
    return newString;
}

// keep this function call here
LetterChanges(readline());
