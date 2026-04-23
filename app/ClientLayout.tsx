'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { ProjectProvider, useProjectModal } from '@/context/ProjectContext';

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { selectedProject, setSelectedProject } = useProjectModal();

  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased relative">
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onProjectSelect={setSelectedProject}
      />
      
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProjectProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </ProjectProvider>
  );
}
