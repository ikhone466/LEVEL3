// Fungsi JavaScript dengan nama 'salam'
// Fungsi ini menerima satu parameter, 'nama', yang diharapkan berupa string yang mewakili nama seseorang
// Ketika dipanggil, fungsi ini akan mencetak pesan salam ke konsol

function salam(nama) {
    return console.log("Halo " + nama + ", selamat pagi!");
}
/* Metode console.log digunakan untuk mencetak pesan salam ke konsol
Pesan tersebut terdiri dari bagian tetap "Halo", diikuti oleh nama yang diberikan, dan kemudian bagian tetap lainnya, ", selamat pagi!"
Contoh cara memanggil fungsi 'salam' dengan nama sebagai argumen
Ini akan mencetak "Halo John, selamat pagi!" ke konsol jika 'John' diberikan sebagai argumen */


salam('Ikhwanda');


function tambah(bilanganPertama, bilanganKedua) {
    return bilanganPertama + bilanganKedua;
}
