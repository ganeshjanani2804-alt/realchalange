import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  User, 
  Filter, 
  Layers, 
  ChevronRight, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { MILESTONES, Milestone } from '../data/pmContent';

export const ProjectPlanView: React.FC = () => {
  const [milestones, setMilestones] = useState<Milestone[]>(MILESTONES);
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [onlyCritical, setOnlyCritical] = useState<boolean>(false);

  const toggleStatus = (id: string) => {
    setMilestones(prev => prev.map(m => {
      if (m.id !== id) return m;
      const nextStatus: Milestone['status'] = 
        m.status === 'upcoming' ? 'in-progress' :
        m.status === 'in-progress' ? 'completed' : 'upcoming';
      return { ...m, status: nextStatus };
    }));
  };

  const phases = ['All', 'Phase 0', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'];

  const filtered = milestones.filter(m => {
    if (selectedPhase !== 'All' && !m.phase.includes(selectedPhase)) return false;
    if (onlyCritical && !m.criticalPath) return false;
    return true;
  });

  const completedCount = milestones.filter(m => m.status === 'completed').length;
  const progressPercent = Math.round((completedCount / milestones.length) * 100);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Plan Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
              <Calendar className="w-3.5 h-3.5" /> TASK 2: PHASED 12-WEEK PROJECT PLAN & MILESTONES
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              12-Week Implementation Roadmap (4 Wk Scoping + 6 Wk Sprint + 2 Wk Showcase)
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Strictly sequenced to eliminate dead time, manage internal college exam conflicts, and guarantee tangible partner utility before Demo Day.
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl min-w-[240px]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-400 font-medium">Milestone Progress:</span>
              <span className="font-bold text-emerald-400">{completedCount} of {milestones.length} Done ({progressPercent}%)</span>
            </div>
            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
              <span>Critical Path items: <strong>{milestones.filter(m => m.criticalPath).length}</strong></span>
              <span className="text-amber-400">Gate Reviews: 3</span>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter Phase:
            </span>
            {phases.map(phase => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                  selectedPhase === phase 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white select-none">
            <input 
              type="checkbox"
              checked={onlyCritical}
              onChange={(e) => setOnlyCritical(e.target.checked)}
              className="rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-0"
            />
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" /> Show Critical Path Only
            </span>
          </label>
        </div>
      </div>

      {/* Milestone Cards / Table */}
      <div className="space-y-4">
        {filtered.map((m) => {
          const statusColors = {
            'completed': 'bg-emerald-950/60 border-emerald-800/80 text-emerald-300',
            'in-progress': 'bg-amber-950/60 border-amber-800/80 text-amber-300',
            'upcoming': 'bg-slate-800/80 border-slate-700/80 text-slate-400',
          };

          return (
            <div 
              key={m.id}
              className={`bg-slate-900 border rounded-xl p-5 transition-all ${
                m.criticalPath ? 'border-l-4 border-l-amber-500 border-slate-800' : 'border-slate-800'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs font-bold">
                    {m.week}
                  </span>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {m.phase}
                    </div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      {m.title}
                      {m.criticalPath && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          Critical Path
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                {/* Status Toggle & Owner */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                    <User className="w-3 h-3 text-indigo-400" />
                    <span>Owner: <strong>{m.owner}</strong></span>
                  </div>

                  <button
                    onClick={() => toggleStatus(m.id)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold border cursor-pointer transition-all ${statusColors[m.status]}`}
                  >
                    {m.status === 'completed' && '✓ Completed'}
                    {m.status === 'in-progress' && '⏳ In Progress'}
                    {m.status === 'upcoming' && '○ Upcoming (Click to toggle)'}
                  </button>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-800/80 text-xs">
                <div>
                  <div className="text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Tangible Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-slate-300">
                    {m.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/60">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Stage-Gate / Pass Criteria:
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {m.gateCriteria}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
