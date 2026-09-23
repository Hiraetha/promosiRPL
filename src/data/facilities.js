export const computerLab = {
  name: "Laboratorium Komputer",
  tag: "Fasilitas Pembelajaran Inti",
  description:
    "Laboratorium komputer menjadi salah satu fasilitas utama dalam menunjang kegiatan pembelajaran dan praktik langsung siswa Rekayasa Perangkat Lunak SMKN 12 JAKARTA.",
  activities: [
    "Praktik pemrograman terstruktur & berorientasi objek",
    "Pengembangan website frontend & backend modern",
    "Pembuatan aplikasi mobile dan desktop",
    "Pengelolaan dan perancangan database",
    "Pengerjaan project kolaborasi tim siswa",
    "Praktik pengembangan perangkat lunak terintegrasi",
  ],
  specs: [
    { title: "Komputer / PC", desc: "Workstation dengan spesifikasi handal untuk coding & rendering", icon: "Monitor" },
    { title: "Perangkat Praktik", desc: "Alat pendukung pengujian aplikasi dan transfer data", icon: "Cpu" },
    { title: "Ruang Praktik Nyaman", desc: "Ruangan ber-AC dengan penataan ergonomis", icon: "Layout" },
    { title: "Software Pembelajaran", desc: "IDE modern, database engine, compiler, dan design tools resmi", icon: "Terminal" },
  ],
};

export const pusatKeunggulan = {
  name: "Lab Pusat Keunggulan (PK)",
  badge: "Fasilitas Unggulan Industri",
  description:
    "Lab Pusat Keunggulan (PK) merupakan fasilitas pendukung pembelajaran dan pengembangan kreativitas siswa yang digunakan untuk kegiatan produksi, praktik nyata, serta pengembangan berbagai project kreatif berbasis teknologi mutakhir.",
  rooms: [
    {
      name: "Ruang Produksi",
      category: "Kreativitas & Manufaktur Digital",
      description: "Digunakan untuk mengembangkan, menguji, dan menghasilkan berbagai produk digital, merchandise kreatif, serta project karya siswa.",
      icon: "Printer",
    },
    {
      name: "Ruang Podcast",
      category: "Multimedia & Broadcasting",
      description: "Digunakan untuk kegiatan podcast audio-visual, perekaman konten edukasi, wawancara industri, dan eksplorasi media digital terkini.",
      icon: "Mic",
    },
    {
      name: "Ruang Praktik",
      category: "Eksplorasi Teknologi Terapan",
      description: "Digunakan untuk kegiatan pembelajaran interaktif dan praktik langsung dengan memanfaatkan berbagai instrumen teknologi modern terkini.",
      icon: "Laptop",
    },
  ],
  equipment: [
    { name: "Laptop", desc: "Perangkat portabel untuk fleksibilitas pemrograman", icon: "Laptop" },
    { name: "HP / Smartphone", desc: "Perangkat uji coba responsivitas aplikasi mobile", icon: "Smartphone" },
    { name: "Kamera", desc: "Kamera profesional untuk dokumentasi visual & podcast", icon: "Camera" },
    { name: "3D Printer", desc: "Pencetakan prototipe hardware & objek 3 dimensi", icon: "Boxes" },
    { name: "PC Workstation", desc: "Komputer komputasi tinggi untuk produksi & rendering", icon: "Monitor" },
    { name: "Peralatan Sablon Baju", desc: "Produksi merchandise dan produk kreatif tekstil", icon: "Shirt" },
    { name: "Alat Press Mug", desc: "Alat sablon sublimasi untuk merchandise kustom", icon: "Coffee" },
    { name: "VR (Virtual Reality)", desc: "Headset simulasi realitas virtual & game development", icon: "Glasses" },
    { name: "Lean Bot", desc: "Robotik edukatif untuk eksplorasi logika otomasi", icon: "Bot" },
  ],
};

export const semudahServices = [
  {
    title: "Fotocopy",
    badge: "Layanan Dokumen",
    description: "Layanan fotokopi cepat dan presisi untuk kebutuhan berkas, modul pembelajaran, dan keperluan administrasi siswa.",
    icon: "Copy",
    emoji: "🖨️",
  },
  {
    title: "Print",
    badge: "Pencetakan Digital",
    description: "Layanan pencetakan dokumen tugas, laporan project, makalah, dan berbagai format cetak warna maupun hitam-putih.",
    icon: "FileText",
    emoji: "📄",
  },
  {
    title: "Top Up Game",
    badge: "Digital Entertainment",
    description: "Layanan pengisian saldo resmi untuk berbagai platform dan game populer dengan proses cepat, aman, dan terpercaya.",
    icon: "Gamepad2",
    emoji: "🎮",
  },
  {
    title: "Top Up Saldo",
    badge: "Financial Technology",
    description: "Layanan pengisian saldo dompet digital (e-wallet) dan transaksi digital guna menunjang kebutuhan harian ekosistem sekolah.",
    icon: "CreditCard",
    emoji: "💳",
  },
];
