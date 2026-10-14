import React, { useState } from 'react';
import { Header } from './components/Header';
import { ExecutiveDossierView } from './components/ExecutiveDossierView';
import { ConceptRefinementView } from './components/ConceptRefinementView';
import { ProjectPlanView } from './components/ProjectPlanView';
import { DependencyView } from './components/DependencyView';
import { RiskRegisterView } from './components/RiskRegisterView';
import { ZeroCodeMvpView } from './components/ZeroCodeMvpView';
import { SurveyDiagnosticView } from './components/SurveyDiagnosticView';
import { ChallengeBriefView } from './components/ChallengeBriefView';
import { OutreachView } from './components/OutreachView';
import { NextStepsCard } from './components/NextStepsCard';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dossier');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenExport={() => setIsExportModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dossier' && (
          <ExecutiveDossierView onOpenExport={() => setIsExportModalOpen(true)} />
        )}

        {activeTab === 'concept' && (
          <div className="space-y-8">
            <ConceptRefinementView />
            <NextStepsCard />
          </div>
        )}

        {activeTab === 'plan' && (
          <div className="space-y-8">
            <ProjectPlanView />
            <NextStepsCard />
          </div>
        )}

        {activeTab === 'dependencies' && (
          <div className="space-y-8">
            <DependencyView />
            <NextStepsCard />
          </div>
        )}

        {activeTab === 'risks' && (
          <div className="space-y-8">
            <RiskRegisterView />
            <NextStepsCard />
          </div>
        )}

        {activeTab === 'zerocode' && (
          <div className="space-y-8">
            <ZeroCodeMvpView />
            <NextStepsCard />
          </div>
        )}

        {activeTab === 'survey' && (
          <div className="space-y-8">
            <SurveyDiagnosticView />
            <NextStepsCard />
          </div>
        )}

        {activeTab === 'brief' && (
          <div className="space-y-8">
            <ChallengeBriefView />
            <NextStepsCard />
          </div>
        )}

        {activeTab === 'outreach' && (
          <div className="space-y-8">
            <OutreachView />
            <NextStepsCard />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-xs text-slate-400 py-8 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">PraxisForge Engineering Hub</span>
            <span>•</span>
            <span>Work-Integrated Challenge Architecture</span>
            <span>•</span>
            <span className="text-indigo-400 font-mono">Tamil Nadu Pilot Edition</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
            >
              Export PM Master Markdown
            </button>
            <span className="text-slate-600">|</span>
            <span>Zero-Cost Infrastructure Model</span>
          </div>
        </div>
      </footer>

      {/* Export / Print Modal */}
      <ExportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)} 
      />
    </div>
  );
}
