import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Code2,
  MessageSquare,
  Building2,
  Users,
  Zap,
  Target,
  Briefcase,
  ChevronRight,
  Sparkles,
  Settings2,
} from 'lucide-react';

const interviewModes = [
  { id: 'technical', name: 'Technical Interview', icon: Brain, description: 'Core CS concepts, DSA, OOP, databases, and domain-specific questions.', color: 'oklch(0.59 0.22 275)', difficulty: 'Medium-Hard' },
  { id: 'behavioral', name: 'Behavioral Interview', icon: Users, description: 'STAR method, leadership, conflict resolution, and teamwork questions.', color: 'oklch(0.72 0.19 155)', difficulty: 'Medium' },
  { id: 'hr', name: 'HR Interview', icon: Briefcase, description: 'Culture fit, salary negotiation, strengths/weaknesses, career goals.', color: 'oklch(0.70 0.17 195)', difficulty: 'Easy-Medium' },
  { id: 'coding', name: 'Coding Interview', icon: Code2, description: 'Live coding with DSA problems, complexity analysis, and optimization.', color: 'oklch(0.80 0.16 85)', difficulty: 'Hard' },
  { id: 'system_design', name: 'System Design', icon: Settings2, description: 'Design scalable systems — WhatsApp, Netflix, Uber architecture.', color: 'oklch(0.65 0.20 25)', difficulty: 'Hard-Expert' },
  { id: 'campus_placement', name: 'Campus Placement', icon: Building2, description: 'Aptitude, technical, and HR rounds typical of campus recruitments.', color: 'oklch(0.60 0.18 310)', difficulty: 'Easy-Medium' },
  { id: 'faang_simulation', name: 'FAANG Simulation', icon: Target, description: 'Full-loop FAANG-style interview with multiple rounds and evaluation.', color: 'oklch(0.75 0.15 60)', difficulty: 'Expert' },
  { id: 'custom_company', name: 'Custom Company', icon: Sparkles, description: 'Prepare for a specific company\'s interview style and questions.', color: 'oklch(0.55 0.20 275)', difficulty: 'Variable' },
];

const topCompanies = [
  { name: 'Google', color: '#4285F4' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Meta', color: '#0668E1' },
  { name: 'Netflix', color: '#E50914' },
  { name: 'Apple', color: '#A2AAAD' },
  { name: 'Oracle', color: '#F80000' },
  { name: 'Adobe', color: '#FF0000' },
  { name: 'IBM', color: '#054ADA' },
  { name: 'Accenture', color: '#A100FF' },
  { name: 'Infosys', color: '#007CC3' },
  { name: 'TCS', color: '#0057B8' },
];

const domains = [
  'Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Spring Boot',
  'Database', 'System Design', 'Cloud', 'DevOps', 'DSA', 'Machine Learning',
  'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Docker', 'Kubernetes',
];

const experienceLevels = [
  { value: 'fresher', label: 'Fresher', desc: '0-1 years' },
  { value: 'junior', label: 'Junior', desc: '1-3 years' },
  { value: 'mid', label: 'Mid-Level', desc: '3-6 years' },
  { value: 'senior', label: 'Senior', desc: '6-10 years' },
  { value: 'lead', label: 'Lead/Staff', desc: '10+ years' },
];

export default function NewInterviewPage() {
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [experience, setExperience] = useState('fresher');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [numQuestions, setNumQuestions] = useState(10);
  const navigate = useNavigate();

  const toggleDomain = (domain: string) => {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );
  };

  const canStart = selectedMode && selectedCompany;

  return (
    <motion.div
      className="page-container max-w-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mb-8">
        <h1 className="section-title">New Interview</h1>
        <p className="section-subtitle">Configure your AI-powered mock interview session.</p>
      </div>

      {/* Step 1: Interview Mode */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-1">1. Select Interview Mode</h2>
        <p className="text-sm mb-4" style={{ color: 'oklch(0.5 0.01 280)' }}>Choose the type of interview you want to practice.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {interviewModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`card card-interactive text-left p-4 transition-all ${
                selectedMode === mode.id ? 'ring-2' : ''
              }`}
              style={{
                ...(selectedMode === mode.id
                  ? { borderColor: mode.color, ringColor: mode.color, boxShadow: `0 0 20px ${mode.color}20` }
                  : {}),
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${mode.color} / 0.12` }}
              >
                <mode.icon className="w-5 h-5" style={{ color: mode.color }} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{mode.name}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.5 0.01 280)' }}>
                {mode.description}
              </p>
              <div className="mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${mode.color} / 0.1`, color: mode.color }}>
                  {mode.difficulty}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Target Company */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-1">2. Target Company</h2>
        <p className="text-sm mb-4" style={{ color: 'oklch(0.5 0.01 280)' }}>Select or enter the company you're preparing for.</p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-4">
          {topCompanies.map((company) => (
            <button
              key={company.name}
              onClick={() => setSelectedCompany(company.name)}
              className={`card card-interactive py-3 text-center text-sm font-medium transition-all ${
                selectedCompany === company.name ? 'border-primary-500/50' : ''
              }`}
              style={selectedCompany === company.name ? { borderColor: company.color, boxShadow: `0 0 15px ${company.color}20` } : {}}
            >
              <span style={selectedCompany === company.name ? { color: company.color } : { color: 'oklch(0.7 0.01 280)' }}>
                {company.name}
              </span>
            </button>
          ))}
        </div>
        <input
          type="text"
          className="input max-w-md"
          placeholder="Or type a company name..."
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        />
      </div>

      {/* Step 3: Role & Experience */}
      <div className="mb-10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-1">3. Target Role</h2>
          <p className="text-sm mb-4" style={{ color: 'oklch(0.5 0.01 280)' }}>What position are you interviewing for?</p>
          <input
            type="text"
            className="input"
            placeholder="e.g., Software Engineer, Frontend Developer..."
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-1">4. Experience Level</h2>
          <p className="text-sm mb-4" style={{ color: 'oklch(0.5 0.01 280)' }}>Your current experience level.</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {experienceLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => setExperience(level.value)}
                className={`card card-interactive py-2.5 text-center transition-all ${
                  experience === level.value ? 'border-primary-500/50 bg-primary-500/5' : ''
                }`}
              >
                <p className={`text-xs font-semibold ${experience === level.value ? 'text-primary-300' : 'text-white/70'}`}>
                  {level.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'oklch(0.45 0.01 280)' }}>{level.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step 5: Focus Domains */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-1">5. Focus Domains <span className="text-sm font-normal" style={{ color: 'oklch(0.5 0.01 280)' }}>(optional)</span></h2>
        <p className="text-sm mb-4" style={{ color: 'oklch(0.5 0.01 280)' }}>Select technical areas you want to focus on.</p>
        <div className="flex flex-wrap gap-2">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => toggleDomain(domain)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedDomains.includes(domain)
                  ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                  : 'bg-white/[0.03] text-white/50 border border-white/5 hover:bg-white/[0.06] hover:text-white/70'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Step 6: Number of Questions */}
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-1">6. Number of Questions</h2>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={5}
            max={30}
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="flex-1 accent-primary-500"
          />
          <span className="text-lg font-bold w-10 text-center">{numQuestions}</span>
        </div>
      </div>

      {/* Start Button */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <button
          disabled={!canStart}
          className={`btn-primary text-base py-3.5 px-10 rounded-2xl ${!canStart ? 'opacity-40 cursor-not-allowed' : ''}`}
          onClick={() => navigate('/interview/mock-1')}
        >
          <Zap className="w-5 h-5" />
          Start Interview
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
