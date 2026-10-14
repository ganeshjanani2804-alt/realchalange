import React from 'react';
import { 
  CheckSquare, 
  HelpCircle, 
  ArrowRight, 
  Calendar, 
  AlertCircle, 
  Zap,
  Target
} from 'lucide-react';
import { PM_DOSSIER } from '../data/pmContent';

export const NextStepsCard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Assumptions Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
          <HelpCircle className="w-4 h-4" /> Operational Baseline & Key Assumptions
        </div>
        <h3 className="text-lg font-bold text-white mb-2">
          Underlying Ground Realities & Assumptions
        </h3>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          The entire project plan and resource allocation model is built on four verified institutional and regional conditions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {PM_DOSSIER.assumptions.map((item, idx) => (
            <div key={idx} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/80">
              <div className="text-amber-300 font-bold mb-1 flex items-center gap-1.5">
                <span className="font-mono text-xs text-amber-500">[{idx + 1}]</span>
                {item.title}
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 Next Steps for This Week */}
      <div className="bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-900 border-2 border-indigo-500/50 rounded-xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-1">
              <Zap className="w-3.5 h-3.5" /> CRITICAL PATH: THIS WEEK'S EXECUTION SPRINT
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              The 3 Most Important Next Steps for This Week
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded font-bold">
            Monday - Friday
          </span>
        </div>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          To kick off the 12-week runway without delay, the 3-person core ops team must execute these three blocking actions in sequence this week:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PM_DOSSIER.nextStepsThisWeek.map((step, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-400 transition-all shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-indigo-400 font-bold">
                    {step.day}
                  </span>
                  <span className="h-6 w-6 rounded-full bg-indigo-900/60 border border-indigo-600 flex items-center justify-center text-xs font-bold text-indigo-200">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  {step.action}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Target Outcome:</span>
                <span className="text-emerald-400 font-semibold font-mono">Signed & Locked</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
