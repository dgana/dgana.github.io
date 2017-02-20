function balikString(string) {
	var reverse = '';
	for(var i = string.length - 1; i >= 0; i--){
		reverse += string[i];
	}
	return reverse;
}

var tes = "hello world!";
console.log(balikString(tes));
