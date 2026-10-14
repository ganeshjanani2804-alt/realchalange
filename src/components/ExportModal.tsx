import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Printer, 
  Download, 
  FileText, 
  Sparkles 
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

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const generateFullMarkdown = () => {
    let md = `# PRAXISFORGE: REAL-WORLD CHALLENGE PLATFORM
## Executive Product Manager & Engineering Project Lead Master Dossier
**Target Users:** ${PM_DOSSIER.metadata.targetUsers}
**Team Constraints:** ${PM_DOSSIER.metadata.constraints.teamSize}
**Timeline:** ${PM_DOSSIER.metadata.constraints.timeline}
**Budget:** ${PM_DOSSIER.metadata.constraints.budget}
**Technology Stack:** ${PM_DOSSIER.metadata.constraints.techStack}

---

## 1. CONCEPT REFINEMENT & LOCALIZATION
Addressing the real-world pathologies in Tamil Nadu undergraduate engineering institutions (curriculum rote learning, project center black-market, English hesitation, and industrial insulation).

### Core Components:
1. **Challenge Bank:** Pre-scoped 1-page briefs from Tamil Nadu industrial clusters (Ambattur, SIDCO, Tiruppur, Pollachi) with strict BOM caps (< ₹5,000).
2. **Project-Based Learning Track:** 6-week intensive sprint with 3 stage-gates (Immersion, Mid-Prototype Gate, Field Handover).
3. **Asynchronous Dual-Mentor Layer:** 1 College Alumni Tech Mentor (biweekly 45-min Loom/Zoom) + 1 Partner Operational POC.
4. **WhatsApp Micro-Modules:** 5 Monday morning bilingual audio prompts + 2-page cheat-sheets (Client Empathy, BOM Estimation, Failure Handling, Safety & Ethics, Executive Pitching).
5. **Verifiable Portfolio & Credential:** Public Google Drive locker + 3-min unlisted YouTube demo + tamper-resistant QR-coded certificate.
6. **Institutional Value Loop:** Direct mapping to NAAC Criteria 1.3.2 and 2.3.1, and NBA Program Outcomes PO1-PO12.

---

## 2. 12-WEEK PHASED PROJECT PLAN & STAGE-GATES
| Phase & Week | Title | Deliverables | Owner | Gate Criteria |
|---|---|---|---|---|
${MILESTONES.map(m => `| ${m.week} | ${m.title} | ${m.deliverables.join('; ')} | ${m.owner} | ${m.gateCriteria} |`).join('\n')}

---

## 3. DEPENDENCY MAPPING
| ID | Pillar | Title | Prerequisite | Downstream Impact | Bottleneck Risk & Contingency |
|---|---|---|---|---|---|
${DEPENDENCIES.map(d => `| ${d.id} | ${d.category} | ${d.title} | ${d.prerequisite} | ${d.dependentOn} | Risk: ${d.bottleneckRisk} <br>Tactic: ${d.contingencyStrategy} |`).join('\n')}

---

## 4. RISK REGISTER (LIKELIHOOD × IMPACT)
| ID | Category | Risk Event | L | I | Score | Preventive Mitigation | Contingency Trigger |
|---|---|---|---|---|---|---|---|
${RISK_REGISTER.map(r => `| ${r.id} | ${r.category} | ${r.riskEvent} | ${r.likelihood} | ${r.impact} | ${r.severity} | ${r.mitigation} | ${r.contingency} |`).join('\n')}

---

## 5. ZERO-CUSTOM-SOFTWARE MVP ARCHITECTURE
- **Intake:** Google Forms (Applications, Briefs, Weekly 3-Min Check-ins)
- **Relational OS:** Google Sheets Master Database (4 Core Tabs: Squads, Challenge Bank, Check-ins, Mentor Rubric)
- **Real-Time Comms:** WhatsApp Community (1 Announcements Channel + 10 Squad Groups + 1 Mentors Lounge)
- **Asset Locker:** Google Drive Standardized Taxonomy
- **Progress Tracking:** 3-Minute Loom / Unlisted YouTube screen-recordings every Friday 8 PM
- **Credentialing:** Google Slides + Autocrat / Canva for QR-verifiable certificates
- **Budget Allocation (₹25,000 Total):** Hardware grants (₹10,000), Student field visit bus travel (₹6,000), Demo day tea & snacks (₹5,000), Certificates & mementos (₹2,500), Contingency (₹1,500).

---

## 6. SUCCESS METRICS & 10-QUESTION BASELINE SURVEY
### Sample 10 Questions (1-5 Likert Scale):
${BASELINE_SURVEY.map(q => `
#### Q${q.id}: ${q.construct}
- **Question:** ${q.question}
- **Scale:** 1 = ${q.lowScoreAnchor} | 5 = ${q.highScoreAnchor}
- **Evaluation Rationale:** ${q.rationale}
`).join('\n')}

---

## 7. ONE-PAGE PARTNER CHALLENGE BRIEF TEMPLATE
${CHALLENGE_TEMPLATES.map(t => `
### Example Brief: ${t.title} (${t.organization})
- **Location:** ${t.location} | **Difficulty:** ${t.difficulty}
- **Problem:** ${t.problemStatement}
- **Constraints:** ${t.constraints.join('; ')}
- **Deliverables:** ${t.expectedDeliverables.join('; ')}
- **Success KPI:** ${t.definitionOfSuccess}
- **Partner Commitment:** ${t.partnerTimeCommitment}
`).join('\n')}

---

## 8. HIGH-CONVERSION OUTREACH SCRIPTS
### MSME / Partner Pitch:
${OUTREACH_TEMPLATES.partner.body}

### Alumni Mentor Pitch:
${OUTREACH_TEMPLATES.mentor.body}

---

## 9. UNDERLYING ASSUMPTIONS
${PM_DOSSIER.assumptions.map((a, i) => `${i + 1}. **${a.title}:** ${a.detail}`).join('\n')}

---

## 10. TOP 3 IMMEDIATE NEXT STEPS FOR THIS WEEK
${PM_DOSSIER.nextStepsThisWeek.map((s, i) => `${i + 1}. **${s.day} — ${s.action}:** ${s.description}`).join('\n')}
`;
    return md;
  };

  const copyMarkdown = () => {
    navigator.clipboard.writeText(generateFullMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-600/40">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Export Executive PM Master Dossier
              </h3>
              <p className="text-xs text-slate-400">
                Complete 8-task report ready for presentation, printing, or Notion/Markdown export
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Preview */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300 font-mono bg-slate-950/80 m-4 rounded-xl border border-slate-800">
          <pre className="whitespace-pre-wrap leading-relaxed select-all">
            {generateFullMarkdown()}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-900">
          <div className="text-xs text-slate-400">
            Includes all 8 tasks, assumptions, and this week's 3 next steps
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={triggerPrint}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save to PDF</span>
            </button>
            <button
              onClick={copyMarkdown}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-indigo-600/30"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Full Markdown!' : 'Copy Full Markdown'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
