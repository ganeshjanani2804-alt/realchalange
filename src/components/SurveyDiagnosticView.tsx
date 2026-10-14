import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  BarChart3, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Copy, 
  Check, 
  FileText,
  HelpCircle,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { BASELINE_SURVEY, SurveyQuestion } from '../data/pmContent';

export const SurveyDiagnosticView: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({
    1: 2, 2: 2, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3, 8: 2, 9: 3, 10: 1
  });
  const [copiedSurvey, setCopiedSurvey] = useState<boolean>(false);

  const handleSelect = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  const resetSurvey = () => {
    setAnswers({
      1: 2, 2: 2, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3, 8: 2, 9: 3, 10: 1
    });
  };

  // Calculate scores
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const averageScore = (totalScore / BASELINE_SURVEY.length).toFixed(1);
  const maxScore = BASELINE_SURVEY.length * 5;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  // Dimension breakdowns
  const dimensions = [
    { name: 'Problem Disambiguation & Root Cause', ids: [1, 2], color: 'from-blue-500 to-indigo-600' },
    { name: 'Commercial & Cost Pragmatism (BOM)', ids: [3, 6], color: 'from-emerald-500 to-teal-600' },
    { name: 'Stakeholder Empathy & Bilingual Comms', ids: [4, 9], color: 'from-amber-500 to-orange-600' },
    { name: 'Failure Resilience & Ambiguity', ids: [5], color: 'from-rose-500 to-pink-600' },
    { name: 'Systems, Safety & Verifiable Portfolio', ids: [7, 8, 10], color: 'from-purple-500 to-indigo-600' }
  ];

  const copySurveyForGoogleForms = () => {
    let text = "PRAXISFORGE BASELINE & ENDLINE COMPETENCY DIAGNOSTIC SURVEY\n\n";
    BASELINE_SURVEY.forEach((q, idx) => {
      text += `Question ${idx + 1} [${q.construct}]:\n`;
      text += `${q.question}\n`;
      text += `Scale: 1 to 5 (1 = ${q.lowScoreAnchor} | 5 = ${q.highScoreAnchor})\n`;
      text += `Target Baseline: 1-2 | Target Endline: 4-5\n\n`;
    });
    navigator.clipboard.writeText(text);
    setCopiedSurvey(true);
    setTimeout(() => setCopiedSurvey(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
              <ClipboardCheck className="w-3.5 h-3.5" /> TASK 6: SUCCESS METRICS & BASELINE/ENDLINE DIAGNOSTIC
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Measuring the Mindset Shift: 10-Question Diagnostic Instrument
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Administered twice: on Day 1 of kickoff (Baseline) and on Demo Day (Endline). Measures genuine cognitive and behavioral transition from textbook memorizer to pragmatic problem-solver.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copySurveyForGoogleForms}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-3.5 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedSurvey ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSurvey ? 'Copied 10 Questions!' : 'Copy for Google Forms'}</span>
            </button>
            <button
              onClick={resetSurvey}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 border border-slate-700 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Success Metrics Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs">
          <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/80">
            <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1.5">
              <TrendingUp className="w-4 h-4" /> 1. Student Learning KPIs
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px]">
              <li>• <strong>Diagnostic Delta:</strong> &ge; +1.8 point gain across baseline to endline (from 2.1 to 4.1).</li>
              <li>• <strong>Portfolio Proof:</strong> 100% of completers publish verifiable public video + GitHub dossier.</li>
              <li>• <strong>Zero Dropout:</strong> &ge; 90% squad completion rate across the 6-week sprint.</li>
            </ul>
          </div>

          <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/80">
            <div className="flex items-center gap-1.5 font-bold text-indigo-400 mb-1.5">
              <Award className="w-4 h-4" /> 2. Partner Utility KPIs
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px]">
              <li>• <strong>Prototype Viability:</strong> &ge; 70% of delivered prototypes tested in partner environment.</li>
              <li>• <strong>ROI Verification:</strong> Partner signs off on documented cost/time saving estimate.</li>
              <li>• <strong>Retention:</strong> &ge; 60% of partners commit to providing another brief next semester.</li>
            </ul>
          </div>

          <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/80">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1.5">
              <BrainCircuit className="w-4 h-4" /> 3. Institutional KPIs
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px]">
              <li>• <strong>Accreditation Ready:</strong> Complete dossier compiled for NAAC Criterion 1.3.2 & 2.3.1.</li>
              <li>• <strong>Alumni Reconnection:</strong> 10+ tech alumni active in ongoing weekly college advisory.</li>
              <li>• <strong>Placement Boost:</strong> &ge; 40% of pilot cohort cite challenge in subsequent job offers.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Diagnostic Calculator Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-400" />
              Live Competency Profile Simulator
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Click options 1 through 5 on any question below to simulate baseline (Day 1) vs. endline (Day 42) student responses.
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 px-4 py-2.5 rounded-xl flex items-center gap-4 shrink-0">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-mono">Current Score:</div>
              <div className="text-xl font-bold text-white font-mono">{totalScore} <span className="text-xs text-slate-400 font-sans">/ {maxScore} ({scorePercent}%)</span></div>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-mono">Average Index:</div>
              <div className="text-xl font-bold text-emerald-400 font-mono">{averageScore} <span className="text-xs text-slate-400 font-sans">/ 5.0</span></div>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="text-xs font-semibold">
              {scorePercent < 45 ? (
                <span className="text-amber-400">Typical Baseline (Day 1)</span>
              ) : scorePercent < 75 ? (
                <span className="text-sky-400">Mid-Sprint Progress</span>
              ) : (
                <span className="text-emerald-400">Endline Target (Day 42)</span>
              )}
            </div>
          </div>
        </div>

        {/* Competency Dimension Bars */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-3 border-t border-slate-800">
          {dimensions.map((dim, idx) => {
            const dimScore = dim.ids.reduce((sum, id) => sum + (answers[id] || 0), 0);
            const dimMax = dim.ids.length * 5;
            const dimPct = Math.round((dimScore / dimMax) * 100);

            return (
              <div key={idx} className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
                <div className="text-[10px] font-bold text-slate-300 truncate mb-1" title={dim.name}>
                  {dim.name}
                </div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-400 font-mono text-[10px]">{dimScore}/{dimMax}</span>
                  <span className="font-bold text-slate-200 text-[10px]">{dimPct}%</span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${dim.color} h-full transition-all duration-300`}
                    style={{ width: `${dimPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 10 Survey Questions */}
      <div className="space-y-4">
        {BASELINE_SURVEY.map((q) => {
          const currentAnswer = answers[q.id] || 1;

          return (
            <div 
              key={q.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-indigo-400 border border-slate-700">
                      Q{q.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {q.construct}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug pt-1">
                    {q.question}
                  </h3>
                </div>

                {/* Score Selector (1-5) */}
                <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-center bg-slate-800/90 p-1 rounded-lg border border-slate-700">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <button
                      key={score}
                      onClick={() => handleSelect(q.id, score)}
                      className={`w-7 h-7 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        currentAnswer === score
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                          : 'text-slate-400 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>

              {/* Likert Scale Descriptions & Rubric */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-3 pt-3 border-t border-slate-800/80">
                <div className="space-y-1.5 text-[11px]">
                  <div className="text-slate-400">
                    <span className="font-bold text-red-400">Score 1 Anchor:</span> {q.lowScoreAnchor}
                  </div>
                  <div className="text-slate-400">
                    <span className="font-bold text-emerald-400">Score 5 Anchor:</span> {q.highScoreAnchor}
                  </div>
                </div>

                <div className="bg-slate-800/40 p-2 rounded border border-slate-700/60 text-[11px] flex items-center justify-between">
                  <div className="text-slate-300">
                    <span className="text-indigo-400 font-semibold">Evaluation Target:</span> {q.rubricAdvice}
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
