
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProjectFilterProps {
  onProjectSelect?: (project: Project) => void;
}

export default function ProjectFilter({ onProjectSelect }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Cultural', 'Residential', 'Urban', 'Institutional'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Work Spans Section */}
      <div className="mb-20">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0041D2] mb-6 border-b border-[#0041D2] pb-2 inline-block">
          OUR WORK SPANS
        </h3>
        <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'text-2xl md:text-8xl font-light tracking-tighter uppercase transition-all duration-500 pb-2 border-b-[4px]',
                activeCategory === cat ? 'text-[#0041D2] border-[#0041D2]' : 'text-slate-100 border-transparent hover:text-black'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer border-b border-slate-50 pb-8"
              onClick={() => onProjectSelect?.(project)}
            >
              <div className="aspect-square bg-slate-50 overflow-hidden mb-6 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-[#0041D2]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0041D2]">
                  {project.category} — {project.location} {project.year}
                </p>
                <h3 className="text-2xl font-light tracking-tight uppercase group-hover:text-[#0041D2] transition-colors leading-none">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
