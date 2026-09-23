Tentu. Berikut **PRD lengkap versi terbaru** yang sudah menggabungkan seluruh keputusan kita: **SMKN 12 JAKARTA, Jurusan RPL, React.js + Tailwind CSS, desain Modern Tech Minimalist bernuansa biru, Lab PK, dan Ruangan SEMUDAH**.

# PRD — Website Promosi Jurusan RPL SMKN 12 JAKARTA

## 1. Product Overview

### Nama Produk

**Website Promosi Rekayasa Perangkat Lunak — SMKN 12 JAKARTA**

### Jenis Produk

Static Single Page Website.

### Tujuan

Membangun website promosi yang memperkenalkan Jurusan **Rekayasa Perangkat Lunak (RPL) SMKN 12 JAKARTA** secara modern, profesional, dan menarik bagi calon siswa.

Website menampilkan:

* Profil RPL
* Visi dan misi
* Keunggulan
* Kompetensi
* Fasilitas
* Kegiatan siswa
* Galeri
* Prospek karier
* Prestasi lomba dan kompetisi

---

# 2. Target Pengguna

Website ditujukan untuk:

* Calon siswa SMP/MTs
* Orang tua/wali calon siswa
* Siswa SMKN 12 JAKARTA
* Guru
* Masyarakat umum

Fokus utama adalah **calon siswa** sehingga tampilan harus menarik bagi generasi muda dan memberikan gambaran bahwa RPL merupakan jurusan yang dekat dengan teknologi dan kreativitas.

---

# 3. Tech Stack

Development menggunakan:

### Frontend

* **React.js**
* **Tailwind CSS**

### Build Tool

* **Vite**

### Bahasa

* JavaScript
* JSX

### Arsitektur

Static frontend.

### Tidak menggunakan

* ❌ Backend
* ❌ Database
* ❌ PHP
* ❌ Laravel
* ❌ API eksternal
* ❌ CMS
* ❌ Authentication

Semua data dapat disimpan sebagai file JavaScript lokal.

---

# 4. Konsep Design

## Design Direction

> **Modern Tech Minimalist**

Terinspirasi dari desain referensi yang diberikan, website memiliki karakter:

* Clean
* Modern
* Minimalist
* Premium
* Technology-focused
* Edukatif
* Futuristic
* Banyak whitespace
* Rounded card
* Typography besar
* Layout asimetris

Website **tidak boleh terlihat seperti template website sekolah biasa**.

---

# 5. Color Palette

Warna utama menggunakan nuansa biru.

### Navy

```text
#111827
```

Untuk heading dan teks utama.

### Primary Blue

```text
#3157D5
```

Untuk tombol, highlight, icon, dan elemen interaktif.

### Soft Blue

```text
#E8EEFF
```

Untuk card dan highlight.

### Light Blue

```text
#F3F6FF
```

Untuk section background.

### Page Background

```text
#EEF3FA
```

### White

```text
#FFFFFF
```

Untuk content container dan card.

---

# 6. Layout Utama

Pada desktop, halaman menggunakan background biru muda dengan **content container putih besar**.

Konsep:

```text
┌───────────────────────────────────────────┐
│              BLUE BACKGROUND              │
│                                           │
│   ┌───────────────────────────────────┐   │
│   │       WHITE MAIN CONTAINER         │   │
│   │                                   │   │
│   │ Navbar                            │   │
│   │                                   │   │
│   │ Hero                              │   │
│   │                                   │   │
│   │ Tentang RPL                       │   │
│   │                                   │   │
│   │ Kompetensi                        │   │
│   │                                   │   │
│   │ Fasilitas                         │   │
│   │                                   │   │
│   │ Kegiatan                          │   │
│   │                                   │   │
│   │ Galeri                            │   │
│   │                                   │   │
│   │ Karier                            │   │
│   │                                   │   │
│   │ Prestasi                          │   │
│   │                                   │   │
│   │ Footer                            │   │
│   └───────────────────────────────────┘   │
└───────────────────────────────────────────┘
```

### Container

Desktop:

```text
max-width: 1280px
```

Border radius:

```text
32px – 40px
```

Mobile:

Content menggunakan full width dengan padding.

---

# 7. Typography

Gunakan font modern seperti:

> **Inter**

atau:

> **Manrope**

### Heading

Besar, tegas, dan clean.

Desktop:

```text
64px – 80px
```

Mobile:

```text
36px – 44px
```

### Body

```text
16px – 18px
```

Line-height sekitar:

```text
1.5 – 1.7
```

---

# 8. Navbar

Navbar bersifat sticky.

### Kiri

Logo sekolah + identitas:

```text
[LOGO]
SMKN 12 JAKARTA
REKAYASA PERANGKAT LUNAK
```

### Menu

```text
Beranda
Tentang
Kompetensi
Fasilitas
Kegiatan
Galeri
Karier
Prestasi
```

### Button

> **Jelajahi RPL →**

### Mobile

Gunakan hamburger menu.

```text
[LOGO] SMKN 12 JAKARTA              ☰
```

---

# 9. Hero Section

Hero adalah bagian pertama yang dilihat pengguna.

### Label

> **REKAYASA PERANGKAT LUNAK**

### Headline

> **Membangun Masa Depan dengan Teknologi.**

### Deskripsi

> Rekayasa Perangkat Lunak (RPL) membekali siswa dengan keterampilan teknologi, pemrograman, kreativitas, dan pengembangan berbagai solusi digital.

### CTA

> **Kenali RPL →**

### Visual

Karena foto sekolah belum tersedia, sementara dapat menggunakan placeholder visual.

Nantinya dapat diganti dengan:

* Foto siswa RPL
* Foto Lab Komputer
* Foto Lab PK
* Foto project siswa
* Visual coding

Hero menggunakan:

* Soft blue gradient
* Rounded image
* Blue glow
* Abstract technology elements

---

# 10. Tentang RPL

## Deskripsi

### Heading

> **Apa itu RPL?**

### Content

> Rekayasa Perangkat Lunak (RPL) merupakan jurusan yang mempelajari proses pengembangan perangkat lunak, mulai dari perancangan, pemrograman, hingga pengembangan aplikasi.

> Di jurusan RPL, siswa tidak hanya belajar membuat program, tetapi juga dilatih untuk berpikir logis, kreatif, sistematis, dan mampu memecahkan berbagai permasalahan menggunakan teknologi.

### Layout

Gunakan asymmetric layout:

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│ Apa itu RPL?         │ Visual teknologi    │
│                      │                      │
│ Description          │                      │
│                      │                      │
│ [Pelajari →]         │                      │
└──────────────────────┴──────────────────────┘
```

---

# 11. Visi & Misi

Gunakan dua card besar.

## Visi

> Menjadi jurusan yang menghasilkan generasi muda yang kompeten, kreatif, inovatif, dan siap berkembang di bidang teknologi informasi dan perangkat lunak.

## Misi

1. Memberikan pembelajaran teknologi dan perangkat lunak yang relevan dengan perkembangan zaman.
2. Meningkatkan kemampuan siswa dalam pemrograman dan pengembangan perangkat lunak.
3. Mendorong siswa untuk berpikir kreatif, logis, dan inovatif dalam menyelesaikan masalah.
4. Mengembangkan kemampuan siswa melalui kegiatan praktik dan project.
5. Mendorong siswa menghasilkan karya dan mengikuti berbagai lomba serta kompetisi di bidang teknologi.

---

# 12. Keunggulan RPL

Gunakan **asymmetric card layout**, bukan grid biasa.

### Keunggulan

#### Project-Based Learning

Belajar melalui project untuk mengembangkan kreativitas dan keterampilan teknologi.

#### Pembelajaran Pemrograman

Mempelajari konsep dan keterampilan pemrograman.

#### Pengembangan Website

Mempelajari pembuatan dan pengembangan website.

#### Pengembangan Aplikasi

Mempelajari proses pengembangan aplikasi.

#### Pengembangan Game

Mengembangkan kreativitas melalui pembuatan game.

#### Basis Data

Mempelajari penyimpanan dan pengelolaan data.

#### UI/UX

Mempelajari desain antarmuka dan pengalaman pengguna.

---

# 13. Mata Pelajaran / Kompetensi

Section:

> **Yang Akan Kamu Pelajari**

Kompetensi yang ditampilkan:

### KKA

Mempelajari konsep dan keterampilan yang berkaitan dengan kompetensi keahlian di bidang Rekayasa Perangkat Lunak.

### Pemrograman Web

Mempelajari pembuatan website menggunakan HTML, CSS, JavaScript, serta teknologi pendukung lainnya.

### Basis Data

Mempelajari konsep database, pengelolaan data, serta penggunaan sistem manajemen basis data.

### Pemrograman Aplikasi

Mempelajari konsep dan proses pengembangan aplikasi sesuai kebutuhan pengguna.

### Pemrograman GIM

Mempelajari proses pembuatan dan pengembangan gim menggunakan konsep pemrograman dan teknologi yang sesuai.

### UI/UX

Mempelajari dasar-dasar perancangan antarmuka dan pengalaman pengguna pada aplikasi maupun website.

---

# 14. Fasilitas

Fasilitas menjadi salah satu section utama.

Terdiri dari **tiga fasilitas utama**:

```text
FASILITAS

├── Laboratorium Komputer
├── Lab Pusat Keunggulan (PK)
└── Ruangan SEMUDAH
```

---

# 15. Laboratorium Komputer

### Deskripsi

> Laboratorium komputer menjadi salah satu fasilitas utama dalam menunjang kegiatan pembelajaran RPL.

### Kegiatan

* Praktik pemrograman
* Pengembangan website
* Pembuatan aplikasi
* Pengelolaan database
* Pengerjaan project
* Praktik pengembangan perangkat lunak

### Fasilitas

* Komputer/PC
* Jaringan internet
* Perangkat pendukung praktik
* Ruang praktik
* Perangkat lunak pembelajaran

### Design

Gunakan satu foto besar dengan informasi fasilitas di sampingnya.

---

# 16. Lab Pusat Keunggulan (PK)

## Deskripsi

> Lab Pusat Keunggulan (PK) merupakan fasilitas pendukung pembelajaran dan pengembangan kreativitas siswa yang digunakan untuk kegiatan produksi, praktik, serta pengembangan berbagai project.

### Ruangan

#### Ruang Produksi

Digunakan untuk mengembangkan dan menghasilkan berbagai produk serta project kreatif.

#### Ruang Podcast

Digunakan untuk kegiatan podcast, perekaman audio, pembuatan konten, dan kegiatan multimedia.

#### Ruang Praktik

Digunakan untuk kegiatan pembelajaran dan praktik dengan memanfaatkan berbagai perangkat teknologi.

### Fasilitas

```text
Laptop
HP
Kamera
3D Printer
PC
Peralatan Sablon Baju
Alat Press Mug
VR
Lean Bot
```

### Design

Fasilitas dibuat dalam bentuk icon/card.

Contoh:

```text
┌────────┐ ┌────────┐ ┌────────┐
│ Laptop │ │   HP   │ │ Kamera │
└────────┘ └────────┘ └────────┘

┌────────┐ ┌────────┐ ┌────────┐
│3D Print│ │   PC   │ │ Sablon │
└────────┘ └────────┘ └────────┘

┌────────┐ ┌────────┐ ┌────────┐
│Press Mug│ │   VR   │ │Lean Bot│
└────────┘ └────────┘ └────────┘
```

---

# 17. Ruangan SEMUDAH

**Ruangan SEMUDAH ditambahkan sebagai fasilitas khusus dalam website.**

Logo SEMUDAH yang telah diberikan digunakan sebagai **asset resmi section ini**.

## Nama

> **Ruangan SEMUDAH**

## Deskripsi

> Ruangan SEMUDAH merupakan ruang layanan yang menyediakan berbagai kebutuhan transaksi dan layanan digital untuk mendukung aktivitas siswa dan lingkungan sekolah.

## Layanan

### 🖨️ Fotocopy

Layanan fotokopi untuk kebutuhan dokumen dan keperluan siswa.

### 📄 Print

Layanan pencetakan dokumen dan berbagai kebutuhan cetak.

### 🎮 Top Up Game

Layanan pengisian saldo untuk kebutuhan game.

### 💳 Top Up Saldo

Layanan pengisian saldo digital.

---

## Design Ruangan SEMUDAH

Ruangan SEMUDAH dibuat sebagai **featured facility card** sehingga memiliki visual yang lebih menonjol dibanding card fasilitas biasa.

```text
┌───────────────────────────────────────────┐
│                                           │
│            [LOGO SEMUDAH]                 │
│                                           │
│           RUANGAN SEMUDAH                 │
│                                           │
│  Layanan transaksi dan kebutuhan digital  │
│  untuk mendukung aktivitas siswa.         │
│                                           │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌──────┐ │
│ │ Print  │ │Fotocopy│ │Top Up  │ │Saldo │ │
│ │        │ │        │ │ Game   │ │      │ │
│ └────────┘ └────────┘ └────────┘ └──────┘ │
│                                           │
└───────────────────────────────────────────┘
```

### Asset

Logo SEMUDAH disimpan sebagai:

```text
src/assets/logo/logo-semudah.jpeg
```

atau dikonversi ke format yang lebih optimal seperti WebP/PNG jika diperlukan.

---

# 18. Kegiatan Siswa & Ekstrakurikuler

## Kegiatan Siswa

* Praktik pemrograman
* Pengembangan website
* Pembuatan project aplikasi
* Praktik database
* Pembuatan game
* Presentasi project
* Workshop teknologi
* Pembelajaran laboratorium
* Persiapan lomba dan kompetisi

## Ekstrakurikuler

* Programming
* Web Development
* Desain
* Teknologi Informasi
* Komunitas IT
* Pengembangan project
* Multimedia dan pembuatan konten

### Design

Gunakan layout editorial dengan foto besar dan foto kecil.

Karena foto belum tersedia, gunakan placeholder terlebih dahulu.

---

# 19. Galeri Foto

Section:

> **Aktivitas di RPL**

### Kategori

```text
Semua
Laboratorium
Pembelajaran
Project
Workshop
Lomba
```

### Foto

Nantinya dapat menampilkan:

* Laboratorium Komputer
* Lab PK
* Ruang Produksi
* Ruang Podcast
* Ruang Praktik
* Kegiatan pembelajaran
* Project siswa
* Workshop
* Lomba/kompetisi
* Fasilitas

### Design

Gunakan grid/masonry layout.

```text
┌──────────────┬───────────┬───────────┐
│              │           │           │
│   Foto       │ Foto      │ Foto      │
│   Besar      │           │           │
│              │           │           │
├──────────────┼───────────┤           │
│ Foto         │ Foto      │           │
│              │           │           │
└──────────────┴───────────┴───────────┘
```

---

# 20. Prospek Karier

Section dengan background **deep navy/blue** sebagai kontras.

### Heading

> **Dari Kelas Menuju Dunia Teknologi**

### Karier

* Software Developer
* Web Developer
* Mobile Developer
* UI/UX Designer
* Database Developer
* IT Support
* Game Developer
* Wirausaha Teknologi

Setiap karier menggunakan card dengan icon sederhana dan deskripsi singkat.

---

# 21. Daftar Prestasi

Bagian ini **khusus untuk prestasi lomba dan kompetisi**.

Tidak menampilkan:

* Nama siswa
* Nama tim
* Nama lomba
* Informasi lainnya

### Data yang ditampilkan hanya:

1. **Kategori Lomba**
2. **Juara/Peringkat**
3. **Tingkat Kompetisi**
4. **Tahun Pelaksanaan**

### Tingkat Kompetisi

* Sekolah
* Kecamatan
* Kota/Kabupaten
* Provinsi
* Nasional
* Internasional

### Contoh

```text
┌───────────────────────────────┐
│ PEMROGRAMAN                   │
│                               │
│ JUARA 1                       │
│ Kota/Kabupaten                │
│ 2025                          │
└───────────────────────────────┘
```

### Filter

```text
Semua
Sekolah
Kecamatan
Kota/Kabupaten
Provinsi
Nasional
Internasional
```

---

# 22. Footer

Footer minimalis.

```text
[LOGO SEKOLAH]

SMKN 12 JAKARTA
REKAYASA PERANGKAT LUNAK

© 2026 SMKN 12 JAKARTA
```

Tidak perlu menambahkan section baru di footer.

---

# 23. Struktur Navigasi

Navbar:

```text
Beranda
Tentang
Kompetensi
Fasilitas
Kegiatan
Galeri
Karier
Prestasi
```

**Ruangan SEMUDAH tidak perlu menjadi menu navbar tersendiri**, karena merupakan bagian dari **Fasilitas**.

---

# 24. Struktur Component React

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── VisionMission.jsx
│   ├── Advantages.jsx
│   ├── Competencies.jsx
│   │
│   ├── Facilities.jsx
│   ├── ComputerLab.jsx
│   ├── PusatKeunggulan.jsx
│   ├── Semudah.jsx
│   │
│   ├── Activities.jsx
│   ├── Gallery.jsx
│   ├── Careers.jsx
│   ├── Achievements.jsx
│   ├── SectionHeading.jsx
│   └── Footer.jsx
│
├── data/
│   ├── competencies.js
│   ├── facilities.js
│   ├── activities.js
│   ├── careers.js
│   └── achievements.js
│
├── assets/
│   ├── logo/
│   │   ├── logo-sekolah.png
│   │   └── logo-semudah.jpeg
│   │
│   └── images/
│       ├── hero/
│       ├── lab/
│       ├── pk/
│       ├── semudah/
│       ├── kegiatan/
│       ├── project/
│       └── prestasi/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 25. Data Architecture

Data jangan ditulis semuanya langsung di component.

Contoh `competencies.js`:

```js
export const competencies = [
  {
    title: "KKA",
    description:
      "Mempelajari konsep dan keterampilan yang berkaitan dengan kompetensi keahlian di bidang Rekayasa Perangkat Lunak."
  },
  {
    title: "Pemrograman Web",
    description:
      "Mempelajari pembuatan website menggunakan HTML, CSS, JavaScript, serta teknologi pendukung lainnya."
  },
  {
    title: "Basis Data",
    description:
      "Mempelajari konsep database, pengelolaan data, serta penggunaan sistem manajemen basis data."
  },
  {
    title: "Pemrograman Aplikasi",
    description:
      "Mempelajari konsep dan proses pengembangan aplikasi sesuai kebutuhan pengguna."
  },
  {
    title: "Pemrograman GIM",
    description:
      "Mempelajari proses pembuatan dan pengembangan gim menggunakan konsep pemrograman dan teknologi yang sesuai."
  },
  {
    title: "UI/UX",
    description:
      "Mempelajari dasar-dasar perancangan antarmuka dan pengalaman pengguna."
  }
];
```

---

# 26. Data Ruangan SEMUDAH

```js
export const semudahServices = [
  {
    title: "Fotocopy",
    description: "Layanan fotokopi untuk kebutuhan dokumen."
  },
  {
    title: "Print",
    description: "Layanan pencetakan dokumen dan kebutuhan cetak."
  },
  {
    title: "Top Up Game",
    description: "Layanan pengisian saldo untuk kebutuhan game."
  },
  {
    title: "Top Up Saldo",
    description: "Layanan pengisian saldo digital."
  }
];
```

Logo dipanggil dari asset lokal.

---

# 27. Asset Saat Ini

Saat ini tersedia:

### Logo Sekolah

**SMKN 12 JAKARTA**

Asset yang telah diberikan digunakan sebagai logo sekolah.

### Logo SEMUDAH

Logo yang telah diberikan digunakan untuk:

> **Ruangan SEMUDAH**

### Foto

Saat ini:

> **Belum tersedia.**

Karena itu development dapat menggunakan **placeholder image** terlebih dahulu.

---

# 28. Struktur Asset Foto

Saat foto sudah tersedia:

```text
images/
│
├── hero/
│   └── hero-rpl.webp
│
├── lab/
│   └── laboratorium-komputer.webp
│
├── pk/
│   ├── ruang-produksi.webp
│   ├── ruang-podcast.webp
│   ├── ruang-praktik.webp
│   ├── laptop.webp
│   ├── kamera.webp
│   ├── 3d-printer.webp
│   └── vr.webp
│
├── semudah/
│   └── ruangan-semudah.webp
│
├── kegiatan/
│   ├── kegiatan-01.webp
│   ├── kegiatan-02.webp
│   └── kegiatan-03.webp
│
└── prestasi/
    ├── prestasi-01.webp
    └── prestasi-02.webp
```

---

# 29. Responsive Design

## Mobile

```text
Navbar
↓
Hero
↓
Tentang
↓
Visi & Misi
↓
Keunggulan
↓
Kompetensi
↓
Laboratorium
↓
Lab PK
↓
SEM​​UDAH
↓
Kegiatan
↓
Galeri
↓
Karier
↓
Prestasi
↓
Footer
```

Semua card menjadi satu atau dua kolom sesuai ukuran layar.

---

# 30. Animation

Animasi harus halus dan tidak berlebihan.

### Scroll

* Fade up
* Fade in
* Stagger card

### Hover

* Card sedikit naik
* Image zoom
* Button movement

### Navbar

* Background transition saat scroll

Semua dapat dibuat menggunakan CSS/Tailwind tanpa library animasi tambahan jika memungkinkan.

---

# 31. Performance

Karena static website:

* Gunakan gambar WebP jika memungkinkan
* Lazy loading untuk gambar gallery
* Jangan menggunakan gambar berukuran terlalu besar
* Tidak menggunakan video background besar
* Component dibuat reusable
* Data dipisahkan dari UI
* Hindari dependency yang tidak diperlukan

---

# 32. Acceptance Criteria

Website dinyatakan selesai apabila:

* [ ] React berjalan tanpa error
* [ ] Tailwind CSS berjalan
* [ ] Vite build berhasil
* [ ] Responsive mobile
* [ ] Responsive tablet
* [ ] Responsive desktop
* [ ] Navbar berfungsi
* [ ] Smooth scrolling berfungsi
* [ ] Hero selesai
* [ ] Tentang RPL selesai
* [ ] Visi & Misi selesai
* [ ] Keunggulan selesai
* [ ] Kompetensi selesai
* [ ] Laboratorium Komputer selesai
* [ ] Lab PK selesai
* [ ] Ruangan SEMUDAH selesai
* [ ] Logo SEMUDAH tampil dengan benar
* [ ] Kegiatan selesai
* [ ] Galeri selesai
* [ ] Karier selesai
* [ ] Prestasi selesai
* [ ] Footer selesai
* [ ] Tidak ada broken image
* [ ] Tidak ada horizontal scrolling
* [ ] Tidak ada backend
* [ ] Tidak ada database
* [ ] Tidak ada API eksternal

---

# 33. Struktur Akhir Website

Secara keseluruhan, website memiliki **11 bagian utama** yang sudah kita sepakati:

```text
1. Nama & Logo Sekolah
        ↓
2. Nama Jurusan RPL
        ↓
3. Deskripsi Singkat Jurusan
        ↓
4. Visi & Misi
        ↓
5. Keunggulan RPL
        ↓
6. Mata Pelajaran / Kompetensi
        ↓
7. Fasilitas
   ├── Laboratorium Komputer
   ├── Lab Pusat Keunggulan (PK)
   │   ├── Ruang Produksi
   │   ├── Ruang Podcast
   │   └── Ruang Praktik
   └── Ruangan SEMUDAH
       ├── Fotocopy
       ├── Print
       ├── Top Up Game
       └── Top Up Saldo
        ↓
8. Kegiatan Siswa & Ekstrakurikuler
        ↓
9. Foto Kegiatan
        ↓
10. Prospek Karier Lulusan
        ↓
11. Daftar Prestasi
    ├── Kategori Lomba
    ├── Juara/Peringkat
    ├── Tingkat Kompetisi
    └── Tahun Pelaksanaan
```

### Inti Design

> **SMKN 12 JAKARTA × RPL × Modern Tech Minimalist × Blue**

Website harus terasa seperti **produk teknologi modern yang kebetulan digunakan untuk mempromosikan jurusan sekolah**, bukan seperti website sekolah konvensional.

Untuk kondisi sekarang, **logo sekolah dan logo SEMUDAH sudah bisa dimasukkan ke project**, sementara foto-foto lain bisa menggunakan placeholder dan diganti ketika dokumentasi asli sudah tersedia.
