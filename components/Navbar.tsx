'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import mainLogo from '@/public/images/mainLogo.png'

interface NavbarProps {
  onSearchOpen: () => void;
}

export default function Navbar({ onSearchOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) return null;

  const isHome = pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-[100] h-20 transition-all duration-500 px-6 md:px-10 flex items-center justify-between',
        'bg-white/80 backdrop-blur-xl border-b border-white/20',
        (isScrolled || isMobileMenuOpen) && 'bg-slate-400/25 shadow-sm border-white/10'
      )}
    >
      <Link 
        href="/" 
        className="relative z-[90]"
        onClick={() => setIsMobileMenuOpen(false)}
      >
              <Image
                src={mainLogo}
                alt="mainLogo"
                width={200}
                height={80}
                priority
                className="h-8 w-auto object-contain"
              />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <Link
          href="/projects"
          className={cn(
            'text-[12px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#0041D2] relative group',
            pathname === '/projects' ? 'text-[#0041D2]' : 'text-slate-900'
          )}
        >
          PROJECTS
          <span className={cn(
            "absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0041D2] transition-all group-hover:w-full",
            pathname === '/projects' ? "w-full" : ""
          )} />
        </Link>
        <Link
          href="/#about"
          onClick={(e) => handleLinkClick(e, '/#about')}
          className={cn(
            'text-[12px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#0041D2] text-slate-900 relative group'
          )}
        >
          ABOUT
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0041D2] transition-all group-hover:w-full" />
        </Link>
        <Link
          href="/#team"
          onClick={(e) => handleLinkClick(e, '/#team')}
          className={cn(
            'text-[12px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#0041D2] text-slate-900 relative group'
          )}
        >
          TEAM
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0041D2] transition-all group-hover:w-full" />
        </Link>
        <Link
          href="/contact"
          className={cn(
            'text-[12px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#0041D2] relative group',
            pathname === '/contact' ? 'text-[#0041D2]' : 'text-slate-900'
          )}
        >
          CONTACT
          <span className={cn(
            "absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0041D2] transition-all group-hover:w-full",
            pathname === '/contact' ? "w-full" : ""
          )} />
        </Link>
        <button
          onClick={onSearchOpen}
          className={cn(
            'p-2 rounded-full transition-all text-slate-900 hover:bg-slate-50 hover:scale-110 active:scale-95'
          )}
        >
          <Search size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-2 relative z-[110]">
         <button
          onClick={onSearchOpen}
          className={cn(
            'p-2 flex items-center justify-center transition-colors',
            isMobileMenuOpen ? 'text-[#0041D2]' : 'text-black'
          )}
        >
          <Search size={20} strokeWidth={2} />
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'p-2 flex items-center justify-center transition-colors',
            isMobileMenuOpen ? 'text-[#0041D2]' : 'text-black'
          )}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[120] backdrop-blur-xl bg-slate-400/25 flex flex-col"
    >
      {/* Content Wrapper */}
      <div className="flex flex-col justify-between h-full px-6 pt-24 pb-10">
        
        {/* Menu Items */}
        <div className="flex flex-col gap-6 text-3xl font-bold uppercase tracking-tight">
          {['HOME', 'PROJECTS', 'ABOUT', 'TEAM', 'CONTACT'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link 
                href={
                  item === 'HOME'
                    ? '/'
                    : item === 'PROJECTS'
                    ? '/projects'
                    : item === 'CONTACT'
                    ? '/contact'
                    : `/#${item.toLowerCase()}`
                }
                onClick={(e) =>
                  handleLinkClick(
                    e,
                    item === 'HOME'
                      ? '/'
                      : item === 'PROJECTS'
                      ? '/projects'
                      : item === 'CONTACT'
                      ? '/contact'
                      : `/#${item.toLowerCase()}`
                  )
                }
                className="hover:text-[#0041D2] transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">

          </div>

          <div className="text-xs uppercase tracking-widest text-slate-400">
            MAD PULSE STUDIO
            <br />
            BEIJING / LOS ANGELES / ROME
          </div>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}
