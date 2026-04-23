'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onSearchOpen: () => void;
}

export default function Navbar({ onSearchOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!mounted) return null;

  const isHome = pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 h-16 transition-all duration-500 px-4 md:px-10 flex items-center justify-between',
        (isScrolled || !isHome) && !isMobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm' 
          : 'bg-transparent border-b border-white/10'
      )}
    >
      <Link 
        href="/" 
        className="z-50"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <span className={cn(
          'text-2xl font-black tracking-tighter italic underline underline-offset-4 decoration-2 transition-colors duration-500',
          (isScrolled || !isHome) && !isMobileMenuOpen ? 'text-[#0041D2]' : 'text-white'
        )}>
          MAD PULSE
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <Link
          href="/projects"
          className={cn(
            'text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-[#0041D2]',
            pathname === '/projects' ? 'text-[#0041D2]' : (isScrolled || !isHome ? 'text-slate-900' : 'text-white')
          )}
        >
          PROJECTS
        </Link>
        <Link
          href="/contact"
          className={cn(
            'text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-[#0041D2]',
            pathname === '/contact' ? 'text-[#0041D2]' : (isScrolled || !isHome ? 'text-slate-900' : 'text-white')
          )}
        >
          CONTACT
        </Link>
        <button
          onClick={onSearchOpen}
          className={cn(
            'p-2 rounded-full transition-colors',
            isScrolled || !isHome ? 'text-slate-900 hover:bg-slate-50' : 'text-white hover:bg-white/10'
          )}
        >
          <Search size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-4 z-50">
         <button
          onClick={onSearchOpen}
          className={cn(
            'p-2 rounded-full',
            (isScrolled || !isHome) && !isMobileMenuOpen ? 'text-slate-900' : 'text-white'
          )}
        >
          <Search size={20} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'p-2 transition-colors',
            (isScrolled || !isHome) && !isMobileMenuOpen ? 'text-slate-900' : 'text-white'
          )}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0041D2] text-white flex flex-col justify-center items-center gap-12 text-3xl font-light z-40"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
