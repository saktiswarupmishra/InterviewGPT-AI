import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Eye, EyeOff, ArrowRight, Mail, Lock, User, Loader2, Briefcase } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { authAPI } from '@/services/api';

const roles = [
  { value: 'candidate', label: 'Candidate', desc: 'Preparing for interviews' },
  { value: 'recruiter', label: 'Recruiter', desc: 'Evaluating candidates' },
  { value: 'institute', label: 'Training Institute', desc: 'Training students' },
  { value: 'university', label: 'University', desc: 'Campus placement prep' },
  { value: 'corporate', label: 'Corporate Team', desc: 'Hiring & assessment' },
];

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('candidate');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authAPI.register({
        email,
        password,
        full_name: fullName,
        role,
      });
      setAuth(response.data);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 relative"
      style={{ background: 'var(--color-surface-950)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
          style={{ background: 'oklch(0.70 0.17 195)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-[150px] opacity-8"
          style={{ background: 'oklch(0.59 0.22 275)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, oklch(0.59 0.22 275), oklch(0.70 0.17 195))' }}
            >
              <Cpu className="w-7 h-7 text-white" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold mb-1">Create Your Account</h1>
          <p style={{ color: 'oklch(0.55 0.01 280)' }}>
            Start your AI-powered interview preparation
          </p>
        </div>

        {/* Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl text-sm text-red-400"
                style={{ background: 'oklch(0.63 0.22 25 / 0.1)', border: '1px solid oklch(0.63 0.22 25 / 0.2)' }}
              >
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input pl-10"
                  placeholder="John Doe"
                  required
                  id="register-name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-10"
                  placeholder="you@example.com"
                  required
                  id="register-email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10 pr-10"
                  placeholder="Min. 8 characters"
                  minLength={8}
                  required
                  id="register-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">I am a</label>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setRole(r.value)}
                    className={`p-3 rounded-xl text-left transition-all text-sm ${
                      role === r.value
                        ? 'bg-primary-500/15 border-primary-500/40'
                        : 'hover:bg-white/5 border-white/5'
                    }`}
                    style={{ border: '1px solid' }}
                  >
                    <div className={`font-medium ${role === r.value ? 'text-primary-300' : 'text-white/80'}`}>
                      {r.label}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: 'oklch(0.5 0.01 280)' }}>
                      {r.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-base mt-2"
              id="register-submit"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: 'oklch(0.5 0.01 280)' }}>
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold transition-colors"
                style={{ color: 'oklch(0.68 0.17 275)' }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
