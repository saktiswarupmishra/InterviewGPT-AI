import { Outlet, useLocation } from 'react-router-dom';
import { Bell, Search, Sparkles, ChevronRight, User, HelpCircle } from 'lucide-react';
import Sidebar from './Sidebar';
import { useUIStore } from '@/stores/uiStore';
import { useAuthStore } from '@/stores/authStore';

export default function AppShell() {
  const { sidebarCollapsed } = useUIStore();
  const { user } = useAuthStore();
  const location = useLocation();

  // Simple breadcrumb/page title mapping
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) return 'Dashboard';
    if (path.startsWith('/interview/new')) return 'New Interview';
    if (path.startsWith('/resume')) return 'Resume Analysis';
    if (path.startsWith('/reports')) return 'Performance Reports';
    if (path.startsWith('/career')) return 'Career Coach';
    if (path.startsWith('/settings')) return 'Settings';
    return 'Overview';
  };

  return (
    <div className="min-h-screen noise" style={{ background: 'var(--color-surface-950)' }}>
      <Sidebar />
      
      <div
        className="transition-all duration-300 min-h-screen flex flex-col"
        style={{ marginLeft: sidebarCollapsed ? '76px' : '264px' }}
      >
        {/* Top Header */}
        <header
          className="h-[68px] px-8 flex items-center justify-between sticky top-0 z-30 glass-strong border-b border-white/[0.04] backdrop-blur-md"
        >
          {/* Left: Search & Navigation Location */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white/30 uppercase">
              <span>Workspace</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/60 font-bold">{getPageTitle()}</span>
            </div>
            
            {/* Search Bar */}
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search resources, topics..."
                className="w-full pl-9 pr-4 py-1.5 rounded-lg text-xs bg-white/[0.03] border border-white/[0.06] focus:border-primary-500/50 focus:bg-white/[0.05] transition-all outline-none text-white/80 placeholder-white/20"
              />
            </div>
          </div>

          {/* Right: Notifications, Help, User Avatar */}
          <div className="flex items-center gap-4">
            {/* Pro Badge */}
            <span
              className="badge text-[10px] py-1 px-3 flex items-center gap-1 font-bold tracking-wider"
              style={{
                background: 'linear-gradient(135deg, oklch(0.56 0.22 275 / 0.2), oklch(0.70 0.17 195 / 0.1))',
                border: '1px solid oklch(0.56 0.22 275 / 0.2)',
                color: 'oklch(0.78 0.12 275)',
              }}
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              PREMIUM PLAN
            </span>

            {/* Notification Bell */}
            <button className="relative w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 border border-white/[0.04] transition-colors group">
              <Bell className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border border-surface-950"
                style={{ background: 'oklch(0.72 0.19 155)' }}
              />
            </button>

            {/* Help Support */}
            <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 border border-white/[0.04] transition-colors group">
              <HelpCircle className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
            </button>

            <div className="h-6 w-[1px] bg-white/[0.06]" />

            {/* Micro User Detail */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <User className="w-4 h-4 text-primary-400" />
              </div>
              <div className="hidden xl:block text-left">
                <p className="text-xs font-semibold text-white/80 leading-none">{user?.full_name || 'Guest User'}</p>
                <p className="text-[10px] text-white/30 leading-none mt-1 capitalize">{user?.role || 'Candidate'}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Outlet */}
        <div className="flex-1 bg-surface-950/40">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
