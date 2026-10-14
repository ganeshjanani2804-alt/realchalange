import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  Calendar, 
  GitFork, 
  AlertTriangle, 
  Layers, 
  ClipboardCheck, 
  FileText, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  Printer, 
  Copy, 
  Check, 
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { 
  PM_DOSSIER, 
  MILESTONES, 
  DEPENDENCIES, 
  RISK_REGISTER, 
  ZERO_CODE_STACK, 
  BASELINE_SURVEY, 
  CHALLENGE_TEMPLATES, 
  OUTREACH_TEMPLATES 
} from '../data/pmContent';
import { NextStepsCard } from './NextStepsCard';

export const ExecutiveDossierView: React.FC<{ onOpenExport: () => void }> = ({ onOpenExport }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopySection = (sectionName: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="space-y-10 animate-fadeIn max-w-5xl mx-auto pb-16">
      {/* Dossier Header Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-900/60 rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold mb-3">
              OFFICIAL PM MASTER DOSSIER • TN PILOT SPECIFICATION
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Real-World Challenge Platform: Executive Strategy & Operations Blueprint
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              Complete engineering project lead blueprint for an experiential, work-integrated challenge platform tailored for 2nd-4th year undergraduate engineering students in Tamil Nadu.
            </p>
          </div>

          <button
            onClick={onOpenExport}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer self-start md:self-center shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Export & Print Dossier</span>
          </button>
        </div>

        {/* Executive Constraints Snapshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-xs">
          <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">Target Audience</span>
            <span className="font-bold text-white text-xs">2nd-4th Yr B.E./B.Tech (TN)</span>
          </div>
          <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">Pilot Cohort & Team</span>
            <span className="font-bold text-amber-300 text-xs">3 Core Ops | 10 Squads (50 Stud.)</span>
          </div>
          <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">Timeline Runway</span>
            <span className="font-bold text-emerald-400 text-xs">12 Wks (6-Wk Challenge Sprint)</span>
          </div>
          <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">Budget & Software</span>
            <span className="font-bold text-purple-300 text-xs">₹25,000 | 0 Custom Code</span>
          </div>
        </div>
      </div>

      {/* TABLE OF CONTENTS QUICK NAV */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-xs">
        <div className="font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono text-[11px]">
          Table of Contents:
        </div>
        <div className="flex flex-wrap gap-2 text-slate-400">
          <a href="#section-1" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">1. Concept Refinement</a>
          <a href="#section-2" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">2. 12-Week Project Plan</a>
          <a href="#section-3" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">3. Dependency Map</a>
          <a href="#section-4" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">4. Risk Register</a>
          <a href="#section-5" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">5. Zero-Code MVP Architecture</a>
          <a href="#section-6" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">6. Success Metrics & Survey</a>
          <a href="#section-7" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">7. Partner Brief Template</a>
          <a href="#section-8" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">8. Outreach Messages</a>
          <a href="#section-9" className="hover:text-indigo-400 bg-slate-800 px-2.5 py-1 rounded">9. Assumptions & Next Steps</a>
        </div>
      </div>

      {/* SECTION 1: CONCEPT REFINEMENT */}
      <section id="section-1" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            1. Concept Refinement for Tamil Nadu Engineering Colleges
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 1</span>
        </div>

        <div className="text-xs text-slate-300 space-y-4 leading-relaxed">
          <p>
            The fundamental problem in Tier-2 and Tier-3 engineering colleges across Tamil Nadu (e.g. Coimbatore, Madurai, Trichy, Salem, Chennai clusters) is not a shortage of raw intellectual capacity, but an institutional incentive structure that rewards <strong>theoretical compliance over real-world problem disambiguation</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <h3 className="font-bold text-white mb-2 text-sm">Specific Regional Pathologies Addressed</h3>
              <ul className="space-y-2">
                <li>• <strong>Turnkey Project Black Market:</strong> Up to 65% of students buy IEEE projects from shops in commercial hubs (Gandhipuram/T. Nagar) to bypass viva pressure. PraxisForge eliminates this by requiring weekly video evidence of on-site testing.</li>
                <li>• <strong>English Communication Hesitation:</strong> Many brilliant students hesitate in English; PraxisForge institutes bilingual (Tamil/English) facilitation for initial client interviews and WhatsApp briefs.</li>
                <li>• <strong>Disconnection from Regional MSMEs:</strong> Tamil Nadu has over 5 million MSMEs (pumps, foundries, textiles, agro-processing), yet engineering students build generic toy models for Silicon Valley use cases.</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <h3 className="font-bold text-white mb-2 text-sm">Refined 6-Pillar Architecture for Constraints</h3>
              <ul className="space-y-2">
                <li>• <strong>Challenge Bank:</strong> Sourced from local industrial estates (SIDCO, Ambattur, CODISSIA) and rural public health clinics with strict ₹3k-₹6k BOM limits.</li>
                <li>• <strong>PBL Sprint:</strong> 6-week intensive sprint with 3 hard gates (Scoping &rarr; Mid-Prototype &rarr; Field Test Handover).</li>
                <li>• <strong>Dual-Mentor Model:</strong> 1 Remote Alumni Tech Mentor (45-min biweekly async) + 1 Local Partner Operational POC.</li>
                <li>• <strong>WhatsApp Micro-Modules:</strong> 5 Monday audio notes + 2-page cheat sheets on BOM, client empathy, and failure tolerance.</li>
                <li>• <strong>Verifiable Proof:</strong> Public Google Drive dossier + QR code certificate replacing 100-page spiral-bound paper reports.</li>
                <li>• <strong>NAAC/NBA Value Loop:</strong> Mapped to NAAC 1.3.2 & 2.3.1 for institutional sustainability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 12-WEEK PROJECT PLAN */}
      <section id="section-2" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            2. Phased 12-Week Project Plan & Stage-Gate Milestones
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 2</span>
        </div>

        <div className="overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/80 text-slate-300 border-b border-slate-700">
                <th className="py-2.5 px-3 font-semibold">Phase & Week</th>
                <th className="py-2.5 px-3 font-semibold">Milestone Title</th>
                <th className="py-2.5 px-3 font-semibold">Key Tangible Deliverables</th>
                <th className="py-2.5 px-3 font-semibold">Owner</th>
                <th className="py-2.5 px-3 font-semibold">Pass / Gate Criteria</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {MILESTONES.map((m) => (
                <tr key={m.id} className="hover:bg-slate-800/40">
                  <td className="py-2.5 px-3 font-mono text-indigo-400 font-semibold whitespace-nowrap">
                    {m.week}
                    {m.criticalPath && <span className="block text-[10px] text-amber-400 font-sans">Critical Path</span>}
                  </td>
                  <td className="py-2.5 px-3 font-semibold text-white">{m.title}</td>
                  <td className="py-2.5 px-3">
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-400">
                      {m.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </td>
                  <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap">{m.owner}</td>
                  <td className="py-2.5 px-3 text-slate-300 text-[11px] bg-slate-800/30">{m.gateCriteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: DEPENDENCY MAPPING */}
      <section id="section-3" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <GitFork className="w-5 h-5 text-amber-400" />
            3. Stakeholder & Operational Dependency Mapping
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 3</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {DEPENDENCIES.map((dep) => (
            <div key={dep.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold text-[11px]">{dep.category} ({dep.id})</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                  dep.criticalPathLevel === 'Critical' ? 'bg-red-950 text-red-400 border-red-800' : 'bg-amber-950 text-amber-300 border-amber-800'
                }`}>
                  {dep.criticalPathLevel}
                </span>
              </div>
              <h3 className="font-bold text-white text-sm">{dep.title}</h3>
              <div className="text-[11px] text-slate-400">
                <strong>Prerequisite:</strong> {dep.prerequisite}
              </div>
              <div className="bg-red-950/20 p-2 rounded border border-red-900/30 text-[11px] text-slate-300">
                <strong className="text-red-400">Bottleneck:</strong> {dep.bottleneckRisk}
              </div>
              <div className="bg-emerald-950/20 p-2 rounded border border-emerald-900/30 text-[11px] text-slate-300">
                <strong className="text-emerald-400">Contingency:</strong> {dep.contingencyStrategy}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: RISK REGISTER */}
      <section id="section-4" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            4. Risk Register (Likelihood × Impact Pre-Mortem)
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 4</span>
        </div>

        <div className="overflow-x-auto text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/80 text-slate-300 border-b border-slate-700">
                <th className="py-2.5 px-3 font-semibold">ID & Category</th>
                <th className="py-2.5 px-3 font-semibold">Risk Event</th>
                <th className="py-2.5 px-3 font-semibold text-center">L (1-5)</th>
                <th className="py-2.5 px-3 font-semibold text-center">I (1-5)</th>
                <th className="py-2.5 px-3 font-semibold text-center">Severity</th>
                <th className="py-2.5 px-3 font-semibold">Preventive Mitigation</th>
                <th className="py-2.5 px-3 font-semibold">Contingency Trigger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {RISK_REGISTER.map((r) => (
                <tr key={r.id} className="hover:bg-slate-800/40">
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-400 whitespace-nowrap">
                    {r.id} <span className="block font-sans text-[10px] text-slate-400 font-normal">{r.category}</span>
                  </td>
                  <td className="py-2.5 px-3 font-medium text-white">{r.riskEvent}</td>
                  <td className="py-2.5 px-3 text-center font-mono">{r.likelihood}</td>
                  <td className="py-2.5 px-3 text-center font-mono">{r.impact}</td>
                  <td className="py-2.5 px-3 text-center font-mono font-bold">
                    <span className={`px-2 py-0.5 rounded text-[10px] ${
                      r.severity >= 15 ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
                      r.severity >= 9 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                      'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      {r.severity}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-300">{r.mitigation}</td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-400 bg-slate-800/30">{r.contingency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5: ZERO-CODE MVP ARCHITECTURE */}
      <section id="section-5" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-400" />
            5. Lightweight Zero-Custom-Software MVP Architecture
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 5</span>
        </div>

        <div className="text-xs text-slate-300 space-y-4">
          <p>
            The entire program is intentionally architected to run without building custom portals, mobile apps, or server infrastructure. Free, off-the-shelf productivity tools handle 100% of data collection, tracking, communication, and credentialing:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ZERO_CODE_STACK.layers.map((l, i) => (
              <div key={i} className="bg-slate-800/50 p-3.5 rounded-lg border border-slate-700">
                <span className="text-[10px] text-purple-400 font-mono font-bold block mb-1">{l.name}</span>
                <div className="font-bold text-white text-sm mb-1">{l.tool}</div>
                <p className="text-[11px] text-slate-300 mb-2">{l.purpose}</p>
                <div className="text-[10px] text-slate-400 font-mono bg-slate-900 p-1.5 rounded">{l.schema}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 mt-4">
            <h3 className="font-bold text-white mb-2 text-sm">Weekly Operating Cadence (Clockwork Automation)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
              {ZERO_CODE_STACK.weeklyCadence.map((c, i) => (
                <div key={i} className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                  <div className="text-emerald-400 font-mono font-bold mb-0.5">{c.day}</div>
                  <div className="font-semibold text-white mb-1">{c.event}</div>
                  <div className="text-slate-400 text-[10px]">{c.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SUCCESS METRICS & 10 SURVEY QUESTIONS */}
      <section id="section-6" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-emerald-400" />
            6. Success Metrics & 10-Question Baseline/Endline Survey
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 6</span>
        </div>

        <div className="text-xs text-slate-300 space-y-4">
          <p>
            Administered via Google Forms on Day 1 (Baseline) and Day 42 (Endline). The objective is to quantify the cognitive shift from academic compliance to real-world engineering problem solving.
          </p>

          <div className="space-y-3">
            {BASELINE_SURVEY.map((q) => (
              <div key={q.id} className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/80">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-indigo-400 font-bold">Q{q.id}: {q.construct}</span>
                  <span className="text-[10px] text-slate-400">Likert 1 to 5</span>
                </div>
                <div className="font-semibold text-white text-xs mb-2">{q.question}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <div><strong className="text-red-400">Anchor 1:</strong> {q.lowScoreAnchor}</div>
                  <div><strong className="text-emerald-400">Anchor 5:</strong> {q.highScoreAnchor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ONE-PAGE CHALLENGE BRIEF */}
      <section id="section-7" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            7. One-Page Partner Challenge Brief Template
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 7</span>
        </div>

        <div className="text-xs text-slate-300 space-y-4">
          <p>
            Standardized single-page contract designed to be completed by factory owners or NGO directors in under 15 minutes, capping partner time at 2 hours across the pilot:
          </p>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-3 leading-relaxed">
            <div className="text-indigo-400 font-bold"># ONE-PAGE REAL-WORLD CHALLENGE BRIEF FORMAT</div>
            <div><strong>1. Organization Profile:</strong> [Company Name | Sector | Location | Partner POC Name & Phone]</div>
            <div><strong>2. Operational Origin (The "Why"):</strong> [Explain the bottleneck, scrap cost, or manual friction in 3 sentences]</div>
            <div><strong>3. Problem Statement:</strong> [Action-oriented problem framing without prescribing the technology]</div>
            <div><strong>4. Real-World Constraints:</strong> [Max build budget &le; ₹5,000 | Dust/heat/water | Intermittent power | Operator Tamil literacy]</div>
            <div><strong>5. Data/Materials Provided:</strong> [Sample defective parts, raw CSV logs, or 2-hour machine access]</div>
            <div><strong>6. Deliverables:</strong> [Working physical or software prototype + BOM spreadsheet + Tamil operator cheat sheet + 3-min video]</div>
            <div><strong>7. Success KPI:</strong> [Exact measurable metric e.g., &ge; 75% defect detection or &lt; 5% false positives]</div>
            <div><strong>8. Partner Time Commitment:</strong> [Strictly 2 hours total: 30m kickoff + 45m mid-test + 45m demo review]</div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUTREACH MESSAGES */}
      <section id="section-8" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Send className="w-5 h-5 text-emerald-400" />
            8. High-Conversion Partner & Mentor Outreach Scripts
          </h2>
          <span className="text-xs text-slate-400 font-mono">TASK 8</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-2">
            <span className="font-bold text-amber-300 text-xs block">A. Local MSME & Industry Pitch</span>
            <div className="text-slate-400 text-[11px]">Subject: Zero-Cost Engineering Solution Sprint for [Company Name]</div>
            <p className="text-slate-300 text-[11px] bg-slate-900/60 p-3 rounded border border-slate-800 leading-relaxed">
              "Vanakkam Thiru [Name], instead of theoretical textbook projects, our 4-5 handpicked students want to solve your real shopfloor friction point for 6 weeks at zero cost and zero sponsorship. All we need is 2 hours of your time total over 6 weeks..."
            </p>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 space-y-2">
            <span className="font-bold text-indigo-300 text-xs block">B. Tech Alumni Mentor Pitch</span>
            <div className="text-slate-400 text-[11px]">Subject: Mentor our junior squads: 45 minutes bi-weekly for 6 weeks</div>
            <p className="text-slate-300 text-[11px] bg-slate-900/60 p-3 rounded border border-slate-800 leading-relaxed">
              "Hi [Name], remember when college mini-projects were just copy-pasting GitHub code? We're fixing this. Mentor 1 squad solving real Tamil Nadu MSME bottlenecks. 45-min biweekly async reviews via Loom. Zero paperwork..."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: ASSUMPTIONS & IMMEDIATE NEXT STEPS */}
      <section id="section-9">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            9. Program Assumptions & Top 3 Immediate Actions for This Week
          </h2>
        </div>
        <NextStepsCard />
      </section>
    </div>
  );
};
