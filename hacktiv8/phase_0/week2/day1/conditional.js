// Isilah nama dan peran dibawah ini
// nama = "Gana" && peran = "Ksatria" || nama = "Toar" && peran = "Tabib" || nama = "Rino" && peran = "Penyihir"

var nama = '', peran = '';

// Conditional Statement for Proxytia Game

if (nama === 'Gana' && peran === 'Ksatria'){
  console.log('"Selamat datang di dunia Proxytia Gana", "Halo Ksatria Gana, kamu dapat menyerang dengan senjatamu!"');
}
else if (nama === 'Toar' && peran === 'Tabib'){
  console.log('"Selamat datang di dunia Proxytia Toar", "Halo Tabib Toar, kamu akan membantu temanmu yang terluka."');
}
else if (nama === 'Rino' && peran === 'Penyihir' ){
  console.log('"Selamat datang di dunia Proxytia Rino", "Halo Penyihir Rino, ciptakan keajaiban yang membantu kemenanganmu."');
}
else{
  console.log('"Nama tidak boleh kosong", "Pilih peranmu untuk memulai game"');
}
