import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, CheckCircle2, XCircle, Activity, Trophy } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';
import { BetState } from '../types';

export const BettingWidget: React.FC = () => {
  const [state, setState] = useState<BetState>(BetState.IDLE);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (state === BetState.SIMULATING) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setState(BetState.WON);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }
    if (state === BetState.IDLE) {
      setProgress(0);
    }
  }, [state]);

  const handleBet = () => {
    setState(BetState.SIMULATING);
  };

  const reset = () => {
    setState(BetState.IDLE);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-neo-lg relative overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-gray-200">
               <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&h=200&q=80" className="w-full h-full object-cover grayscale" alt="Challenger" />
             </div>
             <div>
               <h3 className="font-black text-xl uppercase">Alex</h3>
               <p className="font-mono text-xs text-gray-500">Attempting 50 Pushups</p>
             </div>
          </div>
          <div className="bg-brand-yellow px-2 py-1 border-2 border-black rounded font-mono font-bold text-xs">
            LIVE
          </div>
        </div>

        {/* Content Area */}
        <div className="h-48 flex flex-col justify-center items-center relative bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl mb-6 overflow-hidden">
          
          <AnimatePresence mode="wait">
            {state === BetState.IDLE && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="font-bold text-lg mb-2">Will Alex crush it?</p>
                <div className="flex gap-2 justify-center">
                    <span className="font-mono bg-black text-white px-2 py-1 rounded text-sm">ODDS: 2.5x</span>
                </div>
              </motion.div>
            )}

            {state === BetState.SIMULATING && (
              <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="w-full h-full relative"
              >
                 {/* AI Scanner Lines */}
                 <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-brand-yellow shadow-[0_0_15px_rgba(255,245,0,0.8)] z-10"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="mx-auto mb-2 text-brand-orange animate-pulse" size={48} />
                      <p className="font-mono text-sm font-bold animate-pulse">AI ANALYZING FORM...</p>
                      <p className="font-black text-4xl mt-2">{Math.floor(progress / 2)} / 50</p>
                    </div>
                 </div>
                 {/* Grid overlay */}
                 <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              </motion.div>
            )}

            {state === BetState.WON && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <Trophy size={64} className="mx-auto mb-2 text-brand-yellow fill-brand-yellow drop-shadow-md" />
                <h4 className="font-black text-2xl uppercase italic">PAYOUT!</h4>
                <p className="font-mono font-bold text-green-600">+150 POINTS</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {state === BetState.IDLE ? (
             <>
               <NeoButton className="flex-1" variant="secondary" disabled>
                 <span className="flex items-center justify-center gap-2"><XCircle size={18} /> NAH</span>
               </NeoButton>
               <NeoButton className="flex-1" onClick={handleBet}>
                 <span className="flex items-center justify-center gap-2"><Flame size={18} /> BET YES</span>
               </NeoButton>
             </>
          ) : state === BetState.WON ? (
             <NeoButton className="w-full" onClick={reset} variant="black">
               PLAY AGAIN
             </NeoButton>
          ) : (
            <div className="w-full h-12 bg-gray-100 border-2 border-black rounded-lg flex items-center px-4">
               <div className="h-4 bg-brand-yellow border-2 border-black rounded-sm transition-all duration-100" style={{ width: `${progress}%` }}></div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};