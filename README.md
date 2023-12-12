# Tugas Penilaian 2 Keamanan Jaringan Komputer Kelompok 4: Scrambled-web

Nama Anggota:

- Rifqi Akhmad Maulana   (5027211035)
- Naufal Ammar Saputra   (5027211052)
- Oktavia Anggraeni P    (5027211001)
- Dyas Amorita Radhwa N  (5027211009)
- Anisa Ghina Salsabila  (5027211062)

## Penjelasan Proyek Scramble
Keamanan metadata dalam suatu file merupakan hal yang sangat penting, karena metadata dapat mengandung informasi rinci tentang file tersebut, termasuk aspek sensitif seperti waktu pembuatan, pemilik, dan riwayat modifikasi. Untuk menjaga privasi dan mencegah potensi risiko keamanan, sangat penting untuk melakukan enkripsi terhadap metadata guna melindungi informasi sensitif dan memastikan bahwa data tersebut tidak jatuh pada pihak yang tidak bertanggung-jawab.

Pada Proyek Penilaian kedua matakuliah Keamanan Jaringan Komputer, kami mengembangkan suatu website yang akan mengenkripsi metadata pada suatu file dengan enkripsi AES-256-CBC. Website tersebut mampu mengacak informasi metadata pada suatu file dan juga mengembalikan informasi metadata dari file yang sudah diacak berdasarkan kunci yang sesuai.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
### Compile pada folder `backend`

```sh
npm install
```

```sh
npm run dev
```


## Penjelasan Program

Ketika website sudah dijalankan, maka akan muncul tampilan website sebagai berikut

![Home](https://github.com/dMorran/KJK_Frontend/assets/107184933/b958c4a8-fc21-464f-b933-55207006517a)


### Tampilan saat Upload File:

![upload_1](https://github.com/dMorran/KJK_Frontend/assets/107184933/284bcc55-cbea-4923-ad54-28dadbe89641)

Pengguna dapat mengatur shift key atau mengatur kunci secara manual

![upload_2](https://github.com/dMorran/KJK_Frontend/assets/107184933/2d0007d1-6a6c-420e-b1e3-17b093706bb2)

### Download File

Berikut ini adalah tampilan ketika file berhasil di Scramble, pengguna dapat mengunduh file hasil scramble. Selain itu terdapat kunci yang nantinya akan dibutuhkan untuk melakukan 

![Download](https://github.com/dMorran/KJK_Frontend/assets/107184933/4885e395-8e8f-482f-b1b8-bff26741d9e9)


![image](https://github.com/dMorran/KJK_Frontend/assets/107184933/4db50e74-101c-4348-8f77-cbadc2d92f4a)

Pengguna dapat menyalin kunci dengan menekan tombol `copy text`

![copy](https://github.com/dMorran/KJK_Frontend/assets/107184933/b6abd308-5d16-47fc-9e1e-4d1c770b76d4)

### Hasil Scramble Metadata

Hasil dari scramble dapat dilihat melalui gambar perbandingan berikut. Bagian Kiri adalah fila yang sudah di-Scramble dan bagian kanan adalah file asli yang belum di-Scramble. Terlihat perbedaan pada tanggal pengambilan gambar, jenis perangkat yang digunakan untuk memotret, serta koordinat pengambilan gambar antara file asli dan file yang sudah di-scramble.

![perbandingan](https://github.com/dMorran/KJK_Frontend/assets/107184933/19c51dd8-6f02-45e5-babd-24b05b11b766)


### Unscramble

Fungsi fitur Unscramble adalah untuk mengembalikan informasi pada metadata yang sudah di scramble kembali seperti semula.

Langkah pertama yang dilakukan adalah mengisi form yang disediakan dengan kunci yang tadi sudah di salin.

![isi](https://github.com/dMorran/KJK_Frontend/assets/107184933/58fd5dc1-3d1a-457a-8f19-1544c7c29b65)

![sudahIsi](https://github.com/dMorran/KJK_Frontend/assets/107184933/22626945-1968-4272-b86f-90a7baef74bd)

Sama seperti File yang di scrambled, file yang sudah di unscramble juga dapat didownload\

![download_unscrambled](https://github.com/dMorran/KJK_Frontend/assets/107184933/3b25cb3f-f5f9-4749-ad13-895e8ac90e91)

Dapat dilihat dari gambar perbandingann dibawah ini bahwa hasil unscrambled (kiri) dapat dilihat memiliki metadata yang sama dengan file asli (kanan)

![perbandingan](https://github.com/dMorran/KJK_Frontend/assets/107184933/25cae681-12c8-4f67-927e-18f36b73ae4a)








