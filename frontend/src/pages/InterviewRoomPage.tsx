import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Cpu, Clock, ArrowLeft, Mic, MicOff, Video as VideoIcon, Send } from 'lucide-react';
import { useState } from 'react';

const mockQuestions = [
  { id: 1, question: "Tell me about yourself and your experience with distributed systems.", answered: true },
  { id: 2, question: "Can you explain the difference between SQL and NoSQL databases? When would you choose one over the other?", answered: true },
  { id: 3, question: "Walk me through how you would design a rate limiter for an API gateway.", answered: false },
];

export default function InterviewRoomPage() {
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [micOn, setMicOn] = useState(false);

  return (
    <motion.div className="min-h-screen flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Top Bar */}
      <div className="h-14 flex items-center justify-between px-6 border-b" style={{ background: 'var(--color-surface-900)', borderColor: 'oklch(1 0 0 / 0.06)' }}>
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="btn-ghost p-1.5"><ArrowLeft className="w-4 h-4" /></Link>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, oklch(0.59 0.22 275), oklch(0.70 0.17 195))' }}>
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold">Google — Technical Interview</p>
            <p className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>SDE II • Medium-Hard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'oklch(0.7 0.01 280)' }}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">23:45</span>
          </div>
          <div className="badge badge-primary">Q 3 / 10</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Question Panel */}
        <div className="w-1/2 border-r p-6 flex flex-col" style={{ borderColor: 'oklch(1 0 0 / 0.06)' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, oklch(0.59 0.22 275 / 0.15), oklch(0.70 0.17 195 / 0.1))' }}>
              <Cpu className="w-5 h-5" style={{ color: 'oklch(0.78 0.12 275)' }} />
            </div>
            <div>
              <p className="text-sm font-semibold">AI Interviewer</p>
              <p className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>Senior Staff Engineer</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {mockQuestions.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-4 rounded-xl"
                style={{
                  background: q.answered ? 'oklch(1 0 0 / 0.02)' : 'oklch(0.59 0.22 275 / 0.05)',
                  border: q.answered ? 'none' : '1px solid oklch(0.59 0.22 275 / 0.15)',
                }}
              >
                <p className="text-xs font-medium mb-2" style={{ color: 'oklch(0.59 0.22 275)' }}>Question {q.id}</p>
                <p className="text-sm leading-relaxed" style={{ color: q.answered ? 'oklch(0.6 0.01 280)' : 'oklch(0.9 0.01 280)' }}>
                  {q.question}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Answer Panel */}
        <div className="w-1/2 p-6 flex flex-col">
          <h3 className="font-semibold text-sm mb-4" style={{ color: 'oklch(0.6 0.01 280)' }}>Your Response</h3>
          <div className="flex-1">
            <textarea
              className="input w-full h-full min-h-[300px] resize-none text-sm leading-relaxed"
              placeholder="Type your answer here... Be thorough and explain your reasoning."
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`p-2.5 rounded-xl transition-all ${micOn ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-white/40 hover:text-white/60'}`}
              >
                {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>
              <button className="p-2.5 rounded-xl bg-white/5 text-white/40 hover:text-white/60 transition-all">
                <VideoIcon className="w-5 h-5" />
              </button>
            </div>
            <button className="btn-primary py-2.5 px-6" disabled={!currentAnswer.trim()}>
              <Send className="w-4 h-4" /> Submit Answer
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1" style={{ background: 'oklch(1 0 0 / 0.05)' }}>
        <motion.div
          className="h-full"
          style={{ background: 'linear-gradient(90deg, oklch(0.59 0.22 275), oklch(0.70 0.17 195))' }}
          initial={{ width: '0%' }}
          animate={{ width: '30%' }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  );
}
