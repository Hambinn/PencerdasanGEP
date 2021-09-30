// variable

// var abc = 5
// console.log(abc);

// const kiki = "kiki rajin";
// console.log(kiki);

// let fay = "fayco rajin";
// console.log(fay);


// tipe data
// const gabut = "hambin lagi gabut";
// const char = 'u';
// const hambin = 50;
// const pecahan = 55.91111;
// const stringa = "50";
// const booelean = true;
// const bikinarray = ["bianca lagi nonton", "Kiki lagi gabut",100, 80.8];

// operasi
// + - / * %

// percabangan
// const kiki = 1000;
// const fay = 100;
// const clau = 50000;

// if(kiki > fay && kiki > clau){
//     console.log("kiki lebih pinter");
// }  else if(fay > kiki && fay > clau){
//     console.log("Fay lebih pinter");
// }else{
//     console.log("Clau lebih pinter")
// }

// loop

//for loop

// for (let i = 4; i<8; i++){
//     console.log("kiki rajin");
//     console.log(i)
// };

// while loop

// let i = 6;
// while (i < 10){
//     console.log("kiki rajin");
//     console.log(i);
//     i++;
// }


// function

// function luasPersegiPanjang(panjang, lebar){
//     let hasil = panjang*lebar
//     console.log(hasil);
// }

// luasPersegiPanjang(7, 10);

// Array
// const bikinarray = ["bianca lagi nonton", "Kiki lagi gabut",100, 80.8];
// console.log(bikinarray[1])

let dataHambin = {
    nama:  "Ilham Bintang",
    umur: "20 tahun",
    asal: "Bandung",
    ip: 4,
    luas: function(panjang,lebar){
        let hasil = panjang * lebar;
        console.log(hasil);
    },
    test: function(){
        return this.nama;
    }

}

