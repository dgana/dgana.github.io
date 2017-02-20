function ABCheck(str) {

    var regex = /[a|A][\w\s][\w\s][\w\s][b|B]/;
    var abCheck = str.match(regex);

    return (abCheck) ? true : false;
}

// keep this function call here
ABCheck(readline());
