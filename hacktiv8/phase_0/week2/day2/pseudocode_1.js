// Tugas 1
var nama   = 'Gana';
var angka1 = 6;
var angka2 = 3;

var hasil = angka1 / angka2;
console.log("Halo "+nama+", "+angka1+" dibagi "+angka2+" adalah sama dengan "+hasil);

// Tugas 2
var alas   = 4;
var tinggi = 5;

var luas = alas * tinggi / 2;
console.log("Luas Segitiga: "+luas);

// Tugas 3
var tahun = 2016;

if(tahun % 4 === 0){
	if(tahun % 100 !== 0){
		console.log(tahun+" adalah tahun kabisat");
	}
	else{
		if(tahun % 400 === 0){
			console.log(tahun+" adalah tahun kabisat");
		}
		else{
			console.log(tahun+" adalah bukan tahun kabisat");
		}
	}
}
else{
	console.log(tahun+" adalah bukan tahun kabisat");
}
