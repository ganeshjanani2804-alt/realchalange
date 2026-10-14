import React from 'react';
import { 
  Compass, 
  Calendar, 
  GitFork, 
  AlertTriangle, 
  Layers, 
  ClipboardCheck, 
  FileText, 
  Send, 
  BookOpen,
  Printer,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenExport }) => {
  const navItems = [
    { id: 'dossier', label: 'Master PM Dossier', icon: BookOpen, badge: 'Full Report' },
    { id: 'concept', label: '1. Concept Refinement', icon: Compass },
    { id: 'plan', label: '2. 12-Week Roadmap', icon: Calendar },
    { id: 'dependencies', label: '3. Dependencies', icon: GitFork },
    { id: 'risks', label: '4. Risk Register', icon: AlertTriangle },
    { id: 'zerocode', label: '5. Zero-Code MVP', icon: Layers },
    { id: 'survey', label: '6. Baseline Survey', icon: ClipboardCheck },
    { id: 'brief', label: '7. Partner Brief', icon: FileText },
    { id: 'outreach', label: '8. Outreach Hub', icon: Send },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-slate-100 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      {/* Top Banner / Program Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 border-b border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 font-bold text-white text-lg">
              PF
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  PraxisForge
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/60">
                    TN Engineering Pilot Edition
                  </span>
                </h1>
              </div>
              <p className="text-xs text-slate-400">
                Work-Integrated Learning Challenge Platform • Zero-Code Operations Blueprint
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <span className="text-slate-400">Timeline:</span>
              <span className="font-semibold text-emerald-400">12 Weeks (6-Wk Sprint)</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <span className="text-slate-400">Cohort:</span>
              <span className="font-semibold text-amber-300">10 Squads (50 Students)</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <span className="text-slate-400">Budget:</span>
              <span className="font-semibold text-sky-300">₹25,000 (Minimal)</span>
            </div>
            <div className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <span className="text-slate-400">Code Required:</span>
              <span className="font-semibold text-purple-300">0 (Google Stack)</span>
            </div>

            <button
              onClick={onOpenExport}
              className="ml-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-3.5 py-1.5 rounded-md text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Export Full PM Brief</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
        <nav className="flex space-x-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/50 shadow-inner'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-1 text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.2 rounded font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
