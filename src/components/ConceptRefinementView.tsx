import React from 'react';
import { 
  Users, 
  Clock, 
  Coins, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  GraduationCap, 
  MapPin, 
  Flame, 
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';
import { PM_DOSSIER } from '../data/pmContent';

export const ConceptRefinementView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Refinement Summary */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-xl p-6 border border-indigo-900/50 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
              <Target className="w-3.5 h-3.5" /> TASK 1: CONCEPT REFINEMENT & LOCALIZATION
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Operationalizing "PraxisForge" for Tamil Nadu Engineering Colleges
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              Transforming undergraduate engineering education from passive textbook memorization and bought "project center" code into structured, work-integrated challenges grounded in regional industrial and societal realities.
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3 text-xs space-y-1 shrink-0">
            <div className="text-slate-400 font-medium">Pilot Model:</div>
            <div className="text-amber-400 font-semibold">10 Multidisciplinary Squads (45-50 Students)</div>
            <div className="text-slate-400">Anna University / Autonomous Regs</div>
          </div>
        </div>

        {/* Core Pathology vs. The PraxisForge Fix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
          <div className="bg-red-950/20 border border-red-900/40 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
              <AlertCircle className="w-4 h-4" /> The Real-World Failure Mode in Tamil Nadu
            </div>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                <span><strong>The Project Center Black Market:</strong> Up to 65% of students purchase turnkey IEEE projects from commercial shops in T. Nagar or Gandhipuram to satisfy academic submission deadlines without understanding the underlying code.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                <span><strong>Theoretical Insulation:</strong> Students memorize definitions for microcontrollers or cloud algorithms but have never stood in a dusty Coimbatore textile mill or handled real noisy sensor inputs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                <span><strong>Communication & Ambiguity Paralysis:</strong> Students freeze when requirements are not spoon-fed as textbook lab exercises, compounded by English hesitation when engaging external stakeholders.</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-lg p-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4" /> The PraxisForge Operational Solution
            </div>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span><strong>Authentic Partner Briefs:</strong> Students solve real operational bottlenecks from local MSMEs (Ambattur SIDCO, Tiruppur, CODISSIA) and rural public health clinics with zero-cost solutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span><strong>Asynchronous Dual Mentorship:</strong> Tech alumni in Bengaluru/Chennai provide 45-min biweekly sanity checks while local partner supervisors anchor field reality.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span><strong>Zero-Code Operational Backbone:</strong> Runs completely on Google Forms, Sheets, and WhatsApp without requiring capital expenditure or dedicated software maintenance.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Target User & Constraint Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" /> Team & Cohort Architecture
            </div>
            <h3 className="text-base font-bold text-white mb-2">3 Core Ops + 10 Squads</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Core Steering:</strong> 1 Faculty SPOC + 1 Student Ops Lead + 1 Alumni Coordinator.<br/>
              <strong>Squad Structure:</strong> 4-5 students per team (1 Team Lead/Communicator, 2 Technical/Prototypers, 1 Cost & Field Analyst). Cross-departmental pairings (e.g. ECE + CSE or Mech + EEE).
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-indigo-300 font-mono">
            Total Pilot Load: 45-50 students
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" /> 12-Week Pilot Runway
            </div>
            <h3 className="text-base font-bold text-white mb-2">4 Wk Setup + 6 Wk Sprint</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Weeks 1-4:</strong> Institutional approval, brief curation & mentor recruitment.<br/>
              <strong>Week 5:</strong> Squad matching & kickoff.<br/>
              <strong>Weeks 6-11:</strong> The 6-Week Challenge Sprint (immersion to verified prototype).<br/>
              <strong>Week 12:</strong> Demo Day & Partner handover.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300 font-mono">
            Buffer: 1-Wk exam buffer in W9
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Coins className="w-4 h-4" /> Minimal Budget Envelope
            </div>
            <h3 className="text-base font-bold text-white mb-2">₹25,000 Total Outlay</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>₹10,000:</strong> Prototyping seed grants (₹2,000 × 5 hardware squads).<br/>
              <strong>₹6,000:</strong> Local bus travel allowances for field visits.<br/>
              <strong>₹5,000:</strong> Demo Day refreshments for 75 attendees.<br/>
              <strong>₹4,000:</strong> Certificates, mementos & emergency contingency.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-300 font-mono">
            Zero institutional deficit
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4" /> Zero-Code Tool Stack
            </div>
            <h3 className="text-base font-bold text-white mb-2">Existing Free Tools</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Google Workspace:</strong> Sheets (Relational tracker), Forms (Submissions & surveys), Drive (Portfolio locker).<br/>
              <strong>WhatsApp:</strong> Announcement channel & 10 private squad lounges.<br/>
              <strong>Loom / YouTube:</strong> 3-min async weekly video standups.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-purple-300 font-mono">
            Setup time: &lt; 48 hours
          </div>
        </div>
      </div>

      {/* The 6 Tailored Concept Components */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-indigo-400" />
          The 6 Core Components — Refined for the Tamil Nadu Pilot
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Component 1 */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-4 hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">Component 1</span>
              <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">Pre-Curated</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Challenge Bank & Problem Scoping</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              10 standardized 1-page briefs sourced directly from MSME industrial estates (Ambattur, SIDCO, Guindy), agricultural clusters (Pollachi, Thanjavur), and public health centers. Every brief contains strict budget limits, operator literacy constraints, and dirty raw sample data.
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800">
              <span className="text-indigo-400 font-medium">Why it works:</span> Prevents student teams from spending 3 weeks debating what to build.
            </div>
          </div>

          {/* Component 2 */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-4 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">Component 2</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">6 Weeks</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Project-Based Learning Sprint</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              A structured 6-week cadence divided into 2-week sub-cycles: <em>Immersion & Scoping</em> (Weeks 1-2), <em>Rapid Prototyping & Mid-Gate</em> (Weeks 3-4), and <em>Field Testing & ROI Packaging</em> (Weeks 5-6). Students submit weekly 3-minute video progress pitches.
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800">
              <span className="text-emerald-400 font-medium">Why it works:</span> Breaks inertia with strict weekly Friday 8 PM video gates.
            </div>
          </div>

          {/* Component 3 */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-4 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">Component 3</span>
              <span className="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded">Dual Layer</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Asynchronous Dual-Mentor Layer</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Squads have 1 Tech Alumni Mentor (reviewing architecture and feasibility asynchronously via Loom/WhatsApp) + 1 Partner Operational POC (factory floor supervisor or FPO lead providing domain reality checks). Total commitment is under 2.5 hours across the entire 6 weeks.
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800">
              <span className="text-amber-400 font-medium">Why it works:</span> Zero scheduling friction; mentors do not need to commute to campus.
            </div>
          </div>

          {/* Component 4 */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-4 hover:border-purple-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider font-mono">Component 4</span>
              <span className="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded">Micro-Learning</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">5 WhatsApp Awareness Modules</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Delivered every Monday morning as a 3-minute bilingual audio note (Tamil & English) paired with a 2-page Canva PDF cheat sheet:
              (1) <em>Stakeholder Empathy</em>, (2) <em>Bill of Materials & ROI Calculation</em>, (3) <em>Handling Live Failure</em>, (4) <em>Ethics & Safety Auditing</em>, (5) <em>Executive 3-Minute Pitching</em>.
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800">
              <span className="text-purple-400 font-medium">Why it works:</span> 98% open rates compared to ignored LMS portal links.
            </div>
          </div>

          {/* Component 5 */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-4 hover:border-sky-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">Component 5</span>
              <span className="text-[10px] bg-sky-950 text-sky-300 border border-sky-800 px-2 py-0.5 rounded">Proof of Work</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Verifiable Portfolio & QR Credential</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Instead of a dust-collecting 100-page spiral-bound report, students compile a concise 2-page Executive Dossier + 3-minute unlisted YouTube video demo + GitHub repo. Auto-generates a tamper-evident digital certificate with a QR code verified by the Partner and Principal.
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800">
              <span className="text-sky-400 font-medium">Why it works:</span> Converts directly into placement interview firepower.
            </div>
          </div>

          {/* Component 6 */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-lg p-4 hover:border-rose-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider font-mono">Component 6</span>
              <span className="text-[10px] bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded">Accreditation</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Accreditation Feedback & Value Loop</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Rigorous 10-question Baseline vs. Endline diagnostic mapping. Program outcomes are directly converted into documentation packages for <strong>NAAC Criteria 1.3.2 (Value-Added Programs), 2.3.1 (Experiential Learning)</strong>, and NBA Program Outcomes (PO1-PO12).
            </p>
            <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800">
              <span className="text-rose-400 font-medium">Why it works:</span> Guarantees faculty and HoD enthusiasm semester after semester.
            </div>
          </div>
        </div>
      </div>

      {/* Student Squad Role Blueprint */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-400" />
          The 4-5 Person Student Squad Anatomy (Anti-Freerider Design)
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          To prevent the classic engineering failure mode where 1 person codes while 3 do nothing, each student in the squad has an explicit, graded operational jurisdiction:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-indigo-400 font-bold mb-1">1. Squad Lead & Client SPOC</div>
            <p className="text-slate-300">Owns client interviews, WhatsApp communication, weekly 3-min Loom narration, and sprint gate compliance.</p>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-emerald-400 font-bold mb-1">2. Hardware / Edge Engineer</div>
            <p className="text-slate-300">Responsible for circuit assembly, breadboard testing, sensor calibration, enclosure design, and physical reliability.</p>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-sky-400 font-bold mb-1">3. Software & Data Prototyper</div>
            <p className="text-slate-300">Builds the local logging logic, CSV export, simple web/mobile dashboard, or Python computer vision pipeline.</p>
          </div>
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            <div className="text-amber-400 font-bold mb-1">4. Cost & Field Operations Analyst</div>
            <p className="text-slate-300">Audits shopfloor constraints, manages the ₹2,000 BOM budget, calculates ROI payback, and writes the Tamil operator manual.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
