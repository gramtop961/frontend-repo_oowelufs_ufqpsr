import React from 'react';
import { Star, ShieldCheck, Heart, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const pros = [
  { id: 1, name: 'Aisha M.', title: 'Python Tutor • CS Sophomore', rating: 4.9, reviews: 58, tags: ['Data Basics', 'Pandas', 'Beginner Friendly'], price: '8 karma/hr', verified: true },
  { id: 2, name: 'Leo S.', title: 'UX Designer • HCI', rating: 4.8, reviews: 41, tags: ['Figma', 'Wireframes', 'Portfolio'], price: '10 karma/hr', verified: true },
  { id: 3, name: 'Camila R.', title: 'Language Exchange • ESL', rating: 5.0, reviews: 29, tags: ['Conversation', 'Pronunciation'], price: '6 karma/hr', verified: false },
  { id: 4, name: 'Ethan K.', title: 'Math Mentor • Calc II', rating: 4.7, reviews: 73, tags: ['Integration', 'Exam Prep'], price: '7 karma/hr', verified: true },
  { id: 5, name: 'Noah P.', title: 'Guitar Coach • Acoustic', rating: 4.9, reviews: 22, tags: ['Chords', 'Strumming'], price: '6 karma/hr', verified: false },
  { id: 6, name: 'Mia C.', title: 'Career Coach • ATS', rating: 4.8, reviews: 65, tags: ['Resume', 'LinkedIn'], price: '9 karma/hr', verified: true },
];

const ProCard = ({ p }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="group rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur hover:shadow-lg hover:-translate-y-0.5 transition">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-slate-900 font-semibold leading-tight">{p.name}</h3>
        <p className="text-sm text-slate-600">{p.title}</p>
      </div>
      {p.verified && (
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
          <ShieldCheck className="h-4 w-4" /> Verified
        </span>
      )}
    </div>

    <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
      <span className="font-semibold">{p.rating}</span>
      <span className="text-slate-400">({p.reviews})</span>
    </div>

    <div className="mt-3 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
      ))}
    </div>

    <div className="mt-5 flex items-center justify-between">
      <span className="text-sm font-semibold text-emerald-700">{p.price}</span>
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50">
          <MessageSquare className="h-4 w-4" /> Message
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700">
          <Heart className="h-4 w-4" /> Book
        </button>
      </div>
    </div>
  </motion.div>
);

const ProCardGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Top Students for Hire</h2>
          <p className="text-slate-500">High-rated peers ready to help — pay with karma, not cash.</p>
        </div>
        <button className="hidden rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50 md:block">See all</button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {pros.map((p) => (
          <ProCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
};

export default ProCardGrid;
