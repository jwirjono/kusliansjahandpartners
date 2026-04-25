
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import kevin from '@/public/images/Kevin.png';
import karyadi from '@/public/images/Karyadi.jpeg';

const TEAM = [
  {
    name: "Ar. Kevin Kristofan Rinaldi Kusliansjah, IAI",
    role: "Founding Partner / Lead Architect",
    image: kevin,
    bio: "Registered Architect and design professional with expertise in delivering commercially driven, buildable design solutions across retail, mixed-use, and institutional projects."
  },
  {
    name: "Dr. Ar. Ir. Yohanes Karyadi Kusliansjah, MT., IAI",
    role: "Architect",
    image: karyadi,
    bio: "Leads our sustainability initiatives, ensuring every structure breathes and evolves with its environment."
  },
  {
    name: "Marcus Thorne",
    role: "Technical Principal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "The bridge between impossible designs and structural reality. Specializes in advanced parametric modeling."
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0041D2] mb-4 block">LEADERSHIP</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic">
            THE MINDS BEHIND <br />
            <span className="text-[#0041D2]">THE PULSE.</span>
          </h2>
        </motion.div>

        <div className="space-y-40">
          {TEAM.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">{member.role}</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6 truncate">{member.name}</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-md">
                  {member.bio}
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100 max-w-sm flex items-center group cursor-pointer">
                   <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black transition-colors group-hover:text-[#0041D2]">View Portfolio</p>
                   <div className="ml-4 h-[1px] w-8 bg-black transition-all group-hover:w-12 group-hover:bg-[#0041D2]" />
                </div>
              </div>

              <div className={cn(
                "relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-2xl bg-gray-100",
                index % 2 === 1 ? "md:order-1" : ""
              )}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
