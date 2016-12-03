function SimpleMode(arr) {

    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (newArray.indexOf(arr[i]) === -1) {
            newArray.push(arr[i]);
        }
    }

    var totalArray = [];

    for (var j = 0; j < newArray.length; j++) {
        totalArray[j] = 0;

        for (var k = 0; k < arr.length; k++) {
            if (newArray[j] === arr[k]) {
                totalArray[j] += 1;
            }
        }
    }

    var copyTotalArray = totalArray.slice();
    copyTotalArray.sort(function(a, b) {
        return a - b
    });
    var highestNum = copyTotalArray[copyTotalArray.length - 1]

    var result = totalArray.indexOf(highestNum);

    return (copyTotalArray[copyTotalArray.length - 1] === 1) ? -1 : newArray[result];
}

// keep this function call here
SimpleMode(readline());
