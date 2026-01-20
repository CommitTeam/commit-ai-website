
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { Logo } from './ui/Logo';
import { NeoButton } from './ui/NeoButton';
import { Flame, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-12 px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 overflow-hidden relative">
      {/* Softened background lighting */}
      <div className="absolute top-[15%] right-[-5%] w-[500px] h-[500px] bg-brand-yellow/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-2%] w-[300px] h-[300px] bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="flex-1 max-w-xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo size="xl" showTagline className="mb-10 !items-start" />
          
          <h1 className="text-4xl md:text-6xl font-[900] leading-[0.9] tracking-tighter mb-8 italic">
            DATA IS BORING. <br/>
            <span className="text-black bg-brand-yellow px-3 py-0.5 inline-block -rotate-1 mt-1 rounded-lg">WINNING</span> <br/>
            IS NOT.
          </h1>
          
          <p className="text-lg md:text-xl font-bold text-gray-400 mb-10 leading-snug max-w-md">
            The social arena where your effort is currency <br className="hidden md:block" />
            and AI verifies every move.
          </p>

          <div className="flex flex-wrap gap-4">
            <NeoButton size="md" variant="black" className="px-8 py-4 text-sm glow-yellow" onClick={() => document.getElementById('get-app')?.scrollIntoView({ behavior: 'smooth' })}>
              GET THE APP
            </NeoButton>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative group"
        >
          {/* Scaled down floating ribbons */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-12 top-24 bg-white border-2 border-black p-3 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20 hidden md:flex items-center gap-2.5 -rotate-3"
          >
             <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center border-2 border-black">
                <Flame size={16} className="fill-black" />
             </div>
             <div>
                <p className="text-[8px] font-black uppercase text-gray-400 leading-none mb-0.5">Current Bet</p>
                <p className="text-[10px] font-black leading-none">150 PTS ON 'YO'</p>
             </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
            className="absolute -right-6 bottom-44 bg-black text-white p-3 rounded-xl shadow-[4px_4px_0px_rgba(255,245,0,0.1)] z-20 hidden md:flex items-center gap-2.5 rotate-2"
          >
             <ShieldCheck size={18} className="text-brand-yellow" />
             <p className="text-[10px] font-black uppercase tracking-widest italic leading-none">AI Verified</p>
          </motion.div>

          <div className="absolute inset-0 bg-brand-yellow/5 blur-3xl -z-10 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
};
