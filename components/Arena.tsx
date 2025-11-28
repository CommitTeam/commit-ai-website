import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Zap, Trophy, TrendingUp, Users, ArrowRight, Shield, Swords } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';
import { BettingWidget } from './BettingWidget';

const LIVE_EVENTS = [
  { user: "Sarah_K", action: "just bet 50 pts", target: "Mike's 5k Run", time: "2m ago" },
  { user: "GymRat_99", action: "completed", target: "30 Burpees", time: "5m ago" },
  { user: "Alex.Dev", action: "failed", target: "Morning Yoga", time: "12m ago" },
  { user: "FitQueen", action: "is live", target: "Attempting PR", time: "Now" },
];

const LEADERBOARD = [
  { rank: 1, name: "Fury", points: 5396, streak: 13, gym: "Gold's Gym" },
  { rank: 2, name: "Viper", points: 4797, streak: 9, gym: "Garage" },
  { rank: 3, name: "Echo", points: 4710, streak: 6, gym: "Equinox" },
  { rank: 4, name: "Rex", points: 4150, streak: 12, gym: "Planet Fitness" },
  { rank: 5, name: "Tank", points: 3900, streak: 4, gym: "Anytime Fitness" },
];

export const Arena: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Arena Header */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500 border-2 border-black text-white px-3 py-1 rounded-full font-mono font-bold text-xs mb-4 animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              LIVE FEED
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              The <span className="text-brand-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-stroke-black">Arena</span>
            </h1>
            <p className="font-bold text-gray-500 mt-4 text-xl">
              Where points are won, streaks are broken, and sweat is currency.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="bg-white border-2 border-black p-4 rounded-xl shadow-neo text-center">
                <p className="text-xs font-mono font-bold text-gray-500 uppercase">Active Pot</p>
                <p className="text-2xl font-black">1.2M <span className="text-brand-orange">PTS</span></p>
             </div>
             <div className="bg-white border-2 border-black p-4 rounded-xl shadow-neo text-center">
                <p className="text-xs font-mono font-bold text-gray-500 uppercase">Live Users</p>
                <p className="text-2xl font-black">32.4K</p>
             </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Live Feed (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border-2 border-black rounded-xl p-0 overflow-hidden shadow-neo">
              <div className="bg-black text-white p-3 font-mono font-bold text-sm uppercase flex items-center gap-2">
                <ActivityIcon /> Recent Activity
              </div>
              <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                {LIVE_EVENTS.map((event, i) => (
                  <div key={i} className="p-4 border-b-2 border-gray-100 hover:bg-yellow-50 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold">{event.user}</span>
                      <span className="text-[10px] font-mono text-gray-400">{event.time}</span>
                    </div>
                    <p className="text-sm">
                      <span className="text-gray-600">{event.action}</span> <span className="font-bold underline decoration-brand-yellow decoration-2">{event.target}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-blue border-2 border-black rounded-xl p-6 shadow-neo text-white relative overflow-hidden">
               <Swords className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 rotate-12" />
               <h3 className="font-black text-2xl uppercase italic mb-2">Daily Challenge</h3>
               <p className="font-mono text-sm mb-4">Complete 100 Pushups before midnight.</p>
               <NeoButton size="sm" variant="black" fullWidth>ACCEPT</NeoButton>
            </div>
          </div>

          {/* Middle Column: Featured Battle (5 cols) */}
          <div className="lg:col-span-5">
             <div className="bg-white border-2 border-black rounded-xl p-1 shadow-neo-lg h-full flex flex-col">
                <div className="bg-gray-100 border-b-2 border-black p-3 flex justify-between items-center rounded-t-lg">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                     <span className="font-mono font-bold text-xs uppercase">Featured Match</span>
                   </div>
                   <span className="font-mono font-bold text-xs bg-black text-white px-2 py-0.5 rounded">x2.5 MULTIPLIER</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center items-center">
                   <BettingWidget />
                   <p className="text-center mt-6 text-sm text-gray-500 font-mono">
                     AI verification active. 98% accuracy confidence.
                   </p>
                </div>
             </div>
          </div>

          {/* Right Column: Leaderboard (4 cols) */}
          <div className="lg:col-span-4">
             <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-neo h-full">
                <div className="bg-brand-yellow border-b-2 border-black p-4 flex justify-between items-center">
                   <h3 className="font-black text-xl uppercase italic">Global Ranking</h3>
                   <Trophy size={20} className="fill-black" />
                </div>
                <div>
                   {LEADERBOARD.map((user, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 border-b-2 border-black/10 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className={`
                          w-8 h-8 flex items-center justify-center font-black border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          ${i === 0 ? 'bg-brand-yellow' : 'bg-white'}
                        `}>
                          {user.rank}
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between items-center">
                             <h4 className="font-bold group-hover:underline decoration-2 underline-offset-2">{user.name}</h4>
                             <span className="font-mono font-bold text-sm">{user.points.toLocaleString()}</span>
                           </div>
                           <div className="flex justify-between items-center text-xs text-gray-500 font-mono mt-0.5">
                              <span>{user.gym}</span>
                              <span className="flex items-center gap-1 text-orange-500"><Flame size={10} className="fill-orange-500" /> {user.streak} day streak</span>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
                <div className="p-4 bg-gray-50 border-t-2 border-black">
                   <NeoButton size="sm" fullWidth variant="secondary">VIEW FULL LEADERBOARD</NeoButton>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ActivityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);
