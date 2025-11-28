import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';

interface LaunchingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaunchingSoonModal: React.FC<LaunchingSoonModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={onClose}
             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
           />

           {/* Modal */}
           <motion.div
             initial={{ scale: 0.9, opacity: 0, y: 20 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             exit={{ scale: 0.9, opacity: 0, y: 20 }}
             onClick={(e) => e.stopPropagation()}
             className="relative bg-white border-4 border-black shadow-neo-lg rounded-2xl w-full max-w-sm overflow-hidden text-center"
           >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full border-2 border-transparent hover:border-black transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 pt-10">
                <div className="flex justify-center mb-6">
                    <div className="bg-brand-blue p-3 rounded-full border-2 border-black shadow-neo-sm transform rotate-3">
                        <Rocket size={32} className="text-white" />
                    </div>
                </div>
                
                <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Launching Soon</h2>
                <p className="font-bold text-gray-600 mb-8 leading-relaxed">
                  We are currently in private beta polishing the weights. The app stores will be live very soon.
                </p>

                <NeoButton onClick={onClose} fullWidth variant="black">
                  GOT IT
                </NeoButton>
              </div>
              
              <div className="h-4 bg-brand-blue border-t-2 border-black w-full flex">
                  {[...Array(20)].map((_, i) => (
                      <div key={i} className="flex-1 border-r border-black/20"></div>
                  ))}
              </div>
           </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};