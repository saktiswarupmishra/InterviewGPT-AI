import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Briefcase, GitFork, Link2, Globe, Save, Loader2 } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [saving, setSaving] = useState(false);
  const [fullName, setFullName] = useState(user?.full_name || '');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('0');
  const [targetCompany, setTargetCompany] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <motion.div className="page-container max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="section-title">Settings</h1>
        <p className="section-subtitle">Manage your profile and preferences.</p>
      </div>

      {/* Profile Section */}
      <div className="card mb-6">
        <h2 className="font-bold text-lg mb-6">Profile Information</h2>
        <div className="space-y-5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold" style={{ background: 'linear-gradient(135deg, oklch(0.59 0.22 275), oklch(0.70 0.17 195))', color: 'white' }}>
              {fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{fullName || 'Your Name'}</h3>
              <p className="text-sm" style={{ color: 'oklch(0.5 0.01 280)' }}>{user?.email}</p>
              <span className="badge badge-primary text-xs mt-1 capitalize">{user?.role}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input type="text" className="input pl-10" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input type="text" className="input pl-10" placeholder="City, Country" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-white/70">Bio</label>
            <textarea className="input min-h-[80px] resize-none" placeholder="Tell us about yourself..." value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Experience (years)</label>
              <input type="number" className="input" min="0" max="30" value={experience} onChange={(e) => setExperience(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Target Company</label>
              <input type="text" className="input" placeholder="e.g., Google" value={targetCompany} onChange={(e) => setTargetCompany(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Target Role</label>
              <input type="text" className="input" placeholder="e.g., SDE II" value={targetRole} onChange={(e) => setTargetRole(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="card mb-6">
        <h2 className="font-bold text-lg mb-6">Social Links</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/70">LinkedIn</label>
            <div className="relative">
              <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input type="url" className="input pl-10" placeholder="https://linkedin.com/in/..." value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/70">GitHub</label>
            <div className="relative">
              <GitFork className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input type="url" className="input pl-10" placeholder="https://github.com/..." value={github} onChange={(e) => setGithub(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/70">Portfolio</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input type="url" className="input pl-10" placeholder="https://..." value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={handleSave} className="btn-primary py-3 px-8">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </motion.div>
  );
}
