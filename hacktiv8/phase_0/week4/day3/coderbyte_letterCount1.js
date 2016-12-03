function LetterCountI(str) {

    var string = str.toLowerCase().split(' ');
    var arr = [];
    var totalArr = [];

    for (var i = 0; i < string.length; i++) {
        arr[i] = [];
        for (var j = 0; j < string[i].length; j++) {
            if (arr[i].indexOf(string[i][j]) === -1) {
                arr[i].push(string[i][j]);
            }
        }
    }

    for (var k = 0; k < string.length; k++) {
        var tes = string[k].length - arr[k].length;
        totalArr[k] = tes;
    }

    var copyTotalArr = totalArr.slice();
    copyTotalArr.sort(function(a, b) {
        return b - a
    })
    var highestNum = copyTotalArr[0];

    var result = totalArr.indexOf(highestNum);

    return (copyTotalArr[0] === 0) ? -1 : string[result];
}

// keep this function call here
LetterCountI(readline());
