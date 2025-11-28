import React from 'react';
import { Zap, Flame, Snowflake, User, Eye, Timer } from 'lucide-react';
import { motion } from 'framer-motion';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-[320px] h-[640px] bg-white border-4 border-black rounded-[2.5rem] shadow-neo-lg overflow-hidden flex flex-col mx-auto">
      {/* Dynamic Island / Notch area */}
      <div className="h-14 bg-white border-b-2 border-black flex items-center justify-between px-6 pt-2">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 uppercase">Global Rank</span>
          <div className="flex items-center gap-1">
            <span className="font-black text-xl">#17</span>
            <Flame size={16} className="text-black fill-black" />
          </div>
        </div>
        <div className="bg-brand-yellow border-2 border-black rounded-full px-3 py-1 flex items-center gap-1 shadow-neo-sm">
          <span className="font-mono font-bold text-xs">1250</span>
          <Zap size={12} className="fill-black" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 overflow-hidden relative">
        <div className="p-4 space-y-4">
          
          {/* Trending Card */}
          <div className="bg-white border-2 border-black rounded-xl p-4 shadow-neo-sm relative">
            <div className="absolute -top-3 left-4 bg-brand-yellow border-2 border-black px-2 py-0.5 text-[10px] font-bold uppercase">
              Trending
            </div>
            
            <div className="flex justify-between items-start mb-4 mt-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full border-2 border-black flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" alt="Rex" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-black text-lg leading-none">REX</h3>
                  <span className="text-xs font-mono text-gray-500">LVL 1</span>
                </div>
              </div>
              <div className="bg-brand-yellow border-2 border-black px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                <Zap size={10} className="fill-black" /> 13 DAY
              </div>
            </div>

            <div className="bg-gray-100 border-2 border-black rounded-lg p-3 mb-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-gray-500">Committed To</p>
              <h4 className="font-black text-sm">5KM DISTANCE WALK IN 20 MINS</h4>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-brand-blue/20 border-2 border-brand-blue rounded-lg py-2 flex items-center justify-center gap-2 relative overflow-hidden group">
                 <Snowflake size={16} className="text-brand-blue" />
                 <span className="font-black text-brand-blue">16</span>
              </button>
              <button className="flex-1 bg-brand-orange text-white border-2 border-black rounded-lg py-2 flex items-center justify-center gap-2 shadow-neo-sm">
                 <Flame size={16} className="fill-white" />
                 <span className="font-black">16</span>
              </button>
            </div>
          </div>

          {/* Live Arena Header */}
          <div className="flex justify-between items-end">
            <h2 className="font-black text-xl italic uppercase">Live Arena</h2>
            <div className="flex items-center gap-1 animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-[10px] font-mono font-bold text-red-500">31,964 ONLINE</span>
            </div>
          </div>

          {/* Live Cards */}
          <div className="flex gap-3 overflow-visible">
            <div className="w-40 h-48 bg-white border-2 border-black rounded-xl shadow-neo-sm relative overflow-hidden shrink-0">
               <div className="absolute top-2 left-2 bg-white border border-black px-1.5 py-0.5 rounded text-[10px] font-mono flex items-center gap-1 z-10">
                 <Eye size={10} /> 2k
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
               <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&h=600&q=80" alt="user" className="w-full h-full object-cover grayscale" />
               <div className="absolute bottom-3 left-3 z-10 text-white">
                 <p className="font-bold text-sm">Mike</p>
                 <p className="text-[10px] font-mono opacity-80">HOME GYM</p>
               </div>
            </div>
             <div className="w-40 h-48 bg-white border-2 border-black rounded-xl shadow-neo-sm relative overflow-hidden shrink-0">
               <div className="absolute top-2 left-2 bg-white border border-black px-1.5 py-0.5 rounded text-[10px] font-mono flex items-center gap-1 z-10">
                 <Eye size={10} /> 540
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
               <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&h=600&q=80" alt="user" className="w-full h-full object-cover grayscale" />
               <div className="absolute bottom-3 left-3 z-10 text-white">
                 <p className="font-bold text-sm">Sarah</p>
                 <p className="text-[10px] font-mono opacity-80">RUNNING</p>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-16 bg-white border-t-2 border-black flex justify-around items-center px-4 relative z-20">
         <div className="flex flex-col items-center">
            <div className="w-6 h-6 bg-black rounded-t-full"></div>
            <span className="text-[10px] font-black uppercase mt-1">Home</span>
         </div>
         
         <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-14 h-14 bg-brand-yellow border-2 border-black rounded-full flex items-center justify-center shadow-neo cursor-pointer"
            >
              <Flame size={28} className="fill-black" />
            </motion.div>
         </div>

         <div className="flex flex-col items-center opacity-40">
            <User size={20} />
            <span className="text-[10px] font-bold uppercase mt-1">Profile</span>
         </div>
      </div>
    </div>
  );
};