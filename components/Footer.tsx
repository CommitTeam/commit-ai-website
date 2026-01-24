
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-20 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        <div className="text-center md:text-left">
          <Link
            to="/"
            className="mb-8 cursor-pointer flex justify-center md:justify-start"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Logo size="md" showTagline className="!items-start" />
          </Link>
          <p className="font-bold text-gray-400 max-w-sm text-sm leading-relaxed mx-auto md:mx-0">
            The social fitness arena for people who hate fitness apps but love winning. Effort verified by AI.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-8 w-full md:w-auto">

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <a
              href="mailto:contact@icommit.ai"
              className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors flex items-center gap-2"
            >
              <Mail size={14} /> CONTACT
            </a>
            <Link to="/privacy" className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">PRIVACY</Link>
            <Link to="/terms" className="text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">TERMS</Link>
            <Link 
              to="/deleteAccount" 
              className="text-[11px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
            >
              DELETE ACCOUNT
            </Link>
          </div>

          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">© 2024 COMO INC. ALL BETS ARE FINAL.</p>
        </div>

      </div>
    </footer>
  );
};
