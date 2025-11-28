import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { ArrowRight, Star } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80"
];

interface HeroProps {
  onDownloadClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 overflow-hidden relative">
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <Star size={120} className="fill-black rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
        <Star size={80} className="fill-black -rotate-12" />
      </div>

      <div className="flex-1 max-w-xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-brand-yellow border-2 border-black px-4 py-1 rounded-full mb-6 shadow-neo-sm transform -rotate-2">
            <span className="font-mono font-bold text-sm tracking-tighter">HIGH STAKES FITNESS</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
            BET ON <br/>
            <span className="text-brand-orange italic underline decoration-4 underline-offset-4">SWEAT.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-gray-600 mb-8 leading-relaxed">
            Data is boring. Friends are fun. Put your points where your mouth is and win rewards when your crew completes their workouts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <NeoButton size="lg" className="flex items-center gap-2 justify-center" onClick={onDownloadClick}>
              DOWNLOAD NOW <ArrowRight size={20} />
            </NeoButton>
            <NeoButton 
              size="lg" 
              variant="secondary" 
              className="flex items-center gap-2 justify-center"
              onClick={() => window.open('https://commitai-main-594004238686.us-west1.run.app', '_blank')}
            >
              VIEW DEMO
            </NeoButton>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm font-mono font-bold text-gray-500">
             <div className="flex -space-x-2">
                {AVATARS.map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                    <img src={src} alt={`User ${i+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <p>JOIN 12,000+ BETA USERS</p>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 z-10 scale-75 md:scale-100 origin-top">
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
};