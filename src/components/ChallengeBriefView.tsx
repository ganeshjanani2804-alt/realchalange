import React, { useState } from 'react';
import { 
  FileText, 
  Building, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Download, 
  Eye, 
  Edit3,
  Wrench,
  AlertCircle
} from 'lucide-react';
import { CHALLENGE_TEMPLATES, ChallengeTemplate } from '../data/pmContent';

export const ChallengeBriefView: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<ChallengeTemplate>(CHALLENGE_TEMPLATES[0]);
  const [copied, setCopied] = useState<boolean>(false);
  const [previewMode, setPreviewMode] = useState<'formatted' | 'markdown'>('formatted');

  const generateMarkdown = (b: ChallengeTemplate) => {
    return `# ONE-PAGE REAL-WORLD CHALLENGE BRIEF
**Program:** PraxisForge Work-Integrated Learning Sprint  
**Institution:** Partner Industry-Institute Interaction Cell (IIIC)

---

### 1. PARTNER & CONTACT PROFILE
- **Organization:** ${b.organization}
- **Industry / Domain:** ${b.domain}
- **Location:** ${b.location}
- **Difficulty Rating:** ${b.difficulty}
- **Tags:** ${b.tags.join(', ')}

---

### 2. OPERATIONAL CONTEXT & THE "WHY"
${b.context}

---

### 3. THE PROBLEM STATEMENT
${b.problemStatement}

---

### 4. REAL-WORLD CONSTRAINTS & BOUNDARIES
${b.constraints.map(c => `- ${c}`).join('\n')}

---

### 5. DATA & RESOURCES PROVIDED BY PARTNER
${b.resourcesProvided.map(r => `- ${r}`).join('\n')}

---

### 6. MANDATORY SQUAD DELIVERABLES (WEEK 6 SUBMISSION)
${b.expectedDeliverables.map(d => `- [ ] ${d}`).join('\n')}

---

### 7. DEFINITION OF "GOOD" (SUCCESS CRITERIA)
> ${b.definitionOfSuccess}

---

### 8. PARTNER COMMITMENT
**Total Required Time:** ${b.partnerTimeCommitment}  
- Kickoff Discovery: 30 mins (Week 1)
- Mid-Sprint Prototype Usability Test: 45 mins (Week 4)
- Final Demo Day Review & Handover Sign-off: 45 mins (Week 6)

---
*Authorized Sign-off:*  
**Partner POC Signature:** ___________________________  **Date:** _______________  
**Student Squad Lead:** _____________________________  **Date:** _______________
`;
  };

  const copyBrief = () => {
    const md = generateMarkdown(selectedTemplate);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" /> TASK 7: ONE-PAGE PARTNER CHALLENGE BRIEF TEMPLATE
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Standardized 1-Page Problem Scoping Contract
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Eliminates scope creep and guarantees feasibility before students write code or buy hardware. Designed to be completed by an MSME owner or NGO director in under 15 minutes.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreviewMode(previewMode === 'formatted' ? 'markdown' : 'formatted')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 border border-slate-700 cursor-pointer transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{previewMode === 'formatted' ? 'View Raw Markdown' : 'View Formatted Sheet'}</span>
            </button>

            <button
              onClick={copyBrief}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-3.5 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Brief Markdown!' : 'Copy 1-Page Brief'}</span>
            </button>
          </div>
        </div>

        {/* Template Selector Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 mb-2 font-medium">Select Pre-Scoped Tamil Nadu Case Study:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {CHALLENGE_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => setSelectedTemplate(tmpl)}
                className={`p-3 rounded-lg text-left text-xs transition-all cursor-pointer border ${
                  selectedTemplate.id === tmpl.id
                    ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md shadow-indigo-950'
                    : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="font-mono text-[10px] text-indigo-400 font-bold mb-0.5">{tmpl.id} • {tmpl.domain.split('&')[0]}</div>
                <div className="font-semibold line-clamp-1">{tmpl.title}</div>
                <div className="text-[11px] text-slate-400 truncate mt-1">{tmpl.location}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Brief Preview */}
      {previewMode === 'markdown' ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {generateMarkdown(selectedTemplate)}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl max-w-4xl mx-auto space-y-6 text-slate-200">
          {/* Document Header */}
          <div className="border-b-2 border-indigo-600 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                PRAXISFORGE WORK-INTEGRATED LEARNING SPRINT
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">
                Official 1-Page Partner Challenge Brief
              </h2>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5" /> {selectedTemplate.organization}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {selectedTemplate.location}</span>
              </div>
            </div>
            <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs font-bold text-indigo-300">
                Brief ID: {selectedTemplate.id}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-semibold">
                Difficulty: {selectedTemplate.difficulty}
              </span>
            </div>
          </div>

          {/* Section 1 & 2: Context & Problem Statement */}
          <div className="space-y-4">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/60">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1 font-mono">
                1. Context & Operational Origin (The "Why")
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedTemplate.context}
              </p>
            </div>

            <div className="bg-indigo-950/20 p-4 rounded-lg border border-indigo-900/40">
              <div className="text-xs font-bold text-indigo-300 uppercase tracking-wide mb-1 font-mono">
                2. Scoped Problem Statement (Action-Oriented)
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">
                {selectedTemplate.problemStatement}
              </p>
            </div>
          </div>

          {/* Section 3 & 4: Constraints & Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/60">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide mb-2 font-mono flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> 3. Real-World Constraints
              </div>
              <ul className="text-xs space-y-1.5 text-slate-300">
                {selectedTemplate.constraints.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/60">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-2 font-mono flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> 4. Resources / Data Provided
              </div>
              <ul className="text-xs space-y-1.5 text-slate-300">
                {selectedTemplate.resourcesProvided.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Mandatory Deliverables */}
          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/60">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-2 font-mono flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> 5. Mandatory Deliverables for Week 6 Demo Day
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {selectedTemplate.expectedDeliverables.map((d, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-900/70 p-2 rounded border border-slate-800">
                  <span className="text-sky-400 font-bold font-mono">[{idx + 1}]</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 & 7: Success & Partner Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-950/20 p-4 rounded-lg border border-emerald-900/40">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1 font-mono">
                6. Definition of "Good" (Success KPI)
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {selectedTemplate.definitionOfSuccess}
              </p>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/60">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-1 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 7. Partner Commitment (Strictly Capped)
              </div>
              <p className="text-xs text-slate-300">
                {selectedTemplate.partnerTimeCommitment}
              </p>
            </div>
          </div>

          {/* Signatures Footer */}
          <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-8 text-xs text-slate-400">
            <div>
              <div className="border-b border-slate-700 pb-8 mb-2"></div>
              <div className="font-semibold text-slate-300">Authorized Partner POC Signature</div>
              <div className="text-[11px]">{selectedTemplate.organization}</div>
            </div>
            <div>
              <div className="border-b border-slate-700 pb-8 mb-2"></div>
              <div className="font-semibold text-slate-300">Student Squad Lead Signature</div>
              <div className="text-[11px]">PraxisForge Cohort 2026</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
