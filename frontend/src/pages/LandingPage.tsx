import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu,
  ArrowRight,
  Brain,
  Code2,
  MessageSquare,
  BarChart3,
  Shield,
  Sparkles,
  Users,
  Building2,
  Zap,
  Target,
  BookOpen,
  Video,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Interviews',
    description: 'Realistic interview simulations powered by Google Gemini 2.5 Pro with adaptive difficulty.',
    color: 'oklch(0.59 0.22 275)',
  },
  {
    icon: Code2,
    title: 'Live Coding Challenges',
    description: 'In-browser code editor supporting 7+ languages with real-time evaluation.',
    color: 'oklch(0.70 0.17 195)',
  },
  {
    icon: MessageSquare,
    title: 'Behavioral Analysis',
    description: 'AI evaluates communication, confidence, and behavioral indicators in real-time.',
    color: 'oklch(0.72 0.19 155)',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Comprehensive performance reports with skill heatmaps and progress tracking.',
    color: 'oklch(0.80 0.16 85)',
  },
  {
    icon: Target,
    title: 'Resume-Aware Questions',
    description: 'Questions personalized to your skills, experience, and target company.',
    color: 'oklch(0.65 0.20 25)',
  },
  {
    icon: BookOpen,
    title: 'Career Roadmaps',
    description: '30/60/90-day personalized learning plans with curated resources.',
    color: 'oklch(0.60 0.18 310)',
  },
];

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix',
  'Oracle', 'Adobe', 'IBM', 'Accenture', 'Infosys',
];

const interviewModes = [
  { name: 'Technical', icon: '🔧', desc: 'DSA, System Design, OOP' },
  { name: 'Behavioral', icon: '🧠', desc: 'STAR Method, Leadership' },
  { name: 'Coding', icon: '💻', desc: 'Live Code & Debug' },
  { name: 'System Design', icon: '🏗️', desc: 'Architecture & Scale' },
  { name: 'FAANG Sim', icon: '🎯', desc: 'Company-Specific Prep' },
  { name: 'HR Round', icon: '🤝', desc: 'Culture Fit & Salary' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-surface-950)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, oklch(0.59 0.22 275), oklch(0.70 0.17 195))' }}
            >
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">
              <span className="gradient-text">InterviewGPT</span>{' '}
              <span className="text-white/60">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="btn-ghost text-white/70">
              Sign In
            </Link>
            <Link to="/register" className="btn-primary text-sm py-2 px-4">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: 'oklch(0.59 0.22 275)' }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15"
            style={{ background: 'oklch(0.70 0.17 195)' }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="badge badge-primary text-xs py-1.5 px-4">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Powered by Google Gemini 2.5 Pro
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight"
          >
            Ace Your Next
            <br />
            <span className="gradient-text">Interview</span> with AI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'oklch(0.65 0.01 280)' }}
          >
            Practice with the world's most realistic AI interview simulator.
            Adaptive, resume-aware, and powered by multi-agent intelligence
            to prepare you for any company.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-16">
            <Link
              to="/register"
              className="btn-primary text-base py-3.5 px-8 rounded-2xl"
            >
              Start Practicing Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="btn-secondary text-base py-3.5 px-8 rounded-2xl"
            >
              <Video className="w-5 h-5" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Company logos */}
          <motion.div variants={itemVariants}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'oklch(0.45 0.01 280)' }}>
              Prepare for interviews at
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-sm font-semibold px-4 py-2 rounded-lg"
                  style={{ color: 'oklch(0.5 0.01 280)', background: 'oklch(1 0 0 / 0.03)' }}
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Interview Modes */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              8 Interview Modes
            </h2>
            <p style={{ color: 'oklch(0.55 0.01 280)' }}>
              Comprehensive preparation for every type of interview
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interviewModes.map((mode, i) => (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-interactive text-center py-6"
              >
                <div className="text-3xl mb-3">{mode.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{mode.name}</h3>
                <p className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>{mode.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.02 280)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Everything You Need to{' '}
              <span className="gradient-text">Succeed</span>
            </h2>
            <p style={{ color: 'oklch(0.55 0.01 280)' }}>
              A complete platform built with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-interactive group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${feature.color} / 0.12` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.01 280)' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '8+', label: 'Interview Modes' },
              { value: '20+', label: 'Tech Domains' },
              { value: '7', label: 'Coding Languages' },
              { value: '8', label: 'AI Agents' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-8"
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'oklch(0.55 0.01 280)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center rounded-3xl p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, oklch(0.59 0.22 275 / 0.15), oklch(0.70 0.17 195 / 0.1))',
            border: '1px solid oklch(0.59 0.22 275 / 0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20"
              style={{ background: 'oklch(0.59 0.22 275)' }}
            />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'oklch(0.65 0.01 280)' }}>
              Join thousands of candidates who improved their interview skills with InterviewGPT AI.
            </p>
            <Link
              to="/register"
              className="btn-primary text-base py-4 px-10 rounded-2xl"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t" style={{ borderColor: 'oklch(1 0 0 / 0.05)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4" style={{ color: 'oklch(0.59 0.22 275)' }} />
            <span className="text-sm" style={{ color: 'oklch(0.4 0.01 280)' }}>
              © 2026 InterviewGPT AI. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm" style={{ color: 'oklch(0.4 0.01 280)' }}>
            <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
