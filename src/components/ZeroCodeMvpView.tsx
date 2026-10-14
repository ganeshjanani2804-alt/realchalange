import React, { useState } from 'react';
import { 
  Layers, 
  Database, 
  MessageSquare, 
  FolderGit2, 
  Video, 
  Award, 
  Copy, 
  Check, 
  Coins, 
  Clock, 
  FileSpreadsheet,
  Send
} from 'lucide-react';
import { ZERO_CODE_STACK } from '../data/pmContent';

export const ZeroCodeMvpView: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const sheetSchemas = [
    {
      tab: "Tab 1: Squads & Jurisdictions",
      columns: "Squad_ID | Challenge_ID | Student_1_Lead | Student_2_Hw | Student_3_Sw | Student_4_Cost | Mentor_Name | Mentor_WhatsApp | Partner_POC | Current_Phase"
    },
    {
      tab: "Tab 2: Challenge Bank Master",
      columns: "Challenge_ID | Company_Name | Sector | Location | Difficulty | Budget_Ceiling | Problem_Summary | Raw_Data_Drive_Link | SignOff_Status"
    },
    {
      tab: "Tab 3: Weekly Submission Tracker",
      columns: "Timestamp | Squad_ID | Week_Number | 3Min_Video_URL | Drive_Artifact_URL | Hours_Invested | Top_Blocker | Mentor_Feedback_Status | Gate_Score"
    },
    {
      tab: "Tab 4: Mentorship & Gate Rubric",
      columns: "Squad_ID | Gate_Reviewer | Partner_Utility_Score (40%) | Technical_Rigor (30%) | Cost_Realism (15%) | Communication (15%) | Total_Gate_Score | Action_Recommendation"
    }
  ];

  const whatsappTemplates = [
    {
      title: "Monday 09:00 AM — Sprint Goal & Micro-Module Prompt",
      copy: `📢 *PRAXISFORGE PILOT — WEEK 7 (SPRINT W2) KICKOFF*

Good morning Squads! Today we move from problem immersion to *Cost Estimation & Architecture*.

🎧 *3-Minute Audio Module:* "How to calculate real Bill of Materials without hiding costs" (Check pinned audio).
📄 *Cheat Sheet:* Attached PDF on sourcing scrap & industrial components in Tamil Nadu.

🎯 *Friday 8 PM Submission Gate:*
1. Flowchart / Circuit schematic.
2. BOM spreadsheet (Max hardware spend: ₹3,000).
3. 3-Minute Loom video explaining design choices.

Post any doubts in your private squad lounge! Let's build with rigor.`
    },
    {
      title: "Wednesday 06:00 PM — Hump-Day Mentor Sync Prompt",
      copy: `⚡ *MID-WEEK SPRINT PULSE CHECK*

Squad Leads, please post your 3-bullet update in your squad group tagging your Mentor:
1. What we built so far this week:
2. What technical/component issue is blocking us:
3. Plan for the next 48 hours:

Mentors will check in between 7-9 PM today. Keep it concise!`
    },
    {
      title: "Friday 08:00 PM — Sprint Deliverable Deadline Reminder",
      copy: `🚨 *WEEKLY SPRINT GATE CLOSING AT 08:00 PM TONIGHT*

Please submit your weekly Google Form link before 8:00 PM:
🔗 https://forms.gle/praxis-sprint-checkin

Checklist:
✅ Unlisted Loom / YouTube demo video link (Max 3 mins).
✅ Updated Google Drive folder with CAD / code / BOM sheet.
✅ Hours logged by each squad member.

Late submissions trigger a yellow flag in the Master Sheet. Finish strong!`
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Zero-Code Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-2">
          <Layers className="w-3.5 h-3.5" /> TASK 5: LIGHTWEIGHT ZERO-CUSTOM-SOFTWARE MVP
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">
          Enterprise-Grade Workflows on a ₹0 Software Budget
        </h2>
        <p className="text-xs text-slate-300 mt-1 max-w-3xl leading-relaxed">
          Zero custom code required to run the entire pilot. By orchestrating Google Forms, Google Sheets, WhatsApp Communities, Google Drive, and Loom, a 3-person core ops team can manage 50 students and 10 external industry partners with zero software friction.
        </p>
      </div>

      {/* The 6 Operational Layers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ZERO_CODE_STACK.layers.map((layer, idx) => (
          <div 
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider">
                  {layer.name}
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                  {layer.cost}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                {layer.tool}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {layer.purpose}
              </p>
            </div>

            <div className="bg-slate-800/60 p-2.5 rounded border border-slate-700/60 text-[11px] text-slate-400 font-mono">
              <span className="text-indigo-400 font-semibold block text-[10px] uppercase font-sans mb-0.5">Configuration:</span>
              {layer.schema}
            </div>
          </div>
        ))}
      </div>

      {/* Master Google Sheet Relational Schema */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              Master Google Sheet Schema (Copy-Paste Ready Architecture)
            </h3>
          </div>
          <span className="text-xs text-slate-400">Zero backend database needed</span>
        </div>
        
        <p className="text-xs text-slate-400 mb-4">
          Set up a single Google Spreadsheet titled <code>PraxisForge_Master_Operations_2026</code>. Create the following 4 tabs to maintain complete relational integrity across the 12 weeks:
        </p>

        <div className="space-y-3">
          {sheetSchemas.map((schema, idx) => (
            <div key={idx} className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 block">{schema.tab}</span>
                <code className="text-[11px] text-slate-300 font-mono bg-slate-900 px-2 py-1 rounded block overflow-x-auto">
                  {schema.columns}
                </code>
              </div>
              <button
                onClick={() => copyToClipboard(schema.columns, idx)}
                className="self-start sm:self-center shrink-0 px-3 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === idx ? 'Copied!' : 'Copy Headers'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Community Cadence & Copy Templates */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              WhatsApp Operating Cadence & High-Engagement Broadcast Templates
            </h3>
          </div>
          <span className="text-xs text-emerald-400 font-medium">98% Open Rate Channel</span>
        </div>

        <p className="text-xs text-slate-400 mb-4">
          Avoid cluttering student inboxes. Maintain a WhatsApp Community with 1 Announcement Channel (Admins only) and 10 private squad groups with their assigned Alumni Mentor and Faculty Guide.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {whatsappTemplates.map((tmpl, idx) => (
            <div key={idx} className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-amber-300 mb-2 flex items-center gap-1">
                  <Send className="w-3 h-3" /> {tmpl.title}
                </div>
                <pre className="text-[11px] text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 font-sans whitespace-pre-wrap leading-relaxed">
                  {tmpl.copy}
                </pre>
              </div>

              <button
                onClick={() => copyToClipboard(tmpl.copy, 10 + idx)}
                className="mt-3 w-full py-1.5 px-3 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                {copiedIndex === 10 + idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === 10 + idx ? 'Copied Broadcast' : 'Copy Broadcast Template'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Budget Allocation Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              Bootstrapped Pilot Budget: ₹25,000 Total ($300 Allocation)
            </h3>
          </div>
          <span className="text-xs font-mono text-amber-400 font-bold">100% Capital Efficient</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-800 text-slate-300 border-b border-slate-700">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Expense Category</th>
                <th className="py-2.5 px-3 font-semibold">Line Item Description</th>
                <th className="py-2.5 px-3 font-semibold text-right">Amount (INR)</th>
                <th className="py-2.5 px-3 font-semibold text-right">Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {ZERO_CODE_STACK.budgetBreakdown.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  <td className="py-2.5 px-3 font-mono text-indigo-400 font-medium">{item.category}</td>
                  <td className="py-2.5 px-3 font-medium text-white">{item.item}</td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-400">₹{item.cost.toLocaleString('en-IN')}</td>
                  <td className="py-2.5 px-3 text-right text-slate-400">Direct student enablement</td>
                </tr>
              ))}
              <tr className="bg-slate-800/80 font-bold text-white">
                <td colSpan={2} className="py-3 px-3 text-right">TOTAL ESTIMATED BUDGET:</td>
                <td className="py-3 px-3 text-right font-mono text-amber-300 text-sm">₹25,000</td>
                <td className="py-3 px-3 text-right text-emerald-400 text-xs">Self-funded / College Innovation Fund</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
