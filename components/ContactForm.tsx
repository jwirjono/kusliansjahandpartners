'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preference: 'Email'
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
          <input
            required
            type="text"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full bg-transparent border-b border-slate-200 py-4 text-2xl font-light uppercase tracking-tighter focus:outline-none focus:border-[#0041D2] transition-colors placeholder:text-slate-100"
            placeholder="Identity / Entity"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
            <input
              required
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full bg-transparent border-b border-slate-200 py-4 text-2xl font-light uppercase tracking-tighter focus:outline-none focus:border-[#0041D2] transition-colors placeholder:text-slate-100"
              placeholder="reach@domain.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
            <input
              type="tel"
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              className="w-full bg-transparent border-b border-slate-200 py-4 text-2xl font-light uppercase tracking-tighter focus:outline-none focus:border-[#0041D2] transition-colors placeholder:text-slate-100"
              placeholder="+00 (0) 000 0000"
            />
          </div>
        </div>

        <div className="space-y-2 relative">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Preferred Contact Method</label>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-transparent border-b border-slate-200 py-4 text-2xl font-light uppercase tracking-tighter flex items-center justify-between cursor-pointer group"
          >
            <span className={cn(formState.preference === '' ? 'text-slate-100' : 'text-slate-900')}>
              {formState.preference || 'Select Method'}
            </span>
            <ChevronDown size={24} className={cn('transition-transform duration-300', isDropdownOpen ? 'rotate-180' : '')} />
          </div>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full bg-white border border-slate-100 shadow-2xl z-20 overflow-hidden"
              >
                {['Email', 'WhatsApp', 'Phone'].map((method) => (
                  <div
                    key={method}
                    onClick={() => {
                      setFormState({ ...formState, preference: method });
                      setIsDropdownOpen(false);
                    }}
                    className="px-6 py-4 hover:bg-slate-50 cursor-pointer text-sm uppercase tracking-widest transition-colors border-b border-slate-50 last:border-0"
                  >
                    {method}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
          <textarea
            required
            rows={4}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full bg-transparent border-b border-slate-200 py-4 text-2xl font-light uppercase tracking-tighter focus:outline-none focus:border-[#0041D2] transition-colors placeholder:text-slate-100 resize-none"
            placeholder="Vision / Project / Inquiry"
          />
        </div>

        <button
          type="submit"
          className="group w-full flex items-center justify-between bg-black text-white px-8 py-6 hover:bg-[#0041D2] transition-all duration-500 ring-1 ring-black hover:ring-[#0041D2]"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.8em]">Send Inquiry</span>
          <Send size={16} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
        </button>
      </form>
    </motion.div>
  );
}
