/*
HACKTIV8 Online Live Coding 2

Nama:

===============
The ABC Murders
===============

Sebuah detektif bernama Poirot sedang melacak pelaku
pembunuhan yang membunuh orang yang seluruh awal nama-nya
mengandung huruf yang sama dengan awal nama kota. Nama kota
hanya akan mengandung satu kata, tidak lebih.

Misalkan nama kotanya "A"ndover, maka awal nama kota = A.
Seseorang dengan nama "A"lice "A"scher, yang nama depan dan belakangnya
mengandung A, akan menjadi target pembunuhan.

Di kota yang sama, "M"ichael "A"methyst, karena nama belakangnya A
namun nama depannya M, maka tidak menjadi target pembunuhan.

Contoh Pola pembunuhan pelaku:

Nama:Alice Ascher,            Kota:Andover   => true
Nama:Betty Barnard,           Kota:Bexhill   => true
Nama:Charlotte Clarke,        Kota:Churston  => true
Nama:Charlotte Clarke,        Kota:Bexhill   => false
Nama:Michael Amethyst,        Kota:Andover   => false
Nama:Betty Barnard,           Kota:Texhill   => false
Nama:Betty Barnard Barnacle,  Kota:Bexhill   => true
Nama:Cathy Barnard Barnacle,  Kota:Bexhill   => false

Buatlah sebuah fungsi bernama isKillerTarget!
isKillerTarget adalah sebuah function yang menerima satu parameter berupa
string dengar format "Nama:[NAMA LENGKAP],Kota:[NAMA KOTA]".

Sample input 1: "Nama:Alice Ascher,Kota:Andover"
Hasil: true

Sample input 2: "Nama:Michael Amethyst,Kota:Andover"
Hasil: false
*/

function isKillerTarget(civilianIDParam) {

	var nama  = civilianIDParam.slice(5,6)
	var kota1 = civilianIDParam.split('Kota:');
	var kota  = kota1[1].slice(0,1);

	if(nama === kota){
		return true
	} else {
		return false;
	}

}

/* Solution From Pak Adhywinata

function isKillerTarget(civilianID) {
  var splittedID    = civilianID.split(",");
  var nameTemplate  = splittedID[0].split(":");
  var townTemplate  = splittedID[1].split(":");
  var realName      = nameTemplate[1].split(" ");
  var realTown      = townTemplate[1];
  var townInitial   = realTown[0];

  for(var i = 0; i < realName.length; i++) {
    if(realName[i][0] !== townInitial) return false;
  }

  return true;
}

*/

var civilianID1 = "Nama:Alice Ascher,Kota:Andover";
console.log(isKillerTarget(civilianID1));

var civilianID2 = "Nama:Michael Amethyst,Kota:Andover";
console.log(isKillerTarget(civilianID2));
