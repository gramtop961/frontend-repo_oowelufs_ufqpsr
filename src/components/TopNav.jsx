import React from 'react';
import { Search, User, Menu, ChevronDown } from 'lucide-react';

const TopNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 sm:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="inline-flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-emerald-600">Karma</span>
              <span className="rounded-md bg-emerald-600/10 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-700">Exchange</span>
            </a>
          </div>

          <div className="hidden flex-1 items-center justify-center sm:flex">
            <div className="flex w-full max-w-2xl items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <Search className="h-4 w-4 text-slate-400" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Try: resume review, calc II, figma..." />
              <button className="rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700">Search</button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 sm:inline-flex">
              Explore <ChevronDown className="h-4 w-4" />
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">Sign in</button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700">
              <User className="h-4 w-4" /> Join
            </button>
          </div>
        </div>

        <div className="hidden items-center gap-4 py-2 text-sm text-slate-700 sm:flex">
          <button className="rounded-full px-3 py-1 hover:bg-slate-100">Tutoring</button>
          <button className="rounded-full px-3 py-1 hover:bg-slate-100">Design</button>
          <button className="rounded-full px-3 py-1 hover:bg-slate-100">Coding</button>
          <button className="rounded-full px-3 py-1 hover:bg-slate-100">Language</button>
          <button className="rounded-full px-3 py-1 hover:bg-slate-100">Career</button>
          <button className="rounded-full px-3 py-1 hover:bg-slate-100">Music</button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
