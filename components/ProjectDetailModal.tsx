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
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [canScrollStripLeft, setCanScrollStripLeft] = useState(false);
  const [canScrollStripRight, setCanScrollStripRight] = useState(false);
  const galleryStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      setCurrentSlide(0);
      setIsDescriptionExpanded(false);
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [project]);

  const updateStripScrollState = () => {
    const el = galleryStripRef.current;
    if (!el) return;
    setCanScrollStripLeft(el.scrollLeft > 4);
    setCanScrollStripRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateStripScrollState();
    window.addEventListener('resize', updateStripScrollState);
    return () => window.removeEventListener('resize', updateStripScrollState);
  }, [project]);

  useEffect(() => {
    const thumb = galleryStripRef.current?.children[currentSlide] as HTMLElement | undefined;
    thumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [currentSlide]);

  useEffect(() => {
  const handler = (e: MouseEvent) => e.preventDefault();

  document.addEventListener("contextmenu", handler);

  return () => {
    document.removeEventListener("contextmenu", handler);
  };
}, []);

  const scrollStrip = (direction: 'left' | 'right') => {
    const el = galleryStripRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -el.clientWidth * 0.8 : el.clientWidth * 0.8, behavior: 'smooth' });
  };

  if (!project) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const descriptionCharCount = project.description.join(' ').length;
  const isDescriptionLong = descriptionCharCount > 220 || project.description.length > 3;

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
            className="bg-white w-full h-full md:h-[85vh] max-w-7xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative md:rounded-[20px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] text-slate-400 hover:text-[#0041D2] hover:scale-110 transition-all p-2 bg-white/80 backdrop-blur rounded-full shadow-sm"
            >
              <X size={24} strokeWidth={2} />
            </button>

            {/* Left Column: Carousel/Gallery (desktop only — mobile uses the rounded carousel in the sidebar) */}
            <div className="hidden md:block relative w-full h-full overflow-hidden md:shrink">
              {/* Desktop Animated Carousel */}
              <div className="absolute inset-0 cursor-zoom-in" onClick={() => setIsZoomed(true)}>
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
                className="absolute top-6 left-6 z-[110] text-white/50 hover:text-white transition-all hover:scale-110 p-2 bg-black/20 backdrop-blur rounded-full"
              >
                <Maximize2 size={18} />
              </button>

              {/* Navigation Controls */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    aria-label="Previous image"
                    className="flex absolute left-6 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-all hover:scale-110 p-2"
                  >
                    <ChevronLeft className="w-12 h-12" strokeWidth={1} />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next image"
                    className="flex absolute right-6 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-all hover:scale-110 p-2"
                  >
                    <ChevronRight className="w-12 h-12" strokeWidth={1} />
                  </button>

                  {/* Pagination indicators */}
                  <div className="absolute bottom-10 left-10 right-10 z-[110] flex gap-1">
                    {project.gallery.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className="flex-1 py-2 -my-2 cursor-pointer"
                      >
                        <span
                          className={cn(
                            "block h-0.5 transition-all duration-700",
                            currentSlide === i ? "bg-white" : "bg-white/20"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Column: Info Sidebar */}
            <div className="w-full md:w-96 p-8 md:p-12 md:border-l border-slate-100 flex flex-col overflow-y-auto overscroll-contain bg-white flex-1 min-h-0 md:flex-none">
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
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-4">{project.descriptionTitle}</p>
                    <p
                      className={cn(
                        "text-[11px] font-light leading-relaxed text-slate-600 uppercase",
                        !isDescriptionExpanded && isDescriptionLong && "line-clamp-6"
                      )}
                    >
                      {project.description.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < project.description.length - 1 && <div><br /></div>}
                        </span>
                      ))}
                    </p>
                    {isDescriptionLong && (
                      <button
                        onClick={() => setIsDescriptionExpanded((prev) => !prev)}
                        className="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#0041D2] hover:underline"
                      >
                        {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 pt-8 border-t border-slate-100">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[10px]">Location</span>
                      <span className="text-sm font-medium uppercase">{project.location}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[10px]">Year</span>
                      <span className="text-sm font-medium uppercase">{project.year}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[10px]">Typology</span>
                      <span className="text-sm font-medium uppercase text-right">{project.typology}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 pt-8 border-t border-slate-100">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[10px]">Project Stage</span>
                        <span className="text-sm font-medium uppercase text-right">{project.stage}</span>
                      </div>
                    {project.details.siteArea && (
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[10px]">Site Area</span>
                        <span className="text-sm font-medium uppercase">{project.details.siteArea}</span>
                      </div>
                    )}
                    {project.details.buildingArea && (
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[10px]">Building Area</span>
                        <span className="text-sm font-medium uppercase">{project.details.buildingArea}</span>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-6 pt-8 border-t border-slate-100">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[5px]">Principal Partners</span>
                      <ul className="text-sm font-medium uppercase text-right list-none">
                        {project.details.teamP?.map((cat, index) => (
                          <li key={index} className="flex items-center justify-end gap-1.5 mb-[3px] text-right">
                            <span>{cat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-[5px]">Associate Partners</span>
                      <ul className="text-sm font-medium uppercase text-right list-none">
                        {project.details.teamA?.map((cat, index) => (
                          <li key={index} className="flex items-center justify-end gap-1.5 mb-[3px] text-right">
                            <span>{cat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-6">Gallery</p>

                  {/* Mobile rounded-edge carousel — replaces the thumbnail strip on phone */}
                  {project.gallery.length > 0 && (
                    <div className="md:hidden relative w-full h-100 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 cursor-zoom-in" onClick={() => setIsZoomed(true)}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={project.gallery[currentSlide]}
                              alt={`${project.title} - view ${currentSlide + 1}`}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {project.gallery.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur text-slate-700 shadow-md active:scale-95 transition-all"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur text-slate-700 shadow-md active:scale-95 transition-all"
                          >
                            <ChevronRight size={18} />
                          </button>

                          <div className="absolute bottom-2 left-2 right-2 z-10 flex gap-1">
                            {project.gallery.map((_, i) => (
                              <div
                                key={i}
                                className={cn(
                                  "flex-1 h-0.5 rounded-full transition-all duration-700",
                                  currentSlide === i ? "bg-white" : "bg-white/40"
                                )}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Desktop thumbnail strip */}
                  <div className="hidden md:block relative group">
                    {canScrollStripLeft && (
                      <button
                        onClick={() => scrollStrip('left')}
                        aria-label="Scroll gallery left"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md text-slate-500 hover:text-[#0041D2] hover:scale-110 transition-all"
                      >
                        <ChevronLeft size={18} />
                      </button>
                    )}
                    <div
                      ref={galleryStripRef}
                      onScroll={updateStripScrollState}
                      className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x -mx-2 px-2"
                    >
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
                    {canScrollStripRight && (
                      <button
                        onClick={() => scrollStrip('right')}
                        aria-label="Scroll gallery right"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md text-slate-500 hover:text-[#0041D2] hover:scale-110 transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    )}
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
