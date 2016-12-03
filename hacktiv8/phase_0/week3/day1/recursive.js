function deretAngka(num) {
	if(num === 1){
		return 1;
	}
	else{
		return num * deretAngka(num - 1);
	}
}

console.log(deretAngka(5));

function bedaAngka(num1, num2) {
	if(num1 < 1){
		return 1;
	}
	else{
		return num1 * bedaAngka(num1 - num2, num2)
	}
}

console.log(bedaAngka(12, 5));
