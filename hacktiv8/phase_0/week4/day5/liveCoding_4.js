/*
HACKTIV8 Online Live Coding 4

======================
Gambler's Slot Machine
======================

[DESKRIPSI]

Seorang pejudi melakukan pemutaran Slot Machine. Slot machine adalah sebuah
permainan judi kasino yang akan menghasilkan tiga angka (rangka angka hanya 1-9).

Rules:
1. Apabila ia mendapatkan 3 angka dengan nilai yang berbeda, ia kalah.
    Contoh:
    a. hasil Slot Machine adalah 1, 2, dan 3. Ia kalah.
2. Apabila ia mendapat 2 angka yang sama, ia akan mendapat cash sebesar total dari
setiap angka dikalikan dengan 100.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 2.
        Ia akan mendapat cash sebesar (1 + 1 + 2) * 100 = 400
    b.  hasil Slot Machine adalah 3, 5, dan 3.
        Ia akan mendapat cash sebesar (3 + 5 + 3) * 100 = 1100
3. Apabila ia mendapat 3 angka yang sama, ia akan mendapat cash sebesar total angka
tersebut dikalikan dengan 200.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 1.
        Ia akan mendapat cash sebesar (1 + 1 + 1) * 200 = 600
    b.  hasil Slot Machine adalah 3, 5, dan 3.
        Ia akan mendapat cash sebesar (3 + 3 + 3) * 200 = 1800

[INSTRUKSI]

Tersedia sebuah function bernama evaluateSlotMachine yang menampung satu parameter,
berupa array yang berisikan tiga nilai hasil keluaran dari slot machine.

Buatlah sebuah function yang akan mengembalikan string berupa
"YOU WIN X DOLLARS" apabila tidak kalah, dimana X merupakan cash yang dimenangkan pejudi,
atau "YOU LOSE" apabila kalah (mendapatkan tiga angka berbeda dari slot machine).
*/

function evaluateSlotMachine(diceResultArr) {

    var arr = [];
    var total = 0;
    var num1 = 0;
    var num2 = 0;

    for (var i = 0; i < diceResultArr.length; i++) {
        if (arr.indexOf(diceResultArr[i]) === -1) {
            arr.push(diceResultArr[i]);
        }
    }

    if (arr.length === 3) {
        return 'YOU LOSE';
    }

    if (arr.length === 2) {
        for (var k = 0; k < 10; k++) {
            if (arr[0] === k) {
                num1 = arr[0]
            }
            if (arr[1] === k) {
                num2 = arr[1]
            }
        }
        total = (num1 + num2) * 100
        return "YOU WIN " + total + ' DOLLARS';
        total = 0;
    }

    if (arr.length === 1) {
        for (var l = 0; l < 10; l++) {
            for (var m = 0; m < 10; m++) {
                if (arr[l] === m) {
                    total = (arr[l] * 3) * 200
                    return "YOU WIN " + total + ' DOLLARS';
                }
            }
        }
        total = 0
    }
}

console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 300 DOLLARS"
console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS"
console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS"
console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 900 DOLLARS"
console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE"
