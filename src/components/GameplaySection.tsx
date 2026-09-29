import React, { useState } from 'react';
import { Skull, Search, Palette, Timer, Check, X, ShieldAlert } from 'lucide-react';
import { sound } from '../utils/audio';

export const GameplaySection: React.FC = () => {
  // Interactive mini-states for each gameplay card
  const [dontTouchTriggered, setDontTouchTriggered] = useState(false);
  const [findItFound, setFindItFound] = useState(false);
  const [stroopSelected, setStroopSelected] = useState<string | null>(null);
  const [reactState, setReactState] = useState<'waiting' | 'ready' | 'tapped'>('waiting');
  const [reactScore, setReactScore] = useState<number | null>(null);

  const handleDontTouchClick = () => {
    sound.playError();
    setDontTouchTriggered(true);
    setTimeout(() => setDontTouchTriggered(false), 1200);
  };

  const handleFindItClick = (isAnomaly: boolean) => {
    if (isAnomaly) {
      sound.playSuccess();
      setFindItFound(true);
      setTimeout(() => setFindItFound(false), 1500);
    } else {
      sound.playError();
    }
  };

  const handleStroopClick = (choice: string) => {
    setStroopSelected(choice);
    if (choice === 'RED') {
      sound.playSuccess();
    } else {
      sound.playError();
    }
    setTimeout(() => setStroopSelected(null), 1200);
  };

  const handleReactTrigger = () => {
    if (reactState === 'waiting') {
      setReactState('ready');
      const start = Date.now();
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        // armed
      }, delay);
    } else if (reactState === 'ready') {
      const ms = Math.floor(130 + Math.random() * 70);
      setReactScore(ms);
      sound.playSuccess();
      setReactState('tapped');
      setTimeout(() => {
        setReactState('waiting');
        setReactScore(null);
      }, 1800);
    }
  };

  return (
    <section id="gameplay" className="relative py-24 sm:py-32 bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
              GAMEPLAY REGIMES
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 leading-none">
              HOW FAST
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-400 dark:to-white">
                CAN YOU THINK?
              </span>
            </h2>
          </div>
          <p className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-md text-sm font-sans">
            Every second shifts the cognitive rule. One round tests inhibitory control, the next tests visual search, then color-word dissonance strikes.
          </p>
        </div>

        {/* 4 Authentic Game Mode Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: DON'T TOUCH IT */}
          <div className="group rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 light:shadow-sm p-6 flex flex-col justify-between hover:border-red-600/70 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-4">
                <span>MODE // 01</span>
                <span className="text-red-500 font-bold">HIGH RISK</span>
              </div>

              <h3 className="text-xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 mb-2">
                DON&apos;T TOUCH IT
              </h3>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mb-6">
                Inhibitory reflex. When the skull flashes red, touching the screen kills your streak instantly.
              </p>
            </div>

            {/* Interactive Game Visual */}
            <div
              onClick={handleDontTouchClick}
              className={`relative h-44 rounded-xl border flex flex-col items-center justify-center p-4 cursor-pointer transition-all select-none ${
                dontTouchTriggered
                  ? 'bg-red-950/80 border-red-600 shake-active'
                  : 'bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 border-neutral-800 dark:border-neutral-800 light:border-neutral-200 hover:border-red-500'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center mb-2">
                <Skull className="w-8 h-8 text-red-500 animate-pulse" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300 dark:text-neutral-300 light:text-neutral-800 font-semibold">
                {dontTouchTriggered ? 'FATAL ERROR! RUN LOST' : 'WARNING: DO NOT TAP'}
              </span>
              <span className="text-[9px] font-mono text-neutral-500 dark:text-neutral-400 light:text-neutral-500 mt-1">
                (Click to test fatal reflex)
              </span>
            </div>
          </div>

          {/* Card 2: FIND IT */}
          <div className="group rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 light:shadow-sm p-6 flex flex-col justify-between hover:border-orange-500/70 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-4">
                <span>MODE // 02</span>
                <span className="text-orange-500 font-bold">VISUAL SCAN</span>
              </div>

              <h3 className="text-xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 mb-2">
                FIND IT
              </h3>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mb-6">
                Split-second anomaly detection. Locate the lone discordant glyph hidden in a swarm of decoys.
              </p>
            </div>

            {/* Interactive Game Visual */}
            <div className="relative h-44 rounded-xl bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 p-3 flex flex-col justify-between select-none">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                <span>TARGET: [ ◆ ]</span>
                <span className={findItFound ? 'text-emerald-500 font-bold' : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-500'}>
                  {findItFound ? 'DETECTED!' : '0.42s REMAINING'}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 my-auto">
                {['▲', '▲', '▲', '▲', '▲', '▲', '◆', '▲'].map((glyph, idx) => {
                  const isTarget = glyph === '◆';
                  return (
                    <button
                      key={idx}
                      onClick={() => handleFindItClick(isTarget)}
                      className={`h-9 rounded flex items-center justify-center font-bold text-sm cursor-pointer transition-all ${
                        isTarget && findItFound
                          ? 'bg-emerald-600 text-white scale-110 shadow-lg shadow-emerald-950/40'
                          : 'bg-neutral-900 dark:bg-neutral-900 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-200 light:border light:border-neutral-300'
                      }`}
                    >
                      {glyph}
                    </button>
                  );
                })}
              </div>

              <div className="text-[9px] font-mono text-center text-neutral-500 dark:text-neutral-400 light:text-neutral-600">
                Tap the unique diamond symbol
              </div>
            </div>
          </div>

          {/* Card 3: TAP THE RIGHT ONE */}
          <div className="group rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 light:shadow-sm p-6 flex flex-col justify-between hover:border-red-500/70 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-4">
                <span>MODE // 03</span>
                <span className="text-red-500 font-bold">STROOP CLASH</span>
              </div>

              <h3 className="text-xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 mb-2">
                TAP THE RIGHT ONE
              </h3>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mb-6">
                Cognitive interference. The text says RED, but the ink is BLUE. Your brain will scream in conflict.
              </p>
            </div>

            {/* Interactive Game Visual */}
            <div className="relative h-44 rounded-xl bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 p-3 flex flex-col justify-between select-none">
              <div className="text-center pt-1">
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600 uppercase">MATCH INK COLOR</div>
                <div className="text-xl font-black font-display text-blue-500 tracking-wider">
                  RED
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-auto">
                <button
                  onClick={() => handleStroopClick('BLUE')}
                  className={`py-2 px-1 rounded text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    stroopSelected === 'BLUE'
                      ? 'bg-red-700 text-white'
                      : 'bg-neutral-900 dark:bg-neutral-900 light:bg-white text-blue-500 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-200 light:border light:border-neutral-300'
                  }`}
                >
                  BLUE
                </button>
                <button
                  onClick={() => handleStroopClick('RED')}
                  className={`py-2 px-1 rounded text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    stroopSelected === 'RED'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-neutral-900 dark:bg-neutral-900 light:bg-white text-red-500 hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-200 light:border light:border-neutral-300'
                  }`}
                >
                  RED
                </button>
              </div>

              <div className="text-[9px] font-mono text-center text-neutral-500 dark:text-neutral-400 light:text-neutral-600">
                {stroopSelected ? (stroopSelected === 'RED' ? 'CORRECT INK!' : 'WRONG!') : 'Tap text matching ink color'}
              </div>
            </div>
          </div>

          {/* Card 4: REACT BEFORE TIME RUNS OUT */}
          <div className="group rounded-2xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 light:shadow-sm p-6 flex flex-col justify-between hover:border-neutral-400 transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500 mb-4">
                <span>MODE // 04</span>
                <span className="text-neutral-800 dark:text-white font-bold">SUB-200MS</span>
              </div>

              <h3 className="text-xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 mb-2">
                REACT BEFORE TIME
              </h3>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mb-6">
                Pure latency threshold. The trigger window opens for 250 milliseconds. Miss it and fail.
              </p>
            </div>

            {/* Interactive Game Visual */}
            <div
              onClick={handleReactTrigger}
              className={`relative h-44 rounded-xl border flex flex-col items-center justify-center p-3 cursor-pointer select-none transition-all ${
                reactState === 'ready'
                  ? 'bg-red-600 border-red-400 animate-pulse text-white'
                  : reactState === 'tapped'
                  ? 'bg-emerald-950 dark:bg-emerald-950 light:bg-emerald-100 border-emerald-500'
                  : 'bg-neutral-950 dark:bg-neutral-950 light:bg-neutral-100 border-neutral-800 dark:border-neutral-800 light:border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {reactState === 'waiting' && (
                <>
                  <Timer className="w-8 h-8 text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mb-2" />
                  <span className="text-xs font-mono font-bold text-white dark:text-white light:text-neutral-900 uppercase">TAP TO ARM</span>
                  <span className="text-[9px] font-mono text-neutral-500 dark:text-neutral-400 light:text-neutral-600 mt-1">Test your impulse latency</span>
                </>
              )}

              {reactState === 'ready' && (
                <div className="text-center text-white">
                  <div className="text-2xl font-black font-display">TAP NOW!</div>
                  <div className="text-[10px] font-mono">CLOCK COLLAPSING</div>
                </div>
              )}

              {reactState === 'tapped' && (
                <div className="text-center text-emerald-500">
                  <Check className="w-7 h-7 mx-auto mb-1" />
                  <div className="text-xl font-mono font-bold">{reactScore}ms</div>
                  <div className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400">Reflex Recorded</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
