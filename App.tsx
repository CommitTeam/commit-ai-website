
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Philosophy } from './components/Philosophy';
import { Mechanics } from './components/Mechanics';
import { Footer } from './components/Footer';
import { JoinBetaModal } from './components/JoinBetaModal';
import { LaunchingSoonModal } from './components/LaunchingSoonModal';
import { Zap } from 'lucide-react';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import { Logo } from './components/ui/Logo';
import { AppDownloadButtons } from './components/AppDownloadButtons';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage: React.FC = () => (
  <main>
    <Hero />

    <Marquee
      text="DON'T JUST WATCH • BET • WIN • SWEAT • REPEAT"
      className="rotate-[-1deg] scale-105 my-24 border-y-4 border-black z-20"
    />

    <Philosophy />

    <div className="py-40 bg-black text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F3F4F6] to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Zap className="mx-auto mb-10 text-brand-yellow drop-shadow-[0_0_20px_rgba(255,245,0,0.5)]" size={80} />
        </motion.div>
        <h2 className="text-5xl md:text-8xl font-black uppercase mb-10 leading-[0.85] italic tracking-tighter">
          "THIS IS THE MOST <span className="text-brand-yellow">FUN</span> I'VE HAD DOING SQUATS."
        </h2>
        <p className="font-mono text-gray-400 tracking-[0.3em] uppercase">- Early Beta Tester</p>
      </div>
    </div>

    <Mechanics />

    <Marquee
      text="THE ARENA IS OPEN • COMPETE WITH FRIENDS • AI VERIFIED REPS •"
      direction="right"
      className="rotate-[1.5deg] scale-105 my-24 border-y-4 border-black bg-white"
    />

    <section id="get-app" className="py-32 px-6 bg-brand-yellow text-black border-y-4 border-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
          READY TO <br/> ENTER THE ARENA?
        </h2>
        <p className="text-xl font-bold mb-12 max-w-lg mx-auto">
          Download COMO now and start earning points for every rep you verify.
        </p>
        <AppDownloadButtons />
      </div>
    </section>
  </main>
);

const PrivacyPage: React.FC = () => <Privacy />;
const TermsPage: React.FC = () => <Terms />;
const PhilosophyPage: React.FC = () => <Philosophy />;
const MechanicsPage: React.FC = () => <Mechanics />;

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isLaunchingModalOpen, setIsLaunchingModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-black font-sans selection:bg-brand-yellow selection:text-black">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 z-[200] bg-[#F3F4F6] flex items-center justify-center"
          >
            <Logo size="lg" showTagline />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar onJoinBetaClick={() => setIsBetaModalOpen(true)} onNavigate={handleNavigate} />
          <JoinBetaModal isOpen={isBetaModalOpen} onClose={() => setIsBetaModalOpen(false)} />
          <LaunchingSoonModal isOpen={isLaunchingModalOpen} onClose={() => setIsLaunchingModalOpen(false)} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/mechanics" element={<MechanicsPage />} />
          </Routes>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
