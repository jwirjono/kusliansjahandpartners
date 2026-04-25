'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, MapPin, Calendar, Building, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Project } from '@/data/projects';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      setCurrentSlide(0);
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [project]);

  useEffect(() => {
    if (mobileScrollRef.current) {
      const width = mobileScrollRef.current.offsetWidth;
      mobileScrollRef.current.scrollTo({
        left: currentSlide * width,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  if (!project) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10 bg-white/40 backdrop-blur-xl"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full h-full md:h-[85vh] max-w-7xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative md:rounded-[32px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] text-slate-400 hover:text-[#0041D2] hover:scale-110 transition-all p-2 bg-white/80 backdrop-blur rounded-full shadow-sm"
            >
              <X size={24} strokeWidth={2} />
            </button>

            {/* Left Column: Carousel/Gallery */}
            <div className="flex-1 bg-slate-50 relative group/carousel h-[60vh] md:h-full flex flex-col md:flex-row overflow-hidden md:rounded-[24px] md:m-6">
              {/* Mobile Flex Gallery */}
              <div 
                ref={mobileScrollRef}
                className="md:hidden flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  if (width > 0) {
                    const index = Math.round(scrollLeft / width);
                    if (index !== currentSlide) setCurrentSlide(index);
                  }
                }}
              >
                {project.gallery.map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-full h-full snap-center relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 10 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - ${i + 1}`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                        referrerPolicy="no-referrer"
                        onClick={() => setIsZoomed(true)}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Desktop Animated Carousel */}
              <div className="hidden md:block absolute inset-0 cursor-zoom-in" onClick={() => setIsZoomed(true)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 overflow-hidden"
                  >
                    <motion.div
                      initial={{ scale: 1.15 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 10, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.gallery[currentSlide]}
                        alt={`${project.title} - view ${currentSlide + 1}`}
                        fill
                        className="object-cover"
                        priority
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Zoom Button */}
              <button 
                onClick={() => setIsZoomed(true)}
                className="absolute top-6 left-6 z-[110] text-white/50 hover:text-white transition-all hover:scale-110 p-2 bg-black/20 backdrop-blur rounded-full md:block hidden"
              >
                <Maximize2 size={18} />
              </button>

              {/* Navigation Controls (Desktop only or shared) */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-all hover:scale-110"
                  >
                    <ChevronLeft size={48} strokeWidth={0.75} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-all hover:scale-110"
                  >
                    <ChevronRight size={48} strokeWidth={0.75} />
                  </button>

                  {/* Pagination indicators */}
                  <div className="absolute bottom-4 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-[110] flex gap-1">
                    {project.gallery.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex-1 h-0.5 transition-all duration-700",
                          currentSlide === i ? "bg-white" : "bg-white/20"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Column: Info Sidebar */}
            <div className="w-full md:w-96 p-8 md:p-12 border-l border-slate-100 flex flex-col overflow-y-auto bg-white shrink-0">
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0041D2] mb-4 block">
                  Project Detail
                </span>
                <h2 className="text-4xl font-light tracking-tighter uppercase leading-[0.9] mb-8">
                  {project.title.split(' ').slice(0, -1).join(' ')} <br/>
                  <span className="font-bold underline italic text-[#0041D2]">{project.title.split(' ').slice(-1)}</span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-4">Vision</p>
                    <p className="text-sm font-light leading-relaxed text-slate-600 uppercase">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 pt-8 border-t border-slate-100">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</span>
                      <span className="text-sm font-medium uppercase">{project.location}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Year</span>
                      <span className="text-sm font-medium uppercase">{project.year}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Typology</span>
                      <span className="text-sm font-medium uppercase">{project.typology}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 pt-8 border-t border-slate-100">
                    {project.details.siteArea && (
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Site Area</span>
                        <span className="text-lg font-light tracking-tighter uppercase">{project.details.siteArea}</span>
                      </div>
                    )}
                    {project.details.buildingArea && (
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Building Area</span>
                        <span className="text-lg font-light tracking-tighter uppercase">{project.details.buildingArea}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Gallery Strip (Flex) */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-6">Gallery</p>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x -mx-2 px-2">
                    {project.gallery.map((img, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentSlide(i)}
                        className={cn(
                          "relative aspect-[4/3] h-24 md:h-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 transition-all snap-start",
                          currentSlide === i ? "border-[#0041D2] scale-95" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                      >
                        <Image 
                          src={img} 
                          alt="" 
                          fill 
                          className="object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fullscreen Zoom Overlay */}
          <AnimatePresence>
            {isZoomed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black flex items-center justify-center cursor-zoom-out p-4"
                onClick={() => setIsZoomed(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full h-full max-w-7xl"
                >
                  <Image
                    src={project.gallery[currentSlide]}
                    alt={project.title}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                    className="absolute top-0 right-0 text-white p-4 hover:scale-110 transition-transform"
                  >
                    <X size={32} />
                  </button>

                  {project.gallery.length > 1 && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="text-white/50 hover:text-white p-4 transition-all"
                      >
                        <ChevronLeft size={48} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="text-white/50 hover:text-white p-4 transition-all"
                      >
                        <ChevronRight size={48} />
                      </button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
