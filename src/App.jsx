import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Advantages from './components/Advantages';
import Competencies from './components/Competencies';
import Facilities from './components/Facilities';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Careers from './components/Careers';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="bg-page-canvas font-sans text-dark-text antialiased min-h-screen py-2 sm:py-4 md:py-8 px-2 sm:px-4 md:px-6">
      {/* 
        MAIN WRAPPER CONTAINER: 
        Central large white rounded container matching Stitch specification:
        max-w-7xl mx-auto my-4 md:my-8 rounded-[32px] md:rounded-[36px] bg-white shadow-2xl shadow-blue-900/5 border border-soft-blue/60 overflow-hidden px-5 sm:px-8 md:px-12 py-6 md:py-10
      */}
      <div className="max-w-7xl mx-auto my-1 sm:my-4 md:my-8 rounded-[24px] sm:rounded-[32px] md:rounded-[36px] bg-white shadow-2xl shadow-blue-900/5 border border-soft-blue/60 overflow-hidden px-3.5 sm:px-8 md:px-12 py-4 sm:py-6 md:py-10">
        {/* 3. Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* Main Content Sections with consistent spacing */}
        <main className="space-y-16 md:space-y-24">
          {/* 4. Hero Section (Asymmetric Modern Bento / Pitch) */}
          <Hero />

          {/* 5. About (Apa itu RPL?) */}
          <About />

          {/* 7. Advantages (Keunggulan RPL - Asymmetric Bento Grid) */}
          <Advantages />

          {/* 8. Competencies ("Yang Akan Kamu Pelajari" - Exact 6 Items) */}
          <Competencies />

          {/* 9. Facilities (Fasilitas - 3 Major Areas: Lab Komputer, Lab PK, Ruangan SEMUDAH) */}
          <Facilities />

          {/* 10. Student Activities (Dinamika Belajar & Ekstrakurikuler) */}
          <Activities />

          {/* 10b. Gallery ("Aktivitas di RPL" - Masonry Editorial Authentic Photos) */}
          <Gallery />

          {/* 11. Career ("Dari Kelas Menuju Dunia Teknologi" - 8 High Contrast Cards) */}
          <Careers />

          {/* 12. Achievements ("Prestasi & Kompetisi" - Filterable Strict Data List) */}
          <Achievements />
        </main>

        {/* 13. Minimalist Clean Footer */}
        <Footer />
      </div>

      {/* Floating Animated Back-To-Top Button */}
      <BackToTop />
    </div>
  );
}
