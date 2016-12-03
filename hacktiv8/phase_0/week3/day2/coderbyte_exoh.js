function ExOh(str){
	var string = str.toLowerCase();
	var x = 0, o = 0;

	for(i = 0; i < string.length; i++){
		(string[i] === 'x') ? x += 1 : (string[i] === 'o') ? o += 1 : null
	}

	return (x === o) ? true : false;
}

console.log(ExOh('xdefxxxzzzoooabco'));
