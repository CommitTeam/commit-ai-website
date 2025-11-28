import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Philosophy } from './components/Philosophy';
import { Mechanics } from './components/Mechanics';
import { Footer } from './components/Footer';
import { JoinBetaModal } from './components/JoinBetaModal';
import { LaunchingSoonModal } from './components/LaunchingSoonModal';
import { Zap } from 'lucide-react';
import { Arena } from './components/Arena';

// Simple router component to handle navigation
const Router = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isLaunchingModalOpen, setIsLaunchingModalOpen] = useState(false);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'philosophy':
        return <Philosophy />;
      case 'mechanics':
        return <Mechanics />;
      case 'arena':
        return <Arena />;
      case 'home':
      default:
        return (
          <main>
            <Hero onDownloadClick={() => setIsLaunchingModalOpen(true)} />
            
            <Marquee 
              text="DON'T JUST WATCH. BET." 
              className="rotate-2 md:rotate-1 scale-105 transform origin-center my-12"
            />

            <Philosophy />

            <div className="py-24 bg-black text-white text-center">
              <div className="max-w-4xl mx-auto px-6">
                 <Zap className="mx-auto mb-6 text-brand-yellow animate-pulse" size={64} />
                 <h2 className="text-4xl md:text-7xl font-black uppercase mb-6 leading-tight">
                   "This is the most fun I've had doing squats since... <span className="text-brand-yellow">Never.</span>"
                 </h2>
                 <p className="font-mono text-gray-400">- Early Beta Tester</p>
              </div>
            </div>
            
            <Mechanics />

            <Marquee 
              text="JOIN THE LIVE ARENA • WIN REWARDS • SWEAT TOGETHER •" 
              direction="right"
              className="-rotate-1 md:-rotate-1 scale-105 transform origin-center my-0 border-b-0"
            />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-black font-sans selection:bg-brand-yellow selection:text-black overflow-x-hidden">
      <Navbar onJoinBetaClick={() => setIsBetaModalOpen(true)} onNavigate={navigateTo} />
      
      <JoinBetaModal isOpen={isBetaModalOpen} onClose={() => setIsBetaModalOpen(false)} />
      <LaunchingSoonModal isOpen={isLaunchingModalOpen} onClose={() => setIsLaunchingModalOpen(false)} />
      
      {renderPage()}

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

const App: React.FC = () => {
  return <Router />;
};

export default App;