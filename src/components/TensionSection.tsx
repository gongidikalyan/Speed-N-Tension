import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audio';

export const TensionSection: React.FC = () => {
  const [count, setCount] = useState(3);
  const [tensionLevel, setTensionLevel] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          return 3;
        }
        const next = prev - 1;
        // play subtle tick when count drops
        sound.playTick(prev === 1 ? 920 : 650, 0.04);
        return next;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTensionLevel((3 - count) * 33 + 10);
  }, [count]);

  const countDisplay = count < 10 ? `0${count}` : `${count}`;

  return (
    <section className="relative py-28 sm:py-36 bg-[#f4f4f7] dark:bg-[#050507] light:bg-[#f4f4f7] overflow-hidden border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 transition-colors">
      {/* Visual Tension Shimmer */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
          count === 0
            ? 'bg-red-600/20 opacity-100'
            : count === 1
            ? 'bg-red-600/10 opacity-70'
            : 'opacity-0'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Dramatic Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                PSYCHOLOGICAL PRESSURE
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 leading-tight">
                THE EASY PART?
                <br />
                <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">KNOWING THE RULE.</span>
              </h2>
            </div>

            <div className="p-1 max-w-xl">
              <div className="h-[2px] w-24 bg-gradient-to-r from-red-600 to-transparent mb-6" />
              <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-red-500 leading-tight">
                THE HARD PART?
                <br />
                <span className="text-white dark:text-white light:text-neutral-950">
                  FOLLOWING IT WHEN THE CLOCK IS SCREAMING.
                </span>
              </h3>
              <p className="mt-4 text-neutral-400 dark:text-neutral-400 light:text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
                Anyone can avoid a red target when calm. But when the countdown bar shrinks to 0.12 seconds, your heart rate spikes, your thumb twitches, and your brain makes the exact mistake it promised never to make.
              </p>
            </div>

            {/* Stress Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-900 dark:border-neutral-900 light:border-neutral-200 max-w-md">
              <div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 uppercase">HEART RATE</div>
                <div className="text-xl font-display font-bold text-white dark:text-white light:text-neutral-950 tabular-nums">
                  {110 + (3 - count) * 14} <span className="text-xs text-red-500 font-mono">BPM</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 uppercase">PANIC INDEX</div>
                <div className="text-xl font-display font-bold text-orange-500 tabular-nums">
                  {tensionLevel}%
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 uppercase">TOLERANCE</div>
                <div className="text-xl font-display font-bold text-red-500 font-mono">
                  ZERO
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Giant Tension Countdown */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 light:shadow-xl p-8 flex flex-col items-center justify-between shadow-2xl overflow-hidden group">
              {/* Radial Tension Background Pulse */}
              <div
                className={`absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none ${
                  count === 0
                    ? 'bg-red-600/30'
                    : count === 1
                    ? 'bg-orange-600/15'
                    : 'bg-transparent'
                }`}
              />

              {/* Header inside timer box */}
              <div className="relative z-10 w-full flex items-center justify-between font-mono text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${count === 0 ? 'bg-red-500 animate-ping' : 'bg-neutral-600'}`} />
                  TENSION GAUGE
                </span>
                <span className="text-red-500 uppercase font-bold">
                  {count === 0 ? 'SUDDEN DEATH' : 'COMPRESSION'}
                </span>
              </div>

              {/* Huge Monospace / Display Countdown */}
              <div className="relative z-10 text-center my-auto">
                <div
                  className={`text-8xl sm:text-9xl font-black font-mono tracking-tighter leading-none transition-all duration-150 tabular-nums ${
                    count === 0
                      ? 'text-red-500 scale-110 drop-shadow-[0_0_35px_rgba(239,68,68,0.8)]'
                      : count === 1
                      ? 'text-orange-500 scale-105'
                      : 'text-white dark:text-white light:text-neutral-900'
                  }`}
                >
                  {countDisplay}
                </div>
                <div className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-500 uppercase mt-2">
                  {count === 0 ? 'FAIL OR SURVIVE' : 'SECONDS BEFORE DECISION'}
                </div>
              </div>

              {/* Tension Level Progress Bar */}
              <div className="relative z-10 w-full space-y-2">
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                  <span>PRESSURE THRESHOLD</span>
                  <span className="text-white dark:text-white light:text-neutral-900 font-bold">{tensionLevel}%</span>
                </div>
                <div className="h-2 w-full bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-200 rounded-full overflow-hidden border border-neutral-800 dark:border-neutral-800 light:border-neutral-300">
                  <div
                    className={`h-full transition-all duration-300 ${
                      count === 0
                        ? 'bg-red-600'
                        : count === 1
                        ? 'bg-orange-500'
                        : 'bg-neutral-400'
                    }`}
                    style={{ width: `${tensionLevel}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
