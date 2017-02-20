function Palindrome(str){
	var reverse = str.toLowerCase().split('').reverse().join('');
	var string  = str.toLowerCase();

	return (reverse === string) ? true : false;
}

console.log(Palindrome('Racecar'));
