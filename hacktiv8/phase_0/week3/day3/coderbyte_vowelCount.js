function VowelCount(str){
	var string = str.toLowerCase();
	var vowel = ['a', 'i', 'u', 'e', 'o'];
	var count = 0;

	for(i = 0; i < str.length; i++){
		for(j = 0; j < vowel.length; j++){
			if(string[i] === vowel[j]){
				count += 1;
			}
		}
	}
	return count;
}

console.log(VowelCount('All cows Eat grass and moo!'));
