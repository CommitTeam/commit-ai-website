
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Snowflake, Zap, Trophy, Activity } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';
import { BetState } from '../types';

export const BettingWidget: React.FC = () => {
  const [state, setState] = useState<BetState>(BetState.IDLE);
  const [progress, setProgress] = useState(0);

  const handleBet = () => {
    setState(BetState.SIMULATING);
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setState(BetState.WON);
      }
    }, 40);
  };

  const reset = () => {
    setState(BetState.IDLE);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white border border-black/5 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
        
        {/* Card Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-brand-yellow overflow-hidden bg-blue-50">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex" alt="Alex" />
          </div>
          <div>
            <h3 className="font-black text-sm">Alex_Dev</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase">LVL 1 Rookie</p>
          </div>
        </div>

        {/* Challenge Text */}
        <div className="mb-10 text-center px-4">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Committed to</p>
           <h4 className="font-black text-xl italic leading-tight">COMPLETE 10 PUSH UPS IN 1 MIN</h4>
        </div>

        <AnimatePresence mode="wait">
          {state === BetState.IDLE && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex gap-4"
            >
               <button 
                 disabled
                 className="flex-1 bg-gray-50 border border-black/5 rounded-2xl py-5 flex items-center justify-center gap-2 font-black text-sm text-gray-300 transition-all"
               >
                  <Snowflake size={18} /> NO
               </button>
               <button 
                 onClick={handleBet}
                 className="flex-1 bg-brand-yellow border-2 border-black rounded-2xl py-5 flex items-center justify-center gap-2 font-black text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all active:translate-x-1 active:translate-y-1"
               >
                  <Flame size={18} className="fill-brand-orange text-brand-orange" /> YO
               </button>
            </motion.div>
          )}

          {state === BetState.SIMULATING && (
            <motion.div 
              key="sim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
               <div className="h-40 bg-gray-50 rounded-[2rem] border border-black/5 flex flex-col items-center justify-center relative overflow-hidden">
                  <Activity size={32} className="text-brand-orange animate-pulse mb-2" />
                  <p className="font-black text-xs uppercase tracking-widest text-gray-400">AI Analyzing Form</p>
                  <div className="absolute top-0 left-0 h-1 bg-brand-yellow shadow-lg transition-all duration-300" style={{ width: `${progress}%` }}></div>
               </div>
               <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden border border-black/5">
                 <motion.div 
                   className="h-full bg-brand-yellow"
                   initial={{ width: 0 }}
                   animate={{ width: `${progress}%` }}
                 />
               </div>
            </motion.div>
          )}

          {state === BetState.WON && (
            <motion.div 
              key="won"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
               <div className="w-20 h-20 bg-brand-yellow rounded-full border-2 border-black mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Trophy size={32} className="fill-black" />
               </div>
               <h4 className="font-black text-2xl italic mb-2 uppercase">YOU WON!</h4>
               <p className="font-bold text-gray-400 mb-6">+150 PTS earned</p>
               <NeoButton variant="black" fullWidth onClick={reset}>
                 CONTINUE
               </NeoButton>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
