

Bisa. Berdasarkan referensi desain yang kamu kirim, arah desain website RPL sebaiknya **bukan sekadar website sekolah biasa**, tetapi dibuat seperti **Modern Tech Minimalist**: clean, premium, banyak whitespace, rounded card, typography besar, dan visual teknologi yang kuat.

Berikut **PRD Design** yang sudah disesuaikan dengan referensi tersebut dan tetap menggunakan **React.js + Tailwind CSS**.

# PRD DESIGN — Website Promosi RPL

## 1. Design Direction

### Konsep Utama

> **Modern Tech Minimalist**

Website harus memberikan kesan:

- Modern
- Teknologi
- Profesional
- Edukatif
- Premium
- Minimalis
- Kreatif
- Futuristik tetapi tidak berlebihan

Referensi visual utama menggunakan komposisi seperti gambar yang diberikan:

- Background luar berwarna biru
- Main content berupa panel putih
- Card dengan sudut sangat rounded
- Typography besar dan clean
- Banyak whitespace
- Visual foto/3D sebagai focal point
- Section menggunakan layout asimetris
- Warna biru sebagai identitas utama

---

# 2. Color System

Warna utama harus **bernuansa biru**, tetapi tidak menggunakan biru yang terlalu mencolok.

### Primary

```text
Deep Navy
#111827
```

Untuk:

- Heading
- Text utama
- Navbar
- Button tertentu

### Primary Blue

```text
#3157D5
```

Untuk:

- CTA
- Highlight
- Icon
- Link
- Active state

### Soft Blue

```text
#E8EEFF
```

Untuk:

- Background card
- Highlight section
- Badge

### Light Blue

```text
#F3F6FF
```

Untuk:

- Background
- Secondary section

### Background

```text
#EEF3FA
```

### White

```text
#FFFFFF
```

Digunakan sebagai warna utama content container.

### Dark

```text
#171A24
```

Untuk card gelap dan kontras.

---

# 3. Visual Style

Website menggunakan **large white content container** di tengah halaman.

Kurang lebih:

```text
┌──────────────────────────────────────────────┐
│            BLUE BACKGROUND                   │
│                                              │
│    ┌────────────────────────────────────┐    │
│    │          WHITE CONTAINER            │    │
│    │                                    │    │
│    │ Navbar                             │    │
│    │                                    │    │
│    │ Hero                               │    │
│    │                                    │    │
│    │ About                              │    │
│    │                                    │    │
│    │ Cards                              │    │
│    │                                    │    │
│    │ Facilities                         │    │
│    │                                    │    │
│    └────────────────────────────────────┘    │
│                                              │
└──────────────────────────────────────────────┘
```

Pada desktop, content utama memiliki:

```text
max-width: 1280px
margin: auto
```

Dengan border radius besar.

Contoh:

```text
rounded-[32px]
```

atau sekitar:

```text
32px – 40px
```

---

# 4. Typography

Gunakan font sans-serif modern.

Rekomendasi:

> **Inter**

Alternatif:

> **Manrope**

### Heading

Heading harus besar dan tegas.

Contoh:

```text
Kenali
Dunia RPL
```

Ukuran desktop:

```text
64px – 80px
```

Tablet:

```text
48px – 60px
```

Mobile:

```text
36px – 44px
```

### Body

```text
16px – 18px
```

Line-height:

```text
1.6
```

---

# 5. Navbar

Navbar dibuat minimalis seperti referensi.

### Desktop

```text
┌───────────────────────────────────────────────┐
│  [LOGO] RPL       Tentang  Kompetensi  ...   │
│                              [Eksplor RPL]    │
└───────────────────────────────────────────────┘
```

### Isi

**Kiri:**

- Logo sekolah
- Nama sekolah/jurusan

**Tengah:**

- Tentang
- Kompetensi
- Fasilitas
- Kegiatan
- Galeri
- Karier
- Prestasi

**Kanan:**

Button:

> **Jelajahi RPL**

### Style

- Background putih/transparan
- Rounded
- Sticky
- Border sangat tipis
- Shadow minimal

---

# 6. Hero Section

Hero harus menjadi bagian paling menarik.

Konsepnya mengambil pendekatan visual dari referensi:

### Top

Small label:

> **REKAYASA PERANGKAT LUNAK**

### Heading

> **Membangun Masa Depan dengan Teknologi.**

atau:

> **Belajar Teknologi.  
> Menciptakan Masa Depan.**

### Description

> Rekayasa Perangkat Lunak membekali siswa dengan keterampilan teknologi, pemrograman, kreativitas, dan pengembangan berbagai solusi digital.

### Button

```text
[ Kenali RPL ]
```

### Visual

Bagian bawah hero menggunakan visual besar.

Contohnya:

- Foto siswa sedang menggunakan komputer
- Visual coding
- 3D computer
- Visual abstrak biru
- Foto Lab PK
- Elemen teknologi

Visual dibuat menyatu dengan background menggunakan:

- Rounded corner
- Gradient
- Soft blue glow

---

# 7. Hero Visual Treatment

Karena referensi menggunakan visual 3D yang kuat, website RPL dapat menggunakan pendekatan serupa.

Contoh:

```text
       ┌─────────────────────────┐
       │                         │
       │     VISUAL TEKNOLOGI    │
       │                         │
       │     💻   ◇   ⚡         │
       │                         │
       └─────────────────────────┘
```

Jika menggunakan foto sekolah/siswa asli, foto diberi:

- rounded 28–32px
- soft gradient
- blue overlay tipis jika diperlukan
- object-cover

**Tidak perlu membuat seluruh website penuh dengan gambar.** Gunakan gambar hanya sebagai focal point.

---

# 8. Section Deskripsi RPL

Mengikuti pola referensi:

```text
Apa itu
RPL?

                         Deskripsi RPL
                         ............
                         ............
```

### Heading

> **Apa itu RPL?**

### Description

Gunakan materi:

> Rekayasa Perangkat Lunak (RPL) merupakan jurusan yang mempelajari proses pengembangan perangkat lunak, mulai dari perancangan, pemrograman, hingga pengembangan aplikasi.

Tambahkan tombol kecil:

> **Pelajari lebih lanjut ↓**

---

# 9. Keunggulan RPL

Gunakan **asymmetric card layout** seperti referensi.

Bukan sekadar 7 card dengan ukuran sama.

Contoh:

```text
┌──────────────────────────────┬───────────────┬───────────────┐
│                              │               │               │
│  Pembelajaran Pemrograman    │   Web         │   Aplikasi    │
│                              │               │               │
│  description                 │   description │   description │
│                              │               │               │
└──────────────────────────────┴───────────────┴───────────────┘
```

Card pertama dibuat lebih besar.

### Card Besar

**Project-Based Learning**

> Belajar melalui project nyata untuk mengembangkan kreativitas dan keterampilan teknologi.

### Card kecil

**Web Development**

**App Development**

**Game Development**

**Database**

**UI/UX**

---

# 10. Section Kompetensi

Gunakan background soft blue.

### Heading

> **Yang Akan Kamu Pelajari**

Kemudian cards:

```text
┌──────────────────┐ ┌──────────────────┐
│ KKA              │ │ Pemrograman Web  │
│                  │ │                  │
│ description      │ │ description      │
└──────────────────┘ └──────────────────┘

┌──────────────────┐ ┌──────────────────┐
│ Basis Data       │ │ Pemrograman      │
│                  │ │ Aplikasi         │
└──────────────────┘ └──────────────────┘

┌──────────────────┐ ┌──────────────────┐
│ Pemrograman GIM  │ │ UI/UX            │
└──────────────────┘ └──────────────────┘
```

Card menggunakan:

```text
background: white
border-radius: 24px
```

---

# 11. Fasilitas

Ini menjadi salah satu section paling visual.

### Heading

> **Belajar dengan Fasilitas yang Mendukung**

Layout:

```text
┌───────────────────────────┬────────────────────┐
│                           │                    │
│   FOTO LAB KOMPUTER       │  Lab Komputer      │
│                           │  description        │
│                           │                    │
└───────────────────────────┴────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│              LAB PUSAT KEUNGGULAN               │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

# 12. Lab Pusat Keunggulan

Gunakan visual yang lebih premium karena fasilitasnya banyak.

### Heading

> **Pusat Keunggulan (PK)**

### Description

> Lab Pusat Keunggulan (PK) menjadi ruang untuk proses pembelajaran, produksi, praktik, dan pengembangan project kreatif siswa.

### Ruang

Buat 3 cards:

```text
Ruang Produksi
Ruang Podcast
Ruang Praktik
```

### Fasilitas

Buat icon cards:

```text
💻 Laptop
📱 HP
📷 Kamera
🖨️ 3D Printer
🖥️ PC
👕 Sablon Baju
☕ Press Mug
🥽 VR
🤖 Lean Bot
```

Gunakan card putih dengan shadow sangat halus.

---

# 13. Kegiatan Siswa

Gunakan layout editorial.

Sebagian gambar besar dan sebagian kecil.

```text
┌─────────────────────────────┬──────────────┐
│                             │              │
│        FOTO BESAR           │  FOTO        │
│                             │              │
│                             ├──────────────┤
│                             │  FOTO        │
└─────────────────────────────┴──────────────┘
```

Di samping/bawah:

### Kegiatan

- Praktik pemrograman
- Pengembangan website
- Pembuatan aplikasi
- Database
- Game
- Workshop
- Project
- Persiapan kompetisi

---

# 14. Galeri

Galeri harus terasa seperti **portfolio**, bukan gallery sekolah konvensional.

### Heading

> **Aktivitas di RPL**

Subheading:

> Dokumentasi pembelajaran, project, fasilitas, dan kegiatan siswa.

### Filter

```text
All
Laboratorium
Pembelajaran
Project
Workshop
Lomba
```

### Grid

Gunakan masonry-like layout.

Foto memiliki:

```text
rounded-3xl
overflow-hidden
```

Hover:

```text
scale-[1.03]
```

dengan transition lembut.

---

# 15. Prospek Karier

Gunakan section dengan background **deep navy/blue** agar menjadi kontras.

### Heading putih

> **Dari Kelas Menuju Dunia Teknologi**

Cards:

```text
Software Developer
Web Developer
Mobile Developer
UI/UX Designer
Database Developer
IT Support
Game Developer
Wirausaha Teknologi
```

Card dapat menggunakan background:

```text
rgba(255,255,255,0.08)
```

Border:

```text
rgba(255,255,255,0.12)
```

---

# 16. Prestasi

Section dibuat minimalis dan premium.

### Heading

> **Prestasi & Kompetisi**

Subheading:

> Pencapaian siswa RPL dalam berbagai lomba dan kompetisi.

### Card

```text
┌─────────────────────────────────┐
│ PEMROGRAMAN                     │
│                                 │
│ JUARA 1                         │
│                                 │
│ Kota/Kabupaten        2025      │
└─────────────────────────────────┘
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

Gunakan badge kecil untuk tingkat kompetisi.

---

# 17. Footer

Footer tetap minimalis.

```text
┌─────────────────────────────────────────────┐
│                                             │
│  [LOGO]                                     │
│  REKAYASA PERANGKAT LUNAK                  │
│                                             │
│  © 2026 [Nama Sekolah]                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

# 18. Layout System

Gunakan sistem spacing yang konsisten.

### Container

```text
max-width: 1280px
```

### Section padding desktop

```text
py-24
```

### Mobile

```text
px-5
py-16
```

### Border Radius

```text
Card       → 24px
Large Card → 32px
Hero       → 32px
Button     → 9999px
```

---

# 19. Button Style

Button dibuat seperti referensi: **pill-shaped**.

### Primary

```text
background: #3157D5
color: white
border-radius: 999px
```

Contoh:

> **Kenali RPL →**

### Secondary

```text
background: #E8EEFF
color: #3157D5
```

Contoh:

> **Lihat Kompetensi**

Hover:

- sedikit naik
- background berubah
- transition 200–300ms

---

# 20. Card Design

Card tidak menggunakan border berat.

Style:

```text
bg-white
rounded-[24px]
border border-slate-100
```

Shadow sangat subtle:

```text
shadow-[0_10px_40px_rgba(...)]
```

Hover:

```text
translate-y-[-4px]
```

Transition:

```text
transition-all duration-300
```

---

# 21. Background Decoration

Agar tidak terlalu flat, gunakan dekorasi abstrak:

- Blue gradient blob
- Blur circle
- Grid pattern
- Soft glow
- Dot pattern

Tetapi jangan berlebihan.

Prinsip:

> **80% clean space + 20% visual decoration**

---

# 22. Responsive Design

### Mobile

Desain harus berubah menjadi satu kolom.

```text
Navbar
↓
Hero
↓
About
↓
Cards
↓
Kompetensi
↓
Fasilitas
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

Hero:

```text
Heading
Description
Button
Image
```

### Desktop

Gunakan asymmetric layout:

```text
Text             Visual
────────────────────────
Large Card       Small Card
Small Card       Small Card
```

---

# 23. Animasi

Animasi dibuat **subtle**, mengikuti karakter desain referensi.

Gunakan:

### On Scroll

- fade-up
- fade-in
- stagger card

### Hover

- image zoom
- card lift
- button movement

### Hero

- floating elements
- slow gradient movement

Jangan menggunakan animasi yang terlalu cepat atau mencolok.

---

# 24. Asset Strategy

Karena website RPL akan menggunakan foto sekolah asli, asset disusun:

```text
src/
└── assets/
    ├── logo/
    │   └── logo-sekolah.png
    │
    └── images/
        ├── hero/
        ├── lab/
        ├── pk/
        ├── kegiatan/
        ├── project/
        └── prestasi/
```

### Prioritas Visual

1. Foto Lab PK
2. Foto Lab Komputer
3. Foto kegiatan siswa
4. Foto project
5. Foto lomba/kompetisi
6. Logo sekolah

---

# 25. Component Architecture

Tetap menggunakan React.js.

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── VisionMission.jsx
│   ├── Advantages.jsx
│   ├── Competencies.jsx
│   ├── Facilities.jsx
│   ├── PKLab.jsx
│   ├── Activities.jsx
│   ├── Gallery.jsx
│   ├── Careers.jsx
│   ├── Achievements.jsx
│   ├── Footer.jsx
│   └── SectionHeading.jsx
│
├── data/
│   ├── competencies.js
│   ├── facilities.js
│   ├── activities.js
│   ├── careers.js
│   └── achievements.js
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 26. Tailwind Design Tokens

Di Tailwind, gunakan custom colors:

```js
colors: {
  navy: "#111827",
  blue: "#3157D5",
  "soft-blue": "#E8EEFF",
  "light-blue": "#F3F6FF",
  surface: "#FFFFFF",
  background: "#EEF3FA"
}
```

Sehingga component bisa menggunakan:

```jsx
bg-blue
text-navy
bg-soft-blue
bg-light-blue
```

---

# 27. Overall Visual Hierarchy

Urutan visual website:

```text
                 BLUE BACKGROUND
                       │
                       ▼
              ┌─────────────────┐
              │     NAVBAR      │
              ├─────────────────┤
              │                 │
              │      HERO       │
              │                 │
              │  Large Visual   │
              │                 │
              ├─────────────────┤
              │                 │
              │    WHAT IS RPL  │
              │                 │
              ├─────────────────┤
              │  FEATURE CARDS  │
              │                 │
              ├─────────────────┤
              │  KOMPETENSI     │
              ├─────────────────┤
              │  FASILITAS      │
              │                 │
              │  LAB PK         │
              ├─────────────────┤
              │  KEGIATAN       │
              ├─────────────────┤
              │  GALERI         │
              ├─────────────────┤
              │  KARIER         │
              ├─────────────────┤
              │  PRESTASI       │
              ├─────────────────┤
              │     FOOTER      │
              └─────────────────┘
```

---

# 28. Prinsip Utama Design

**Yang paling penting:**

### 1. Jangan terlihat seperti template website sekolah.

Hindari:

- terlalu banyak warna
- card kotak biasa
- gradient berlebihan
- icon berlebihan
- navbar yang penuh
- teks terlalu padat

### 2. Gunakan whitespace.

Referensi yang kamu kirim memiliki ruang kosong yang cukup besar sehingga terlihat **premium dan modern**.

### 3. Gunakan visual sebagai focal point.

Foto Lab PK, siswa, komputer, kamera, 3D printer, VR, dan project bisa menjadi visual utama.

### 4. Biru sebagai identitas.

Palet:

> **Navy → Blue → Soft Blue → White**

### 5. Gunakan asymmetric layout.

Jangan semua section dibuat:

```text
[Card] [Card] [Card]
[Card] [Card] [Card]
```

Campurkan:

```text
[       Large Card       ] [Card]
[Card] [Card] [    Image    ]
```

Ini yang akan membuat website lebih dekat dengan referensi yang kamu berikan.

---

## Final Design Brief

> **Buat website promosi Jurusan Rekayasa Perangkat Lunak dengan gaya Modern Tech Minimalist yang terinspirasi dari referensi desain yang diberikan. Gunakan white content container dengan rounded corner besar di atas background biru muda, typography modern dan besar, whitespace luas, asymmetric card layout, soft blue gradient, subtle shadows, dan visual fotografi/3D sebagai focal point. Gunakan palet navy, royal blue, soft blue, dan white. Website harus terasa seperti produk teknologi modern, bukan template website sekolah konvensional. Gunakan React.js + Tailwind CSS + Vite tanpa backend, database, API, atau library UI tambahan.**

Dengan PRD ini, **struktur kontennya tetap 11 bagian yang sudah kita sepakati**, sementara **gaya visualnya mengikuti referensi gambar: clean, premium, biru, modern, dan technology-focused**.