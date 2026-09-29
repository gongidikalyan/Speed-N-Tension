import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sun, Moon, Shield } from 'lucide-react';
import { RoutePath, ThemeMode } from '../../types';

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  activePath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  children: React.ReactNode;
}

const LEGAL_NAV_ITEMS: { path: RoutePath; label: string }[] = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/account-deletion', label: 'Account & Data Deletion' },
  { path: '/cookie-policy', label: 'Cookie Policy' },
  { path: '/refund-policy', label: 'Refund Policy' },
  { path: '/disclaimer', label: 'Disclaimer' },
  { path: '/contact', label: 'Contact & Grievance' },
];

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  subtitle,
  lastUpdated = 'September 28, 2026',
  activePath,
  onNavigate,
  children,
}) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const mode = localStorage.getItem('snt-theme-mode');
      if (mode === 'dark') return 'dark';
      localStorage.setItem('snt-theme-mode', 'light');
      localStorage.setItem('snt-theme', 'light');
      return 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    try {
      localStorage.setItem('snt-theme-mode', theme);
      localStorage.setItem('snt-theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] text-neutral-800 dark:text-neutral-200 light:text-neutral-800 transition-colors selection:bg-red-600 selection:text-white flex flex-col font-sans">
      {/* Top sticky navigation bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#09090b]/90 light:bg-white/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 light:border-neutral-200 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-neutral-700 dark:text-neutral-300 light:text-neutral-700 hover:text-red-600 dark:hover:text-white light:hover:text-red-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-red-600 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display tracking-widest text-xs uppercase text-neutral-500 dark:text-neutral-400 light:text-neutral-500 group-hover:text-red-600 transition-colors">
              Speed N Tension
            </span>
            <span className="text-neutral-400 dark:text-neutral-600">/</span>
            <span className="text-neutral-900 dark:text-white light:text-neutral-900 text-xs tracking-wider uppercase font-semibold">
              Legal Center
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-800 light:border-neutral-300 bg-neutral-100 dark:bg-neutral-900/80 light:bg-neutral-100 text-neutral-700 dark:text-neutral-300 light:text-neutral-700 hover:text-black dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              )}
            </button>

            {/* Back to Speed N Tension Link */}
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-wider text-neutral-700 dark:text-neutral-300 light:text-neutral-700 hover:text-red-600 dark:hover:text-white px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-800 light:border-neutral-300 bg-white dark:bg-neutral-900/70 light:bg-white hover:border-red-500 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3 text-red-600" />
              <span>Back to Speed N Tension</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        {/* Quick Nav Bar between Legal documents */}
        <nav aria-label="Legal Center Navigation" className="mb-8 pb-3 border-b border-neutral-200 dark:border-neutral-800 light:border-neutral-200 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 text-xs whitespace-nowrap min-w-max">
            {LEGAL_NAV_ITEMS.map((item) => {
              const isActive = activePath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white font-semibold shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 light:text-neutral-600 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Document Header */}
        <header className="mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-800 light:border-neutral-200">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-red-600 dark:text-red-500 uppercase mb-2 font-bold">
            <Shield className="w-3.5 h-3.5" />
            <span>Speed N Tension · Official Legal Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-neutral-950 dark:text-white light:text-neutral-950 mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-neutral-600 dark:text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed mb-4 max-w-3xl">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <span>Last Updated: {lastUpdated}</span>
            <span>·</span>
            <span>Developer: G Kalyan</span>
            <span>·</span>
            <span>Location: Chittoor, Andhra Pradesh, India</span>
          </div>
        </header>

        {/* Document Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-neutral-800 dark:text-neutral-200 light:text-neutral-800 leading-relaxed text-sm sm:text-base">
          {children}
        </article>

        {/* Bottom Back Button & Footer */}
        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 light:border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate('/');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 light:bg-neutral-900 light:text-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs uppercase font-mono tracking-wider transition-all cursor-pointer font-semibold shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-red-500" />
            ← Back to Speed N Tension
          </button>

          <div className="text-xs text-neutral-500 font-mono flex flex-wrap gap-2">
            <span>© 2026 Speed N Tension.</span>
            <span>Developer: G Kalyan (gongidikalyan@gmail.com)</span>
          </div>
        </div>
      </main>
    </div>
  );
};
