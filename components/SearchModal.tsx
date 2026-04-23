'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '@/data/projects';
import Image from 'next/image';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectSelect?: (project: Project) => void;
}

export default function SearchModal({ isOpen, onClose, onProjectSelect }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const filteredProjects = query.trim() === ''
    ? []
    : PROJECTS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col"
        >
          <div className="p-6 md:p-12 flex justify-end">
            <button onClick={onClose} className="p-3 text-black hover:bg-gray-100 rounded-full transition-colors">
              <X size={32} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 md:px-24">
            <div className="max-w-4xl mx-auto py-10">
              <div className="relative">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={40} />
                <input
                  autoFocus
                  type="text"
                  placeholder="SEARCH FOR PROJECTS, LATEST NEWS, PEOPLE"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-slate-100 py-6 pl-16 pr-4 text-2xl md:text-5xl font-light uppercase tracking-tighter focus:outline-none focus:border-[#0041D2] transition-colors placeholder:text-slate-100"
                />
              </div>

              <div className="mt-16 grid grid-cols-1 gap-12">
                {filteredProjects.length > 0 ? (
                  <>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">Results ({filteredProjects.length})</h3>
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => {
                          onProjectSelect?.(project);
                          onClose();
                        }}
                        className="group flex flex-col md:flex-row gap-6 items-center border-b border-slate-50 pb-8 hover:bg-slate-50 p-4 transition-colors cursor-pointer"
                      >
                        <div className="w-full md:w-32 aspect-video overflow-hidden bg-slate-100 relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[#0041D2] mb-1 font-bold">
                            {project.category} — {project.location}
                          </div>
                          <h4 className="text-2xl font-light tracking-tight uppercase group-hover:text-[#0041D2] transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        <ArrowRight size={24} className="text-slate-200 group-hover:translate-x-2 group-hover:text-[#0041D2] transition-all" />
                      </div>
                    ))}
                  </>
                ) : (
                  query.trim() !== '' && (
                    <div className="py-20 text-center text-gray-400 text-xl font-light uppercase tracking-widest">
                      No matching projects found.
                    </div>
                  )
                )}

                {query.trim() === '' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Popular Categories</h3>
                      <div className="flex flex-wrap gap-3">
                        {['Cultural', 'Urban', 'Residential', 'Office'].map(cat => (
                          <button
                            key={cat}
                            onClick={() => setQuery(cat)}
                            className="px-6 py-2 border border-gray-100 text-sm hover:border-[#0041D2] hover:text-[#0041D2] transition-colors uppercase tracking-widest"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
