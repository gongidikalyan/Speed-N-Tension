import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sun, Moon } from 'lucide-react';
import { RoutePath, ThemeMode } from '../types';
import { sound } from '../utils/audio';
import { GameLogo } from './GameLogo';

interface NavbarProps {
  onNavigate: (path: RoutePath) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  soundEnabled,
  onToggleSound,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcfcfd]/90 dark:bg-[#070709]/90 light:bg-[#fcfcfd]/90 border-b border-neutral-200 dark:border-neutral-800/80 light:border-neutral-200 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <GameLogo size="sm" showGlow={false} className="shrink-0" />
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tighter uppercase text-white dark:text-white light:text-neutral-900 group-hover:text-red-500 transition-colors">
            SPEED N TENSION
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-mono">
          <button
            onClick={() => handleNavClick('gameplay')}
            className="hover:text-red-500 dark:hover:text-white light:hover:text-black transition-colors cursor-pointer"
          >
            GAME
          </button>
          <button
            onClick={() => handleNavClick('concept')}
            className="hover:text-red-500 dark:hover:text-white light:hover:text-black transition-colors cursor-pointer"
          >
            HOW IT WORKS
          </button>
          <button
            onClick={() => handleNavClick('challenges')}
            className="hover:text-red-500 dark:hover:text-white light:hover:text-black transition-colors cursor-pointer"
          >
            CHALLENGES
          </button>
          <button
            onClick={() => handleNavClick('stats')}
            className="hover:text-red-500 dark:hover:text-white light:hover:text-black transition-colors cursor-pointer"
          >
            RECORDS
          </button>
          <button
            onClick={() => onNavigate('/privacy-policy')}
            className="hover:text-red-500 dark:hover:text-white light:hover:text-black transition-colors cursor-pointer"
          >
            LEGAL
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="p-2 rounded border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white text-neutral-400 dark:text-neutral-400 light:text-neutral-700 hover:text-red-500 dark:hover:text-white light:hover:text-black transition-all cursor-pointer shadow-xs"
            title={theme === 'dark' ? 'Switch to Premium Light Theme' : 'Switch to Dark Arcade Theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Sound Toggle Button */}
          <button
            onClick={onToggleSound}
            aria-label="Toggle sound feedback"
            className="p-2 rounded border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white text-neutral-400 dark:text-neutral-400 light:text-neutral-700 hover:text-red-500 dark:hover:text-white light:hover:text-black transition-colors cursor-pointer shadow-xs"
            title={soundEnabled ? 'Mute Game Audio' : 'Enable Game Audio'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-red-500 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => {
              sound.playTap();
              handleNavClick('challenges');
            }}
            className="relative px-5 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-red-950/40 hover:shadow-red-800/40 cursor-pointer overflow-hidden group"
          >
            <span className="relative z-10">PLAY CHALLENGES</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </button>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white text-neutral-400 dark:text-neutral-400 light:text-neutral-700"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onToggleSound}
            aria-label="Toggle sound"
            className="p-2 rounded border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white text-neutral-400"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-red-500" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="p-2 rounded border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 bg-neutral-900 dark:bg-neutral-900 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-200 dark:border-neutral-800 light:border-neutral-200 bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
            <button
              onClick={() => handleNavClick('gameplay')}
              className="text-left py-2 hover:text-red-500 border-b border-neutral-900 dark:border-neutral-900 light:border-neutral-200"
            >
              GAME MODES
            </button>
            <button
              onClick={() => handleNavClick('concept')}
              className="text-left py-2 hover:text-red-500 border-b border-neutral-900 dark:border-neutral-900 light:border-neutral-200"
            >
              HOW IT WORKS
            </button>
            <button
              onClick={() => handleNavClick('challenges')}
              className="text-left py-2 hover:text-red-500 border-b border-neutral-900 dark:border-neutral-900 light:border-neutral-200"
            >
              CHALLENGES (50+)
            </button>
            <button
              onClick={() => handleNavClick('stats')}
              className="text-left py-2 hover:text-red-500 border-b border-neutral-900 dark:border-neutral-900 light:border-neutral-200"
            >
              PLAYER STATS
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/privacy-policy');
              }}
              className="text-left py-2 hover:text-red-500 border-b border-neutral-900 dark:border-neutral-900 light:border-neutral-200"
            >
              LEGAL &amp; PRIVACY
            </button>
          </nav>

          <button
            onClick={() => {
              handleNavClick('challenges');
            }}
            className="w-full py-3 rounded bg-red-600 text-white font-display font-bold uppercase tracking-widest text-xs cursor-pointer"
          >
            EXPLORE CHALLENGES
          </button>
        </div>
      )}
    </header>
  );
};

