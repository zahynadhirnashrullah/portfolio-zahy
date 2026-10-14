# Portfolio Zahy — HTML, CSS, JavaScript

Portofolio statis yang bisa dijalankan langsung di browser. Tidak memerlukan framework atau database.

## Isi folder
- `index.html` — struktur konten.
- `style.css` — warna, layout, animasi, dan breakpoint responsive.
- `script.js` — ganti bahasa, tema, menu mobile, dan modal detail proyek.
- `assets/` — letakkan CV dan screenshot asli di sini.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka folder `portfolio-zahy` di Visual Studio Code.
3. Buka `index.html` di browser, atau pasang ekstensi **Live Server** di VS Code.
4. Jika memakai Live Server: klik kanan `index.html` → **Open with Live Server**.
5. Simpan file setelah diedit; browser akan memuat ulang otomatis.

## Yang wajib diganti sebelum dipublikasikan
1. `emailkamu@example.com` di `index.html` dengan email profesionalmu.
2. Link LinkedIn `https://www.linkedin.com/` di `index.html` dengan URL profilmu.
3. Link demo Armada PNM belum dipasang karena URL demo belum diberikan. Tambahkan tombol dan URL setelah siap.
4. Salin CV PDF ke `assets/cv.pdf` (nama harus persis `cv.pdf`, atau ubah tautan di HTML).
5. Masukkan screenshot asli ke `assets/`, lalu tambahkan pada kartu proyek jika diinginkan.
6. Pastikan detail sertifikat BNSP sesuai sertifikat asli.
7. Cek kembali semua deskripsi dan fitur agar hanya menyebut yang benar-benar sudah dibuat.

## Cara mengubah isi
- Teks bagian utama: edit `index.html`.
- Terjemahan Bahasa Indonesia/English: edit objek `translations` di `script.js`.
- Detail modal proyek: edit objek `projectDetails` di `script.js`.
- Warna, font, ukuran, jarak: edit variabel CSS di bagian awal `style.css`.
- Lebar breakpoint responsive: cari `@media` di `style.css`.

## Cara menambahkan screenshot
Letakkan gambar di `assets/`, misalnya `armada-dashboard.png`. Pada `index.html`, di dalam `.project-visual`, kamu dapat menambahkan:
`<img class="project-screenshot" src="assets/armada-dashboard.png" alt="Dashboard Sistem Manajemen Armada PNM">`

Lalu tambahkan CSS:
`.project-screenshot { width: 100%; height: 100%; object-fit: cover; }`

## Catatan
Gambar visual proyek saat ini adalah ilustrasi CSS buatan sendiri, bukan screenshot produk asli. Ganti dengan screenshot asli untuk versi final. Jangan mengunggah rahasia, password, token, atau data pribadi ke repositori publik.
