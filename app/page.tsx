'use client';

import HeroCarousel from '@/components/HeroCarousel';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import { useProjectModal } from '@/context/ProjectContext';

export default function Home() {
  const { setSelectedProject } = useProjectModal();

  return (
    <div className="pt-0">
      <HeroCarousel onProjectSelect={setSelectedProject} />
      <WorkSection onProjectSelect={setSelectedProject} />
      <AboutSection />
      <TeamSection />
    </div>
  );
}
