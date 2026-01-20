
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Trophy } from 'lucide-react';

const Card = ({ title, desc, icon, delay }: { title: string, desc: string, icon: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white border border-black/5 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-black/5 group-hover:bg-brand-yellow transition-colors">
      {icon}
    </div>
    <h3 className="font-black text-2xl mb-4 italic uppercase tracking-tighter">{title}</h3>
    <p className="font-bold text-gray-500 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 px-6 bg-[#F3F4F6] relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">
            BET ON <span className="text-black bg-brand-yellow/70 px-3 py-1 rounded-lg inline-block shadow-[0_10px_30px_rgba(0,0,0,0.15)]">YOURSELF.</span>
          </h2>
          <p className="text-lg font-bold text-gray-400">
            We're swapping boring graphs for high-stakes social competition.
            COMO is where community verification meets fitness motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Drama over Data"
            desc="Instead of heart rates, we track heart beats — yours and your friends' as the timer runs down on a high-stakes workout."
            icon={<Zap className="text-black" />}
            delay={0}
          />
          <Card
            title="Proof in Motion"
            desc="Our AI verify engine ensures that every rep counts. No cheating, just pure calibrated effort verified in real-time."
            icon={<Users className="text-black" />}
            delay={0.1}
          />
          <Card
            title="The Splurge"
            desc="Earn points for wins, streaks, and smart predictions. Redeem them for exclusive gear in our shop."
            icon={<Trophy className="text-black" />}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};
