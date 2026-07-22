'use client';

import { motion } from 'motion/react';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-0 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-32"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#0041D2] mb-4 block">Dialogue</span>
          <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-[0.8] mb-12">
            Let's Shape <br/>
            <span className="font-bold underline italic text-[#0041D2]">New Horizons.</span>
          </h1>
          <div className="h-px w-full bg-slate-100" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 relative">
          <div className="lg:col-span-1" /> {/* Spacer */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-4 space-y-20">
            <Map />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-100">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0041D2] mb-4">BANDUNG HQ</h4>
                <p className="text-sm font-light text-slate-500 leading-relaxed uppercase">
                  Bandung, Indonesia
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0041D2] mb-4">JABODETABEK OFFICE</h4>
                <p className="text-sm font-light text-slate-500 leading-relaxed uppercase">
                  BSD, Indonesia
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0041D2] mb-4">Connect</h4>
                <p className="text-sm font-light text-slate-500 leading-relaxed uppercase">
                  Instagram <br/>
                  LinkedIn <br/ >
                  Whatsapp
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0041D2] mb-4">Inquiries</h4>
                <p className="text-sm font-light text-slate-500 leading-relaxed uppercase">
                  kevin@kusliansjahandpartners.com<br/>
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
