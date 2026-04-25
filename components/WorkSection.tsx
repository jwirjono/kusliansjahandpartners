
'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '@/data/projects';
import Image from 'next/image';

interface WorkSectionProps {
  onProjectSelect?: (project: Project) => void;
}

export default function WorkSection({ onProjectSelect }: WorkSectionProps) {
  const showcase = PROJECTS.slice(0, 4);

  return (
    <section className="py-32 px-6 md:px-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end mb-16 md:mb-32">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0041D2] mb-6 md:mb-8 leading-none border-b border-[#0041D2] pb-2 inline-block">
              Featured Works
            </h2>
            <h3 className="text-3xl md:text-6xl font-light tracking-tighter leading-tight uppercase">
              Designing for the <span className="text-[#0041D2] italic font-medium">Future Humanity</span>.
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-slate-500 text-lg font-light leading-relaxed max-w-md"
          >
            Our practice stems from a philosophy that buildings should not be boxes, but living ecosystems. We utilize computational design to mimic organic growth patterns, creating spaces that feel alive and responsive.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {showcase.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="group cursor-pointer"
              onClick={() => onProjectSelect?.(project)}
            >
              <div className="space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 rounded-[40px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-[#0041D2]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white px-6 py-2">View Case Study</span>
                  </div>
                </div>
                <div className="flex justify-between items-start pt-4 border-t border-slate-50">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#0041D2] mb-1">
                      {project.category} / {project.location}
                    </p>
                    <h4 className="text-2xl uppercase tracking-tighter font-light">
                      {project.title}
                    </h4>
                  </div>
                  <ArrowRight size={20} className="text-slate-200 group-hover:text-[#0041D2] group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
