import React from 'react';
import { Sparkles, ArrowRight, Clock, Award } from 'lucide-react';

const Hero = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-400 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-400 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Barter skills. Earn karma. Build community.</span>
          </div>

          <h1 className="font-bold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl">
            Campus Karma Exchange
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Trade skills, notes, and small favors using time and karma—not money. Teach for an hour, learn for an hour.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onPrimaryClick} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 shadow hover:shadow-lg hover:-translate-y-0.5 transition">
              List your skills
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={onSecondaryClick} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20 transition">
              Browse requests
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-300" />
                <div>
                  <p className="text-sm text-white/80">Time-banked</p>
                  <p className="font-semibold">1 hr teach = 1 hr learn</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-emerald-300" />
                <div>
                  <p className="text-sm text-white/80">Verified badges</p>
                  <p className="font-semibold">Earn by helping</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-xl bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-pink-300" />
                <div>
                  <p className="text-sm text-white/80">Pay it forward</p>
                  <p className="font-semibold">Boosts + bonus karma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
