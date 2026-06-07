import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Upload,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Cpu,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useUIStore } from '@/stores/uiStore';
import { getInitials } from '@/lib/utils';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/interview/new', label: 'New Interview', icon: MessageSquare },
  { path: '/resume', label: 'Resume', icon: Upload },
  { path: '/reports', label: 'Reports', icon: BarChart3 },
  { path: '/career', label: 'Career Coach', icon: BookOpen },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  const { sidebarCollapsed: collapsed, toggleSidebar } = useUIStore();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 76 : 264 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed left-0 top-0 h-screen z-40 flex flex-col"
      style={{
        background: 'linear-gradient(180deg, oklch(0.13 0.02 272) 0%, oklch(0.10 0.015 270) 100%)',
        borderRight: '1px solid oklch(1 0 0 / 0.05)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 h-[68px]">
        <div className="relative shrink-0">
          <div
            className="w-10 h-10 rounded-[12px] flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, oklch(0.56 0.22 275), oklch(0.62 0.18 200))',
              boxShadow: '0 4px 14px oklch(0.56 0.22 275 / 0.3)',
            }}
          >
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
            style={{
              background: 'oklch(0.72 0.19 155)',
              borderColor: 'oklch(0.13 0.02 272)',
            }}
          >
            <span className="text-[6px] text-white font-bold">✓</span>
          </div>
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="font-extrabold text-[15px] whitespace-nowrap tracking-tight">
                <span className="gradient-text">InterviewGPT</span>{' '}
                <span className="text-white/40 font-semibold">AI</span>
              </h1>
              <p className="text-[10px] text-white/25 -mt-0.5 font-medium tracking-wide">AI Interview Platform</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="mx-4 divider" />

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-hidden">
        <AnimatePresence>
          {!collapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/20 px-3 mb-2"
            >
              Menu
            </motion.p>
          )}
        </AnimatePresence>

        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-[10px] rounded-[10px] transition-all duration-200 group relative ${
                isActive
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
              }`}
              style={isActive ? {
                background: 'linear-gradient(135deg, oklch(0.56 0.22 275 / 0.12), oklch(0.62 0.18 200 / 0.06))',
                boxShadow: 'inset 0 1px 0 oklch(1 0 0 / 0.04)',
              } : {}}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebarActive"
                  className="absolute left-0 top-[20%] bottom-[20%] w-[3px] rounded-r-full"
                  style={{
                    background: 'linear-gradient(180deg, oklch(0.68 0.17 275), oklch(0.70 0.17 195))',
                    boxShadow: '0 0 8px oklch(0.68 0.17 275 / 0.5)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className={`w-[18px] h-[18px] shrink-0 transition-colors ${isActive ? 'text-primary-400' : ''}`} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-[13px] font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {isActive && !collapsed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-1.5 h-1.5 rounded-full"
                  style={{ background: 'oklch(0.68 0.17 275)', boxShadow: '0 0 6px oklch(0.68 0.17 275 / 0.6)' }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Pro Upgrade CTA */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mx-3 mb-3"
          >
            <div
              className="rounded-[12px] p-4 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, oklch(0.56 0.22 275 / 0.15), oklch(0.62 0.18 200 / 0.08))',
                border: '1px solid oklch(0.56 0.22 275 / 0.12)',
              }}
            >
              <div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-30"
                style={{ background: 'oklch(0.56 0.22 275)' }}
              />
              <div className="relative">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-3.5 h-3.5" style={{ color: 'oklch(0.80 0.16 85)' }} />
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'oklch(0.80 0.16 85)' }}>Pro</span>
                </div>
                <p className="text-[12px] text-white/60 leading-relaxed mb-3">
                  Unlock unlimited interviews & AI coaching.
                </p>
                <button className="w-full py-2 px-3 rounded-lg text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-all hover:brightness-110"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.56 0.22 275 / 0.3), oklch(0.62 0.18 200 / 0.2))',
                    border: '1px solid oklch(1 0 0 / 0.08)',
                    color: 'oklch(0.82 0.12 275)',
                  }}
                >
                  Upgrade <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Section */}
      <div className="px-3 pb-3">
        <div className="divider mb-3" />
        <div className="flex items-center gap-3 px-2 py-1.5">
          <div
            className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 text-[11px] font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, oklch(0.45 0.16 275), oklch(0.38 0.14 275))',
              boxShadow: '0 2px 8px oklch(0.45 0.16 275 / 0.3)',
            }}
          >
            {user ? getInitials(user.full_name) : 'U'}
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 min-w-0"
              >
                <p className="text-[13px] font-semibold text-white/85 truncate">
                  {user?.full_name || 'User'}
                </p>
                <p className="text-[11px] text-white/30 truncate capitalize">
                  {user?.role || 'candidate'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!collapsed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleLogout}
                className="p-1.5 rounded-lg hover:bg-white/5 text-white/25 hover:text-red-400/80 transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3.5 top-[78px] w-7 h-7 rounded-full flex items-center justify-center text-white/30 hover:text-white/60 transition-all hover:scale-110"
        style={{
          background: 'oklch(0.18 0.015 270)',
          border: '1px solid oklch(1 0 0 / 0.08)',
          boxShadow: '0 2px 8px oklch(0 0 0 / 0.3)',
        }}
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>
    </motion.aside>
  );
}
