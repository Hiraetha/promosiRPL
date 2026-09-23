import React from 'react';

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          dark 
            ? 'bg-[#1591DC]/15 text-[#4BB8FA] border border-[#4BB8FA]/30' 
            : 'bg-[#C4E2F5]/50 text-[#2C5EAD] border border-[#2C5EAD]/20'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-[#4BB8FA]' : 'bg-[#1591DC]'}`}></span>
          {badge}
        </div>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.18] mb-4 ${
          dark ? 'text-white' : 'text-[#0F1D38]'
        }`}>
          {title}
        </h2>
      )}

      {description && (
        <p className={`text-base sm:text-lg font-normal leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
