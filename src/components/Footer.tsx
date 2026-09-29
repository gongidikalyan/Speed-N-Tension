import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { RoutePath } from '../types';
import { GameLogo } from './GameLogo';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#f4f4f7] dark:bg-[#050507] light:bg-[#f4f4f7] border-t border-neutral-200 dark:border-neutral-800 light:border-neutral-200 text-neutral-600 dark:text-neutral-400 light:text-neutral-600 py-16 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-neutral-200 dark:border-neutral-800 light:border-neutral-200">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <GameLogo size="xs" showGlow={false} className="shrink-0" />
              <span className="font-display font-bold text-xl uppercase tracking-tight text-neutral-950 dark:text-white light:text-neutral-950">
                SPEED N TENSION
              </span>
            </div>

            <p className="font-display text-sm uppercase tracking-wider text-red-600 dark:text-red-500 font-bold">
              “Think Fast. Tap Faster.”
            </p>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm font-sans leading-relaxed">
              Fast-paced mobile reaction game focused on reaction, attention, speed, and challenge-based gameplay. Free to play, designed for players aged 13 and above.
            </p>

            <div className="space-y-1 text-xs font-mono text-neutral-500 dark:text-neutral-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Developer: G Kalyan · Chittoor, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a href="mailto:gongidikalyan@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  gongidikalyan@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: GAME */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-neutral-950 dark:text-white font-display font-bold uppercase tracking-wider text-sm">
              GAME
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('challenges')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Challenges
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('concept')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tension')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  The Tension Loop
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: LEGAL CENTER */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-neutral-950 dark:text-white font-display font-bold uppercase tracking-wider text-sm">
              LEGAL CENTER
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('/privacy-policy')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/account-deletion')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-left font-medium text-red-600 dark:text-red-400"
                >
                  Account &amp; Data Deletion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cookie-policy')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/refund-policy')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/disclaimer')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Grievance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: SUPPORT */}
          <div className="space-y-6 font-mono text-xs">
            <div className="space-y-3">
              <div className="text-neutral-950 dark:text-white font-display font-bold uppercase tracking-wider text-sm">
                SUPPORT &amp; CONTACT
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Developer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Grievance Redressal
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:gongidikalyan@gmail.com"
                    className="text-red-600 dark:text-red-400 hover:underline transition-colors break-all"
                  >
                    gongidikalyan@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-neutral-500 dark:text-neutral-400 text-[11px]">
              <div>Individual Developer: G Kalyan</div>
              <div>Audience: Ages 13+</div>
              <div>Monetization: Google AdMob</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div>
            © 2026 Speed N Tension. Developed by G Kalyan. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Chittoor, Andhra Pradesh, India</span>
            <span>·</span>
            <span>Free Mobile Game</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
