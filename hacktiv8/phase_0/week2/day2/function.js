// Tugas 1 Function
function shoutout(){
	var kata = "Halo Function!";
	return kata;
}
console.log(shoutout());

// Tugas 2 Function
function calculateMultiply(angka1, angka2){
	return angka1 * angka2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// Tugas 3 Function
function processSentence(nama, umur, alamat, hobby){
	var sentence = "Nama saya "+nama+", umur saya "+umur+" tahun, alamat saya di ";
	sentence += alamat+", dan saya punya hobby yaitu "+hobby+"!";
	return sentence
}

var name      = "Agus";
var age       = 30;
var address   = "Jln. Malioboro, Yogjakarta";
var hobby     = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
