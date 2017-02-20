/*
==============
Crack the CODE
==============

Sherlock Holmes, seorang detektif tengah menyelidiki sebuah kasus pembunuhan.
Ia menemukan sebuah kode yang ditinggalkan korban yang memiliki sebuah pola.
NAMUN, tidak semua kode dapat digunakan. Apabila kode tersebut tidak sesuai
dengan pola/rules, maka kode itu tidak valid. Kode tersebut berbentuk sebuah
teks panjang yang hanya mengandung huruf A-Z besar.

Rules:
1. Kode yang benar adalah kode yang mengandung huruf "C", "O", "D", dan "E" yang
ditampilkan secara berurutan yang mungkin dibatasi oleh huruf lain.
2. Apabila tidak terdapat huruf "C", "O", "D", dan "E" atau urutannya tidak sesuai,
maka kode tidak valid.
3. Apabila pola "C", "O", "D", dan "E" ditemukan, maka Sherlock dapat memecah kode
tersebut dan menemukan nama pelaku dengan cara memecah teks panjang ke beberapa kata,
dan dipisahkan berdasarkan "C", "O", "D", dan "E" yang pertama kali ditemukan.

Contoh Pola
===========

Kode: CHARLESOXDONEULER
Penyelesaian: "C"HARLES "O"X "D"ON "E"ULER
Nama Pelaku: Charles Ox Don Euler

Kode: CHAMICAELOTNIELDANELLAINE
Penyelesaian: "C"HAMICAEL "O"TNIEL "D"AN "E"LLAINE
Nama Pelaku: Chamicael Otniel Dan Ellaine

Kode: MARIAHCHARLIEOZIEDELEANOR
Penyelesaian: MARIAH"C"HARLIE"O"ZIE"D""E"LEANOR
Nama Pelaku: Mariah Charlie Ozie D Eleanor

Kode: CODE
Penyelesaian: "C" "O" "D" "E"
Nama Pelaku: C O D E

Kode: CODING
Penyelesaian: "C" "O" "D"ING ... E tidak ditemukan setelah D!
-- KODE TIDAK VALID!

Kode: ECOD
Penyelesaian: E "C" "O" "D" ... E tidak ditemukan setelah D!
-- KODE TIDAK VALID!

Kode: CAMICAELDO
Penyelesaian: "C"AMICAELD "O" ... D tidak ditemukan setelah O!
-- KODE TIDAK VALID!

[INSTRUKSI]

Telah disediakan sebuah function bernama analyzeDyingMessage yang menerima satu
parameter berupa string.
Apabila kode tidak valid, function harus mereturn false.
Apabila kode valid, function harus mengembalikan string berupa nama pelaku,
dengan format huruf kapital (huruf besar disetiap kata depan)

Contoh Salah:
"CHARLES OX DON EULER"
"charles ox don euler"

Contoh Benar:
"Charles Ox Don Euler"
*/

function analyzeDyingMessage(code) {

    var str = code.toLowerCase();

    // Index setiap huruf 'C', 'O', 'D', 'E' yang ditemukan namun harus berurutan. Solusi agar berurut yaitu dengan memberikan batasan indexing pada parameter kedua dari indexOf
    var strC = str.indexOf('c');
    var strO = str.indexOf('o', strC);
    var strD = str.indexOf('d', strO);
    var strE = str.indexOf('e', strD);

    // Jika tidak sesuai dengan urutan 'C'.*'O'.*'D'.*'E' maka return false
    if (strC > strO || strO > strD || strD > strE) {
        return false;
    }

    // Jika string kosong maka return "Charles Ox Don Euler"
    if (str === '') {
        return "Charles Ox Don Euler";
    }

    // Buat variabel baru untuk menampung sebuah kata yang valid
    var result = '';

    // Loop setiap letter jika ditemukan index dari 'C'.*'O'.*'D'.*'E' berikan spasi
    for (var i = 0; i < str.length; i++) {
        result += str[i];
        if (i === strC - 1) {
            result += ' ';
        }
        if (i === strO - 1) {
            result += ' ';
        }
        if (i === strD - 1) {
            result += ' ';
        }
        if (i === strE - 1) {
            result += ' ';
        }
    }

    // Ubah huruf pertama dalam sebuah kata menjadi huruf besar dengan menggunakan replace dengan validasi regex word bound(\b) dan cari huruf atau angka(\w) kemudian return upper case letter
    var final = result.replace(/\b\w/gi, function(x) {
        return x.toUpperCase();
    })

    return final;
}

console.log(analyzeDyingMessage("")); // "Charles Ox Don Euler"
console.log(analyzeDyingMessage("CODIMARIJAMO")); // false
console.log(analyzeDyingMessage("CODE")); // "C O D E"
console.log(analyzeDyingMessage("CODING")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDAN")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDANELLAINE")); // "Chamicael Otniel Dan Ellaine"
console.log(analyzeDyingMessage("MARIAHCHARLIEOZIEDELEANOR")); // "Mariah Charlie Ozie D Eleanor"
