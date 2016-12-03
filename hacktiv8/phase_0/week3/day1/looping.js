function deretAngka(num) {
	if(num === 1) { return 1; }

	var result = num;

	while(num > 1){
		result *= (num - 1);
		num -= 1;
	}

	return result;
}
console.log(deretAngka(5));

function bedaAngka(num1, num2) {
	if(num1 < num2){
		return 1;
	}

  var result = num1;

  while(num1 > num2){
    result *= (num1 - num2);
    num1 -= num2;
  }

  return result;
}
console.log(bedaAngka(12, 5));
