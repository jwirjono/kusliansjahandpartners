
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, Project } from '@/data/projects';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import Image from 'next/image';

interface HeroCarouselProps {
  onProjectSelect?: (project: Project) => void;
}

export default function HeroCarousel({ onProjectSelect }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const heroProjects = PROJECTS.slice(0, 3);

  const next = () => setCurrent((c) => (c + 1) % heroProjects.length);
  const prev = () => setCurrent((c) => (c - 1 + heroProjects.length) % heroProjects.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-white pt-24 pb-8 px-4 md:px-8">
      <div 
        className="relative h-full w-full overflow-hidden bg-slate-200 group cursor-pointer rounded-[20px] shadow-2xl"
        onClick={() => onProjectSelect?.(heroProjects[current])}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/10 z-10" />
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8 }}
              className="w-full h-full relative"
            >
              <Image
                src={heroProjects[current].image}
                alt={heroProjects[current].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            <div className="absolute bottom-6 left-6 md:left-8 z-20 text-white max-w-xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-black/20 backdrop-blur-xl p-6 md:p-8 rounded-[24px] border border-white/10"
              >
                <h1 className="text-xl md:text-3xl font-light tracking-tight leading-none mb-3 uppercase">
                  {heroProjects[current].title.split(' ').slice(0, -1).join(' ')} <br/>
                  <span className="font-bold italic text-[#0041D2]">{heroProjects[current].title.split(' ').slice(-1)}</span>
                </h1>
                <p className="text-[9px] uppercase tracking-[0.4em] opacity-80 decoration-[#0041D2] underline underline-offset-4">
                  {heroProjects[current].location} — {heroProjects[current].year}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bars */}
        <div className="absolute bottom-10 right-6 md:right-10 z-30 flex gap-3">
        {heroProjects.map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-10 h-1 transition-all duration-500",
              i === current ? "bg-white" : "bg-white/30"
            )}
          />
        ))}
      </div>
    </div>
  </div>
  );
}
