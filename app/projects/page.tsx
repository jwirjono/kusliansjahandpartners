'use client';

import { motion } from 'motion/react';
import ProjectFilter from '@/components/ProjectFilter';
import { useProjectModal } from '@/context/ProjectContext';

export default function ProjectsPage() {
  const { setSelectedProject } = useProjectModal();

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-white min-h-screen grid-lines">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0041D2] mb-4 block">Archive</span>
          <h1 className="text-4xl md:text-7xl font-light uppercase tracking-tighter leading-none mb-6">
            Our Work <br/>
            <span className="font-bold underline italic text-[#0041D2]">Spans Globally.</span>
          </h1>
        </motion.div>

        <ProjectFilter onProjectSelect={setSelectedProject} />
      </div>
    </div>
  );
}
