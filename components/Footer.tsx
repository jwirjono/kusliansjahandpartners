import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-20 md:h-12 border-t border-slate-100 px-10 flex flex-col md:flex-row items-center justify-between bg-white gap-4 md:gap-0">
      <div className="flex items-center gap-8">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          © {currentYear} MAD PULSE ARCHITECTURE
        </span>
        <div className="hidden md:block text-lg font-black tracking-tighter text-slate-200 italic">
          MAD PULSE
        </div>
      </div>
      <div className="flex gap-6 text-[14px] font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-[#0041D2] transition-colors"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-[#0041D2] transition-colors"><FaInstagram /></a>
        </div>
    </footer>
  );
}
