
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import AboutImage from '@/public/images/aboutUs.png'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50 overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
           initial={{ scale: 1.2, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 0.03 }}
           viewport={{ once: true }}
           transition={{ duration: 2 }}
           className="absolute -top-10 -right-20 text-[30vw] md:text-[20vw] font-bold tracking-tighter uppercase whitespace-nowrap z-0 select-none pointer-events-none text-black"
        >
          ABOUT US
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <div className="md:col-span-7 space-y-8 md:space-y-12">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]"
            >
              Building <span className="text-[#0041D2]">Ecosystems</span><br />
              Not Just Interiors.
            </motion.h2>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="space-y-8 max-w-xl text-lg text-gray-600 font-light leading-relaxed"
            >
              <p>
                Founded in 2012, MAD PULSE Architecture is a global practice that challenges conventional urbanism. We look to the natural world—its movement, its logic, and its resilience—to find the blueprints for the cities of tomorrow.
              </p>
              <p>
                Our team of 150+ visionaries works across offices in Beijing, Los Angeles, and Tokyo, bringing a boundaryless approach to cultural, residential, and urban design.
              </p>
              
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-gray-200">
                <div>
                  <h4 className="text-3xl font-bold text-[#0041D2] mb-2 uppercase">40+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Awards Won</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#0041D2] mb-2 uppercase">15</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Countries</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-full min-h-[500px] bg-white rounded-[40px] overflow-hidden relative"
            >
              <Image
                src={AboutImage}
                alt="Architecture Studio"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
