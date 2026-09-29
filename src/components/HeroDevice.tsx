import React, { useState, useEffect, useRef } from 'react';
import { Play, Sparkles, AlertCircle, RotateCcw } from 'lucide-react';
import { sound } from '../utils/audio';
import { GameLogo } from './GameLogo';

interface HeroDeviceProps {
  onOpenTrailer: () => void;
}

type TrialType = {
  instruction: string;
  subPrompt: string;
  type: 'dont_tap' | 'tap_target' | 'color_match' | 'micro_burst';
  targetColor: string;
  buttonA: { label: string; bg: string; isCorrect: boolean };
  buttonB: { label: string; bg: string; isCorrect: boolean };
  buttonC?: { label: string; bg: string; isCorrect: boolean };
  timeLimitMs: number;
};

const TRIALS: TrialType[] = [
  {
    instruction: "DON'T TOUCH RED",
    subPrompt: 'TAP ANY GREEN TARGET',
    type: 'dont_tap',
    targetColor: 'text-red-500',
    buttonA: { label: 'HAZARD', bg: 'bg-red-600', isCorrect: false },
    buttonB: { label: 'SAFE', bg: 'bg-emerald-600', isCorrect: true },
    timeLimitMs: 950,
  },
  {
    instruction: 'FIND THE ODD ONE',
    subPrompt: 'SPLIT-SECOND ANOMALY',
    type: 'tap_target',
    targetColor: 'text-orange-400',
    buttonA: { label: '▲', bg: 'bg-neutral-800', isCorrect: false },
    buttonB: { label: '▲', bg: 'bg-neutral-800', isCorrect: false },
    buttonC: { label: '◆', bg: 'bg-orange-600', isCorrect: true },
    timeLimitMs: 800,
  },
  {
    instruction: 'MATCH WORD: BLUE',
    subPrompt: 'IGNORE THE INK COLOR',
    type: 'color_match',
    targetColor: 'text-blue-400',
    buttonA: { label: 'BLUE', bg: 'bg-red-700', isCorrect: true },
    buttonB: { label: 'RED', bg: 'bg-blue-600', isCorrect: false },
    timeLimitMs: 750,
  },
  {
    instruction: 'REACT NOW!',
    subPrompt: 'TAP BEFORE GAUGE RUNS OUT',
    type: 'micro_burst',
    targetColor: 'text-white',
    buttonA: { label: 'RELEASE', bg: 'bg-neutral-800', isCorrect: false },
    buttonB: { label: 'TRIGGER', bg: 'bg-red-600', isCorrect: true },
    timeLimitMs: 650,
  },
];

export const HeroDevice: React.FC<HeroDeviceProps> = ({
  onOpenTrailer,
}) => {
  const [trialIndex, setTrialIndex] = useState(0);
  const [streak, setStreak] = useState(4);
  const [bestStreak, setBestStreak] = useState(19);
  const [lastMs, setLastMs] = useState(174);
  const [feedback, setFeedback] = useState<string | null>('PERFECT! +174ms');
  const [shake, setShake] = useState(false);
  const [timeLeftPercent, setTimeLeftPercent] = useState(85);
  const [deviceInteractive, setDeviceInteractive] = useState(false);

  const trial = TRIALS[trialIndex];
  const timerStartRef = useRef<number>(Date.now());

  // Game timer bar simulation
  useEffect(() => {
    timerStartRef.current = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - timerStartRef.current;
      const pct = Math.max(0, 100 - (elapsed / trial.timeLimitMs) * 100);
      setTimeLeftPercent(pct);

      if (pct <= 0) {
        // Auto fail on timeout
        triggerFail('TOO SLOW!');
      }
    }, 40);

    return () => clearInterval(interval);
  }, [trialIndex]);

  const triggerSuccess = (ms: number) => {
    sound.playSuccess();
    setLastMs(ms);
    setStreak((prev) => {
      const next = prev + 1;
      if (next > bestStreak) setBestStreak(next);
      return next;
    });
    setFeedback(`+${ms}ms SPEED RUN!`);
    setTrialIndex((prev) => (prev + 1) % TRIALS.length);
  };

  const triggerFail = (reason: string) => {
    sound.playError();
    setShake(true);
    setFeedback(reason);
    setStreak(0);
    setTimeout(() => {
      setShake(false);
      setTrialIndex((prev) => (prev + 1) % TRIALS.length);
    }, 600);
  };

  const handleButtonTap = (isCorrect: boolean) => {
    setDeviceInteractive(true);
    const ms = Math.min(trial.timeLimitMs, Math.max(90, Date.now() - timerStartRef.current));
    if (isCorrect) {
      triggerSuccess(ms);
    } else {
      triggerFail('MISTAKE! RUN DEAD');
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 lg:py-20 bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] transition-colors">
      {/* Background Ambience: Speed streaks, noise, gradient glow */}
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 dark:bg-red-600/10 light:bg-red-500/8 rounded-full blur-[140px] pointer-events-none animate-tension-pulse" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-600/5 dark:bg-orange-600/5 light:bg-orange-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute left-[15%] top-0 w-[1px] h-48 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-speed-line" />
        <div className="absolute left-[38%] top-0 w-[1px] h-64 bg-gradient-to-b from-transparent via-neutral-400 light:via-neutral-300 to-transparent animate-speed-line [animation-delay:1.2s]" />
        <div className="absolute right-[22%] top-0 w-[1px] h-52 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-speed-line [animation-delay:0.7s]" />
        <div className="absolute right-[8%] top-0 w-[1px] h-72 bg-gradient-to-b from-transparent via-red-600 to-transparent animate-speed-line [animation-delay:1.8s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small label with Logo */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <GameLogo size="md" showGlow={true} className="shrink-0" />
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 text-neutral-300 dark:text-neutral-300 light:text-neutral-800 font-mono text-xs uppercase tracking-widest shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>OFFICIAL GAME</span>
                </div>
                <div className="text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600 uppercase tracking-wider">
                  THINK FAST · TAP FASTER
                </div>
              </div>
            </div>

            {/* Huge Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white dark:text-white light:text-neutral-950 uppercase leading-[0.92]">
              SPEED N
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-400 dark:to-white">
                TENSION
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-neutral-300 dark:text-neutral-300 light:text-neutral-700 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Your brain knows the rule.
              <br />
              <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">Your fingers have to keep up.</span>
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  sound.playTap();
                  onOpenTrailer();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded bg-red-600 hover:bg-red-700 text-white font-display font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-red-950/30 hover:shadow-red-900/50 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                WATCH THE CHAOS
              </button>

              <button
                onClick={() => {
                  sound.playTap();
                  document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-4 rounded bg-neutral-900/80 dark:bg-neutral-900/80 light:bg-white text-neutral-200 dark:text-neutral-200 light:text-neutral-800 border border-neutral-700/80 dark:border-neutral-700/80 light:border-neutral-300 hover:border-neutral-500 light:hover:border-neutral-400 font-display font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-xs"
              >
                EXPLORE 50+ CHALLENGES
              </button>
            </div>

            {/* Micro tagline */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs font-mono text-neutral-500 dark:text-neutral-500 light:text-neutral-600">
              <div className="flex items-center gap-1.5">
                <span className="text-red-500 font-bold">0.3s</span> AVG REACTION
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-orange-500 font-bold">50+</span> CHALLENGES
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-800 dark:text-white font-bold">1</span> DEADLY ERROR
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - Device Mockup Displaying the Game */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-red-600/30 via-orange-600/20 to-neutral-800/30 dark:to-neutral-800/30 light:to-red-500/10 rounded-[44px] blur-lg opacity-70 pointer-events-none" />

              {/* Smartphone Frame */}
              <div
                className={`relative rounded-[40px] bg-[#0c0c0e] dark:bg-[#0c0c0e] light:bg-[#18181b] border-[3px] border-neutral-700/90 dark:border-neutral-700/90 light:border-neutral-400 shadow-2xl p-3 select-none transition-transform duration-150 ${
                  shake ? 'shake-active border-red-500' : ''
                }`}
              >
                {/* Physical Notch / Speaker */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#18181b] mr-2" />
                  <div className="w-10 h-1 rounded-full bg-[#27272a]" />
                </div>

                {/* Device Screen Canvas */}
                <div className="relative rounded-[32px] bg-[#050507] overflow-hidden border border-neutral-900 pt-9 pb-6 px-4 flex flex-col justify-between min-h-[560px]">
                  {/* Subtle Screen Scanlines & Particle Grid */}
                  <div className="absolute inset-0 bg-arcade-grid opacity-30 pointer-events-none" />

                  {/* Top Game Bar inside Device */}
                  <div className="relative z-10 flex items-center justify-between border-b border-neutral-800/70 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        RUN ACTIVE
                      </span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs">
                      <div>
                        <span className="text-neutral-500 text-[10px] block leading-none">STREAK</span>
                        <span className="text-red-400 font-bold text-sm tabular-nums">
                          {streak}
                        </span>
                      </div>
                      <div className="h-6 w-[1px] bg-neutral-800" />
                      <div>
                        <span className="text-neutral-500 text-[10px] block leading-none">SPEED</span>
                        <span className="text-white font-bold text-sm tabular-nums">
                          {lastMs}ms
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fast Countdown Pressure Gauge */}
                  <div className="relative z-10 my-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1">
                      <span>CLOCK</span>
                      <span className={timeLeftPercent < 30 ? 'text-red-500 font-bold animate-pulse' : 'text-neutral-400'}>
                        {(timeLeftPercent * 0.01 * (trial.timeLimitMs / 1000)).toFixed(2)}s
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                      <div
                        className={`h-full transition-all duration-75 ${
                          timeLeftPercent < 30
                            ? 'bg-red-600 shadow-[0_0_8px_#ef4444]'
                            : timeLeftPercent < 60
                            ? 'bg-orange-500'
                            : 'bg-emerald-500'
                        }`}
                        style={{ width: `${timeLeftPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Active Tense Challenge Card */}
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center py-4">
                    {/* Animated Danger Rings */}
                    <div className="relative mb-3">
                      <div className="w-20 h-20 rounded-full border border-red-500/20 flex items-center justify-center animate-ping pointer-events-none absolute inset-0" />
                      <div className="w-20 h-20 rounded-full border-2 border-red-500/60 bg-red-950/20 flex items-center justify-center">
                        <AlertCircle className="w-8 h-8 text-red-500 animate-pulse" />
                      </div>
                    </div>

                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      {trial.subPrompt}
                    </div>

                    <h2
                      className={`text-2xl font-black font-display tracking-tight uppercase leading-tight ${trial.targetColor}`}
                    >
                      {trial.instruction}
                    </h2>

                    {feedback && (
                      <div className="mt-2 text-[11px] font-mono font-bold text-white bg-neutral-900/90 px-3 py-1 rounded-full border border-neutral-800">
                        {feedback}
                      </div>
                    )}
                  </div>

                  {/* Interactive Gameplay Buttons */}
                  <div className="relative z-10 space-y-2 pt-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleButtonTap(trial.buttonA.isCorrect)}
                        className={`py-3 px-2 rounded-xl ${trial.buttonA.bg} text-white font-display font-bold text-xs uppercase tracking-wider shadow active:scale-95 transition-transform cursor-pointer hover:brightness-110 flex items-center justify-center`}
                      >
                        {trial.buttonA.label}
                      </button>

                      <button
                        onClick={() => handleButtonTap(trial.buttonB.isCorrect)}
                        className={`py-3 px-2 rounded-xl ${trial.buttonB.bg} text-white font-display font-bold text-xs uppercase tracking-wider shadow active:scale-95 transition-transform cursor-pointer hover:brightness-110 flex items-center justify-center`}
                      >
                        {trial.buttonB.label}
                      </button>
                    </div>

                    {trial.buttonC && (
                      <button
                        onClick={() => handleButtonTap(trial.buttonC!.isCorrect)}
                        className={`w-full py-2.5 rounded-xl ${trial.buttonC.bg} text-white font-display font-bold text-xs uppercase tracking-wider shadow active:scale-95 transition-transform cursor-pointer hover:brightness-110`}
                      >
                        {trial.buttonC.label}
                      </button>
                    )}

                    {/* Tap Callout */}
                    <div className="text-center pt-2">
                      <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase flex items-center justify-center gap-1">
                        <Sparkles className="w-3 h-3 text-red-500" />
                        {deviceInteractive ? 'Interactive Demo Active · Tap Fast' : 'Tap Screen Buttons to Test Reflex'}
                      </span>
                    </div>
                  </div>

                  {/* Device Bottom Indicator Bar */}
                  <div className="relative z-10 mt-3 flex justify-center">
                    <div className="w-24 h-1 bg-neutral-700 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Side Accent Floating Pill */}
              <div className="absolute -bottom-4 -left-4 bg-neutral-900 dark:bg-neutral-900 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 p-2.5 rounded-xl shadow-xl flex items-center gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono text-neutral-300 dark:text-neutral-300 light:text-neutral-800">
                  Best Streak: <strong className="text-white dark:text-white light:text-neutral-950">{bestStreak}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
