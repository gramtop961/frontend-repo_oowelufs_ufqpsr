import React from 'react';
import { Plus, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, title: 'Python Tutoring', tags: ['Beginner', 'Data Basics'], karma: 8, verified: true },
  { id: 2, title: 'Guitar Chords 101', tags: ['Acoustic', 'Fingerstyle'], karma: 6, verified: false },
  { id: 3, title: 'Graphic Design Basics', tags: ['Canva', 'Brand Kit'], karma: 10, verified: true },
  { id: 4, title: 'Public Speaking Practice', tags: ['Confidence', 'Delivery'], karma: 5, verified: false },
  { id: 5, title: 'HTML & CSS Crash Course', tags: ['Web', 'Flexbox'], karma: 7, verified: true },
  { id: 6, title: 'Intro to Photography', tags: ['Framing', 'Light'], karma: 6, verified: false },
];

const SkillCard = ({ item }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.4 }}
    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-start justify-between gap-4">
      <h3 className="font-semibold text-slate-800 leading-snug">{item.title}</h3>
      {item.verified && (
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 ring-1 ring-emerald-200">
          <BadgeCheck className="h-4 w-4" /> Verified
        </span>
      )}
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      {item.tags.map((t) => (
        <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
      ))}
    </div>
    <div className="mt-5 flex items-center justify-between">
      <span className="text-sm text-slate-500">Suggested karma: {item.karma}</span>
      <button className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">Request</button>
    </div>
  </motion.div>
);

const SkillListing = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">I can teach</h2>
          <p className="text-slate-500">Show what you can help with and earn karma.</p>
        </div>
        <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
          <Plus className="h-4 w-4" /> Add skill
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((item) => (
          <SkillCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SkillListing;
