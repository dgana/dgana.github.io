function PrimeTime(num) {
    for (var i = 2; i <= num; i++) {
        return (num % i !== 0) ? true : false
    }
}


// keep this function call here
PrimeTime(readline());
