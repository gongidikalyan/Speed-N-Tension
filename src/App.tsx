import React, { useState, useEffect } from 'react';
import { RoutePath, ThemeMode } from './types';
import { sound } from './utils/audio';

// Landing Page Components
import { Navbar } from './components/Navbar';
import { HeroDevice } from './components/HeroDevice';
import { ConceptSection } from './components/ConceptSection';
import { GameplaySection } from './components/GameplaySection';
import { TensionSection } from './components/TensionSection';
import { ChallengesGrid } from './components/ChallengesGrid';
import { ReplayDashboard } from './components/ReplayDashboard';
import { GameLoop } from './components/GameLoop';
import { CultReactions } from './components/CultReactions';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

// Modals
import { ChaosTrailerModal } from './components/ChaosTrailerModal';

// Dedicated Legal Pages
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsOfService } from './components/legal/TermsOfService';
import { AccountDeletion } from './components/legal/AccountDeletion';
import { CookiePolicy } from './components/legal/CookiePolicy';
import { RefundPolicy } from './components/legal/RefundPolicy';
import { Disclaimer } from './components/legal/Disclaimer';
import { ContactGrievance } from './components/legal/ContactGrievance';

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/privacy-policy',
  '/terms',
  '/account-deletion',
  '/cookie-policy',
  '/refund-policy',
  '/disclaimer',
  '/contact',
];

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>('/');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const mode = localStorage.getItem('snt-theme-mode');
      if (mode === 'dark') return 'dark';
      // If legacy 'snt-theme' was set to dark by previous default, override it to light
      localStorage.setItem('snt-theme-mode', 'light');
      localStorage.setItem('snt-theme', 'light');
      return 'light';
    } catch {
      return 'light';
    }
  });

  // Synchronize document theme class whenever theme state changes
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    try {
      localStorage.setItem('snt-theme-mode', theme);
      localStorage.setItem('snt-theme', theme);
    } catch {
      // ignore storage access errors
    }
  }, [theme]);

  // Initialize and synchronize with browser URL and history
  useEffect(() => {
    const handleLocationChange = () => {
      let path = window.location.pathname as RoutePath;
      // Strip trailing slash if present (except for root '/')
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1) as RoutePath;
      }
      if (VALID_ROUTES.includes(path)) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
    };

    // Initial load
    handleLocationChange();

    // Browser back/forward navigation listener
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: RoutePath) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleSound = () => {
    const newState = sound.toggle();
    setSoundEnabled(newState);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Render dedicated legal page if route is active
  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy onNavigate={navigateTo} />;
  }
  if (currentPath === '/terms') {
    return <TermsOfService onNavigate={navigateTo} />;
  }
  if (currentPath === '/account-deletion') {
    return <AccountDeletion onNavigate={navigateTo} />;
  }
  if (currentPath === '/cookie-policy') {
    return <CookiePolicy onNavigate={navigateTo} />;
  }
  if (currentPath === '/refund-policy') {
    return <RefundPolicy onNavigate={navigateTo} />;
  }
  if (currentPath === '/disclaimer') {
    return <Disclaimer onNavigate={navigateTo} />;
  }
  if (currentPath === '/contact') {
    return <ContactGrievance onNavigate={navigateTo} />;
  }

  // Default: Full Landing Page (All 9 sections + Footer)
  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] text-neutral-900 dark:text-neutral-100 light:text-neutral-900 flex flex-col font-sans transition-colors selection:bg-red-600 selection:text-white">
      {/* 1. Navbar with Theme Toggle */}
      <Navbar
        onNavigate={navigateTo}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main className="flex-1">
        {/* Section 1: Hero with Smartphone Mockup */}
        <HeroDevice
          onOpenTrailer={() => setIsTrailerOpen(true)}
        />

        {/* Section 2: The Concept (01 Read, 02 React, 03 Survive) */}
        <ConceptSection />

        {/* Section 3: Gameplay Cards (Don't Touch It, Find It, etc.) */}
        <GameplaySection />

        {/* Section 4: The Tension (03 -> 02 -> 01 -> 00 countdown) */}
        <TensionSection />

        {/* Section 5: Challenges (50+ Ways to Break Your Focus) */}
        <ChallengesGrid />

        {/* Section 6: Built for Replay (Stats Dashboard) */}
        <ReplayDashboard />

        {/* Section 7: The Game Loop */}
        <GameLoop />

        {/* Section 8: Social / Cult Status Player Reactions */}
        <CultReactions />

        {/* Section 9: Download CTA (Ready For Pressure?) */}
        <DownloadSection
          onOpenTrailer={() => setIsTrailerOpen(true)}
        />
      </main>

      {/* Comprehensive Legal & Nav Footer */}
      <Footer
        onNavigate={navigateTo}
      />

      {/* Interactive Trailer Modal */}
      <ChaosTrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </div>
  );
}
