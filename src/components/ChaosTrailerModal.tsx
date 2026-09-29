import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, AlertOctagon } from 'lucide-react';
import { sound } from '../utils/audio';

interface ChaosTrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHAOS_FRAMES = [
  { text: 'CHALLENGE 01: REACTION SPEED', color: 'text-white', bg: 'bg-neutral-950', sub: 'CLIPPING IN: 0.35s' },
  { text: 'WARNING: DO NOT TOUCH THE EYE', color: 'text-red-500', bg: 'bg-red-950/40', sub: 'INHIBITION TRIGGER' },
  { text: 'STROOP ANOMALY: MATCH COLOR BLUE', color: 'text-blue-400', bg: 'bg-neutral-950', sub: 'WORD SAYS RED' },
  { text: 'CLOCK ACCELERATING: 0.18s REMAINING', color: 'text-orange-400', bg: 'bg-orange-950/30', sub: 'CRITICAL FAILURE IMMINENT' },
  { text: 'FATAL MISCLICK: RUN TERMINATED', color: 'text-red-500', bg: 'bg-red-950/70', sub: 'STREAK RESET TO ZERO' },
  { text: 'INSTANT RETRY: ONE MORE RUN', color: 'text-white', bg: 'bg-neutral-950', sub: 'THE CYCLE BEGINS AGAIN' },
];

export const ChaosTrailerModal: React.FC<ChaosTrailerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setFrameIndex((prev) => {
        const next = (prev + 1) % CHAOS_FRAMES.length;
        sound.playTick(next === 4 ? 120 : 750, 0.05);
        return next;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const current = CHAOS_FRAMES[frameIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-[#ffffff] dark:bg-[#09090c] light:bg-[#ffffff] border border-neutral-200 dark:border-neutral-800 light:border-neutral-200 overflow-hidden shadow-2xl relative flex flex-col transition-colors">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 light:border-neutral-200 bg-neutral-50 dark:bg-neutral-950 light:bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span className="font-display font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-white">
              CHAOS SIMULATION // 60FPS DIRECT FEED
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-black dark:hover:text-white p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Frame */}
        <div className={`relative h-[320px] sm:h-[380px] ${current.bg} flex flex-col items-center justify-center p-6 text-center transition-colors duration-200 select-none overflow-hidden`}>
          {/* Scanlines & grid */}
          <div className="absolute inset-0 bg-arcade-grid opacity-35 pointer-events-none" />
          <div className="absolute top-4 left-4 font-mono text-[10px] text-neutral-400 z-10">
            FRAME: 0{frameIndex + 1} / 06 · REC_BUFFER
          </div>
          <div className="absolute top-4 right-4 font-mono text-[10px] text-red-500 font-bold z-10">
            LATENCY: 12ms
          </div>

          <div className="relative z-10 max-w-lg space-y-3">
            <div className="inline-block px-3 py-1 rounded bg-black/70 border border-neutral-800 font-mono text-xs uppercase tracking-widest text-neutral-300">
              {current.sub}
            </div>

            <h3 className={`text-2xl sm:text-4xl font-black font-display uppercase tracking-tight leading-snug ${current.color} transition-all duration-150`}>
              {current.text}
            </h3>

            {frameIndex === 4 && (
              <div className="pt-2 text-red-400 flex items-center justify-center gap-1.5 font-mono text-xs font-bold animate-pulse">
                <AlertOctagon className="w-4 h-4" />
                <span>PULSE SPIKE: 154 BPM</span>
              </div>
            )}
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-neutral-900">
            <div
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: `${((frameIndex + 1) / CHAOS_FRAMES.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Footer controls */}
        <div className="p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-950 light:bg-neutral-50 border-t border-neutral-200 dark:border-neutral-800 light:border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Play className="w-3 h-3 text-red-500" />
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>
            <button
              onClick={() => setFrameIndex(0)}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3 h-3" />
              <span>RESTART</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs uppercase tracking-widest shadow-md shadow-red-950 dark:shadow-red-950 light:shadow-red-500/20 transition-all cursor-pointer"
          >
            EXPLORE CHALLENGES
          </button>
        </div>
      </div>
    </div>
  );
};
