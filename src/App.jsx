import React, { useRef } from 'react';
import Hero from './components/Hero';
import KarmaStats from './components/KarmaStats';
import SkillListing from './components/SkillListing';
import RequestBoard from './components/RequestBoard';

function App() {
  const requestRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToRequests = () => {
    requestRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero onPrimaryClick={scrollToSkills} onSecondaryClick={scrollToRequests} />
      <div className="-mt-8">
        <KarmaStats />
      </div>
      <div ref={skillsRef}>
        <SkillListing />
      </div>
      <div ref={requestRef}>
        <RequestBoard />
      </div>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-slate-500">
          Built for students. No money, just community. © {new Date().getFullYear()} Campus Karma Exchange
        </div>
      </footer>
    </div>
  );
}

export default App;
