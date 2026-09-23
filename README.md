# 🚀 Website Promosi & Showcase Jurusan Rekayasa Perangkat Lunak (RPL)
### **SMKN 12 Jakarta — SMK Pusat Keunggulan**

[![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

Website resmi promosi dan showcase program keahlian **Rekayasa Perangkat Lunak (RPL)** di **SMK Negeri 12 Jakarta**. Dibangun untuk memperkenalkan kurikulum berbasis industri, fasilitas modern, pencapaian prestasi siswa, karya teknologi, hingga prospek karier digital kepada calon peserta didik baru (PPDB), orang tua, dan mitra dunia usaha / dunia industri (DU/DI).

---

## 🌟 Highlight & Fitur Utama

- 💻 **Modern Hero & Interactive Code Showcase**: Tampilan beranda modern dengan animasi ketikan (*typing animation*) visualisasi kode pemrograman interaktif dan statistik serapan lulusan.
- 🎯 **Profil & Visi Misi Vokasi**: Penjelasan filosofi pendidikan vokasi RPL SMKN 12 Jakarta yang adaptif, inovatif, dan berakhlak mulia.
- 🏆 **Pusat Keunggulan (Center of Excellence)**: Rekam jejak implementasi program SMK PK skema Kemendikbudristek RI.
- 🚀 **Kurikulum Project-Based Learning (PBL)**: Pembelajaran berbasis proyek riil terintegrasi dengan kebutuhan industri teknologi terkini.
- 🛠️ **4 Pilar Kompetensi Keahlian**:
  - *Web Application Development* (React, Node.js, Next.js, REST API)
  - *Mobile App Engineering* (Flutter, Kotlin, React Native)
  - *Database & Cloud Architecture* (PostgreSQL, MySQL, Firebase, Cloud DevOps)
  - *UI/UX Design & Quality Assurance* (Figma, Design Systems, Clean Code & Testing)
- 🖥️ **Fasilitas & Lab Komputer High-Spec**: Detail laboratorium komputer dengan perangkat spesifikasi tinggi, jaringan gigabit, smart board, dan AC.
- 💡 **Program & Ruang SEMUDAH**: Ruang teaching factory & inkubasi karya digital siswa (*Sekolah Menengah Unggul Digital & Ahli*).
- 🖼️ **Galeri Interaktif Multi-Kategori**: Dokumentasi kegiatan, praktikum, karya siswa, dan laboratorium dengan filter dinamis.
- 🥇 **Hall of Fame 28+ Prestasi Siswa**: Pencapaian membanggakan siswa di ajang LKS Jakarta Utara, International Robothon, Pemuda Pelopor Teknologi, dan kompetisi lainnya.
- 💼 **Peta Prospek Karier Industri**: Informasi jenjang karier lulusan mulai dari Software Engineer hingga Tech Entrepreneur.
- 📱 **Desain Responsif & Modern UI**: Menggunakan skema warna kurasi profesional (`#2C5EAD`, `#1591DC`, `#4BB8FA`, `#C4E2F5`) yang ramah pengguna di semua ukuran layar (Mobile, Tablet, Desktop).

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Framework** | [React 18](https://react.dev/) | Library antarmuka komponen modular dan reaktif |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Tooling frontend modern berkecepatan tinggi |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS framework untuk desain adaptif & modern |
| **Icons** | [Lucide React](https://lucide.dev/) | Kumpulan ikon minimalis dan konsisten |
| **Animations** | CSS3 & Custom Keyframes | Animasi halus, glassmorphism, dan efek ketikan interaktif |
| **Deployment** | [Vercel](https://vercel.com/) | Platform hosting global berbasis cloud |

---

## 📁 Struktur Direktori

```text
promosiRPL/
├── assets/                  # Logo sekolah dan aset visual utama
│   ├── logo sekolah.png
│   └── semudah.jpeg
├── docs/                    # Dokumentasi rancangan & acuan desain
├── public/                  # Aset statis publik
├── src/
│   ├── assets/              # Aset gambar galeri dan foto dokumentasi kegiatan
│   ├── components/          # Komponen antarmuka modular
│   │   ├── About.jsx            # Profil jurusan
│   │   ├── Achievements.jsx     # Daftar prestasi LKS & kompetisi
│   │   ├── Activities.jsx       # Aktivitas & rutinitas siswa
│   │   ├── Advantages.jsx       # Keunggulan kurikulum PBL
│   │   ├── Careers.jsx          # Prospek karier lulusan
│   │   ├── Competencies.jsx     # Kompetensi keahlian
│   │   ├── ComputerLab.jsx      # Spesifikasi lab komputer
│   │   ├── Facilities.jsx       # Fasilitas sarana dan prasarana
│   │   ├── Footer.jsx           # Navigasi bawah & informasi kontak
│   │   ├── Gallery.jsx          # Galeri interaktif berfilter
│   │   ├── Hero.jsx             # Hero banner & typing animation
│   │   ├── Navbar.jsx           # Navigasi utama & logo
│   │   ├── PusatKeunggulan.jsx  # SMK Pusat Keunggulan
│   │   ├── SectionHeading.jsx   # Komponen judul section seragam
│   │   ├── Semudah.jsx          # Program ruang SEMUDAH
│   │   └── VisionMission.jsx    # Visi dan misi jurusan
│   ├── data/                # Data dinamis (prestasi, foto galeri, karier)
│   │   └── achievements.js
│   ├── App.jsx              # Komponen utama halaman
│   ├── index.css            # Desain token, font, dan utilitas styling
│   └── main.jsx             # Entry point aplikasi
├── index.html               # File template HTML
├── package.json             # Konfigurasi dependensi proyek
├── tailwind.config.js       # Konfigurasi warna, border radius, dan tema Tailwind
└── vite.config.js           # Konfigurasi plugin Vite & React
```

---

## 💻 Panduan Menjalankan Proyek Secara Lokal

### 1. Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (Versi 18 ke atas)
- [Git](https://git-scm.com/)

### 2. Clone Repositori
```bash
git clone https://github.com/Hiraetha/promosiRPL.git
cd promosiRPL
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka browser dan akses alamat lokal yang muncul di terminal (biasanya `http://localhost:5173`).

### 5. Build untuk Produksi
```bash
npm run build
```
Hasil build yang teroptimasi akan berada di dalam folder `dist/`.

---

## 🌐 Deployment (Vercel)

Aplikasi ini telah dikonfigurasi agar dapat langsung di-*deploy* ke platform **Vercel**:
1. Hubungkan akun GitHub Anda ke [Vercel](https://vercel.com).
2. Pilih repositori `promosiRPL`.
3. Vercel akan secara otomatis mendeteksi pengaturan **Vite** (`Build Command: npm run build`, `Output Directory: dist`).
4. Klik **Deploy**. Website akan langsung aktif dan memiliki tautan publik global.

---

## 🏫 Identitas Sekolah

- **Nama Sekolah**: SMK Negeri 12 Jakarta
- **Program Keahlian**: Rekayasa Perangkat Lunak (RPL) / Pengembangan Perangkat Lunak & Gim (PPLG)
- **Status**: SMK Pusat Keunggulan (Center of Excellence)
- **Wilayah**: Jakarta Utara, DKI Jakarta, Indonesia

---

## 📄 Lisensi

Proyek ini dibuat dan dikembangkan untuk keperluan promosi dan showcase portofolio jurusan Rekayasa Perangkat Lunak SMKN 12 Jakarta. Dilindungi di bawah lisensi [MIT](LICENSE).
