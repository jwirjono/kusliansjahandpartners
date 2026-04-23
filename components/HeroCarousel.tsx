
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
    <div 
      className="relative h-screen w-full overflow-hidden bg-slate-200 group cursor-pointer"
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
          
          <div className="absolute bottom-10 left-6 md:left-10 z-20 text-white">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-none mb-2 uppercase">
                {heroProjects[current].title.split(' ').slice(0, -1).join(' ')} <br/>
                <span className="font-bold italic">{heroProjects[current].title.split(' ').slice(-1)}</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                {heroProjects[current].location} — {heroProjects[current].year}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bars */}
      <div className="absolute bottom-10 right-6 md:right-10 z-30 flex gap-2">
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
  );
}
