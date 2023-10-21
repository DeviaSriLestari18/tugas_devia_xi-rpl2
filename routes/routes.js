// import express
import  express  from "express";

// init express router
const router = express.Router();

router.get('/Biodata/:nama/:tempat_lahir/:tanggal_lahir/:jenis_kelamin/:agama/:alamat/:telepon/:email/:hobi/:cita_cita', (req, res) => {
    var nama = req.params.nama;
    var tempat_lahir= req.params.tempat_lahir;
    var tanggal_lahir=req.params.tanggal_lahir;
    var jenis_kelamin=req.params.jenis_kelamin;
    var agama=req.params.agama;
    var alamat=req.params.alamat;
    var telepon=req.params.telepon;
    var email=req.params.email;
    var hobi=req.params.hobi;
    var cita_cita=req.params.cita_cita;
    res.send(
        'nama: ' + nama + '<br>' +
        'tempat lahir: ' + tempat_lahir + '<br>' +
        'tanggal lahir: ' + tanggal_lahir + '<br>' +
        'jenis kelamin: ' + jenis_kelamin + '<br>' +
        'agama: ' + agama + '<br>' +
        'alamat: ' + alamat + '<br>' +
        'telepon: ' + telepon + '<br>' +
        'email: ' + email + '<br>' +
        'hobi: ' + hobi + '<br>' +
        'cita cita: ' + cita_cita 
    );
    });

    router.get('/aritmatika', (req, res) => {
        var bilangan1 = 10;
        var bilangan2 = 5; 
        var tambah = bilangan1 + bilangan2;
        var bilangan3 = 15;
        var bilangan4 = 10;
        var kurang = bilangan3 - bilangan4;
        var bilangan5 = 20;
        var bilangan6 = 5;
        var bagi = bilangan5 / bilangan6;
        var bilangan7 = 20;
        var bilangan8 = 6;
        var kali = bilangan7 * bilangan8
        res.send(
             '<h3>Penjumlahan</h3>' +
             'Bilangan ke 1 : ' + bilangan1 + '<br>' +
             'Bilangan ke 2 : ' + bilangan2 + '<br>' +
             'Hasil : ' + tambah + '<hr>' +

             '<h3>Pengurangan</h3>'+
             'Bilangan ke 3 : ' + bilangan3 + '<br>' +
             'Bilangan ke 4 : ' + bilangan4 + '<br>' +
             'Hasil : ' + kurang + '<hr>' +

             '<h3>Pembagian</h3>' +
             'Bilangan ke 5: ' + bilangan5 + '<br>' +
             'Bilangan ke 6: ' + bilangan6 + '<br>' +
             'Hasil: ' + bagi + '<hr>' +
             
             '<h3>Perkalian</h3>' +
             'Bilangan ke 7: ' + bilangan7 + '<br>' +
             'Bilangan ke 8: ' + bilangan8 + '<br>' +
             'Hasil: ' + kali +'<hr>'
        );
    });

    router.get('/bangun_datar', (req, res) => {
        var sisi1= 5;
        var sisi2= 5;
        var persergi = sisi1 * sisi2 ;
        var panjang= 10;
        var lebar= 5 ;
        var persergi_panjang= panjang * lebar;
        var alas= 6;
        var tinggi= 5;
        var segitiga= alas * tinggi / 2;
        var v= 3.14;
        var jari= 2;
        var lingkaran= v * jari * jari;
        res.send(
            '<h3>Persegi</h3>' +
            'sisi1 : ' + sisi1 + '<br>' +
            'sisi2 : ' + sisi2 + '<br>' +
            'Hasil : ' + persergi + '<hr>' +

            '<h3>Persegi Panjang</h3>' +
            'panjang : ' + panjang + '<br>' +
            'lebar : ' + lebar + '<br>' +
            'Hasil : ' + persergi_panjang+ '<hr>' +

            '<h3>segitiga</h3>' +
            'alas : ' + alas + '<br>' +
            'tinggi : ' + tinggi + '<br>' +
            'Hasil : ' + segitiga+ '<hr>' +

            '<h3>Lingkaran</h3>' +
            'v : ' + v + '<br>' +
            'jari : ' + jari + '<br>' +
            'Hasil : ' + lingkaran+ '<hr>' 
        );
    });   

    router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
        var nama=req.params.nama;
        var kelas= req.params.kelas;
        var pts = parseInt(req.params.pts);
        var pas = parseInt(req.params.pas);

        var rapot = (pts+pas) /2;

        if(rapot >= 90 && rapot <= 100) {
           var grade = "Grade A";
        } else if (rapot >= 80) {
            var grade = "Grade B";
        } else if (rapot >= 70) {
            var grade = "Grade C";  
        } else if (rapot >= 60) {
            var grade = "Grade D";
        } else if (rapot >= 50) {
            var grade = "Grade E";
        }else if (rapot >= 0) {
            var grade = "Belajar yang rajin lagi !!!";
        } else {
            var grade = "Nilai Tidak Valid" ;
        }    
        res.send(
            'Nama : ' + nama + '<br>' +
            'Kelas : ' + kelas + '<br>' +
            'Nilai PTS : ' + pts + '<br>' +
            'Nilai PAS : ' + pas + '<br>' +
            'Nilai Rapot : ' + rapot + '<br>' +
            'keterangan: ' + grade     
        );
    });   
    router.get ('/bersarang/:nama/:jurusan/:kelas', (req, res) => {
        var nama = req.params.nama;
        var jurusan = req.params.jurusan;
        var kelas = req.params.kelas;

        if (jurusan == 'RPL') {
            if (kelas == '10 RPL') {
                var ket = "Anda Kelas 10 RPL";
            } else if (kelas == '11 RPL') {
                var ket = "Anda Kelas 11 RPL" ;
            } else if (kelas == '12 RPL') {
                var ket ="Anda Kelas 12 RPL";
            } else {
                var ket ="Anda Sudah Alumni ";
            }
        }        
        if (jurusan == 'TKRO') {
            if (kelas == '10 TKRO') {
                var ket = "Anda Kelas 10 TKRO";
            } else if (kelas == '11 TKRO') {
                var ket = "Anda Kelas 11 TKRO";
            } else if (kelas == '12 TKRO') {
                var ket = "Anda Kelas 12 TKRO";
            } else {
                var ket ="Anda Sudah Alumni ";
            }
        }
        if (jurusan == 'TBSM') {
            if (kelas == '10 TBSM') {
                var ket = "Anda Kelas 10 TBSM";
            } else if (kelas == '11 TBSM') {
                var ket = "Anda Kelas 11 TBSM";
            } else if (kelas == '12 TBSM') {
                var ket = "Anda Kelas 12 TBSM";
            } else {
                var ket ="Anda Sudah Alumni ";
            }
        }

        res.send(
            'Nama : ' + nama + '<br>' +
            'Jurusan : ' + ket

        );
    }); 
    
    router.get ('/latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => {
        var nama = req.params.nama;
        var tanggal = req.params.tanggal;
        var jenis = req.params.jenis;
        var pesanan = req.params.pesanan;
        var jumlah = req.params.jumlah;

        if (jenis == 'makanan') {
            if (pesanan == 'nasi goreng') {
                var harga = "20000";
            } else if (pesanan == 'mie goreng') {
                var harga  = "30000";
            } else if (pesanan == 'ayam goreng') {
                var harga = "40000"
            } else {
                var harga = "tidak tersedia";
            }
        }
        if (jenis == 'minuman') {
            if (pesanan == 'air mineral') {
                var harga = "10000";
            } else if (pesanan == 'jus') {
                var harga = "20000";
            } else if (pesanan == 'kopi') {
                var harga = "30000"
            } else {
                var harga = "tidak tersedia";
            }
        }

        var total = jumlah * harga ;
        if (total >= 100000) {
            var diskon = total * 0.5;
        } else {
            var diskon = 0
        }
        var total_pembayaran = total - diskon;


        res.send(
            '<h3>Starbucks Lokal</h3>' +
            'Nama_pembeli: ' + nama+ '<br>' +
            'Tanggal: ' + tanggal + '<br>' +
            'Jenis: ' + jenis + '<br>' +
            'Pesanan: ' + pesanan + '<br>' +
            'Harga: ' + harga + '<br>' +

            '--------------------------------'+'<br>'+

            'Jumlah : ' + jumlah + '<br>' +
            'Total : ' + total + '<br>' +
            'Diskon: ' + diskon + '<br>' +
            'Total_pembayaran: ' + total_pembayaran 
        );
    });    

    router.get('/sample', (req, res) => {

        res.send(
            '<h3>Selamat Datang</h3>'
        );
       
    });    

    // export default router
    export default router;