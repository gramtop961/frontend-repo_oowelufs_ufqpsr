import React from 'react';
import { Search, HelpCircle, MessageSquare } from 'lucide-react';

const requests = [
  { id: 1, title: 'Chemistry Lab Report Review', tags: ['CHEM 201', 'APA'], hours: 1 },
  { id: 2, title: 'Resume Review for Internship', tags: ['Career', 'ATS'], hours: 0.5 },
  { id: 3, title: 'Calc II Integration Help', tags: ['MATH 152', 'Study'], hours: 1 },
];

const RequestCard = ({ item }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
    <div className="flex items-start justify-between">
      <h3 className="font-semibold text-slate-800">{item.title}</h3>
      <span className="text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-0.5">{item.hours} hr</span>
    </div>
    <div className="mt-2 flex flex-wrap gap-2">
      {item.tags.map((t) => (
        <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">{t}</span>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-between">
      <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-indigo-700">Offer help</button>
      <button className="inline-flex items-center gap-1 text-slate-600 text-sm hover:text-slate-800">
        <MessageSquare className="h-4 w-4" /> Message
      </button>
    </div>
  </div>
);

const RequestBoard = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-indigo-600" />
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Request board</h2>
            <p className="text-slate-500">Find students who need what you can offer.</p>
          </div>
        </div>
        <div className="flex w-full max-w-md items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <Search className="h-4 w-4 text-slate-400" />
          <input className="w-full bg-transparent outline-none placeholder:text-slate-400" placeholder="Search topics, courses, or skills..." />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {requests.map((item) => (
          <RequestCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RequestBoard;
