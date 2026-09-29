import React from 'react';
import { Smartphone, Bell, Share2, Play } from 'lucide-react';
import { sound } from '../utils/audio';
import { GameLogo } from './GameLogo';

interface DownloadSectionProps {
  onOpenTrailer: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onOpenTrailer,
}) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 transition-colors overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 light:bg-red-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Official App Logo Icon Presentation */}
        <div className="flex justify-center">
          <GameLogo size="lg" showGlow={true} />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-xs font-mono text-neutral-300 dark:text-neutral-300 light:text-neutral-700 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>OFFICIAL MOBILE GAME APP</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 leading-none">
          READY FOR
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 dark:from-red-500 dark:via-orange-400 dark:to-white">
            THE PRESSURE?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-xl mx-auto font-sans">
          Speed N Tension is coming to mobile.
          <br />
          Test your neural latency before the official store drop.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => {
              sound.playTap();
              onOpenTrailer();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-red-950 dark:shadow-red-950 light:shadow-red-500/20 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            WATCH TRAILER
          </button>

          <button
            onClick={() => {
              sound.playTap();
              document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-700/80 dark:border-neutral-700/80 light:border-neutral-300 hover:border-neutral-500 light:hover:border-neutral-400 text-neutral-200 dark:text-neutral-200 light:text-neutral-800 light:shadow-sm font-display font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            VIEW CHALLENGES
          </button>
        </div>

        {/* Google Play Style Badge Placeholder (Clearly Truthful - Pre-registration Coming Soon) */}
        <div className="pt-8 flex flex-col items-center justify-center gap-3">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-950 dark:bg-neutral-950 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 text-left select-none opacity-90 hover:opacity-100 light:shadow-sm transition-all">
            {/* Play Store Stylized Triangle Icon */}
            <div className="w-7 h-7 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3.6 1.5C3.3 1.8 3 2.3 3 3v18c0 .7.3 1.2.6 1.5L13.8 12 3.6 1.5z" fill="#00E676" />
                <path d="M17.4 8.4L13.8 12l3.6 3.6 4.3-2.4c1.2-.7 1.2-1.8 0-2.4l-4.3-2.4z" fill="#FFD600" />
                <path d="M3.6 22.5L13.8 12 17.4 15.6 5.9 22.1c-.8.5-1.7.6-2.3.4z" fill="#FF1744" />
                <path d="M3.6 1.5C4.2 1.3 5.1 1.4 5.9 1.9L17.4 8.4 13.8 12 3.6 1.5z" fill="#00B0FF" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 uppercase tracking-widest font-medium">
                PRE-REGISTRATION OPENING SOON ON
              </div>
              <div className="text-white dark:text-white light:text-neutral-900 font-display font-bold text-sm tracking-wide">
                Google Play
              </div>
            </div>
          </div>
          <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
            Android &amp; iOS deployment in final certification. No unreleased claims.
          </p>
        </div>
      </div>
    </section>
  );
};
