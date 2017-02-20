var Object1 = {
    hari: 'Senin',
    kehadiran: 'Masuk',
    alasan: ''
}

var Object2 = {
    hari: 'Rabu',
    kehadiran: 'Masuk',
    alasan: ''
}

var Object3 = {
    hari: 'Jumat',
    kehadiran: 'Absen',
    alasan: 'Dinas Luar'
}

var array = [];
array.push(Object1, Object2, Object3);

for(var i = 0; i < array.length; i++){

	// Jika Alasan kosong maka jangan ditampilkan
	if (array[i].alasan === "") {
		console.log("Hari: "+array[i].hari+'\n Kehadiran: '+array[i].kehadiran);

	// Jika ada alasan maka tampilkan
	} else {
		console.log("Hari: "+array[i].hari+'\n Kehadiran: '+array[i].kehadiran+'\n Alasan: '+array[i].alasan);
	}
}

console.log('\n\n');

var masuk = 0;
var absen = 0;
var hariKerja = 0;

for(var i = 0; i < array.length; i++){

	// Cek total kehadiran
	if (array[i].kehadiran === "Masuk") {
		masuk += 1;
	} else {
		absen += 1;
	}

	// Cek total hari kerja berdasarkan nama hari
	if (array[i].hari === "Senin" || array[i].hari === "Rabu" || array[i].hari === "Jumat"){
		hariKerja += 1;
	}
}

console.log("Total Hari kerja minggu ini: "+hariKerja+' hari\n Total Masuk: '+masuk+' hari\n Total Tidak Masuk: '+absen+' hari');
