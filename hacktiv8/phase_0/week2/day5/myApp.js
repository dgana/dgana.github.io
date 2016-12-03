var nama1 = {
	nama  : "Babu",
	peran : "Warrior"
}

var nama2 = {
	nama  : "Jongos",
	peran : "Assassin"
};

var array = [];
array.push(nama1,nama2);

var player = function (name, musuh, health){
	this.name   = name;
	this.musuh  = musuh;
	this.health = health;
	this.att    = Math.round(Math.random() * 100);
	this.def    = Math.round(Math.random() * 100);
	this.attack = function (sisa){
		return console.log(this.name+" Menyerang dengan attack damage: "+this.att+". Sisa HP "+this.musuh+": "+sisa);
	}
	this.defend = function () {
		return console.log(this.name+" block serangan "+this.musuh+"!");
	}
}

var player1 = new player(array[0].nama, array[1].nama, 1000);
var player2 = new player(array[1].nama, array[0].nama, 1000);

console.log("Selamat datang "+array[0].nama+" dengan class "+array[0].peran+",\ndan "+array[1].nama+" dengan class "+array[1].peran+"\nPertarungan dimulai!!\n\n");

for(var i = 1; i <= 10000; i++){

	if(i % player1.att === 0 && i % player2.def > 15){
		player2.defend();
		player2.def = Math.round(Math.random() * 100);

	} else if (i % player1.att === 0){
	  var sisa = player2.health -= player1.att;
	  player1.attack(sisa);
	  player1.att = Math.round(Math.random() * 100);
	}

	if(i % player2.att === 0 && i % player1.def > 15){
		player1.defend();
		player1.def = Math.round(Math.random() * 100);

	} else if (i % player2.att === 0){
	  var sisa = player1.health -= player2.att;
	  player2.attack(sisa);
	  player2.att = Math.round(Math.random() * 100);
	}

	if(player1.health < 0 ){
		console.log("Maaf "+player1.name+" kalah dalam pertarungan...");
		break;
	}
	if(player2.health < 0 ){
		console.log("Maaf "+player2.name+" kalah dalam pertarungan...");
		break;
	}
}
