function LargestPair(num){
	var angka  = num.toString();
	// var angka1 = '';
	// var angka2 = '';
	// var angka3 = 0;
	var result = 0;

	for(i = 0; i < angka.length; i++){
		angka1 = angka[i];
		angka2 = angka[i+1];
		angka3 = Number(angka1 + angka2);

		if(angka3 > result){
			result = angka3;
		}
	}

	return result;
}

console.log(LargestPair(4782547281));
