import { motion } from 'framer-motion';
import { BookOpen, Award, Code2, GraduationCap, ExternalLink, Target, Calendar } from 'lucide-react';

const roadmap = [
  { period: '30 Days', items: ['Complete DSA fundamentals', 'Solve 50 LeetCode problems', 'Study Design Patterns'], color: 'oklch(0.72 0.19 155)' },
  { period: '60 Days', items: ['Master System Design', 'Build 2 portfolio projects', 'Practice STAR method'], color: 'oklch(0.70 0.17 195)' },
  { period: '90 Days', items: ['Advanced distributed systems', 'Mock interviews 3x/week', 'Cloud certification'], color: 'oklch(0.59 0.22 275)' },
];

const courses = [
  { title: 'System Design Masterclass', provider: 'Educative', level: 'Advanced', match: 95 },
  { title: 'Grokking Coding Interview', provider: 'Educative', level: 'Intermediate', match: 92 },
  { title: 'Advanced React Patterns', provider: 'Frontend Masters', level: 'Advanced', match: 88 },
];

const books = [
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', category: 'System Design' },
  { title: 'Cracking the Coding Interview', author: 'Gayle McDowell', category: 'DSA' },
  { title: 'Clean Code', author: 'Robert C. Martin', category: 'Best Practices' },
];

const projects = [
  { title: 'Build a URL Shortener', skills: ['System Design', 'Backend', 'Redis'], difficulty: 'Medium' },
  { title: 'Real-time Chat App', skills: ['WebSocket', 'React', 'Node.js'], difficulty: 'Hard' },
];

export default function CareerPage() {
  return (
    <motion.div className="page-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="section-title">Career Coach</h1>
        <p className="section-subtitle">AI-powered personalized learning paths and career guidance.</p>
      </div>

      <div className="mb-10">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Target className="w-5 h-5" style={{ color: 'oklch(0.59 0.22 275)' }} /> Your Learning Roadmap
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {roadmap.map((phase, i) => (
            <motion.div key={phase.period} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="card" style={{ borderTop: `3px solid ${phase.color}` }}>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4" style={{ color: phase.color }} />
                <h3 className="font-bold" style={{ color: phase.color }}>{phase.period}</h3>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'oklch(0.7 0.01 280)' }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: phase.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" style={{ color: 'oklch(0.70 0.17 195)' }} /> Recommended Courses
          </h2>
          <div className="space-y-3">
            {courses.map((c) => (
              <div key={c.title} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer group">
                <div>
                  <h3 className="text-sm font-medium">{c.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>{c.provider}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'oklch(1 0 0 / 0.05)', color: 'oklch(0.5 0.01 280)' }}>{c.level}</span>
                  </div>
                </div>
                <span className="text-xs font-bold" style={{ color: 'oklch(0.72 0.19 155)' }}>{c.match}% match</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" style={{ color: 'oklch(0.80 0.16 85)' }} /> Must-Read Books
          </h2>
          <div className="space-y-3">
            {books.map((b) => (
              <div key={b.title} className="p-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer">
                <h3 className="text-sm font-medium">{b.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>by {b.author}</span>
                  <span className="badge badge-primary text-xs py-0">{b.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5" style={{ color: 'oklch(0.59 0.22 275)' }} /> Project Ideas
          </h2>
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.title} className="p-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium">{p.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: p.difficulty === 'Hard' ? 'oklch(0.63 0.22 25 / 0.1)' : 'oklch(0.80 0.16 85 / 0.1)', color: p.difficulty === 'Hard' ? 'oklch(0.63 0.22 25)' : 'oklch(0.80 0.16 85)' }}>{p.difficulty}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.skills.map((s) => (<span key={s} className="text-xs px-2 py-0.5 rounded" style={{ background: 'oklch(1 0 0 / 0.05)', color: 'oklch(0.55 0.01 280)' }}>{s}</span>))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" style={{ color: 'oklch(0.72 0.19 155)' }} /> Certifications
          </h2>
          <div className="space-y-3">
            {[
              { title: 'AWS Solutions Architect', provider: 'Amazon', rel: 'High' },
              { title: 'Google Cloud Professional', provider: 'Google', rel: 'High' },
              { title: 'Meta Frontend Developer', provider: 'Coursera', rel: 'Medium' },
            ].map((c) => (
              <div key={c.title} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div>
                  <h3 className="text-sm font-medium">{c.title}</h3>
                  <span className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>{c.provider}</span>
                </div>
                <span className={`badge text-xs ${c.rel === 'High' ? 'badge-success' : 'badge-warning'}`}>{c.rel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
