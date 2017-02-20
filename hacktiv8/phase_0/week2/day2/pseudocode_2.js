// Tugas 1
var total = 0;
for(var i = 1; i <= 100; i++){
	if(i % 2 == 1){
		total +=  i;
	}
	else{
		total -= i;
	}
}
console.log("TOTAL: "+total);

// Tugas 2
var pagar = "";
for(var i = 1; i <= 10; i++){
	for(var j = 0; j <= 10; j++){
		pagar += "#";
	}
	console.log(pagar);
	pagar = "";
}

// Tugas 3
var bintang = "";
for(var i = 1; i <= 10; i++){
	for(var j = 0; j <= i; j++){
		bintang += "*";
	}
	console.log(bintang);
	bintang = "";
}
