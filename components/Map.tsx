'use client';

import { motion } from 'motion/react';

export default function Map() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="relative aspect-video lg:aspect-square bg-slate-100 overflow-hidden grayscale group"
    >
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.209023559039!2d107.5938315868108!3d-6.913907588529234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e725803e9a63%3A0x87fcd3eb310e8e7a!2s23%20Paskal%20Shopping%20Center!5e0!3m2!1sen!2sid!4v1784727423795!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Location Map"
        className="opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
      />
      <div className="absolute inset-0 pointer-events-none border border-slate-200" />
      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 border border-slate-100">
        <span className="text-[8px] font-black uppercase tracking-widest text-[#0041D2]">Satellite Sync / Active</span>
      </div>
    </motion.div>
  );
}
