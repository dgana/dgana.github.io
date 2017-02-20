/*
HACKTIV8 Online Live Coding 1

Nama: Ida Bagus Chahya Dhegana

============
The Gamblers
============

Seorang pejudi melakukan mengocokan dadu sebanyak tiga kali.
Ia akan mendapat cash sebesar 100 dikalikan dengan jumlah angka
yang keluar dari dadu, apabila bukan 1.

Apabila keluar angka 1, ia akan mendapatkan denda cash senilai 1000.
Hasil tiga kali pengocokan dadu akan dimasukkan ke dalam array, yang
menjadi parameter ke fungsi rollDice.

rollDice adalah sebuah function yang menerima satu parameter berupa array.
Isi dari array pasti 3 nilai yang merupakan nilai dari dadu. Kamu tidak
perlu melakukan validasi nilai dadu lagi.

Contoh 1:
hasil dadu = [2, 3, 4]
cash = (2 * 100) + (3 * 100) + (4 * 100) = 900

Contoh 2:
hasil dadu = [3, 3, 1]
cash = (3 * 100) + (3 * 100) + (1 * -1000) = -400

Contoh 3:
hasil dadu = [1, 6, 6]
cash = (1 * -1000) + (6 * 100) + (6 * 100) = 200
*/

function rollDice(arr){
	var cash = 0;
	for(i = 0; i < arr.length; i++){
		  if(arr[i] !== 1){
				var dadu = arr[i]
				cash += (dadu * 100);
			} else {
				var dadu = arr[i]
				cash += (1 * -1000)
			}
	}
	return cash
}

var diceResults1 = [2, 3, 4];
console.log(rollDice(diceResults1));

var diceResults2 = [3, 3, 1];
console.log(rollDice(diceResults2));

var diceResults3 = [1, 6, 6];
console.log(rollDice(diceResults3));
