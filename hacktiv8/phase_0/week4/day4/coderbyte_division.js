function Division(num1, num2) {
    var num = []
    num.push(num1);
    num.push(num2)
    num.sort(function(num1, num2) {
        return num2 - num1
    });

    for (var i = num[0]; i > 0; i--) {
        if (num[0] % i === 0 && num[1] % i === 0) {
            return i;
        }
    }
}

// keep this function call here
Division(readline());
