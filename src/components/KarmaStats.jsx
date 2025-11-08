import React from 'react';
import { Flame, Medal, Trophy, Gift } from 'lucide-react';

const KarmaStats = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Flame className="h-6 w-6 text-rose-600" />
            <div>
              <p className="text-sm text-slate-500">Your karma</p>
              <p className="text-2xl font-bold text-slate-900">240</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Medal className="h-6 w-6 text-emerald-600" />
            <div>
              <p className="text-sm text-slate-500">Verified skills</p>
              <p className="text-2xl font-bold text-slate-900">3</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-amber-600" />
            <div>
              <p className="text-sm text-slate-500">Leaderboard rank</p>
              <p className="text-2xl font-bold text-slate-900">#7 in CS</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Gift className="h-6 w-6 text-indigo-600" />
            <div>
              <p className="text-sm text-slate-500">Pay-it-forward bonus</p>
              <p className="text-2xl font-bold text-slate-900">+40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KarmaStats;
