import React from 'react';
import { Sparkles, ArrowRight, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-violet-400 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-pink-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24 lg:pt-28">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -8 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Barter skills. Earn karma. Build community.</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-fuchsia-100 to-white bg-clip-text text-transparent">Campus Karma Exchange</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-white/90">
            Trade skills, notes, and small favors using time and karma—not money. Teach for an hour, learn for an hour.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 grid w-full max-w-lg grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2">
            <button 
              onClick={onPrimaryClick} 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-indigo-700 shadow-lg shadow-indigo-900/20 ring-1 ring-white/50 transition hover:-translate-y-0.5 hover:shadow-xl">
              List your skills
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={onSecondaryClick} 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/10 ring-1 ring-white/20 transition hover:bg-white/20">
              Browse requests
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 grid w-full gap-4 xs:grid-cols-2 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-300" />
                <div>
                  <p className="text-sm text-white/80">Time-banked</p>
                  <p className="font-semibold">1 hr teach = 1 hr learn</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-emerald-300" />
                <div>
                  <p className="text-sm text-white/80">Verified badges</p>
                  <p className="font-semibold">Earn by helping</p>
                </div>
              </div>
            </div>
            <div className="xs:col-span-2 sm:col-span-1 rounded-2xl bg-white/10 p-4 backdrop-blur ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-pink-300" />
                <div>
                  <p className="text-sm text-white/80">Pay it forward</p>
                  <p className="font-semibold">Boosts + bonus karma</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
