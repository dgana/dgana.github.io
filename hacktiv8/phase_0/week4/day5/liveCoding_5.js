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

    var strC = str.search('c');
    var strO = str.search('o');
    var strD = str.search('d');
    var strE = str.search('e');

    var c = '';
    var o = '';
    var d = '';
    var e = '';

    if (str === '') {
        return 'Charles Ox Don Euler';
    } else if (strC < strO < strD < strE) {

        for (var i = strC; i < strO; i++) {

            c += str[i];
        }

        for (var j = strO; j < strD; j++) {
            o += str[j];
        }

        for (var k = strD; k < strE; k++) {
            d += str[k];
        }

        for (var l = strE; l < str.length; l++) {
            e += str[l];
        }

        return c + ' ' + o + ' ' + d + ' ' + e;

    } else {

        return false

    }
}

console.log(analyzeDyingMessage("")); // "Charles Ox Don Euler"
console.log(analyzeDyingMessage("CODIMARIJAMO")); // false
console.log(analyzeDyingMessage("CODE")); // "C O D E"
console.log(analyzeDyingMessage("CODING")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDAN")); // false
console.log(analyzeDyingMessage("CHAMICAELOTNIELDANELLAINE")); // "Chamicael Otniel Dan Ellaine"
console.log(analyzeDyingMessage("MARIAHCHARLIEOZIEDELEANOR")); // "Mariah Charlie Ozie D Eleanor"


// function analyzeDyingMessage(code) {

//   var str = code.match(/.*[C].*[O].*[D].*[E].*/);


// 	if(str === null){ return false; }


// 	return str
// }

// console.log(analyzeDyingMessage("")); // "Charles Ox Don Euler"
// console.log(analyzeDyingMessage("CODIMARIJAMO")); // false
// console.log(analyzeDyingMessage("CODE")); // "C O D E"
// console.log(analyzeDyingMessage("CODING")); // false
// console.log(analyzeDyingMessage("CHAMICAELOTNIELDAN")); // false
// console.log(analyzeDyingMessage("CHAMICAELOTNIELDANELLAINE")); // "Chamicael Otniel Dan Ellaine"
// console.log(analyzeDyingMessage("MARIAHCHARLIEOZIEDELEANOR")); // "Mariah Charlie Ozie D Eleanor"

// var a = 'fkasnfkjsafn'
// var b = a.slice(0,4);

// console.log(b)
