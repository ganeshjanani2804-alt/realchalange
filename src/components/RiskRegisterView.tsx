import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Sliders, 
  Plus, 
  User, 
  Search, 
  ChevronRight, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { RISK_REGISTER, RiskItem } from '../data/pmContent';

export const RiskRegisterView: React.FC = () => {
  const [risks, setRisks] = useState<RiskItem[]>(RISK_REGISTER);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const updateScore = (id: string, field: 'likelihood' | 'impact', value: number) => {
    setRisks(prev => prev.map(r => {
      if (r.id !== id) return r;
      const updated = { ...r, [field]: value };
      updated.severity = updated.likelihood * updated.impact;
      return updated;
    }));
  };

  const categories = ['All', 'Partners', 'Students', 'Academic', 'Mentorship', 'Operational', 'IP & Legal'];

  const filteredRisks = risks
    .filter(r => {
      if (selectedCategory !== 'All' && r.category !== selectedCategory) return false;
      if (searchQuery && !r.riskEvent.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => b.severity - a.severity);

  const getSeverityBadge = (severity: number) => {
    if (severity >= 15) {
      return <span className="bg-red-500/20 text-red-400 border border-red-500/40 px-2.5 py-1 rounded text-xs font-bold font-mono">HIGH ({severity})</span>;
    }
    if (severity >= 9) {
      return <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded text-xs font-bold font-mono">MEDIUM ({severity})</span>;
    }
    return <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded text-xs font-bold font-mono">LOW ({severity})</span>;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-2">
              <ShieldAlert className="w-3.5 h-3.5" /> TASK 4: OPERATIONAL RISK REGISTER & HEATMAP
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Pre-Mortem Risk Register: Likelihood × Impact Matrix
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Anticipating student dropouts, partner ghosting, syllabus clashes, and hardware failures with clear owners and concrete contingency triggers.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <div className="bg-red-950/40 border border-red-800 px-3 py-1.5 rounded-lg text-center">
              <div className="text-[10px] text-slate-400">High Risks:</div>
              <div className="text-red-400 font-bold text-sm">
                {risks.filter(r => r.severity >= 15).length}
              </div>
            </div>
            <div className="bg-amber-950/40 border border-amber-800 px-3 py-1.5 rounded-lg text-center">
              <div className="text-[10px] text-slate-400">Medium Risks:</div>
              <div className="text-amber-400 font-bold text-sm">
                {risks.filter(r => r.severity >= 9 && r.severity < 15).length}
              </div>
            </div>
            <div className="bg-emerald-950/40 border border-emerald-800 px-3 py-1.5 rounded-lg text-center">
              <div className="text-[10px] text-slate-400">Low Risks:</div>
              <div className="text-emerald-400 font-bold text-sm">
                {risks.filter(r => r.severity < 9).length}
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-slate-400 mr-1">Category:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
            <input
              type="text"
              placeholder="Search risk events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-md pl-8 pr-3 py-1.5 focus:outline-none focus:border-indigo-500 w-full sm:w-56"
            />
          </div>
        </div>
      </div>

      {/* Risk Items List */}
      <div className="space-y-4">
        {filteredRisks.map((risk) => (
          <div 
            key={risk.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 font-mono text-xs font-semibold shrink-0">
                  {risk.id}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wide">
                      {risk.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <User className="w-3 h-3 text-slate-500" /> Owner: <strong>{risk.owner}</strong>
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {risk.riskEvent}
                  </h3>
                </div>
              </div>

              {/* Dynamic Score Controls */}
              <div className="flex items-center gap-4 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 shrink-0">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Likelihood:</span>
                  <select
                    value={risk.likelihood}
                    onChange={(e) => updateScore(risk.id, 'likelihood', parseInt(e.target.value))}
                    className="bg-slate-900 border border-slate-600 text-slate-200 text-xs rounded px-1.5 py-0.5"
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Impact:</span>
                  <select
                    value={risk.impact}
                    onChange={(e) => updateScore(risk.id, 'impact', parseInt(e.target.value))}
                    className="bg-slate-900 border border-slate-600 text-slate-200 text-xs rounded px-1.5 py-0.5"
                  >
                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>

                <div>
                  {getSeverityBadge(risk.severity)}
                </div>
              </div>
            </div>

            {/* Warning & Mitigations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-3 pt-3 border-t border-slate-800">
              <div className="bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/60">
                <span className="text-slate-400 font-semibold block mb-1">
                  👁️ Early Warning Tripwire:
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {risk.earlyWarning}
                </p>
              </div>

              <div className="bg-indigo-950/20 p-2.5 rounded-lg border border-indigo-900/40">
                <span className="text-indigo-400 font-semibold block mb-1">
                  🛡️ Preventive Mitigation:
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {risk.mitigation}
                </p>
              </div>

              <div className="bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-900/40">
                <span className="text-emerald-400 font-semibold block mb-1">
                  🚒 Rapid Fallback Contingency:
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {risk.contingency}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
