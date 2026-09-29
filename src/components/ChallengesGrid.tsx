import React, { useState } from 'react';
import { ChallengeType } from '../types';
import { Lock, EyeOff, Zap, Shield, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

const CHALLENGES: ChallengeType[] = [
  {
    id: 'c1',
    name: 'TAP',
    category: 'Speed',
    difficulty: 'EASY',
    description: 'Direct motor impulse. Hit the flash target within 200 milliseconds.',
    rule: 'Trigger before decay.',
  },
  {
    id: 'c2',
    name: 'AVOID',
    category: 'Reflex',
    difficulty: 'BRUTAL',
    description: 'Inhibition test. Suppress your natural thumb impulse when danger blinks red.',
    rule: 'Freeze completely.',
  },
  {
    id: 'c3',
    name: 'REMEMBER',
    category: 'Cognitive',
    difficulty: 'BRUTAL',
    description: '3-sequence visual glyph recall under high-frequency distractors.',
    rule: 'Reconstruct in reverse order.',
  },
  {
    id: 'c4',
    name: 'MATCH',
    category: 'Cognitive',
    difficulty: 'EASY',
    description: 'Stroop dissonance. Pair ink color while reading conflicting text.',
    rule: 'Override lexical bias.',
  },
  {
    id: 'c5',
    name: 'COUNT',
    category: 'Precision',
    difficulty: 'BRUTAL',
    description: 'Subitize 4 to 9 scattering shapes in a 300ms flash window.',
    rule: 'Instant estimation.',
  },
  {
    id: 'c6',
    name: 'REACT',
    category: 'Speed',
    difficulty: 'BRUTAL',
    description: 'Sudden audio-visual gate trigger with variable deceptive delays.',
    rule: 'Release on signal.',
  },
  {
    id: 'c7',
    name: 'FIND',
    category: 'Precision',
    difficulty: 'EASY',
    description: 'Micro-anomaly scanner. Locate the rotated glyph among 20 decoys.',
    rule: 'Identify the lone error.',
  },
  {
    id: 'c8',
    name: 'FOLLOW',
    category: 'Reflex',
    difficulty: 'NIGHTMARE',
    description: 'High-velocity trajectory tracking with sudden directional reversals.',
    rule: 'Do not lose contact.',
  },
  {
    id: 'c9',
    name: 'STOP',
    category: 'Reflex',
    difficulty: 'BRUTAL',
    description: 'Inverted Go/No-Go. Tap continuously until the siren blares.',
    rule: 'Halt all kinetic motion.',
  },
  {
    id: 'c10',
    name: 'SWITCH',
    category: 'Cognitive',
    difficulty: 'NIGHTMARE',
    description: 'Mid-round rule inversion: Left becomes Right, Red becomes Safe.',
    rule: 'Reprogram instincts on the fly.',
  },
  {
    id: 'c11',
    name: 'HOLD',
    category: 'Endurance',
    difficulty: 'BRUTAL',
    description: 'Isometric touch pressure while visual tremors try to bait release.',
    rule: 'Maintain physical anchor.',
  },
  {
    id: 'c12',
    name: 'RELEASE',
    category: 'Speed',
    difficulty: 'NIGHTMARE',
    description: 'Lift your finger in the exact 50ms window when the tension gauge peaks.',
    rule: 'Micro-timing release.',
  },
  // Classified / Mystery challenges
  {
    id: 'c13',
    name: '[ANOMALY 13]',
    category: 'Reflex',
    difficulty: 'UNKNOWN',
    description: 'Encrypted challenge. Unlocks only after achieving a 25-stage streak in ranked mode.',
    rule: 'Classified mechanics.',
    isMystery: true,
  },
  {
    id: 'c14',
    name: '[BLACKOUT MODE]',
    category: 'Endurance',
    difficulty: 'UNKNOWN',
    description: 'Screen illumination drops to zero. Rely on rhythmic audio cues and motor memory.',
    rule: 'Blind execution.',
    isMystery: true,
  },
  {
    id: 'c15',
    name: '[REVERSED POLARITY]',
    category: 'Cognitive',
    difficulty: 'UNKNOWN',
    description: 'Touch inputs map to opposing screen quadrants with accelerating tempo.',
    rule: 'Spatial disorientation.',
    isMystery: true,
  },
  {
    id: 'c16',
    name: '[35+ MORE HIDDEN]',
    category: 'Speed',
    difficulty: 'UNKNOWN',
    description: 'Procedural algorithmic challenge permutations designed to prevent muscle memory.',
    rule: 'Adaptive difficulty.',
    isMystery: true,
  },
];

export const ChallengesGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalChallenge, setActiveModalChallenge] = useState<ChallengeType | null>(null);

  const categories = ['All', 'Speed', 'Reflex', 'Cognitive', 'Precision', 'Endurance'];

  const filtered = selectedCategory === 'All'
    ? CHALLENGES
    : CHALLENGES.filter((c) => c.category === selectedCategory || c.isMystery);

  return (
    <section id="challenges" className="relative py-24 sm:py-32 bg-[#fcfcfd] dark:bg-[#070709] light:bg-[#fcfcfd] border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
            NEURAL STRESS MATRIX
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 leading-tight">
            50+ WAYS TO
            <br />
            <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500">BREAK YOUR FOCUS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-sans">
            Every run strings together micro-challenges in randomized, rapid-fire succession.
            Muscle memory won&apos;t save you—only pure, present attention.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playTap();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer uppercase ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-950/40'
                  : 'bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-black border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 light:shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((c) => (
            <div
              key={c.id}
              onClick={() => {
                sound.playTap();
                setActiveModalChallenge(c);
              }}
              className={`group relative p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                c.isMystery
                  ? 'bg-neutral-950/90 dark:bg-neutral-950/90 light:bg-neutral-100 border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-300 hover:border-red-600/50'
                  : 'bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 light:shadow-xs hover:border-neutral-700 dark:hover:border-neutral-700 light:hover:border-neutral-400 hover:bg-neutral-900/70 dark:hover:bg-neutral-900/70 light:hover:bg-neutral-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                  <span className="text-neutral-500 uppercase">{c.category}</span>
                  {c.isMystery ? (
                    <span className="text-orange-500 font-semibold flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      LOCKED
                    </span>
                  ) : (
                    <span
                      className={`font-bold ${
                        c.difficulty === 'NIGHTMARE'
                          ? 'text-red-500'
                          : c.difficulty === 'BRUTAL'
                          ? 'text-orange-500'
                          : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600'
                      }`}
                    >
                      {c.difficulty}
                    </span>
                  )}
                </div>

                <h3
                  className={`text-lg sm:text-xl font-black font-display uppercase tracking-tight ${
                    c.isMystery
                      ? 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-mono group-hover:text-red-500'
                      : 'text-white dark:text-white light:text-neutral-900 group-hover:text-red-500'
                  } transition-colors`}
                >
                  {c.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200 flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                <span className="truncate pr-2">{c.rule}</span>
                <span className="text-neutral-600 dark:text-neutral-600 light:text-neutral-400 group-hover:text-red-500 transition-colors">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Info Detail on Click */}
        {activeModalChallenge && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-md rounded-2xl bg-neutral-950 dark:bg-neutral-950 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 p-6 space-y-4 shadow-2xl relative">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-mono uppercase text-red-500 tracking-wider">
                    {activeModalChallenge.category} CHALLENGE
                  </div>
                  <h3 className="text-2xl font-black font-display uppercase text-white dark:text-white light:text-neutral-900 mt-1">
                    {activeModalChallenge.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalChallenge(null)}
                  className="text-neutral-400 hover:text-white dark:hover:text-white light:hover:text-black p-1 rounded bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-neutral-50 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200 space-y-2 text-xs">
                <div className="text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
                  {activeModalChallenge.description}
                </div>
                <div className="pt-2 text-red-500 font-mono font-semibold">
                  Rule: {activeModalChallenge.rule}
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600 pt-2">
                <span>Rating: <strong className="text-white dark:text-white light:text-neutral-950">{activeModalChallenge.difficulty}</strong></span>
                <button
                  onClick={() => setActiveModalChallenge(null)}
                  className="px-4 py-2 rounded bg-neutral-800 dark:bg-neutral-800 light:bg-neutral-200 hover:bg-neutral-700 dark:hover:bg-neutral-700 light:hover:bg-neutral-300 text-white dark:text-white light:text-neutral-900 font-display uppercase tracking-wider text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
