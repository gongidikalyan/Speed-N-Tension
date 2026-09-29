import React from 'react';
import { PlayerReaction } from '../types';

const PLAYER_REACTIONS: PlayerReaction[] = [
  {
    quote: '“WHY DID I TAP THAT?”',
    context: 'Stage 24 · Hazard trigger accident',
    reactionTime: '138ms impulse',
  },
  {
    quote: '“ONE MORE TRY.”',
    context: '2:43 AM · Session duration: 48 mins',
    reactionTime: 'Streak reset at 41',
  },
  {
    quote: '“I WAS SO CLOSE.”',
    context: 'Boss gate · 0.04s clock overrun',
    reactionTime: '198ms reaction',
  },
  {
    quote: '“OKAY. AGAIN.”',
    context: 'Post-death instant restart',
    reactionTime: '0.8s restart dwell',
  },
  {
    quote: '“MY THUMB MOVED BEFORE MY BRAIN GAVE PERMISSION.”',
    context: 'Reverse Stroop challenge failure',
    reactionTime: '112ms false-start',
  },
  {
    quote: '“IT GAVE ME 0.4 SECONDS TO NOT TOUCH THE SKULL. I TOUCHED IT IMMEDIATELY.”',
    context: 'Pure cognitive freeze breakdown',
    reactionTime: '144ms regret',
  },
];

export const CultReactions: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#f4f4f7] dark:bg-[#050507] light:bg-[#f4f4f7] border-t border-neutral-200 dark:border-neutral-900 light:border-neutral-200 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-red-500 mb-2">
            THE PSYCHOLOGICAL AFTERMATH
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-950 leading-none">
            YOU’LL SAY IT WAS EASY.
          </h2>
          <p className="text-xl sm:text-2xl font-display uppercase tracking-wide text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mt-2 font-bold">
            Until the timer starts.
          </p>
        </div>

        {/* Fictional Visceral In-Game Reactions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYER_REACTIONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 light:shadow-sm hover:border-neutral-700 dark:hover:border-neutral-700 light:hover:border-neutral-400 transition-all flex flex-col justify-between min-h-[190px] group"
            >
              <blockquote className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white dark:text-white light:text-neutral-900 group-hover:text-red-500 transition-colors leading-snug">
                {item.quote}
              </blockquote>

              <div className="pt-4 border-t border-neutral-800/70 dark:border-neutral-800/70 light:border-neutral-200 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600 text-[11px] truncate max-w-[180px]">
                  {item.context}
                </span>
                <span className="text-red-500 font-bold shrink-0 text-[11px]">
                  {item.reactionTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
