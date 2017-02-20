var tahunLahir    = 1989;
var umur          = 2016 - tahunLahir;
var playerHealth  = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster   = Math.floor(Math.pow(100, Math.random()));

// Isilah nama dan peran dibawah ini
// nama = "Gana" && peran = "Ksatria" || nama = "Toar" && peran = "Tabib" || nama = "Rino" && peran = "Penyihir"

var nama = '', peran = '';

// Conditional Statement for Proxytia Game

if (nama === 'Gana' && peran === 'Ksatria'){
  console.log('Selamat datang di dunia Proxytia, Gana');
	console.log('Halo Ksatria Gana, kamu dapat menyerang dengan senjatamu!');
}
else if (nama === 'Toar' && peran === 'Tabib'){
  console.log('Selamat datang di dunia Proxytia, Toar');
	console.log('Halo Tabib Toar, kamu akan membantu temanmu yang terluka.');
}
else if (nama === 'Rino' && peran === 'Penyihir' ){
  console.log('Selamat datang di dunia Proxytia, Rino');
	console.log('Halo Penyihir Rino, ciptakan keajaiban yang membantu kemenanganmu.');
}
else{
	peran += "Kacung";
  console.log(peran);
}

// Loop Statement for Proxytia Game

for(var i = 1; i <= tahunLahir; i++){
	if(i % umur === 0){
		console.log(peran + ' ' + nama + ' menyerang monster!');
		monsterHealth -= umur;
	}
	else if(i % kodeMonster === 0){
		console.log('monster menyerang ' + peran + ' ' + nama + '!');
		playerHealth -= kodeMonster;
	}
	else if (i % umur === 0 && i % kodeMonster === 0){
		console.log('Health keduanya bertambah');
		playerHealth  += kodeMonster;
		monsterHealth += umur;
	}
}

if(playerHealth > monsterHealth){
	console.log('Selamat, ' + peran + ' ' + nama + 'memenangkan pertarungan!');
}
else{
	console.log('Sayang sekali, ' + peran + ' ' + nama + 'dikalahkan monster...');
}
