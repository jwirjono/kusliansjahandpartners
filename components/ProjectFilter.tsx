
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface ProjectFilterProps {
  onProjectSelect?: (project: Project) => void;
}

export default function ProjectFilter({ onProjectSelect }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    'All',
    'Adaptive Reuse',
    'Mixed Use',
    'Office',
    'Education',
    'Exhibition',
    'Gallery',
    'Residential',
    'Sports Infrastructure',
    'Hospitality',
    'Transportation'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Filter Bar */}
      <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setActiveCategory('All')}
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.3em] transition-colors",
              activeCategory === 'All' ? "text-[#0041D2]" : "text-slate-400 hover:text-black"
            )}
          >
            All Projects
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn(
                "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors",
                activeCategory !== 'All' ? "text-[#0041D2]" : "text-slate-400 hover:text-black"
              )}
            >
              Category {activeCategory !== 'All' && `: ${activeCategory}`}
              <ChevronDown size={12} className={cn("transition-transform duration-300", isDropdownOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 bg-white border border-slate-100 shadow-xl z-20 min-w-[240px] rounded-2xl overflow-hidden p-2"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {categories.slice(1).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setIsDropdownOpen(false);
                          }}
                          className={cn(
                            "text-left px-4 py-3 text-[10px] font-medium uppercase tracking-widest transition-colors rounded-xl",
                            activeCategory === cat ? "bg-[#0041D2] text-white" : "hover:bg-slate-50 text-slate-600"
                          )}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
          Showing {filteredProjects.length} Projects
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
              <div className="aspect-square bg-slate-50 overflow-hidden mb-6 relative px] rounded-[20px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
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
