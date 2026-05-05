

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-20 md:h-12 border-t border-slate-100 px-10 flex flex-col md:flex-row items-center justify-between bg-white gap-4 md:gap-0">
      <div className="flex items-center gap-8">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          © {currentYear} Kusliansjah and Partners
        </span>
        <div className="hidden md:block text-lg font-black tracking-tighter text-slate-200 italic">
          KP
        </div>
      </div>
      <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
        <a href="https://www.instagram.com/kusliansjahpartners" className="hover:text-[#0041D2] transition-colors">Instagram</a>
        <a href="https://www.linkedin.com/company/kusliansjah-partners/" className="hover:text-[#0041D2] transition-colors">LinkedIn</a>
        <a href="https://wa.me/6281395202690" className="hover:text-[#0041D2] transition-colors">Whatsapp</a>
      </div>
    </footer>
  );
}
