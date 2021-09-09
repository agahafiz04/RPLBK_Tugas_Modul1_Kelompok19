var Coba = () => {

    // Ternary Operation dan Arrow Function

    yourName = document.getElementById("yourName").value;
    (yourName == "" || !yourName) ? alert("Silakan isi Nama anda terlebih dahulu") : 
     alert("Selamat Datang Di Website Ini"+" "+ yourName)
     window.location.href = "Home.html";  
}

function hitung() {
    var absen = parseFloat(document.getElementById("absen").value);
    var tugas = parseFloat(document.getElementById("tugas").value);
    var uts = parseFloat(document.getElementById("uts").value);
    var uas = parseFloat(document.getElementById("uas").value);
    var hasil = (absen + tugas + uts + uas) / 4;
    document.getElementById("nilai_akhir").value = hasil;
    console.log(hasil);

    var arrow = (absen, tugas, uts, uas) => absen + tugas + uas + uts;
    console.log("Jumlah Total Nilai " + arrow(absen, tugas, uas, uts));

    // Menyimpan Hasil Ke-Dalam Array
    var nilai = [absen, tugas, uts, uas];

    // Array Foreach
    nilai.forEach((nomor, index, array) => {
        array[index] = nomor
    })
    console.log("Isi Nilai Dalam Fungsi Array ForEach " + nilai);

    // Array Reduce
    var sum = nilai.reduce((total, value) => total + value, 20); // kita dpt mengganti 0 dengan nilai lain untuk mendapatkan hasil penjumlahan yang berbeda
    console.log("Hasil Penjumlahan Menggunakan Reduce " + sum); // Output: 15

    //Array Map

    // membuat array baru dari array nilai untuk memeriksa apakah setiap elemennya bernilai habis dibagi 2 atau tidak
    console.log("Array Map: ") 
    const mapedArray = nilai.map(item => item % 2 === 0);
    console.log(mapedArray); // output: [false, true, false, true, false, true, false, true, false]

    // membuat array baru dari array nilai untuk melakukan operasi perkalian 2 pada setiap elemennya
    const multipleOfTwo = nilai.map(e => e * 2);
    console.log(multipleOfTwo); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18]


    //Array Filter
    // membuat array baru dari array nilai yang isinya adalah bilangan habis dibagi 2
    const filteredArray = nilai.filter(item => item % 2 === 0);
    console.log("Array Filter: ")
    console.log(filteredArray) // Output: [2, 4, 6, 8]

    //promise
    console.log("Promise: ")
    new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Nilai Uas Adalah "+ uas), 1000); 
    })
    .then(function(result) {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Nilai Uts Adalah " +uts), 1000);
        });
    })
    .then(function(result) {
    console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Nilai Tugas Adalah "+ tugas), 1000);
        });
    })
    .then(function(result) {
        console.log(result);
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve("Nilai Absen Adalah "+ absen), 1000);
            });
        })
    .then(function(result) {
        console.log(result);
        console.log(Promise);
    });
  }