import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  ChevronRight,
  Calendar,
  Building2,
  TrendingUp,
  Download,
} from 'lucide-react';

const mockReports = [
  { id: '1', company: 'Google', role: 'SDE II', mode: 'Technical', overall: 78, date: '2026-06-05', strengths: ['DSA', 'Problem Solving'], weaknesses: ['System Design'] },
  { id: '2', company: 'Amazon', role: 'SDE I', mode: 'Coding', overall: 82, date: '2026-06-04', strengths: ['Clean Code', 'Optimization'], weaknesses: ['Edge Cases'] },
  { id: '3', company: 'Meta', role: 'Frontend', mode: 'System Design', overall: 65, date: '2026-06-03', strengths: ['Architecture'], weaknesses: ['Caching', 'Load Balancing'] },
  { id: '4', company: 'Microsoft', role: 'SDE', mode: 'Behavioral', overall: 90, date: '2026-06-02', strengths: ['Communication', 'Leadership'], weaknesses: [] },
  { id: '5', company: 'Netflix', role: 'Senior SDE', mode: 'FAANG Simulation', overall: 72, date: '2026-06-01', strengths: ['Scalability'], weaknesses: ['DB Selection', 'Monitoring'] },
];

export default function ReportsPage() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="section-title">Performance Reports</h1>
          <p className="section-subtitle mb-0">Detailed analysis of your interview performance.</p>
        </div>
        <button className="btn-secondary">
          <Download className="w-4 h-4" />
          Export All
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Reports', value: '5', color: 'oklch(0.59 0.22 275)' },
          { label: 'Avg. Score', value: '77.4', color: 'oklch(0.72 0.19 155)' },
          { label: 'Best Score', value: '90', color: 'oklch(0.80 0.16 85)' },
          { label: 'Improvement', value: '+12%', color: 'oklch(0.70 0.17 195)' },
        ].map((stat) => (
          <div key={stat.label} className="card text-center py-5">
            <p className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
            <p className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Reports List */}
      <div className="space-y-3">
        {mockReports.map((report, i) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/reports/${report.id}`}
              className="card card-interactive flex items-center gap-4 p-4 group"
            >
              {/* Score Circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: report.overall >= 80
                    ? 'oklch(0.72 0.19 155 / 0.12)'
                    : report.overall >= 60
                    ? 'oklch(0.80 0.16 85 / 0.12)'
                    : 'oklch(0.63 0.22 25 / 0.12)',
                }}
              >
                <span
                  className="text-lg font-bold"
                  style={{
                    color: report.overall >= 80
                      ? 'oklch(0.72 0.19 155)'
                      : report.overall >= 60
                      ? 'oklch(0.80 0.16 85)'
                      : 'oklch(0.63 0.22 25)',
                  }}
                >
                  {report.overall}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{report.company} — {report.role}</h3>
                  <span className="badge badge-primary text-xs">{report.mode}</span>
                </div>
                <div className="flex items-center gap-4 text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {report.date}
                  </span>
                  {report.strengths.length > 0 && (
                    <span className="text-green-400/70">
                      ✓ {report.strengths.join(', ')}
                    </span>
                  )}
                  {report.weaknesses.length > 0 && (
                    <span className="text-orange-400/70">
                      ⚠ {report.weaknesses.join(', ')}
                    </span>
                  )}
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
