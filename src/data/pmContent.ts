export interface Milestone {
  id: string;
  phase: string;
  week: string;
  title: string;
  deliverables: string[];
  owner: string;
  gateCriteria: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  criticalPath: boolean;
}

export interface DependencyItem {
  id: string;
  category: 'Partners' | 'Mentors' | 'Faculty' | 'Rubric' | 'Platform';
  title: string;
  prerequisite: string;
  dependentOn: string;
  criticalPathLevel: 'Critical' | 'High' | 'Moderate';
  bottleneckRisk: string;
  contingencyStrategy: string;
}

export interface RiskItem {
  id: string;
  category: 'Partners' | 'Students' | 'Academic' | 'Mentorship' | 'Operational' | 'IP & Legal';
  riskEvent: string;
  likelihood: number; // 1-5
  impact: number; // 1-5
  severity: number; // likelihood * impact
  owner: string;
  earlyWarning: string;
  mitigation: string;
  contingency: string;
}

export interface SurveyQuestion {
  id: number;
  construct: string;
  question: string;
  rationale: string;
  lowScoreAnchor: string; // 1
  highScoreAnchor: string; // 5
  rubricAdvice: string;
}

export interface ChallengeTemplate {
  id: string;
  title: string;
  organization: string;
  domain: string;
  location: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  context: string;
  problemStatement: string;
  constraints: string[];
  resourcesProvided: string[];
  expectedDeliverables: string[];
  definitionOfSuccess: string;
  partnerTimeCommitment: string;
}

export const PM_DOSSIER = {
  metadata: {
    projectName: "PraxisForge: Tamil Nadu Engineering Challenge Platform",
    targetUsers: "2nd to 4th-Year Undergraduate Engineering Students (B.E./B.Tech) across Tier-2/Tier-3 colleges in Tamil Nadu (Coimbatore, Trichy, Madurai, Salem, Chennai clusters)",
    constraints: {
      teamSize: "Core Ops: 3 persons (Faculty SPOC + Student PM + Alumni Coordinator); Squads: 10 teams of 4-5 students (45-50 total students)",
      timeline: "12 Weeks total (4 Weeks Setup & Scoping + 6 Weeks Sprint + 2 Weeks Demo Day & Verification)",
      budget: "₹25,000 (~$300) total bootstrapped allocation for field travel stipends, certificates, demo day tea",
      techStack: "Zero custom software (Google Workspace, WhatsApp Communities, Notion/Drive, Loom/YouTube unlisted)"
    }
  },
  assumptions: [
    {
      title: "Academic Credit Mapping & Faculty Buy-in",
      detail: "The 6-week challenge sprint is sanctioned by the Department HoD / Principal as satisfying mandatory AICTE/Anna University 'Internship / Mini-Project / Value-Added Course' credits (1-2 credits or internal assessment bonus marks), preventing student attrition when semester exams approach."
    },
    {
      title: "Partner Value Proposition without Cash Demands",
      detail: "Local MSMEs and NGOs are willing to provide problem statements and 30-minute bi-weekly check-ins because the college provides student labor free of charge, with zero monetary donation or sponsorship asked."
    },
    {
      title: "Tier-2/3 Student Language & Confidence Dynamics",
      detail: "Students possess core coding/circuits knowledge from syllabus but experience hesitation in English client communication; bilingual facilitation (Tamil + English) in initial WhatsApp briefings and mentors from local Tamil diaspora accelerates participation."
    },
    {
      title: "Hardware / Cloud Resource Availability",
      detail: "Student teams will rely on college lab computers, existing free tiers (Supabase, Firebase, GitHub, Google Colab), or low-cost Arduino/ESP32 components readily found in college electronics club inventory."
    }
  ],
  nextStepsThisWeek: [
    {
      day: "Days 1-2 (Mon-Tue)",
      action: "Secure HoD & Principal Sanction Memo",
      description: "Pitch the Principal & 2 HoDs (ECE & CSE/Mech) with NAAC Criterion 1.3.2 / 2.3.1 alignment. Get approval for internal marks waiver and designate 1 faculty coordinator."
    },
    {
      day: "Days 3-4 (Wed-Thu)",
      action: "Anchor First 4 Local Challenge Briefs via Alumni & Industrial Estates",
      description: "Reach out to 6 local MSME owners in nearby industrial estates (e.g. Ambattur/SIDCO/CODISSIA) or alumni startup founders using the outreach template to lock in 4 signed-off briefs."
    },
    {
      day: "Day 5 (Friday)",
      action: "Launch Student Application Form & WhatsApp Hub",
      description: "Roll out the Google Form application link across 3rd-year classroom groups; configure the Master Google Sheet with auto-scoring and set up the WhatsApp Community structure."
    }
  ]
};

export const MILESTONES: Milestone[] = [
  {
    id: 'M1',
    phase: 'Phase 0: Governance & Infrastructure (Weeks 1-2)',
    week: 'Weeks 1-2',
    title: 'Institutional Buy-in & Zero-Code Tooling Setup',
    deliverables: [
      'Signed HoD circular recognizing 1-credit or internal assessment substitution',
      'Master Google Sheet (Cohorts, Challenges, Check-ins, Rubric) provisioned',
      'WhatsApp Community configured (Announcements, Squad Lounges, Mentor Lounge)',
      'Baseline competency diagnostic survey formulated in Google Forms'
    ],
    owner: 'Faculty Lead + Student PM',
    gateCriteria: 'Official approval circular signed; Zero-code architecture smoke-tested',
    status: 'in-progress',
    criticalPath: true
  },
  {
    id: 'M2',
    phase: 'Phase 1: Partner Sourcing & Scoping (Weeks 3-4)',
    week: 'Weeks 3-4',
    title: 'Challenge Bank Curation & Mentor Onboarding',
    deliverables: [
      '10 Scoped 1-Page Problem Briefs approved by partner POCs (MSMEs, NGOs, Agri)',
      '12 Industry/Alumni Mentors onboarded with signed 1-page commitment guide',
      'Evaluation rubric and milestone submission criteria finalized',
      'Awareness micro-module kits (PDF cheat sheets + WhatsApp audio prompts) recorded'
    ],
    owner: 'Alumni Coordinator + Faculty Lead',
    gateCriteria: 'Minimum 10 briefs signed off with designated partner POC contact and clear scoping constraints',
    status: 'upcoming',
    criticalPath: true
  },
  {
    id: 'M3',
    phase: 'Phase 2: Selection & Kickoff (Week 5)',
    week: 'Week 5',
    title: 'Student Selection, Team Matching & Baseline Survey',
    deliverables: [
      '45-50 Students selected into 10 multidisciplinary squads (4-5 per team)',
      '100% Cohort completion of 10-Question Baseline Survey',
      'In-person / Hybrid Kickoff Orientation (Challenge draft & partner assignment)',
      'Squad WhatsApp groups created with matched Alumni Mentor and Student Lead'
    ],
    owner: 'Student PM + Faculty Lead',
    gateCriteria: 'All 10 teams have confirmed matched challenge brief and scheduled Week 1 Partner Discovery Call',
    status: 'upcoming',
    criticalPath: true
  },
  {
    id: 'M4',
    phase: 'Phase 3: The 6-Week Challenge Sprint (Weeks 6-11)',
    week: 'Week 6 (Sprint W1)',
    title: 'Sprint Sprint 1: Problem Immersion & Field Visit',
    deliverables: [
      'Field visit or virtual 45-min deep-dive interview with Partner POC',
      'Root Cause Analysis diagram (5 Whys / Fishbone) + User Persona map',
      'Week 1 3-Minute Loom video submission + WhatsApp check-in'
    ],
    owner: 'Student Squad Leads',
    gateCriteria: 'Partner signs off on problem reframing before students write a single line of code or build hardware',
    status: 'upcoming',
    criticalPath: true
  },
  {
    id: 'M5',
    phase: 'Phase 3: The 6-Week Challenge Sprint (Weeks 6-11)',
    week: 'Week 7 (Sprint W2)',
    title: 'Sprint 2: Architecture & Cost/Time Estimation',
    deliverables: [
      'System Architecture / Flowchart / CAD schema draft',
      'Bill of Materials (BOM) & Time Estimation worksheet (using provided template)',
      'First 30-minute Mentor review sync on technical feasibility'
    ],
    owner: 'Technical Leads + Mentors',
    gateCriteria: 'Estimated build cost must fall within partner-defined budget envelope (< ₹3,000 for hardware or free software tier)',
    status: 'upcoming',
    criticalPath: false
  },
  {
    id: 'M6',
    phase: 'Phase 3: The 6-Week Challenge Sprint (Weeks 6-11)',
    week: 'Week 8 (Sprint W3)',
    title: 'Sprint 3: Low-Fidelity Prototype & Mid-Point Gate',
    deliverables: [
      'Working low-fi alpha prototype (Figma/Streamlit/Breadboard/Excel automation)',
      'Formal Mid-Sprint Review with Faculty Evaluator and Mentor',
      'Go/Pivot/No-Go decision logged in Master Sheet'
    ],
    owner: 'Faculty Lead + Mentors',
    gateCriteria: 'Squad passes Mid-Point Gate with score ≥ 65% on feasibility and user empathy rubric',
    status: 'upcoming',
    criticalPath: true
  },
  {
    id: 'M7',
    phase: 'Phase 3: The 6-Week Challenge Sprint (Weeks 6-11)',
    week: 'Week 9 (Sprint W4)',
    title: 'Sprint 4: Partner User Testing & Failure Handling',
    deliverables: [
      'Real-world test run with actual partner shopfloor/field users',
      'Failure Log: Minimum 3 failure points documented with mitigation attempts',
      'Safety, compliance, and edge-case audit review'
    ],
    owner: 'Student Squads + Partner POC',
    gateCriteria: 'Partner feedback documented with verbatim usability quotes and friction points',
    status: 'upcoming',
    criticalPath: false
  },
  {
    id: 'M8',
    phase: 'Phase 3: The 6-Week Challenge Sprint (Weeks 6-11)',
    week: 'Week 10 (Sprint W5)',
    title: 'Sprint 5: Refinement, Packaging & ROI Justification',
    deliverables: [
      'Robust beta release or polished physical enclosure/process blueprint',
      '1-Page Executive ROI Sheet (Cost vs. Hours saved or productivity gained)',
      'User manual / 2-minute video operational guide for partner staff'
    ],
    owner: 'Student Squads',
    gateCriteria: 'User manual verified by non-technical student peer reviewer',
    status: 'upcoming',
    criticalPath: false
  },
  {
    id: 'M9',
    phase: 'Phase 3: The 6-Week Challenge Sprint (Weeks 6-11)',
    week: 'Week 11 (Sprint W6)',
    title: 'Sprint 6: Final Submission & Verification Freeze',
    deliverables: [
      'Final submission bundle uploaded to Google Drive Locker',
      'Partner POC sign-off letter on utility and deliverables',
      'Pitch deck (10-slide standard format) ready for Demo Day'
    ],
    owner: 'Student PM + Faculty Lead',
    gateCriteria: '100% submission verified in Google Drive locker; zero missing assets',
    status: 'upcoming',
    criticalPath: true
  },
  {
    id: 'M10',
    phase: 'Phase 4: Showcase & Handover (Week 12)',
    week: 'Week 12',
    title: 'Demo Day, Endline Diagnostic & Credentialing',
    deliverables: [
      'In-person Demo Day & Exhibition (Industry jury, Principal, Partner reps)',
      '100% Cohort completion of 10-Question Endline Survey',
      'Portfolio Dossiers published (Google Drive public viewable link + QR code)',
      'Digital verifiable certificates issued with partner co-signature'
    ],
    owner: 'All Leads',
    gateCriteria: 'Demo Day executed within ₹25,000 budget; Endline comparative report compiled for Principal',
    status: 'upcoming',
    criticalPath: true
  }
];

export const DEPENDENCIES: DependencyItem[] = [
  {
    id: 'DEP-1',
    category: 'Faculty',
    title: 'Academic Credit & Exam Schedule Alignment',
    prerequisite: 'HoD & Academic Council authorization',
    dependentOn: 'Student team participation and zero dropouts',
    criticalPathLevel: 'Critical',
    bottleneckRisk: 'Internal assessment tests (IAT) or university lab practicals mid-sprint cause student abandonments.',
    contingencyStrategy: 'Formal circular sanctioning challenge hours as official lab/mini-project hours; 1-week buffer built into Sprint W4.'
  },
  {
    id: 'DEP-2',
    category: 'Partners',
    title: 'Partner Challenge Brief Scoping & POC Access',
    prerequisite: '1-Page brief signed with named operational contact (e.g. factory floor supervisor)',
    dependentOn: 'Challenge Bank publication and Sprint W1 field visit',
    criticalPathLevel: 'Critical',
    bottleneckRisk: 'Partner CEO agrees verbally, but middle management ignores students or denies access to premises/data.',
    contingencyStrategy: 'Require named operational POC phone number on Day 1; include pre-packaged anonymized synthetic dataset for each brief.'
  },
  {
    id: 'DEP-3',
    category: 'Mentors',
    title: 'Alumni / Industry Mentor Commitment Cadence',
    prerequisite: '30-min mentor orientation call and signed bi-weekly sync pledge',
    dependentOn: 'Sprint W2 Architecture Review and Sprint W3 Mid-Gate Evaluation',
    criticalPathLevel: 'High',
    bottleneckRisk: 'Busy tech mentors ghost or repeatedly reschedule meetings at odd hours.',
    contingencyStrategy: 'Asynchronous Loom reviews as primary feedback channel; 2 roving floating faculty mentors step in if an alum misses 48hr window.'
  },
  {
    id: 'DEP-4',
    category: 'Rubric',
    title: 'Evaluation Rubric & Gate Criteria Standardization',
    prerequisite: 'Joint rubric review by Faculty Lead and 1 Industry Advisor',
    dependentOn: 'Mid-sprint grading, mentor feedback consistency, and final Demo Day scoring',
    criticalPathLevel: 'High',
    bottleneckRisk: 'Traditional faculty grade on paper formatting (IEEE fonts, margins) rather than real-world efficacy.',
    contingencyStrategy: 'Objective rubric: 40% Partner Utility & Practicality, 30% Engineering Rigor, 15% Cost/Resource Realism, 15% Communication.'
  },
  {
    id: 'DEP-5',
    category: 'Platform',
    title: 'Zero-Code Stack Reliability (Google Sheets + Drive + WhatsApp)',
    prerequisite: 'Folder templates and Google Sheet script permissions locked before kickoff',
    dependentOn: 'Smooth submission tracking, video archiving, and credential generation',
    criticalPathLevel: 'Moderate',
    bottleneckRisk: 'File sharing permissions messed up; students accidentally overwrite Master Sheet rows.',
    contingencyStrategy: 'Google Sheet protected ranges (only PM edits status); students only submit through standard Google Forms.'
  }
];

export const RISK_REGISTER: RiskItem[] = [
  {
    id: 'RSK-01',
    category: 'Partners',
    riskEvent: 'Partner POC becomes unresponsive or ghosts student team mid-sprint',
    likelihood: 4,
    impact: 4,
    severity: 16,
    owner: 'Alumni / Industry Liaison',
    earlyWarning: 'Partner misses scheduled Week 1 interview or fails to respond to WhatsApp within 72 hours.',
    mitigation: 'Establish secondary backup contact at organization; define upfront that total partner commitment is only 2 hours across 6 weeks.',
    contingency: 'Pre-prepared synthetic problem track: If partner drops, switch team to parallel simulated scenario with faculty advisor acting as client proxy.'
  },
  {
    id: 'RSK-02',
    category: 'Students',
    riskEvent: 'Students build a superficial toy or copy a generic GitHub/Kaggle repo without solving the actual messy problem',
    likelihood: 5,
    impact: 4,
    severity: 20,
    owner: 'Faculty Lead + Mentors',
    earlyWarning: 'Architecture diagram shows generic ML models (e.g. MNIST/Iris) without connecting to the partner’s hardware or dirty data format.',
    mitigation: 'Mandate Week 1 "Problem Reframing & 5 Whys" sign-off before writing any code; evaluate based on partner constraints (e.g. offline use, 2G connectivity, ₹500 BOM).',
    contingency: 'Sprint W3 Mid-Gate fail requires 48-hour pivot workshop to scrap theoretical features and focus on 1 tangible manual friction point.'
  },
  {
    id: 'RSK-03',
    category: 'Academic',
    riskEvent: 'Department faculty view program as a distraction from syllabus/Anna University exams',
    likelihood: 4,
    impact: 4,
    severity: 16,
    owner: 'Faculty SPOC',
    earlyWarning: 'Professors assign surprise tests or refuse lab access during designated challenge hours.',
    mitigation: 'Explicitly map program outcomes to NAAC (Criterion 1.3.2, 2.3.1) and NBA criteria; credit faculty mentors in department annual appraisal dossiers.',
    contingency: 'Present mid-sprint showcase video reel to Principal and Management to reinforce institutional prestige.'
  },
  {
    id: 'RSK-04',
    category: 'Mentorship',
    riskEvent: 'Industry mentors drop out or offer purely theoretical advice disconnected from student resource constraints',
    likelihood: 3,
    impact: 3,
    severity: 9,
    owner: 'Student PM',
    earlyWarning: 'Mentor suggests microservices on AWS or enterprise SAP for a small textile workshop with a ₹5,000 budget.',
    mitigation: 'Provide mentors with "Mentor Playbook": explicitly state student budget, 4-week build limit, and encourage practical scrap/open-source recommendations.',
    contingency: 'Float 2 in-house senior alumni who can step into WhatsApp groups within 4 hours to review pull requests and block bad advice.'
  },
  {
    id: 'RSK-05',
    category: 'Students',
    riskEvent: 'Internal team dysfunction, unequal workload, and English language communication anxiety',
    likelihood: 4,
    impact: 3,
    severity: 12,
    owner: 'Student PM',
    earlyWarning: 'Only 1 student speaks during check-in calls; quiet members stop submitting weekly reflections.',
    mitigation: 'Rotate mandatory roles (Week 1 Lead, Week 2 Tech Lead, Week 3 Cost Analyst); permit bilingual Tamil/English communication in client meetings.',
    contingency: 'Peer-evaluation multiplier at Week 3 and Week 6; reassign non-contributing students to individual research documentation tracks.'
  },
  {
    id: 'RSK-06',
    category: 'IP & Legal',
    riskEvent: 'Partner claims intellectual property disputes or refuses to share real factory data due to proprietary fears',
    likelihood: 2,
    impact: 4,
    severity: 8,
    owner: 'Faculty Lead',
    earlyWarning: 'Partner legal team demands complex NDAs or halts student factory visits.',
    mitigation: 'Standard 1-page Creative Commons / Open Educational NDA pre-drafted: students own their code; partner gets irrevocable royalty-free internal license; student can showcase in portfolio.',
    contingency: 'Data scrubbing protocol: Provide script to mask customer IDs, financial totals, and exact chemical formulas before student receipt.'
  },
  {
    id: 'RSK-07',
    category: 'Operational',
    riskEvent: 'Students unable to afford hardware prototype components or local bus travel to partner sites',
    likelihood: 4,
    impact: 3,
    severity: 12,
    owner: 'Faculty SPOC',
    earlyWarning: 'Hardware team stalls in Week 2 waiting for parts.',
    mitigation: 'Allocate ₹1,500 direct seed mini-grant per hardware team from the ₹25k budget; open college innovation lab scrap bins and component lockers.',
    contingency: 'Pair hardware teams with college IoT/Robotics club for component borrowing.'
  }
];

export const ZERO_CODE_STACK = {
  layers: [
    {
      name: "1. Data Collection & Intake",
      tool: "Google Forms",
      cost: "Free",
      purpose: "Partner Brief Submissions, Student Applications, Weekly 3-Min Video Check-ins, Baseline/Endline Surveys",
      schema: "Auto-links to Master Google Sheet; automated email receipts via Form Notification add-on"
    },
    {
      name: "2. Master Relational Tracker",
      tool: "Google Sheets",
      cost: "Free",
      purpose: "Core Operations Database. Contains 5 tabs: [1] Squads & Roles, [2] Challenge Bank, [3] Weekly Check-in Log, [4] Mentor Feedback Scores, [5] Budget & Logistics",
      schema: "Color-coded conditional formatting for missing check-ins; pre-configured scoring formulas"
    },
    {
      name: "3. Asynchronous Real-Time Comms",
      tool: "WhatsApp Community",
      cost: "Free",
      purpose: "High-engagement comms. Hierarchy: [Announcements (Admin only)] + [10 Private Squad Groups (Students + Mentor + Faculty)] + [Mentors Only Lounge]",
      schema: "Automated Monday 9 AM prompt, Wednesday Hump-Day quick-tip, and Sunday 8 PM submission deadline reminder"
    },
    {
      name: "4. Asset Locker & Portfolio Storage",
      tool: "Google Drive",
      cost: "Free (Shared College Drive)",
      purpose: "Standardized folder structure: /Squad-XX/ -> /01-Research, /02-CAD-Code, /03-Testing-Logs, /04-Final-Dossier",
      schema: "Strict view-only permissions for public; write access limited to squad members"
    },
    {
      name: "5. Asynchronous Progress & Loom Submissions",
      tool: "Loom / Unlisted YouTube",
      cost: "Free",
      purpose: "Students record 3-minute screen-recorded demo every Friday. Mentors watch at 1.5x speed during their commute and leave voice/text comments.",
      schema: "Prevents endless zoom scheduling conflicts; builds camera confidence and concise pitching habits"
    },
    {
      name: "6. Verifiable Digital Portfolio & Credential",
      tool: "Google Slides + Autocrat / Canva",
      cost: "Free",
      purpose: "Generates tamper-resistant PDF certificate containing a live QR code redirecting to the student squad's Google Drive executive summary dossier.",
      schema: "Includes Partner logo, Principal signature, Mentor endorsement, and specific technical competencies demonstrated"
    }
  ],
  weeklyCadence: [
    { day: "Monday 09:00 AM", event: "WhatsApp Micro-Module Release", channel: "WhatsApp Announcements", description: "Audio note (Tamil/English) + 2-page PDF cheat sheet (e.g. 'How to talk to factory workers without sounding arrogant')." },
    { day: "Wednesday 06:00 PM", event: "Mid-Week Mentor Check-in", channel: "WhatsApp Squad Group", description: "Squad Lead posts 3-bullet update: What we did, What blocked us, Next 48 hrs plan." },
    { day: "Friday 08:00 PM", event: "Weekly Sprint Deliverable Submission", channel: "Google Form", description: "Submission of 3-min unlisted Loom/YouTube link + updated work-in-progress artifact link." },
    { day: "Sunday 12:00 PM", event: "Mentor & Peer Review Loop", channel: "Google Sheet / WhatsApp", description: "Mentor submits 2-question feedback in Sheet: 'What was good?' & 'What will fail in production?'" }
  ],
  budgetBreakdown: [
    { item: "Hardware Prototype Mini-Grants (5 teams × ₹2,000)", cost: 10000, category: "Prototyping" },
    { item: "Student Field Visit Bus / Auto Travel Allowance", cost: 6000, category: "Field Access" },
    { item: "Demo Day Tea, Snacks & Stage Setup for 75 people", cost: 5000, category: "Showcase" },
    { item: "High-Quality Laminated Certificates & Mementos for Mentors/Partners", cost: 2500, category: "Recognition" },
    { item: "Emergency Contingency Fund (Spare cables, sensors, prints)", cost: 1500, category: "Contingency" }
  ]
};

export const BASELINE_SURVEY: SurveyQuestion[] = [
  {
    id: 1,
    construct: "Problem Disambiguation & Discovery",
    question: "When presented with a vague request from a client (e.g., 'our warehouse inventory is messy'), how confident are you in uncovering the root cause through user interviews?",
    rationale: "Assesses ability to resist jumping to coding before understanding the real user bottleneck.",
    lowScoreAnchor: "1: I feel lost and wait for someone to give me clear textbook specifications",
    highScoreAnchor: "5: I can lead structured stakeholder interviews (5-Whys) and draft an actionable scoping document independently",
    rubricAdvice: "Target baseline average: 1.8. Target endline average: 4.2."
  },
  {
    id: 2,
    construct: "Real-World Constraint Awareness",
    question: "How easily can you adapt an engineering solution when real-world constraints (e.g., dust, high temperature, spotty 2G mobile internet, semi-literate operators) make standard software/hardware fail?",
    rationale: "Tests practical design thinking versus theoretical lab assumptions.",
    lowScoreAnchor: "1: I only know how to design for clean laboratory conditions with fast WiFi",
    highScoreAnchor: "5: I instinctively incorporate offline-first, ruggedized, and ultra-simple UI principles for field conditions",
    rubricAdvice: "Crucial for Tamil Nadu rural/industrial settings (power cuts, noisy environments)."
  },
  {
    id: 3,
    construct: "Cost & Bill of Materials (BOM) Estimation",
    question: "How confident are you in calculating the realistic unit manufacturing cost, operating expenses, and Return on Investment (ROI) of a solution you design?",
    rationale: "Measures commercial pragmatism. Engineering students often propose solutions that cost 10x more than the problem.",
    lowScoreAnchor: "1: I have never estimated bill of materials or financial payback periods",
    highScoreAnchor: "5: I can build a complete BOM spreadsheet including component sourcing, labor, electricity, and maintenance overheads",
    rubricAdvice: "Awareness module in Sprint W2 directly targets this metric."
  },
  {
    id: 4,
    construct: "Client & Stakeholder Communication",
    question: "How comfortable are you explaining technical trade-offs to a non-technical factory manager or farmer without using academic jargon?",
    rationale: "Evaluates translation capability between academic technical vocabulary and user business outcomes.",
    lowScoreAnchor: "1: I get nervous, speak only in formulas/code terms, and struggle to explain 'why it matters'",
    highScoreAnchor: "5: I speak comfortably in plain terms (or native Tamil), focusing on time saved, safety, and business benefits",
    rubricAdvice: "Bilingual roleplaying exercises bridge this gap in week 1."
  },
  {
    id: 5,
    construct: "Tolerance for Ambiguity & Failure Resilience",
    question: "When your prototype fails during a live test in front of a real user, how do you respond?",
    rationale: "Measures resilience against academic perfectionism where failure equals bad marks.",
    lowScoreAnchor: "1: I feel humiliated, defensive, or want to quit the project immediately",
    highScoreAnchor: "5: I treat failure as valuable diagnostic data, document the edge case calmly, and plan the next rapid iteration",
    rubricAdvice: "Track number of documented failures in Sprint W4 failure log."
  },
  {
    id: 6,
    construct: "Time & Sprint Project Estimation",
    question: "How accurate are your estimates for how many days an engineering task will take to complete?",
    rationale: "Checks awareness of Hofstadter's Law and project planning realism.",
    lowScoreAnchor: "1: I drastically underestimate timelines and end up doing all-nighters before submission",
    highScoreAnchor: "5: I break tasks into 48-hour deliverable chunks with buffer time for debugging and testing",
    rubricAdvice: "Assessed via weekly sprint commitment vs. actual delivery ratio."
  },
  {
    id: 7,
    construct: "Cross-Disciplinary Synthesis",
    question: "How effectively can you integrate skills outside your immediate branch (e.g., combining mechanical linkages, low-cost electronics, and basic cloud reporting)?",
    rationale: "Real problems do not respect academic departmental silos.",
    lowScoreAnchor: "1: I only touch tasks that match my specific academic syllabus branch",
    highScoreAnchor: "5: I actively collaborate across disciplines to build end-to-end working systems",
    rubricAdvice: "Teams are intentionally seeded with 2 branches per squad."
  },
  {
    id: 8,
    construct: "Ethics, Safety, & Data Privacy",
    question: "When deploying a prototype in a workplace, how thoroughly do you audit for operator physical safety and confidential business data leakage?",
    rationale: "Prevents dangerous or legally compromising student implementations.",
    lowScoreAnchor: "1: I rarely think about safety hazards or privacy unless instructed by a professor",
    highScoreAnchor: "5: I systematically conduct a hazard and data privacy review before connecting any equipment or gathering client records",
    rubricAdvice: "Gate condition before any on-site field testing."
  },
  {
    id: 9,
    construct: "Professional Feedback Reception",
    question: "How do you handle blunt, critical feedback from an industry leader who tears apart your proposed technical architecture?",
    rationale: "Prepares students for demanding corporate and startup critique.",
    lowScoreAnchor: "1: I take it personally, get argumentative, or stop communicating with the mentor",
    highScoreAnchor: "5: I take notes, ask clarifying questions on the underlying reasons, and present an improved revision within 48 hours",
    rubricAdvice: "Mentors rate this at Sprint W3 and W6."
  },
  {
    id: 10,
    construct: "Portfolio & Verifiable Proof of Work",
    question: "How easily could you showcase your existing engineering projects to a prospective employer with live evidence, video proof, and client testimonials?",
    rationale: "Directly impacts student employability and placement conversion.",
    lowScoreAnchor: "1: I only have generic academic certificates and a bullet point on a PDF resume",
    highScoreAnchor: "5: I have a public verifiable portfolio dossier showing live video demos, GitHub commits, partner verification, and ROI metrics",
    rubricAdvice: "Ultimate program outcome measured at Demo Day."
  }
];

export const CHALLENGE_TEMPLATES: ChallengeTemplate[] = [
  {
    id: 'CH-TN-01',
    title: 'Automated Fabric Defect Tagging for Tiruppur Garment Export Unit',
    organization: 'Sri Velan Tex & Exports (MSME, 45 power-looms)',
    domain: 'Textiles & Industrial Vision / Automation',
    location: 'Tiruppur, Tamil Nadu',
    difficulty: 'Intermediate',
    tags: ['Computer Vision', 'Edge Device', 'MSME Shopfloor', 'Defect Detection'],
    context: 'Manual inspection of circular knitted cotton fabric suffers from 18% missed needle drops and oil stain defects during evening shifts due to inspector visual fatigue, resulting in high shipment rejection penalties from European buyers.',
    problemStatement: 'Design a low-cost, overhead optical inspection or tallying module mountable on existing inspection rolling tables that flags and timestamp-logs fabric blemishes without slowing the 25 meters/min fabric throughput.',
    constraints: [
      'Total hardware deployment budget under ₹6,500 per table',
      'Must function without continuous high-speed internet (intermittent broadband)',
      'High ambient dust and cotton fluff present in loom shed',
      'Interface must be in Tamil language for 8th-grade educated machine operators'
    ],
    resourcesProvided: [
      'Sample 50-meter rolls of defect-marked cotton knit fabric',
      'Access to shopfloor during non-peak Sunday shifts (4 hours)',
      'Current manual inspection checklist and defect photo archive'
    ],
    expectedDeliverables: [
      'Working optical/sensor prototype (Raspberry Pi/ESP32-CAM or optical trigger)',
      'Operator push-button tally box with Tamil audio/visual buzzer',
      'Simple Excel daily defect breakdown generator via USB drive export',
      '1-Page Laminated SOP for floor operators in Tamil'
    ],
    definitionOfSuccess: 'Catches ≥ 75% of oil streaks and runs at standard table speed with < 5% false alarms during a 3-hour trial.',
    partnerTimeCommitment: '2 hours total (30 min Week 1 kickoff, 45 min Week 4 field test, 45 min final review)'
  },
  {
    id: 'CH-TN-02',
    title: 'Ergonomic Coconut De-husking & Coir Waste Sieve for Pollachi Smallholders',
    organization: 'Anamalai Farmers Producer Organization (FPO - 120 member farmers)',
    domain: 'Agricultural Engineering & Rural Mechanics',
    location: 'Pollachi, Coimbatore District, Tamil Nadu',
    difficulty: 'Intermediate',
    tags: ['Mechanical Design', 'Agri-Tech', 'Ergonomics', 'Safety'],
    context: 'Smallholder coconut farmers face severe agricultural labor shortages during harvest. Existing motorized de-huskers cost over ₹45,000 and pose severe finger crush injury risks to elderly farmhands.',
    problemStatement: 'Design a human-powered or low-wattage (solar/single-phase domestic power) mechanical de-husker and husk separating cradle with fail-safe finger guards and a continuous grit sieve.',
    constraints: [
      'Build cost under ₹4,000 using standard MS angles, bicycle sprockets, and scrap sheet metal',
      'Operable on single-phase 220V agricultural power or manual foot pedal',
      'Zero exposed pinch points within 300mm of the coconut entry funnel',
      'Total weight under 35 kg for transport on rural moped/bullock cart'
    ],
    resourcesProvided: [
      '50 harvested raw coconuts with green/brown husks for destructive testing',
      'Access to local rural workshop welding machine and bench grinder',
      'Video recordings of current hand tool de-husking injuries and throughput metrics'
    ],
    expectedDeliverables: [
      'Fabricated working mechanical prototype or detailed CAD manufacturing pack',
      'Ergonomic operator hazard assessment report',
      'Bill of Materials with local Pollachi hardware store purchase receipts',
      '3-Minute Tamil video demonstration on YouTube'
    ],
    definitionOfSuccess: 'De-husks ≥ 120 coconuts/hour with zero safety pinch risk and < 2% nut shell cracking.',
    partnerTimeCommitment: '1.5 hours total (20 min farm demo, 40 min prototype trial, 30 min feedback call)'
  },
  {
    id: 'CH-TN-03',
    title: 'Smart Cold-Chain Temperature Logger for Rural Primary Health Centers',
    organization: 'District Rural Health Mission Support Cell',
    domain: 'Healthcare & Embedded Systems / IoT',
    location: 'Madurai Rural District, Tamil Nadu',
    difficulty: 'Advanced',
    tags: ['IoT', 'Cold Chain', 'Healthcare', 'Ultra-Low Power'],
    context: 'Ice-Lined Refrigerators (ILR) storing anti-rabies, hepatitis, and childhood vaccines in remote sub-centers experience unrecorded temperature spikes between +2°C and +8°C during frequent 4-6 hour rural grid power outages.',
    problemStatement: 'Create an ultra-reliable, battery-backed temperature and door-open logger that displays audible local sirens during excursions and sends SMS/WhatsApp alerts to the village health nurse without recurring cloud subscription fees.',
    constraints: [
      'Must operate for ≥ 72 hours on internal rechargeable Li-ion or dry cell battery during blackouts',
      'Sensor accuracy within ±0.5°C verified against medical thermometer',
      'Hardware unit cost under ₹2,000 using off-the-shelf ESP32/GSM or BLE modules',
      'IP54 condensation resistance inside 95% humidity refrigerator interiors'
    ],
    resourcesProvided: [
      'Defunct medical ice-lined refrigerator chamber for testing in college bio-lab',
      'Temperature excursion threshold compliance guidelines from WHO PQS standards',
      'Direct interview with 2 Primary Health Centre (PHC) Village Health Nurses'
    ],
    expectedDeliverables: [
      'Encased physical hardware unit with digital LCD display and alarm',
      'Embedded firmware (C++/Arduino) with non-volatile EEPROM event logging',
      'Android / Web Bluetooth sync utility for local nurses to export log to CSV',
      'Calibration certificate & thermal testing report'
    ],
    definitionOfSuccess: 'Logs 7 days of continuous readings at 5-minute intervals with zero data loss during simulated 12-hour power cuts.',
    partnerTimeCommitment: '2 hours total (30 min requirement briefing, 45 min sub-center walkthrough, 45 min final evaluation)'
  },
  {
    id: 'CH-TN-04',
    title: 'Micro-Foundry Shopfloor Molten Metal Pour Temperature & Pour-Time Logger',
    organization: 'Sri Shakthi Castings & Auto Components (SIDCO Industrial Estate)',
    domain: 'Manufacturing & Industrial IoT',
    location: 'Ambattur / Guindy SIDCO, Chennai, Tamil Nadu',
    difficulty: 'Intermediate',
    tags: ['Foundry', 'Thermometry', 'Quality Control', 'Data Logging'],
    context: 'Cast iron pouring ladles must be poured between 1380°C and 1420°C. Delays in crane movement lead to cold shut casting scrap (costing ₹1.2 Lakhs/month), but workers avoid holding heavy pyrometers near glowing ladles.',
    problemStatement: 'Build a rugged, non-contact infrared thermal monitoring mount with an ultra-bright visual LED beacon (Green: Safe Pour, Red: Too Cold) and automatic timer logging to stop premature or cold pours.',
    constraints: [
      'Capable of measuring temperatures from 1100°C to 1500°C from a 2-meter safety standoff distance',
      'Housing must withstand intense radiant heat and ambient black foundry dust',
      'Total prototype budget under ₹5,000 using industrial optical thermopiles',
      'Data logs must be viewable on an Android phone over WiFi/Hotspot'
    ],
    resourcesProvided: [
      'Access to foundry floor during Saturday pour run (accompanied by safety supervisor)',
      'Defective casting scrap rate records from past 3 months',
      'Calibration check with foundry optical immersion pyrometer'
    ],
    expectedDeliverables: [
      'Heat-shielded sensor assembly with magnetic mounting bracket',
      'High-visibility dual-color LED shopfloor tower light controller',
      'Daily batch summary PDF auto-generator for the Quality Control Manager'
    ],
    definitionOfSuccess: 'Accurately alerts crane operator within 2 seconds of temperature dropping below critical threshold across 5 test melts.',
    partnerTimeCommitment: '2.5 hours total across 6 weeks'
  }
];

export const OUTREACH_TEMPLATES = {
  partner: {
    title: "Local MSME / Industry / NGO Partner Pitch",
    target: "Factory Owners, Managing Directors, NGO Leaders, Hospital Administrators in Tamil Nadu",
    channel: "Email, WhatsApp, In-Person Industrial Estate Visit (Ambattur, CODISSIA, SIDCO)",
    subject: "Zero-Cost Engineering Solution Sprint for [Company Name] — Student Innovation Pilot",
    body: `Dear Thiru [Partner Name],

Vanakkam. My name is [Your Name], Faculty / Project Lead at [College Name], [City, Tamil Nadu].

We are launching a focused 6-Week "Real-World Challenge Studio" for our top pre-final year engineering students (Departments of ECE, Mechanical, and Computer Science).

Instead of making students do theoretical textbook mini-projects, we want them to solve real operational bottlenecks faced by local industry leaders like you.

What we offer your team:
• 1 Dedicated squad of 4-5 handpicked students working on your specific operational challenge for 6 weeks.
• 1 Senior Industry Alum Mentor guiding their technical execution.
• Free Deliverables: A functional prototype, automation script, or process blueprint customized for your floor.
• Zero cost, zero sponsorship fee, and zero complex legal paperwork.

All we require from you:
• Exactly 2 hours of your operational lead's time over the entire 6 weeks:
   - 30 minutes in Week 1 to explain the problem.
   - 45 minutes in Week 4 for a quick progress check.
   - 45 minutes at the final showcase to evaluate their output.

We have attached a simple 1-page Problem Brief template. If you have any recurring friction point—whether in machine downtime, manual inspection, cost tracking, or inventory—could we schedule a brief 10-minute call this Thursday or Friday?

Thank you for your valuable time and support in building Tamil Nadu's next generation of practical engineers.

Warm regards,

[Your Name]
Project Lead & Assistant Professor, Department of [Department]
[College Name], [District, Tamil Nadu]
Phone / WhatsApp: +91 [Your Phone Number]
LinkedIn: [Your Profile Link]`
  },
  mentor: {
    title: "Alumni / Industry Tech Mentor Pitch",
    target: "Engineering Alumni working in Tech/Core Industry (Bengaluru, Chennai, Hyderabad, Singapore, US)",
    channel: "LinkedIn Direct Message / Alumni WhatsApp Groups / Email",
    subject: "Mentor our junior engineering squads: 45 minutes bi-weekly for 6 weeks",
    body: `Hi [Alum / Mentor Name],

Hope you're doing well!

Remember the frustration during our college days when mini-projects were just copy-pasting code from GitHub or buying readymade hardware kits that taught us nothing about actual production?

We are fixing this at [College Name]. We are kicking off the "PraxisForge Real-World Challenge Studio" this semester—matching student squads with real problems from Tamil Nadu MSMEs, rural hospitals, and agri-enterprises.

We would love to invite you as an Industry Mentor for 1 student squad (4 students working on [Domain e.g. IoT / Embedded / Full-stack]).

The commitment is designed for busy professionals:
• 45-Minute bi-weekly asynchronous or Zoom sync (just 3 syncs total over 6 weeks).
• Reviewing a 3-minute Loom video demo submitted by students every Friday.
• Giving them honest industry critique: "Will this hold up in production? What are the failure modes?"

No theoretical marking, no paperwork—just raw, practical engineering mentorship that changes how these students think for the rest of their careers.

You will also receive an official Institution Industry Fellow recognition citation for your LinkedIn and mentorship profile.

Are you open to guiding one squad this cohort? Drop a quick reply or thumbs up, and I will share the squad's 1-page challenge brief!

Best,

[Your Name]
Lead Organizer, Student Innovation Cell
[College Name], [Year/Batch if alum]`
  },
  faculty: {
    title: "College Principal & Department HoD Proposal",
    target: "Principal, Vice-Principal, Head of Department (HoD), Academic Council",
    channel: "Formal Internal Memo / Department Meeting Presentation",
    subject: "Proposal: 6-Week Work-Integrated Learning Sprint Aligned with NAAC & NBA Metrics",
    body: `Respected Principal and Heads of Department,

Sub: Proposal to launch the 6-Week "PraxisForge" Work-Integrated Challenge Platform (Pilot Cohort: 10 Teams).

To bridge the critical gap between theoretical university curriculum and practical industrial requirements, we propose conducting an intensive 6-week problem-solving sprint for selected 2nd to 4th-year students during this semester.

Strategic Institutional Benefits:
1. NAAC & NBA Accreditation Alignment: Directly addresses NAAC Criterion 1.3.2 (Value-added courses imparting transferable skills) and Criterion 2.3.1 (Experiential and Problem-Solving Methodologies), as well as NBA Program Outcomes PO1 through PO12.
2. Industry-Institute Interaction (IIIC): Formal engagement with 10 local MSMEs and industrial chambers (CODISSIA / SIDCO / CII) without institutional financial outflow.
3. Enhanced Placement Conversion: Students produce verifiable portfolio dossiers (with live video proof and partner sign-offs) that dramatically elevate tier-1 campus recruitment results.

Operational Framework:
• Zero Capital Outlay: Uses existing computer laboratories, student-level open source tools, and Google Workspace.
• Zero Distraction from Curriculum: Challenge hours mapped to existing Laboratory / Mini-Project / Value-Added course slots.
• Industry Mentor Oversight: Each student squad is co-mentored by our alumni working in top tech companies.

We request your kind approval to:
1. Issue an internal circular granting 1-credit or internal assessment bonus recognition for participating students.
2. Designate one departmental faculty coordinator from ECE, Mechanical, and CSE to support the pilot.

We have attached the detailed 12-week implementation plan, risk register, and zero-cost budget breakdown for your perusal.

Respectfully submitted,

[Your Name]
Assistant Professor & Innovation Lead
[College Name]`
  }
};
