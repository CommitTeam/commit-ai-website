
import React from 'react';
import { BettingWidget } from './BettingWidget';
import { Scan, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Mechanics: React.FC = () => {
  return (
    <section id="mechanics" className="py-24 px-6 bg-brand-gray relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[0.9]">
            TRUST, BUT <br/>
            <span className="bg-brand-yellow px-2">VERIFY.</span>
          </h2>
          
          <p className="text-xl font-bold text-gray-600 mb-8">
            How do you know they actually did the pushups? <br/>
            Our AI Motion Engine analyzes video feeds in real-time.
          </p>

          <ul className="space-y-6 font-mono text-lg">
            <li className="flex items-start gap-4">
              <div className="bg-white p-2 border-2 border-black rounded shadow-neo-sm shrink-0">
                <ShieldCheck size={20} />
              </div>
              <p>Anti-cheat detection ensures full range of motion.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-white p-2 border-2 border-black rounded shadow-neo-sm shrink-0">
                <Scan size={20} />
              </div>
              <p>No wearables needed. Just point your camera and move.</p>
            </li>
          </ul>
        </div>

        <div className="relative z-10">
          <div className="absolute -top-10 -right-10 bg-brand-orange w-32 h-32 rounded-full border-2 border-black hidden md:block"></div>
          <div className="absolute -bottom-10 -left-10 bg-brand-blue w-24 h-24 rounded-full border-2 border-black hidden md:block"></div>
          <BettingWidget />
        </div>

      </div>
    </section>
  );
};
