import React, { useState } from 'react';
import { 
  GitFork, 
  AlertTriangle, 
  CheckCircle, 
  Building, 
  GraduationCap, 
  Users, 
  Award, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Layers
} from 'lucide-react';
import { DEPENDENCIES, DependencyItem } from '../data/pmContent';

export const DependencyView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Faculty', 'Partners', 'Mentors', 'Rubric', 'Platform'];

  const filtered = activeCategory === 'All' 
    ? DEPENDENCIES 
    : DEPENDENCIES.filter(d => d.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Faculty': return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case 'Partners': return <Building className="w-4 h-4 text-indigo-400" />;
      case 'Mentors': return <Users className="w-4 h-4 text-amber-400" />;
      case 'Rubric': return <Award className="w-4 h-4 text-rose-400" />;
      case 'Platform': return <Cpu className="w-4 h-4 text-sky-400" />;
      default: return <GitFork className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Dependency Map Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
          <GitFork className="w-3.5 h-3.5" /> TASK 3: CROSS-FUNCTIONAL DEPENDENCY MAPPING
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">
          Systemic Dependencies: What Must Hold True for the Pilot to Succeed
        </h2>
        <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
          EdTech experiential learning programs fail most frequently not at the technology layer, but at the institutional and stakeholder seams. Below is the mapped dependency matrix across the 5 structural pillars.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-slate-800 text-xs">
          <span className="text-slate-400 mr-2">Filter Stakeholder Pillar:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Critical Path Flow */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-400" />
          The Critical Path Chain (Pre-Kickoff to Final Handover)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 relative">
            <span className="text-[10px] text-emerald-400 font-mono font-bold block mb-1">STEP 1 (WEEK 1)</span>
            <div className="font-bold text-white mb-1">Faculty Circular</div>
            <p className="text-slate-400 text-[11px]">Department HoD waives lab hours or grants 1-credit equivalence.</p>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 relative">
            <span className="text-[10px] text-indigo-400 font-mono font-bold block mb-1">STEP 2 (WEEKS 3-4)</span>
            <div className="font-bold text-white mb-1">Partner Scoping</div>
            <p className="text-slate-400 text-[11px]">10 MSME/NGO briefs locked with designated shopfloor POC.</p>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 relative">
            <span className="text-[10px] text-amber-400 font-mono font-bold block mb-1">STEP 3 (WEEK 5)</span>
            <div className="font-bold text-white mb-1">Squad & Mentor Match</div>
            <p className="text-slate-400 text-[11px]">Bilingual baseline diagnostic & async mentor pairing.</p>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 relative">
            <span className="text-[10px] text-rose-400 font-mono font-bold block mb-1">STEP 4 (WEEK 8)</span>
            <div className="font-bold text-white mb-1">Mid-Gate Evaluation</div>
            <p className="text-slate-400 text-[11px]">Strict pass/pivot review by faculty & mentor on working prototype.</p>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 relative">
            <span className="text-[10px] text-sky-400 font-mono font-bold block mb-1">STEP 5 (WEEK 12)</span>
            <div className="font-bold text-white mb-1">Demo Day & Handover</div>
            <p className="text-slate-400 text-[11px]">Partner sign-off, QR portfolio dossiers, NAAC compliance report.</p>
          </div>
        </div>
      </div>

      {/* Dependency Matrix Cards */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map(dep => {
          const levelColors = {
            'Critical': 'bg-red-950/60 text-red-300 border-red-800',
            'High': 'bg-amber-950/60 text-amber-300 border-amber-800',
            'Moderate': 'bg-blue-950/60 text-blue-300 border-blue-800'
          };

          return (
            <div 
              key={dep.id} 
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    {getCategoryIcon(dep.category)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      {dep.category} Dependency ({dep.id})
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {dep.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded font-semibold border ${levelColors[dep.criticalPathLevel]}`}>
                    {dep.criticalPathLevel} Dependency
                  </span>
                </div>
              </div>

              {/* Dependency Chain Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-3 border-t border-slate-800/80">
                <div className="space-y-2">
                  <div className="bg-slate-800/50 p-2.5 rounded border border-slate-800">
                    <span className="text-slate-400 font-medium block text-[11px]">Mandatory Prerequisite:</span>
                    <span className="text-slate-200 font-semibold">{dep.prerequisite}</span>
                  </div>
                  <div className="bg-slate-800/50 p-2.5 rounded border border-slate-800">
                    <span className="text-slate-400 font-medium block text-[11px]">Downstream Impact (Dependent on):</span>
                    <span className="text-slate-200">{dep.dependentOn}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="bg-red-950/20 p-2.5 rounded border border-red-900/30">
                    <span className="text-red-400 font-semibold flex items-center gap-1 text-[11px]">
                      <AlertTriangle className="w-3 h-3" /> Bottleneck / Failure Trigger:
                    </span>
                    <p className="text-slate-300 mt-0.5">{dep.bottleneckRisk}</p>
                  </div>
                  <div className="bg-emerald-950/20 p-2.5 rounded border border-emerald-900/30">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                      <ShieldCheck className="w-3 h-3" /> De-risking & Contingency Tactic:
                    </span>
                    <p className="text-slate-300 mt-0.5">{dep.contingencyStrategy}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
