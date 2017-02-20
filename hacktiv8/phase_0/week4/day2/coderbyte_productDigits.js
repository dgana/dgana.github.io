function ProductDigits(num) {
    var arr = [];

    for (var i = 1; i <= 9; i++) {
        arr[i - 1] = (num / i).toString();
    }

    arr.sort(function(a, b) {
        return a.length - b.length;
    });

    var sortArr = [];
    for (var j = 0; j < arr.length; j++) {
        sortArr[j] = String(arr[j]).replace(/\./, '')
    }

    return sortArr[0].length + 1;
}

// keep this function call here
ProductDigits(readline());
