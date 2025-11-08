import React from 'react';
import { PenTool, Code, GraduationCap, Languages, Briefcase, Music } from 'lucide-react';

const categories = [
  { icon: GraduationCap, label: 'Tutoring', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Code, label: 'Coding', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: PenTool, label: 'Design', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: Languages, label: 'Language', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Briefcase, label: 'Career', color: 'text-sky-600', bg: 'bg-sky-50' },
  { icon: Music, label: 'Music', color: 'text-violet-600', bg: 'bg-violet-50' },
];

const CategoryCarousel = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {categories.map(({ icon: Icon, label, color, bg }) => (
          <button key={label} className={`snap-start inline-flex items-center gap-2 whitespace-nowrap rounded-full ${bg} px-4 py-2 text-sm font-medium ${color} ring-1 ring-black/5 hover:brightness-95 transition`}> 
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryCarousel;
