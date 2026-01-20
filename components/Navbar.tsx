
import React, { useState } from 'react';
import { Logo } from './ui/Logo';
import { NeoButton } from './ui/NeoButton';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onJoinBetaClick?: () => void;
  onNavigate?: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinBetaClick, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate?.(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="py-3 px-6 md:px-12 flex justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => handleNavigate('home')}
        >
          <Logo size="sm" />
        </div>

        <div className="hidden md:flex gap-10 items-center font-bold text-[11px] tracking-widest text-gray-500">
          <button onClick={() => handleNavigate('philosophy')} className="hover:text-black transition-colors">PHILOSOPHY</button>
          <button onClick={() => handleNavigate('mechanics')} className="hover:text-black transition-colors">MECHANICS</button>
          <button onClick={() => window.location.href = 'mailto:contact@icommit.ai'} className="hover:text-black transition-colors">CONTACT</button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <NeoButton size="sm" variant="black" onClick={onJoinBetaClick}>
              JOIN AMBASSADOR PROGRAM
            </NeoButton>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-4 space-y-4">
          <button
            onClick={() => handleNavigate('philosophy')}
            className="block w-full text-left font-bold text-sm tracking-widest text-gray-500 hover:text-black transition-colors py-2"
          >
            PHILOSOPHY
          </button>
          <button
            onClick={() => handleNavigate('mechanics')}
            className="block w-full text-left font-bold text-sm tracking-widest text-gray-500 hover:text-black transition-colors py-2"
          >
            MECHANICS
          </button>
          <button
            onClick={() => window.location.href = 'mailto:contact@icommit.ai'}
            className="block w-full text-left font-bold text-sm tracking-widest text-gray-500 hover:text-black transition-colors py-2"
          >
            CONTACT
          </button>
          <div className="pt-2 sm:hidden">
            <NeoButton size="sm" variant="black" onClick={() => { onJoinBetaClick?.(); setIsMenuOpen(false); }} fullWidth>
              JOIN AMBASSADOR PROGRAM
            </NeoButton>
          </div>
        </div>
      )}
    </nav>
  );
};
