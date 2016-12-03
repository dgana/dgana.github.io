function DashInsert(str) {

    var arr = str.split('');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
            arr.splice(i + 1, 0, '-');
        }
    }
    return arr.join('');
}

// keep this function call here
DashInsert(readline());
