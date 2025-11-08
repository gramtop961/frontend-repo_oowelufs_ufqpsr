import React from 'react';
import { Flame, Medal, Trophy, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const Stat = ({ icon: Icon, label, value, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.4 }}
    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center gap-3">
      <Icon className={`h-6 w-6 ${color}`} />
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </div>
    </div>
  </motion.div>
);

const KarmaStats = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Flame} label="Your karma" value="240" color="text-rose-600" />
        <Stat icon={Medal} label="Verified skills" value="3" color="text-emerald-600" />
        <Stat icon={Trophy} label="Leaderboard rank" value="#7 in CS" color="text-amber-600" />
        <Stat icon={Gift} label="Pay-it-forward bonus" value="+40" color="text-indigo-600" />
      </div>
    </section>
  );
};

export default KarmaStats;
