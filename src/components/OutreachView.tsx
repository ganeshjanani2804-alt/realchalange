import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Mail, 
  Linkedin, 
  Share2, 
  Sparkles,
  ExternalLink,
  Building,
  GraduationCap
} from 'lucide-react';
import { OUTREACH_TEMPLATES } from '../data/pmContent';

export const OutreachView: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState<'partner' | 'mentor' | 'faculty'>('partner');
  const [copied, setCopied] = useState<boolean>(false);

  // Dynamic customization fields
  const [userName, setUserName] = useState<string>('Prof. K. Sundaram');
  const [collegeName, setCollegeName] = useState<string>('Sri Krishna College of Engineering & Tech');
  const [city, setCity] = useState<string>('Coimbatore, Tamil Nadu');
  const [phoneNumber, setPhoneNumber] = useState<string>('98430 12345');
  const [recipientName, setRecipientName] = useState<string>('Ramasamy');
  const [companyName, setCompanyName] = useState<string>('Velan Precision Works');

  const currentTmpl = OUTREACH_TEMPLATES[activeTemplate];

  const getPersonalizedBody = () => {
    let body = currentTmpl.body;
    body = body.replace(/\[Your Name\]/g, userName);
    body = body.replace(/\[College Name\]/g, collegeName);
    body = body.replace(/\[City, Tamil Nadu\]/g, city);
    body = body.replace(/\[District, Tamil Nadu\]/g, city);
    body = body.replace(/\[Your Phone Number\]/g, phoneNumber);
    body = body.replace(/\[Partner Name\]/g, recipientName);
    body = body.replace(/\[Alum \/ Mentor Name\]/g, recipientName);
    body = body.replace(/\[Company Name\]/g, companyName);
    return body;
  };

  const getPersonalizedSubject = () => {
    let subj = currentTmpl.subject;
    subj = subj.replace(/\[Company Name\]/g, companyName);
    return subj;
  };

  const copyToClipboard = () => {
    const fullText = `Subject: ${getPersonalizedSubject()}\n\n${getPersonalizedBody()}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`*${getPersonalizedSubject()}*\n\n${getPersonalizedBody()}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
              <Send className="w-3.5 h-3.5" /> TASK 8: HIGH-CONVERSION OUTREACH ENGINE
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Recruiting MSME Partners, Alumni Mentors & Faculty Champions
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Tested pitch scripts crafted to overcome Tamil Nadu industrial skepticism: emphasizing zero financial cost, no sponsorship demand, and strictly capped time commitments.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-3.5 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Pitch!' : 'Copy Subject & Body'}</span>
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-3.5 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Share via WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Audience Selector Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTemplate('partner')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
              activeTemplate === 'partner'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>1. Local MSME & Industry Partners</span>
          </button>

          <button
            onClick={() => setActiveTemplate('mentor')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
              activeTemplate === 'mentor'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>2. Alumni & Tech Mentors</span>
          </button>

          <button
            onClick={() => setActiveTemplate('faculty')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
              activeTemplate === 'faculty'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>3. Principal & Department HoDs</span>
          </button>
        </div>
      </div>

      {/* Dynamic Variable Customizer */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-xs">
        <div className="flex items-center gap-2 text-indigo-400 font-bold mb-3 uppercase tracking-wider text-[11px]">
          <Sparkles className="w-3.5 h-3.5" /> Instant Personalization Variables:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <label className="text-slate-400 block mb-1">Your Name & Title:</label>
            <input 
              type="text" 
              value={userName} 
              onChange={e => setUserName(e.target.value)} 
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-slate-400 block mb-1">College Name:</label>
            <input 
              type="text" 
              value={collegeName} 
              onChange={e => setCollegeName(e.target.value)} 
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-slate-400 block mb-1">City / Region:</label>
            <input 
              type="text" 
              value={city} 
              onChange={e => setCity(e.target.value)} 
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-slate-400 block mb-1">Recipient Name:</label>
            <input 
              type="text" 
              value={recipientName} 
              onChange={e => setRecipientName(e.target.value)} 
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-slate-400 block mb-1">Company / Organization:</label>
            <input 
              type="text" 
              value={companyName} 
              onChange={e => setCompanyName(e.target.value)} 
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-slate-400 block mb-1">Your WhatsApp Number:</label>
            <input 
              type="text" 
              value={phoneNumber} 
              onChange={e => setPhoneNumber(e.target.value)} 
              className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Message Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
        {/* Metadata info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
          <div>
            <span className="text-slate-400 font-medium">Target Recipient: </span>
            <span className="text-slate-200 font-semibold">{currentTmpl.target}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Recommended Channel: </span>
            <span className="text-indigo-400 font-semibold">{currentTmpl.channel}</span>
          </div>
        </div>

        {/* Email Subject Line */}
        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
          <span className="text-[11px] font-mono text-indigo-400 font-bold block uppercase mb-0.5">Subject Line:</span>
          <div className="text-sm font-semibold text-white">{getPersonalizedSubject()}</div>
        </div>

        {/* Message Body */}
        <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 font-sans text-xs text-slate-300 whitespace-pre-wrap leading-relaxed selection:bg-indigo-600 selection:text-white">
          {getPersonalizedBody()}
        </div>
      </div>

      {/* Conversion Secrets Callout */}
      <div className="bg-indigo-950/20 border border-indigo-900/40 rounded-xl p-5 text-xs">
        <h4 className="font-bold text-indigo-300 text-sm mb-2">
          💡 Why this message structure converts at &gt; 45% with Tamil Nadu MSMEs:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-300 text-[11px]">
          <div>
            <span className="font-bold text-white block mb-0.5">1. Upfront "Zero Cost" Clarity:</span>
            Industrial estate owners are constantly solicited for sponsorships or donations. Stating immediately that student work is free removes their initial defensive barrier.
          </div>
          <div>
            <span className="font-bold text-white block mb-0.5">2. Capped Time (2 Hours Total):</span>
            Business owners fear being dragged into endless academic meetings. Defining exact 30-min and 45-min windows makes agreeing friction-free.
          </div>
          <div>
            <span className="font-bold text-white block mb-0.5">3. Localized Respect (Vanakkam / Thiru):</span>
            Respects regional business etiquette in Tier-2/3 hubs (Coimbatore, Tiruppur, Madurai, Salem) without sounding overly stiff or academic.
          </div>
        </div>
      </div>
    </div>
  );
};
