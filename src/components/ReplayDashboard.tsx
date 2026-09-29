import React, { useState } from 'react';
import { Trophy, Flame, Gauge, PlayCircle, BarChart3, RefreshCw } from 'lucide-react';
import { sound } from '../utils/audio';

export const ReplayDashboard: React.FC = () => {
  const [bestScore, setBestScore] = useState(142);
  const [currentStreak, setCurrentStreak] = useState(38);
  const [reactionTime, setReactionTime] = useState(184);
  const [totalRuns, setTotalRuns] = useState(1429);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateNewRun = () => {
    sound.playSuccess();
    setIsSimulating(true);

    setTimeout(() => {
      const addedScore = Math.floor(Math.random() * 15) + 1;
      const newSpeed = Math.floor(165 + Math.random() * 30);
      setTotalRuns((prev) => prev + 1);
      setCurrentStreak((prev) => prev + addedScore);
      setReactionTime(newSpeed);
      setBestScore((prev) => Math.max(prev, currentStreak + addedScore));
      setIsSimulating(false);
    }, 450);
  };

  return (
    <section id="stats" className="relative py-24 sm:py-32 bg-[#f4f4f7] dark:bg-[#050507] light:bg-[#f4f4f7] border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Replay Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-red-500">
              ADDICTIVE TELEMETRY
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 leading-tight">
              ONE MORE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                RUN.
              </span>
            </h2>

            <div className="space-y-1 font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
              <p>Fast rounds.</p>
              <p>Simple rules.</p>
              <p className="text-red-500">Endless mistakes.</p>
              <p className="text-white dark:text-white light:text-neutral-950">And somehow… one more run.</p>
            </div>

            <p className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600 text-sm leading-relaxed font-sans pt-2">
              Every round ends within 10 to 45 seconds. The feedback loop is instant: you see exactly why your thumb betrayed you, you groan in disbelief, and your finger hits &ldquo;RETRY&rdquo; before you even consciously decide to.
            </p>

            <div className="pt-2">
              <button
                onClick={simulateNewRun}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 light:shadow-xs hover:border-red-600 text-white dark:text-white light:text-neutral-900 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-red-500 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>Simulate Run Metric</span>
              </button>
            </div>
          </div>

          {/* Right Column: Game Statistics Dashboard Mockup */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 dark:bg-neutral-950 light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 shadow-2xl light:shadow-xl relative overflow-hidden">
              {/* Top Dashboard Header */}
              <div className="flex items-center justify-between border-b border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 flex items-center justify-center text-red-500 font-display font-bold">
                    ST
                  </div>
                  <div>
                    <div className="font-display font-bold text-white dark:text-white light:text-neutral-950 text-sm uppercase">
                      PLAYER_PROFILE // NEURAL_INDEX
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
                      SESSION RECORD · RANK TIER: GRANDMASTER REFLEX
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 dark:text-emerald-400 bg-emerald-950/40 dark:bg-emerald-950/40 light:bg-emerald-50 border border-emerald-800/40 dark:border-emerald-800/40 light:border-emerald-200 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>SYNCED</span>
                </div>
              </div>

              {/* 4 Primary Stats in Bento Layout */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Stat 1: Best Score */}
                <div className="p-5 rounded-2xl bg-neutral-900/50 dark:bg-neutral-900/50 light:bg-neutral-50 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 hover:border-neutral-700 dark:hover:border-neutral-700 light:hover:border-neutral-300 transition-colors">
                  <div className="flex items-center justify-between text-neutral-400 dark:text-neutral-400 light:text-neutral-500 text-xs font-mono mb-2">
                    <span>BEST SCORE</span>
                    <Trophy className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-display text-white dark:text-white light:text-neutral-950 tabular-nums">
                    {bestScore}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-2">
                    Top 0.8% worldwide leaderboard
                  </div>
                </div>

                {/* Stat 2: Current Streak */}
                <div className="p-5 rounded-2xl bg-neutral-900/50 dark:bg-neutral-900/50 light:bg-neutral-50 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 hover:border-red-900/50 transition-colors">
                  <div className="flex items-center justify-between text-neutral-400 dark:text-neutral-400 light:text-neutral-500 text-xs font-mono mb-2">
                    <span>CURRENT STREAK</span>
                    <Flame className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-display text-red-500 tabular-nums">
                    {currentStreak}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-2">
                    Flawless decisions in a row
                  </div>
                </div>

                {/* Stat 3: Reaction Time */}
                <div className="p-5 rounded-2xl bg-neutral-900/50 dark:bg-neutral-900/50 light:bg-neutral-50 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 hover:border-neutral-700 dark:hover:border-neutral-700 light:hover:border-neutral-300 transition-colors">
                  <div className="flex items-center justify-between text-neutral-400 dark:text-neutral-400 light:text-neutral-500 text-xs font-mono mb-2">
                    <span>REACTION TIME</span>
                    <Gauge className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-mono text-white dark:text-white light:text-neutral-950 tabular-nums flex items-baseline gap-1">
                    {reactionTime}
                    <span className="text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-500 font-sans">ms</span>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-2">
                    Sub-200ms cognitive threshold
                  </div>
                </div>

                {/* Stat 4: Total Runs */}
                <div className="p-5 rounded-2xl bg-neutral-900/50 dark:bg-neutral-900/50 light:bg-neutral-50 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 hover:border-neutral-700 dark:hover:border-neutral-700 light:hover:border-neutral-300 transition-colors">
                  <div className="flex items-center justify-between text-neutral-400 dark:text-neutral-400 light:text-neutral-500 text-xs font-mono mb-2">
                    <span>TOTAL RUNS</span>
                    <PlayCircle className="w-4 h-4 text-neutral-400 dark:text-neutral-400 light:text-neutral-500" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black font-display text-neutral-200 dark:text-neutral-200 light:text-neutral-900 tabular-nums">
                    {totalRuns.toLocaleString()}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mt-2">
                    Average retry dwell: 2.1 seconds
                  </div>
                </div>
              </div>

              {/* Bottom Session Breakdown Row */}
              <div className="mt-5 p-4 rounded-xl bg-neutral-900/30 dark:bg-neutral-900/30 light:bg-neutral-100 border border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-neutral-400 dark:text-neutral-400 light:text-neutral-600" />
                  <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600">NEAR-MISSES AVOIDED:</span>
                  <span className="text-white dark:text-white light:text-neutral-950 font-bold tabular-nums">89</span>
                </div>
                <div>
                  <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600">PANIC TAPS PREVENTED:</span>{' '}
                  <span className="text-red-500 font-bold tabular-nums">312</span>
                </div>
                <div>
                  <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600">PEAK HEART RATE:</span>{' '}
                  <span className="text-orange-500 font-bold tabular-nums">148 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
