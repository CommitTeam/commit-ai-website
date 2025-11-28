import React from 'react';
import { Flame } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t-4 border-brand-yellow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        
        <div>
          <div 
            className="flex items-center gap-2 justify-center md:justify-start mb-6 cursor-pointer"
            onClick={() => onNavigate?.('home')}
          >
            <div className="bg-brand-yellow text-black p-1 rounded-full border-2 border-white">
              <Flame size={24} fill="#000" />
            </div>
            <div className="flex items-center tracking-tighter">
              <span className="text-3xl font-black italic">COMMIT</span>
              <span className="bg-brand-yellow text-black px-1 ml-1 text-3xl font-black italic rounded-sm">AI</span>
            </div>
          </div>
          <p className="font-mono text-gray-400 max-w-sm mb-2">
            YOU VS WHO
          </p>
          <p className="font-mono text-gray-500 max-w-sm text-sm">
            The fitness app for people who hate fitness apps but love winning.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg font-mono text-white focus:border-brand-yellow outline-none w-full md:w-64"
            />
            <NeoButton variant="primary">
              GET EARLY ACCESS
            </NeoButton>
          </div>
          <p className="text-xs font-mono text-gray-500">© 2024 COMMIT AI INC. ALL BETS ARE FINAL.</p>
        </div>

      </div>
    </footer>
  );
};