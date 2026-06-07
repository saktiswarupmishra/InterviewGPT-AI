import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  TrendingUp,
  Target,
  ArrowRight,
  Zap,
  Award,
  Flame,
  ChevronRight,
  Sparkles,
  Calendar,
  Sparkle,
  ArrowUpRight,
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';

const mockScores = {
  technical: 72,
  behavioral: 85,
  communication: 78,
  coding: 65,
  system_design: 58,
  overall: 71,
};

const mockRecentInterviews = [
  { id: '1', company: 'Google', role: 'SDE II', mode: 'Technical', score: 78, date: '2026-06-05', status: 'completed', logoColor: 'oklch(0.56 0.22 275)' },
  { id: '2', company: 'Amazon', role: 'SDE I', mode: 'Coding', score: 82, date: '2026-06-04', status: 'completed', logoColor: 'oklch(0.78 0.15 195)' },
  { id: '3', company: 'Meta', role: 'Frontend', mode: 'System Design', score: 65, date: '2026-06-03', status: 'completed', logoColor: 'oklch(0.80 0.16 85)' },
  { id: '4', company: 'Microsoft', role: 'SDE', mode: 'Behavioral', score: 90, date: '2026-06-02', status: 'completed', logoColor: 'oklch(0.65 0.20 25)' },
];

const skillData = [
  { name: 'DSA & Algorithms', value: 75, color: 'linear-gradient(90deg, oklch(0.56 0.22 275), oklch(0.68 0.17 275))' },
  { name: 'System Design', value: 58, color: 'linear-gradient(90deg, oklch(0.70 0.17 195), oklch(0.78 0.15 195))' },
  { name: 'JavaScript & React', value: 82, color: 'linear-gradient(90deg, oklch(0.80 0.16 85), oklch(0.72 0.19 155))' },
  { name: 'Python & Backend', value: 78, color: 'linear-gradient(90deg, oklch(0.72 0.19 155), oklch(0.70 0.17 195))' },
  { name: 'Database & SQL', value: 70, color: 'linear-gradient(90deg, oklch(0.60 0.18 310), oklch(0.56 0.22 275))' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function ScoreRing({ score, label, size = 84, strokeWidth = 5 }: { score: number; label: string; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 80) return 'oklch(0.72 0.19 155)'; // Success
    if (s >= 60) return 'oklch(0.80 0.16 85)';  // Warning
    return 'oklch(0.63 0.22 25)';   // Error
  };

  return (
    <div className="flex flex-col items-center p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all duration-300">
      <div className="relative score-ring-wrap" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="oklch(1 0 0 / 0.04)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={getColor(score)}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[15px] font-black tracking-tight">{score}%</span>
        </div>
      </div>
      <p className="text-[11px] font-semibold tracking-wider text-white/40 uppercase mt-3 text-center whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuthStore();
  const firstName = user?.full_name?.split(' ')[0] || 'there';

  return (
    <motion.div
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Welcome Banner */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl p-8 mb-8 border border-white/[0.04]"
        style={{
          background: 'linear-gradient(135deg, oklch(0.14 0.015 270) 0%, oklch(0.11 0.01 270) 100%)',
        }}
      >
        <div
          className="absolute -right-12 -top-12 w-64 h-64 rounded-full blur-[80px] opacity-15"
          style={{ background: 'oklch(0.56 0.22 275)' }}
        />
        <div
          className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full blur-[85px] opacity-10"
          style={{ background: 'oklch(0.70 0.17 195)' }}
        />
        
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge badge-primary font-bold text-[10px]">Candidate Hub</span>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-white/40 text-xs font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> June 2026 Season
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
              Welcome back, <span className="gradient-text">{firstName}</span> 👋
            </h1>
            <p className="text-sm max-w-xl text-white/50 leading-relaxed">
              Your preparation index has improved by <span className="text-success-500 font-bold">+5.4%</span> this week. Complete today's recommended system design prep to maintain your streak.
            </p>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/interview/new"
              className="btn-primary text-xs py-3 px-6 rounded-xl flex items-center gap-2"
            >
              Start New Simulation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Interviews Completed', value: '12', icon: MessageSquare, change: '+3 this week', trend: 'up', color: 'oklch(0.56 0.22 275)' },
          { label: 'Preparation Index', value: '71.2%', icon: TrendingUp, change: '+4.8% from last', trend: 'up', color: 'oklch(0.72 0.19 155)' },
          { label: 'Daily Practice Streak', value: '7 Days', icon: Flame, change: 'Streak active', trend: 'up', color: 'oklch(0.80 0.16 85)' },
          { label: 'Top Performance', value: '90%', icon: Award, change: 'Behavioral prep', trend: 'up', color: 'oklch(0.70 0.17 195)' },
        ].map((stat) => (
          <div key={stat.label} className="card group hover:border-white/10 stat-card">
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
                  border: `1px solid ${stat.color}20`,
                }}
              >
                <stat.icon className="w-[18px] h-[18px]" style={{ color: stat.color }} />
              </div>
              <span className="text-[10px] font-bold text-success-500 bg-success-500/10 px-2 py-0.5 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-black tracking-tight mb-1 text-white">{stat.value}</p>
            <p className="text-xs font-semibold text-white/35">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column — Score Overview + Skill Proficiency */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overall Score */}
          <motion.div variants={itemVariants} className="card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-bold text-[16px] text-white">Simulation Scores</h2>
                <p className="text-xs text-white/30">Aggregated feedback across all modes</p>
              </div>
              <Link to="/reports" className="text-xs font-semibold flex items-center gap-1 hover:text-primary-400 text-white/40 transition-colors">
                View Reports <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {Object.entries(mockScores).map(([key, value]) => (
                <ScoreRing key={key} score={value} label={key.replace('_', ' ')} />
              ))}
            </div>
          </motion.div>

          {/* Skill Heatmap */}
          <motion.div variants={itemVariants} className="card">
            <div className="mb-6">
              <h2 className="font-bold text-[16px] text-white">Skill Matrix</h2>
              <p className="text-xs text-white/30">Competency mappings extracted from performance metrics</p>
            </div>
            <div className="space-y-4">
              {skillData.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4">
                  <span className="text-xs font-semibold w-36 shrink-0 text-white/60">
                    {skill.name}
                  </span>
                  <div className="flex-1 h-[7px] rounded-full bg-white/[0.03] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.2, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </div>
                  <span className="text-xs font-bold w-12 text-right text-white/80">{skill.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Interviews */}
          <motion.div variants={itemVariants} className="card">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-bold text-[16px] text-white">Recent Simulations</h2>
                <p className="text-xs text-white/30">Past practice evaluations</p>
              </div>
              <Link to="/reports" className="text-xs font-semibold flex items-center gap-1 hover:text-primary-400 text-white/40 transition-colors">
                View History <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="space-y-2.5">
              {mockRecentInterviews.map((interview, i) => (
                <motion.div
                  key={interview.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-white/[0.08] hover:bg-white/[0.03] transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xs font-black tracking-wider text-white"
                      style={{
                        background: `linear-gradient(135deg, ${interview.logoColor}15, ${interview.logoColor}05)`,
                        border: `1px solid ${interview.logoColor}20`,
                      }}
                    >
                      {interview.company.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/80 group-hover:text-white transition-colors">{interview.company} • {interview.role}</p>
                      <p className="text-[10px] text-white/30 mt-0.5">
                        {interview.mode} Round • {interview.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span
                        className="text-xs font-black tracking-tight"
                        style={{
                          color: interview.score >= 80 ? 'oklch(0.72 0.19 155)' : interview.score >= 60 ? 'oklch(0.80 0.16 85)' : 'oklch(0.63 0.22 25)'
                        }}
                      >
                        {interview.score}%
                      </span>
                      <p className="text-[8px] font-extrabold text-white/20 uppercase tracking-widest mt-0.5">Score</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column — Quick Actions + Tips */}
        <div className="space-y-6">
          {/* Start Interview CTA */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 relative overflow-hidden border border-white/[0.04]"
            style={{
              background: 'linear-gradient(135deg, oklch(0.56 0.22 275 / 0.12) 0%, oklch(0.70 0.17 195 / 0.08) 100%)',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-25" style={{ background: 'oklch(0.56 0.22 275)' }} />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-4">
                <Sparkles className="w-5 h-5 text-primary-300" />
              </div>
              <h3 className="font-bold text-[16px] text-white mb-1.5">Interactive Preparation</h3>
              <p className="text-xs text-white/45 mb-5 leading-relaxed">
                Launch a live simulation mock session built around your target companies. Adaptive Gemini agents adjust live.
              </p>
              <Link
                to="/interview/new"
                className="btn-primary w-full justify-center text-xs py-3 rounded-xl gap-2 font-bold"
              >
                Launch Simulation Room
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants} className="card">
            <h2 className="font-bold text-[15px] text-white mb-4">Interactive Modules</h2>
            <div className="space-y-1">
              {[
                { label: 'Resume Profile Analytics', icon: '📄', path: '/resume', desc: 'Verify skill matches' },
                { label: 'Technical Problem Solving', icon: '💻', path: '/interview/new', desc: 'Code optimization rounds' },
                { label: 'System Architecture Prep', icon: '🏗️', path: '/interview/new', desc: 'High-scale mock systems' },
                { label: 'AI Mentorship Path', icon: '🎯', path: '/career', desc: 'Recommended study paths' },
              ].map((action) => (
                <Link
                  key={action.label}
                  to={action.path}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/[0.03] transition-all group"
                >
                  <span className="text-lg bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-white/[0.04]">{action.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white/70 group-hover:text-white transition-colors">{action.label}</p>
                    <p className="text-[10px] text-white/30 mt-0.5 truncate">{action.desc}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-white/15 group-hover:text-white/45 transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Improvement Tips */}
          <motion.div variants={itemVariants} className="card">
            <div className="flex items-center gap-2 mb-4">
              <Sparkle className="w-4 h-4 text-warning-500" />
              <h2 className="font-bold text-[15px] text-white">Daily AI Insights</h2>
            </div>
            <div className="space-y-3">
              {[
                'Spend 15 minutes checking caching options (Redis/Memcached) for system scale rounds.',
                'Practice voice modulation: Gemini evaluations reward controlled speech paces.',
                'Ensure you structure DSA responses using the STAR method for technical reviews.',
              ].map((tip, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl text-xs bg-white/[0.01] border-l-2 text-white/55 border-primary-500/40 leading-relaxed"
                >
                  {tip}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
