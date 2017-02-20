function AlphabetSoup(str) {
    var string = str.split('').sort().join('').trim();
    return string;
}

// keep this function call here
AlphabetSoup(readline());
