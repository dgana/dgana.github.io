function OtherProducts(arr){
	var result = [];

	for(i = 0; i < arr.length; i++){
		var total = 1;
		for(j = 0; j < arr.length; j++){
			if(i !== j){
				total *= arr[j]
				result[i] = total;
			}
		}
	}

	return result.join('-')
}

console.log(OtherProducts([1,2,3,4,5]));
