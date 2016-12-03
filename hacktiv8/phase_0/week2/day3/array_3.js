// Array Input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

// Buat data Output dari array variabel input
for (i = 0; i < input.length; i++) {
	console.log('');
  for (j = 0; j < input.length; j++) {
    if (j === 0) {
      console.log('Nomor ID: ' + input[i][j]);
    }
    else if (j === 1) {
      console.log('Nama Lengkap: ' + input[i][j]);
    }
		else if (j === 2) {
			console.log('TTL: ' + input[i][j] + ' ' + input[i][j+1]);
		}
		else if (j === 3) {
			console.log('Hobi: ' + input[i][j+1]);
		}
	}
}

// Line Break
console.log('\n\n');

// Buat Function untuk mengolah array lama menjadi array baru
function dataHandling (input){
  var x = [];
  for(i = 0; i <= input.length; i++) {
		x[i] = [];
    for(j = 0; j < input.length; j++) {
      x[i][j] = input[j][i];
    }
  }
  return x;
}

	console.log(dataHandling(input));

	var data = dataHandling(input);

	for(var i = 0; i < data.length; i++){
		var param3 = ['0005', 'I Made Sanadhi Sutandi', 'Denpasar', '13/9/1994', 'Belajar' ]
		var param4 = ['0006', 'Nufus', 'Muaro Bungo', '10/8/1994', 'Melukis' ]
		var param5 = ['0007', 'Sani', 'Jakarta', '19/7/1994', 'Touring' ]
		data[i].splice(3, 1, param3[i], param4[i], param5[i]);
	}

// Ambil data bulannya saja
	var date = [];
	for(var i = 0; i <= 5; i++){
		date[i] = data[3][i];
	}

// Split date menjadi beberapa array dengan Split '/'
	var splitDate = [];
	for(var i = 0; i <= 5; i++){
		splitDate[i] = date[i].split('/');
	}

// Ambil angka bulannya saja
	var bulan = [];
	for(var i = 0; i <= 5; i++){
		bulan[i] = splitDate[i][1];
	}

// Buat array nama Bulan Masehi
  var masehi = [];
  masehi.push('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');

// Ubah angka bulan menjadi nama Bulan Masehi
	var namaBulan = [];
	for(var j = 0; j < 6; j++){
		for(var i = 1; i < 13; i++) {
			if(bulan[j] == i || bulan[j] == ('0' + i).slice(-2)){
			namaBulan.push(masehi[i-1]);
			}
		}
	}

// Sorting Data dan masukkan pada setiap variabel
	var sort = [];
	for(var i = 1; i <= 4; i++){
		if(i === 3) { continue; }
		sort[i-1] = data[i].sort();
	}
	sort[2] = namaBulan.sort();

// Ambil 15 karakter pertama untuk nama
	var sliceNama = [];
	for(var i = 0; i <= 4; i++){
		sliceNama[i] = sort[0][i].slice(0, 15);
	}

// Join Data dan masukkan pada setiap variabel kecuali nama karena list
	var joinBulan = sort[2].join(',');
	var joinAlamat = sort[1].join(',');
	var joinHobi = sort[3].join(',');

// Line Break
console.log('\n\n\n');

// Tampilkan data Akhir
console.log('Daftar Nama: \n 1 - '+sliceNama[0]+'\n 2 - '+sliceNama[1]+'\n 3 - '+sliceNama[2]+'\n 4 - '+sliceNama[3]+'\n 5 - '+sliceNama[4]+'\n 6 - '+sliceNama[5]+'\n\n Semua Tempat Lahir: \n '+joinAlamat +'\n\n Semua Bulan Kelahiran: \n '+joinBulan+'\n\n Semua Hobi: \n '+joinHobi);
