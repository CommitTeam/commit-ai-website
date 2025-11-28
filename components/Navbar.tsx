import React from 'react';
import { Flame } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';

interface NavbarProps {
  onJoinBetaClick?: () => void;
  onNavigate?: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinBetaClick, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-black py-4 px-6 md:px-12 flex justify-between items-center">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => onNavigate?.('home')}
      >
        <div className="bg-black text-brand-yellow p-1.5 rounded-full border-2 border-black flex items-center justify-center">
          <Flame size={20} fill="#FFF500" className="text-brand-yellow" />
        </div>
        <div className="flex items-center tracking-tighter">
          <span className="text-2xl font-black italic">COMMIT</span>
          <span className="bg-black text-brand-yellow px-1 ml-0.5 text-2xl font-black italic rounded-sm">AI</span>
        </div>
      </div>
      
      <div className="hidden md:flex gap-8 items-center font-bold font-mono text-sm">
        <button onClick={() => onNavigate?.('philosophy')} className="hover:underline decoration-2 underline-offset-4 bg-transparent border-none p-0 cursor-pointer">PHILOSOPHY</button>
        <button onClick={() => onNavigate?.('mechanics')} className="hover:underline decoration-2 underline-offset-4 bg-transparent border-none p-0 cursor-pointer">HOW IT WORKS</button>
        <button onClick={() => onNavigate?.('arena')} className="hover:underline decoration-2 underline-offset-4 bg-transparent border-none p-0 cursor-pointer">ARENA</button>
      </div>

      <NeoButton size="sm" variant="black" onClick={onJoinBetaClick}>
        JOIN BETA
      </NeoButton>
    </nav>
  );
};