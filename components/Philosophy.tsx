import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Users, Trophy } from 'lucide-react';

const Card = ({ title, desc, icon, delay }: { title: string, desc: string, icon: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white border-2 border-black rounded-xl p-8 shadow-neo hover:shadow-neo-lg transition-all"
  >
    <div className="w-12 h-12 bg-brand-yellow border-2 border-black rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="font-black text-2xl mb-4 uppercase">{title}</h3>
    <p className="font-mono text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-6 bg-white relative border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-5xl font-black mb-6 uppercase leading-none">
            Why another <br/> fitness app?
          </h2>
          <p className="text-xl font-bold text-gray-500">
            Because looking at graphs alone in your room sucks. We built Commit AI because the fitness industry tries to sell you data, but the real motivation lies in your community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Less Data, More Drama" 
            desc="Stop obsessing over heart rate variability. Start obsessing over whether Mike is actually going to do those burpees he promised."
            icon={<BarChart2 className="text-black" />}
            delay={0}
          />
          <Card 
            title="Social Accountability" 
            desc="It's harder to skip a workout when 5 of your friends have money riding on your success. Stakes make it stick."
            icon={<Users className="text-black" />}
            delay={0.2}
          />
          <Card 
            title="Earn While You Burn" 
            desc="Win points for working out. Win points for predicting outcomes. Redeem for exclusive gear and bragging rights."
            icon={<Trophy className="text-black" />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};