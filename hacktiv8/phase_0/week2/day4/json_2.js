var Teman = function(nama, kabar, pekerjaan) {
	this.nama           = nama;
	this.kabar          = kabar;
	this.pekerjaan      = pekerjaan;
	this.sapa           = function (nama) {
		return console.log("Halo "+nama+", apa kabar?");
	}
	this.balasSapa      = function (nama) {
		return console.log("Halo "+nama+", kabarku "+this.kabar);
	}
	this.tanyaPekerjaan = function () {
		return console.log("Apa pekerjaanmu saat ini? ");
	}
	this.balasPekerjaan = function () {
		return console.log("Pekerjaanku saat ini adalah "+this.pekerjaan);
	}
	this.berpisah       = function (nama) {
		return console.log("Senang bertemu denganmu "+nama.nama+", semoga kamu sukses sebagai "+nama.pekerjaan);
	}
}

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);
