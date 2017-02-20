function LongestWord(sen) {

    var string = sen.split(/[\W\s]/);
    var current = 0;
    var longest = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i].length > current) {
            current = string[i].length;
            longest = string[i];
        }
    }

    return longest;

}

// keep this function call here
console.log(LongestWord(Hello World));
