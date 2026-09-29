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
      // 1. Check URL hash first (e.g. #/privacy-policy)
      const hash = window.location.hash.replace(/^#/, '') as RoutePath;
      if (hash && VALID_ROUTES.includes(hash)) {
        setCurrentPath(hash);
        return;
      }

      // 2. Check pathname, matching either direct or subdirectory routes (e.g. /Speed-N-Tension/terms)
      let pathname = window.location.pathname;
      if (pathname.length > 1 && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
      }

      const matchedRoute = VALID_ROUTES.find(
        (route) => route !== '/' && (pathname.endsWith(route) || pathname === route)
      );

      if (matchedRoute) {
        setCurrentPath(matchedRoute);
      } else {
        setCurrentPath('/');
      }
    };

    // Initial load
    handleLocationChange();

    // Browser back/forward and hash changes
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: RoutePath) => {
    if (path !== currentPath) {
      // On GitHub Pages or static host subfolders, use hash to prevent 404 on refresh
      const isSubdirectory = window.location.pathname.replace(/\/$/, '').length > 0 &&
        !VALID_ROUTES.includes(window.location.pathname as RoutePath);

      if (isSubdirectory || window.location.hostname.endsWith('github.io')) {
        window.location.hash = path === '/' ? '' : path;
      } else {
        window.history.pushState({}, '', path);
      }

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
