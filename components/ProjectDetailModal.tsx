'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, MapPin, Calendar, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setCurrentSlide(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

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
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10 bg-black/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="bg-white w-full h-full md:h-[90vh] max-w-7xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative md:rounded-none"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] text-[#0041D2] hover:scale-110 transition-transform p-2 bg-white/80 backdrop-blur rounded-full md:bg-transparent"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Left Column: Carousel (Swapped for better hierarchy) */}
            <div className="flex-1 bg-slate-50 relative group/carousel h-[50vh] md:h-full flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.gallery[currentSlide]}
                    alt={`${project.title} - view ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-[110] text-white/30 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={64} strokeWidth={1} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-[110] text-white/30 hover:text-white transition-colors"
                  >
                    <ChevronRight size={64} strokeWidth={1} />
                  </button>

                  {/* Pagination bar */}
                  <div className="absolute bottom-10 left-10 right-10 z-[110] flex gap-1">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
