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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142293461243!2d-73.98731968459344!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x51068d5668e146e2!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625501569342!5m2!1sen!2sus"
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
